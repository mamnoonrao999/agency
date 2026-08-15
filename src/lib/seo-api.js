import { Client } from "@gradio/client";

function parseSeoMarkdown(markdown) {
  const data = {
    url: '',
    pages_analyzed: 0,
    overall_score: 0,
    strengths: [],
    faults: [],
    suggestions: [],
    results_preview: [],
  };

  const urlMatch = markdown.match(/\*\*URL:\*\*\s*(.+)/);
  if (urlMatch) data.url = urlMatch[1].trim();

  const pagesMatch = markdown.match(/\*\*Pages analyzed:\*\*\s*(\d+)/);
  if (pagesMatch) data.pages_analyzed = parseInt(pagesMatch[1], 10);

  const scoreMatch = markdown.match(/\*\*Average SEO Score:\*\*\s*([\d.]+)/);
  if (scoreMatch) data.overall_score = parseFloat(scoreMatch[1]);

  const strengthsSection = markdown.match(/### SEO Strengths \(detailed\)([\s\S]*?)(?=###|$)/);
  if (strengthsSection) {
    const lines = strengthsSection[1].split('\n').map(l => l.trim()).filter(l => l);
    lines.forEach(line => {
      if (line.startsWith('- ')) {
        data.strengths.push({ title: line.substring(2), detail: '', impact: 'high' });
      }
    });
  }

  const issuesSection = markdown.match(/### SEO Issues \(detailed\)([\s\S]*?)(?=###|$)/);
  if (issuesSection) {
    const lines = issuesSection[1].split('\n').map(l => l.trim()).filter(l => l);
    lines.forEach(line => {
      if (line.startsWith('- ')) {
        data.faults.push({ title: line.substring(2), detail: '', severity: 'medium', pages: 1 });
      }
    });
  }

  const pageBlocks = markdown.split(/### Page \d+:/).slice(1);
  pageBlocks.forEach(block => {
    const lines = block.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    if (lines.length === 0) return;

    const page = {
      url: '',
      seo_score: 0,
      title: '',
      word_count: 0,
      h1_count: 0,
      h2_count: 0,
      h3_count: 0,
      total_images: 0,
      missing_alt_tags: 0,
      internal_links: 0,
      external_links: 0,
      ai_suggestions: '',
      readability_score: 0,
      grammar_errors: 0,
      canonical_tag: false,
      opengraph_tags: 0,
      twitter_tags: 0,
      robots_meta: '',
      viewport_present: false,
      schema_types: '',
      text_to_html_ratio: 0,
      load_time: 0,
      meta_description: '',
      heading_order: '',
    };

    const firstLine = lines[0];
    if (firstLine.startsWith('http')) {
      page.url = firstLine;
    }

    lines.forEach(line => {
      if (line.startsWith('- Score:')) {
        const val = parseInt(line.match(/\d+/)?.[0] || '0', 10);
        page.seo_score = val;
      } else if (line.startsWith('- Title:')) {
        page.title = line.replace('- Title:', '').trim();
      } else if (line.startsWith('- Word Count:')) {
        const val = parseInt(line.match(/\d+/)?.[0] || '0', 10);
        page.word_count = val;
      } else if (line.startsWith('- H1:')) {
        const parts = line.split(',').map(s => s.trim());
        parts.forEach(p => {
          if (p.startsWith('H1:')) page.h1_count = parseInt(p.replace('H1:', '').trim(), 10) || 0;
          if (p.startsWith('H2:')) page.h2_count = parseInt(p.replace('H2:', '').trim(), 10) || 0;
          if (p.startsWith('H3:')) page.h3_count = parseInt(p.replace('H3:', '').trim(), 10) || 0;
        });
      } else if (line.startsWith('- Images:')) {
        const imgMatch = line.match(/Images:\s*(\d+)/);
        if (imgMatch) page.total_images = parseInt(imgMatch[1], 10);
        const altMatch = line.match(/missing alt:\s*(\d+)/);
        if (altMatch) page.missing_alt_tags = parseInt(altMatch[1], 10);
      } else if (line.startsWith('- Internal/External links:')) {
        const linkMatch = line.match(/(\d+)\/(\d+)/);
        if (linkMatch) {
          page.internal_links = parseInt(linkMatch[1], 10);
          page.external_links = parseInt(linkMatch[2], 10);
        }
      } else if (line.startsWith('- AI Suggestions:')) {
        page.ai_suggestions = line.replace('- AI Suggestions:', '').trim();
      } else if (line.startsWith('- Readability:')) {
        page.readability_score = parseFloat(line.match(/[\d.]+/)?.[0] || '0');
      } else if (line.startsWith('- Grammar Errors:')) {
        page.grammar_errors = parseInt(line.match(/\d+/)?.[0] || '0', 10);
      } else if (line.startsWith('- Canonical Tag:')) {
        page.canonical_tag = line.includes('Yes');
      } else if (line.startsWith('- OpenGraph Tags:')) {
        page.opengraph_tags = parseInt(line.match(/\d+/)?.[0] || '0', 10);
      } else if (line.startsWith('- Twitter Cards:')) {
        page.twitter_tags = parseInt(line.match(/\d+/)?.[0] || '0', 10);
      } else if (line.startsWith('- Robots Meta:')) {
        page.robots_meta = line.replace('- Robots Meta:', '').trim();
      } else if (line.startsWith('- Viewport:')) {
        page.viewport_present = line.includes('Yes');
      } else if (line.startsWith('- Schema Types:')) {
        page.schema_types = line.replace('- Schema Types:', '').trim();
      } else if (line.startsWith('- Text/HTML Ratio:')) {
        page.text_to_html_ratio = parseFloat(line.match(/[\d.]+/)?.[0] || '0');
      } else if (line.startsWith('- Load Time:')) {
        page.load_time = parseFloat(line.match(/[\d.]+/)?.[0] || '0');
      } else if (line.startsWith('- Meta Description:')) {
        page.meta_description = line.replace('- Meta Description:', '').trim();
      } else if (line.startsWith('- Heading Order:')) {
        page.heading_order = line.replace('- Heading Order:', '').trim();
      }
    });

    data.results_preview.push(page);
  });

  // fallback for missing url
  if (!data.url && data.results_preview && data.results_preview.length > 0) {
    data.url = data.results_preview[0].url || "";
  }

  return data;
}

function parseAiMarkdown(markdown) {
  const data = {
    status: 'success',
    url: '',
    pages_analyzed: 0,
    ai_readiness_score: 0,
    page_type_breakdown: {},
    category_scores: {},
    issues: [],
    strengths: [],
    unknown_metrics: [],
    results_preview: [],
  };

  const urlMatch = markdown.match(/\*\*URL:\*\*\s*(.+)/);
  if (urlMatch) data.url = urlMatch[1].trim();

  const pagesMatch = markdown.match(/\*\*Pages analyzed:\*\*\s*(\d+)/);
  if (pagesMatch) data.pages_analyzed = parseInt(pagesMatch[1], 10);

  const scoreMatch = markdown.match(/\*\*Overall AI Readiness Score:\*\*\s*([\d.]+)/);
  if (scoreMatch) data.ai_readiness_score = parseFloat(scoreMatch[1]);

  const pageTypeMatch = markdown.match(/\*\*Page types detected:\*\*\s*({.*})/);
  if (pageTypeMatch) {
    try {
      const raw = pageTypeMatch[1].trim();
      if (raw !== '{}') {
        const jsonStr = raw.replace(/'/g, '"');
        data.page_type_breakdown = JSON.parse(jsonStr);
      }
    } catch (_) {}
  }

  const catSection = markdown.match(/### Category Scores([\s\S]*?)(?=###|$)/);
  if (catSection) {
    const lines = catSection[1].split('\n').map(l => l.trim()).filter(l => l);
    lines.forEach(line => {
      const match = line.match(/-\s*([^:]+):\s*(.+)/);
      if (match) {
        const key = match[1].trim().toLowerCase().replace(/\s/g, '_') + '_score';
        const val = match[2].trim();
        if (val !== 'N/A') {
          data.category_scores[key] = parseFloat(val);
        } else {
          data.category_scores[key] = null;
        }
      }
    });
  }

  // Per-page details
  const perPageSection = markdown.match(/### Per-Page Details([\s\S]*?)(?=###|$)/);
  if (perPageSection) {
    const content = perPageSection[1];
    const blocks = content.split(/\*\*URL:\*\*/).slice(1);
    blocks.forEach(block => {
      const lines = block.split('\n').map(l => l.trim()).filter(l => l);
      if (lines.length === 0) return;
      const page = {
        url: lines[0].trim(),
        page_type: 'unknown',
        page_type_confidence: 0,
        ai_readiness_score: 0,
        topic_clarity: 0,
        content_completeness: 0,
        entity_clarity: 'N/A',
        freshness_status: 'unknown',
        citation_potential: 0,
        schema_quality: 0,
        crawlability: 0,
        semantic_relevance: null,
        answer_coverage: null,
        factual_information: 0,
        original_information: 0,
        author_expertise: null,
        content_structure: 0,
      };
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (line.startsWith('- Page Type:')) {
          const typeMatch = line.match(/:\s*([^(]+)/);
          if (typeMatch) page.page_type = typeMatch[1].trim();
          const confMatch = line.match(/conf:\s*([\d.]+)/);
          if (confMatch) page.page_type_confidence = parseFloat(confMatch[1]);
        } else if (line.startsWith('- Readiness Score:')) {
          const val = parseFloat(line.match(/[\d.]+/)?.[0] || '0');
          page.ai_readiness_score = val;
        } else if (line.startsWith('- Topic Clarity:')) {
          const val = parseFloat(line.match(/[\d.]+/)?.[0] || '0');
          page.topic_clarity = val;
        } else if (line.startsWith('- Content Completeness:')) {
          const val = parseFloat(line.match(/[\d.]+/)?.[0] || '0');
          page.content_completeness = val;
        } else if (line.startsWith('- Entity Clarity:')) {
          page.entity_clarity = line.replace('- Entity Clarity:', '').trim();
        } else if (line.startsWith('- Freshness:')) {
          page.freshness_status = line.replace('- Freshness:', '').trim();
        } else if (line.startsWith('- Citation Potential:')) {
          const val = parseFloat(line.match(/[\d.]+/)?.[0] || '0');
          page.citation_potential = val;
        } else if (line.startsWith('- Schema Quality:')) {
          const val = parseFloat(line.match(/[\d.]+/)?.[0] || '0');
          page.schema_quality = val;
        } else if (line.startsWith('- Crawlability:')) {
          const val = parseFloat(line.match(/[\d.]+/)?.[0] || '0');
          page.crawlability = val;
        }
      }
      data.results_preview.push(page);
    });
  }

  // Detailed issues & strengths
  const issuesSection = markdown.match(/### Detailed Issues \(per page\)([\s\S]*?)(?=###|$)/);
  if (issuesSection) {
    const lines = issuesSection[1].split('\n').map(l => l.trim()).filter(l => l);
    let current = null;
    for (const line of lines) {
      if (line.startsWith('- ')) {
        if (current) data.issues.push(current);
        const match = line.match(/^- (.*?) \(Severity: (.*?)\) on (.*)/);
        if (match) {
          current = {
            title: match[1].trim(),
            severity: match[2].trim(),
            page: match[3].trim(),
            explanation: '',
            recommended_fix: '',
          };
        }
      } else if (line.startsWith('  Explanation:')) {
        if (current) current.explanation = line.replace('  Explanation:', '').trim();
      } else if (line.startsWith('  Fix:')) {
        if (current) current.recommended_fix = line.replace('  Fix:', '').trim();
      }
    }
    if (current) data.issues.push(current);
  }

  const strengthsSection = markdown.match(/### Detailed Strengths \(per page\)([\s\S]*?)(?=###|$)/);
  if (strengthsSection) {
    const lines = strengthsSection[1].split('\n').map(l => l.trim()).filter(l => l);
    let current = null;
    for (const line of lines) {
      if (line.startsWith('- ')) {
        if (current) data.strengths.push(current);
        const match = line.match(/^- (.*?) on (.*)/);
        if (match) {
          current = {
            title: match[1].trim(),
            page: match[2].trim(),
            detail: '',
          };
        }
      } else if (line.startsWith('  Detail:')) {
        if (current) current.detail = line.replace('  Detail:', '').trim();
      }
    }
    if (current) data.strengths.push(current);
  }

  // ---- ONLY category-level unknowns ----
  const unknown = [];
  Object.keys(data.category_scores).forEach(key => {
    if (data.category_scores[key] === null) {
      unknown.push({ metric: key, reason: 'Could not be measured', page: 'N/A' });
    }
  });
  data.unknown_metrics = unknown;

  // If no page_type_breakdown, compute from preview
  if (Object.keys(data.page_type_breakdown).length === 0 && data.results_preview.length > 0) {
    const breakdown = {};
    data.results_preview.forEach(p => {
      const type = p.page_type || 'unknown';
      breakdown[type] = (breakdown[type] || 0) + 1;
    });
    data.page_type_breakdown = breakdown;
  }

  return data;
}

export async function analyzeSEO(url) {
  const client = await Client.connect("moizshah956/HASHFOR_BACKEND");
  const result = await client.predict("/analyze_seo_async", {
    url: url.startsWith('http') ? url : `https://${url}`,
    max_pages: 20,
    max_concurrent: 1,
    use_ai: true,
  });
  const markdown = result.data[0];
  if (markdown.startsWith('❌ Error:')) throw new Error(markdown);
  return parseSeoMarkdown(markdown);
}

export async function analyzeAIVisibility(url, options = {}) {
  const client = await Client.connect("moizshah956/HASHFOR_BACKEND");
  const result = await client.predict("/analyze_ai_async", {
    url: url.startsWith('http') ? url : `https://${url}`,
    max_pages: options.maxPages || 20,
    max_concurrent: options.maxConcurrent || 1,
    use_ai: options.useAI !== undefined ? options.useAI : true,
  });
  const markdown = result.data[0];
  if (markdown.startsWith('❌ Error:')) throw new Error(markdown);
  return parseAiMarkdown(markdown);
}
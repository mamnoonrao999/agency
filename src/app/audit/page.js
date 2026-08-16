'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
} from 'recharts';
import { analyzeSEO, analyzeAIVisibility } from '../../lib/seo-api';
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  XCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { EASE } from '../../components/motion-kit';

// ─── Helpers ──────────────────────────────────────────
function scoreColor(score) {
  if (score == null) return '#ffffff';
  if (score >= 51) return '#1E88E5';
  if (score <= 50) return '#1E88E5';
  // if (score >= 60) return '#1E88E5';
  // if (score >= 50) return '#26C6DA';
  return '#ffffff';
}

function Badge({ tone = 'warm', children }) {
  const tones = {
    warm: 'bg-ink/5 text-ink border border-ink/10',
    gold: 'bg-[#1E88E5]/10 text-[#1E88E5] border border-[#1E88E5]/20',
    ink: 'bg-ink/10 text-ink border border-ink/20',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}

function GlassCard({ children, className = '' }) {
  return (
    <div className={`glass-panel rounded-3xl p-6 md:p-8 transition hover:shadow-lg ${className}`}>
      {children}
    </div>
  );
}

function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <Loader2 className="w-8 h-8 text-[#1E88E5] animate-spin mx-auto mb-4" />
        <div className="text-lg font-semibold text-ink">Running Your Audit…</div>
        <div className="text-sm text-ink-soft mt-1">Analyzing your website</div>
      </div>
    </div>
  );
}

function ErrorState({ message, onBack }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md w-full glass-panel rounded-3xl p-8">
        <div className="w-12 h-12 rounded-full bg-ink/5 flex items-center justify-center mx-auto mb-4">
          <XCircle className="w-6 h-6 text-ink-soft" />
        </div>
        <div className="text-lg font-semibold text-ink mb-2">Audit Failed</div>
        <div className="text-sm text-ink-soft mb-6">{message}</div>
        <button
          onClick={onBack}
          className="glass-pill rounded-full px-6 py-2.5 text-sm font-medium text-ink hover:bg-white/60 transition border border-ink/10 inline-flex items-center gap-2"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>
      </div>
    </div>
  );
}

// ─── Bigger Donut ────────────────────────────────────
function Donut({ value, color }) {
  const data = [
    { name: 'Score', value: value },
    { name: 'Remaining', value: 100 - value },
  ];
  return (
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius="70%"
            outerRadius="90%"
            startAngle={90}
            endAngle={-270}
            animationDuration={1000}
            animationBegin={300}
          >
            <Cell key="score" fill={color} />
            <Cell key="remaining" fill="#d8d9e8" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-extrabold text-ink">{value}%</div>
        </div>
      </div>
    </div>
  );
}

// ─── CountUp ─────────────────────────────────────────
function CountUp({ value, duration = 1.2, className = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const startValue = 0;
    const endValue = value;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(startValue + (endValue - startValue) * eased));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
    return () => { };
  }, [value, duration]);

  return <span className={className}>{count}</span>;
}

// ─── Main Component ─────────────────────────────────
function AuditContent() {
  const searchParams = useSearchParams();
  const url = searchParams.get('url') || '';
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [seoData, setSeoData] = useState(null);
  const [aiData, setAiData] = useState(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [showRaw, setShowRaw] = useState(false);
  const [inputUrl, setInputUrl] = useState('');

  useEffect(() => {
    async function loadAudit() {
      if (!url) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const [seo, ai] = await Promise.all([
          analyzeSEO(url),
          analyzeAIVisibility(url),
        ]);
        setSeoData(seo);
        setAiData(ai);
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to load audit');
      } finally {
        setLoading(false);
      }
    }
    loadAudit();
  }, [url]);

  const handleClose = (e) => {
    router.push("/");
  };

  if (!url) {
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputUrl.trim()) {
        router.push(`/audit?url=${encodeURIComponent(inputUrl.trim())}`);
      }
    };


    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full glass-panel rounded-3xl p-8 text-center relative">
          {/* Close button — top‑right, absolute */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-red-900/10 hover:bg-red-900/20 text-red-900 transition-all duration-200"
            aria-label="Close"
          >
            ✕
          </button>

          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-ink pr-8">
            Website Audit
          </h1>
          <p className="mt-2 text-ink-soft">Enter your website URL to get a complete SEO + AI visibility report.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="url"
              placeholder="example.com"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              className="w-full glass-pill rounded-full px-5 py-3 text-ink placeholder:text-ink-soft/60 border border-ink/10 focus:outline-none focus:ring-2 focus:ring-ink/20 bg-transparent"
              required
            />
            <button
              type="submit"
              className="w-full glass-pill rounded-full px-6 py-3 text-sm font-medium text-ink hover:bg-white/60 transition border border-ink/10"
            >
              Run Audit →
            </button>
          </form>
          <p className="mt-4 text-xs text-ink-soft">We’ll analyze up to 20 pages. No data is stored.</p>
        </div>
      </div>
    );
  }

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} onBack={() => router.push('/')} />;

  const seoScore = seoData?.overall_score ?? 0;
  const aiScore = aiData?.ai_readiness_score ?? 0;
  const overallScore = Math.round((seoScore + aiScore) / 2);

  const pages = seoData?.results_preview || [];
  const totalPages = pages.length;
  const currentPage = pages[currentPageIndex] || null;

  const seoStrengths = seoData?.strengths || [];
  const seoFaults = seoData?.faults || [];
  const aiStrengths = aiData?.strengths || [];
  const aiIssues = aiData?.issues || [];

  const allStrengths = [...seoStrengths, ...aiStrengths];
  const allIssues = [...seoFaults, ...aiIssues];

  const getPageStrengths = (pageUrl) => {
    return allStrengths.filter(s => s.page && s.page.includes(pageUrl));
  };
  const getPageIssues = (pageUrl) => {
    return allIssues.filter(i => i.page && i.page.includes(pageUrl));
  };

  // 🔥 Radar metrics – H1 and H2 removed
  const getRadarData = (page) => {
    if (!page) return [];
    const metrics = {
      'SEO Score': page.seo_score ?? 0,
      'Word Count': Math.min(100, ((page.word_count || 0) / 10000) * 100),
      'Readability': page.readability_score ?? 0,
      'Internal Links': Math.min(100, ((page.internal_links || 0) / 200) * 100),
      'External Links': Math.min(100, ((page.external_links || 0) / 50) * 100),
      'Images': Math.min(100, ((page.total_images || 0) / 100) * 100),
      'Alt Tags': Math.min(100, ((page.total_images - (page.missing_alt_tags || 0)) / (page.total_images || 1)) * 100),
    };
    return Object.entries(metrics).map(([metric, value]) => ({
      metric,
      value: Math.min(100, Math.max(0, value)),
    }));
  };

  const categoryData = Object.entries(aiData?.category_scores || {})
    .filter(([_, v]) => v !== null)
    .map(([key, value]) => ({
      name: key.replace(/_score$/, '').replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
      value: value ?? 0,
      fill: scoreColor(value),
    }))
    .slice(0, 6);

  const nextPage = () => {
    if (currentPageIndex < totalPages - 1) setCurrentPageIndex(i => i + 1);
  };
  const prevPage = () => {
    if (currentPageIndex > 0) setCurrentPageIndex(i => i - 1);
  };

  // ─── Entrance variants ──────────────────────────
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
      className="min-h-screen py-8 md:py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8"
        >
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center gap-2 text-sm font-medium text-white transition bg-blue-600 rounded-full px-4 py-2 hover:scale-105 cursor-pointer"
          >
            <ArrowLeft size={16} /> Back to Site
          </button>
          <div className="text-right">
            <div className="text-sm text-ink-soft">
              {seoData?.url || url} • {seoData?.pages_analyzed || 0} pages • {new Date().toLocaleString()}
            </div>
          </div>
        </motion.div>

        {/* Hero Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.05]">
            Website <span className="font-serif-italic text-blue-600">Audit</span>
          </h1>
          <p className="mt-2 text-base sm:text-lg text-ink-soft">
            Complete SEO + AI visibility analysis for <span className="font-medium text-blue-600">{seoData?.url || url}</span>
          </p>
        </motion.div>

        {/* ─── Score Cards with bigger Donuts ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <GlassCard className="text-center">
            <div className="text-sm font-medium text-ink-soft uppercase tracking-wider">Overall Score</div>
            <Donut value={overallScore} color={scoreColor(overallScore)} />
            <div className="mt-1 text-2xl sm:text-3xl font-extrabold text-ink">
              <CountUp value={overallScore} duration={1.2} />%
            </div>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="text-sm font-medium text-ink-soft uppercase tracking-wider">SEO Score</div>
            <Donut value={seoScore} color={scoreColor(seoScore)} />
            <div className="mt-1 text-2xl sm:text-3xl font-extrabold text-ink">
              <CountUp value={seoScore} duration={1.2} />%
            </div>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              <Badge tone="gold">{seoStrengths.length} strengths</Badge>
              <Badge tone="ink">{seoFaults.length} issues</Badge>
            </div>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="text-sm font-medium text-ink-soft uppercase tracking-wider">AI Readiness</div>
            <Donut value={aiScore} color={scoreColor(aiScore)} />
            <div className="mt-1 text-2xl sm:text-3xl font-extrabold text-ink">
              <CountUp value={aiScore} duration={1.2} />%
            </div>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              <Badge tone="gold">{aiStrengths.length} strengths</Badge>
              <Badge tone="ink">{aiIssues.length} issues</Badge>
            </div>
          </GlassCard>
        </motion.div>

        {/* Executive Summary */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <GlassCard className="mb-8">
            <h2 className="text-lg font-semibold text-ink mb-3">📋 Executive Summary</h2>
            <p className="text-ink-soft leading-relaxed">
              Your site has an overall audit score of <strong className="text-ink">{overallScore}%</strong>.
              We analyzed <strong className="text-ink">{seoData?.pages_analyzed || 0}</strong> pages.
              {allStrengths.length > 0 && (
                <> We found <strong className="text-ink">{allStrengths.length} strengths</strong>, including {allStrengths.slice(0, 2).map(s => `"${s.title}"`).join(' and ')}.</>
              )}
              {allIssues.length > 0 && (
                <> However, <strong className="text-ink">{allIssues.length} issues</strong> need attention.
                  Focus on {allIssues.filter(i => i.severity === 'critical' || i.severity === 'high').slice(0, 2).map(i => `"${i.title}"`).join(' and ')} to see immediate improvements.</>
              )}
              {allIssues.length === 0 && <> No critical issues found – your site is well‑optimized. 🚀</>}
            </p>
          </GlassCard>
        </motion.div>

        {/* Category Breakdown */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          <GlassCard>
            <h3 className="text-sm font-medium text-ink-soft uppercase tracking-wider mb-4">SEO Category Breakdown</h3>
            <div style={{ width: '100%', height: 220 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={categoryData.length > 0 ? categoryData : [
                    { name: 'Content', value: Math.round(seoScore * 0.9), fill: scoreColor(seoScore * 0.9) },
                    { name: 'Technical', value: Math.round(seoScore * 0.85), fill: scoreColor(seoScore * 0.85) },
                    { name: 'Media', value: Math.round(seoScore * 0.75), fill: scoreColor(seoScore * 0.75) },
                    { name: 'Links', value: Math.round(seoScore * 0.8), fill: scoreColor(seoScore * 0.8) },
                  ]}
                  layout="vertical"
                  margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                  animationDuration={800}
                  animationBegin={500}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.1} />
                  <XAxis type="number" domain={[0, 100]} axisLine={false} tickLine={false} fontSize={11} />
                  <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} width={80} fontSize={11} tick={{ fill: '#5c5e79' }} />
                  <Tooltip formatter={(value) => `${value}/100`} />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={14}>
                    {categoryData.map((d, idx) => (
                      <Cell key={idx} fill={d.fill || scoreColor(d.value)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="text-sm font-medium text-ink-soft uppercase tracking-wider mb-4">AI Category Scores</h3>
            <div style={{ width: '100%', height: 220 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={categoryData.length > 0 ? categoryData : [
                    { name: 'Topic Clarity', value: 70, fill: scoreColor(70) },
                    { name: 'Content Complete', value: 65, fill: scoreColor(65) },
                    { name: 'Schema Quality', value: 60, fill: scoreColor(60) },
                  ]}
                  layout="vertical"
                  margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                  animationDuration={800}
                  animationBegin={600}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.1} />
                  <XAxis type="number" domain={[0, 100]} axisLine={false} tickLine={false} fontSize={11} />
                  <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} width={110} fontSize={11} tick={{ fill: '#003060' }} />
                  <Tooltip formatter={(value) => `${value}/100`} />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={14}>
                    {categoryData.map((d, idx) => (
                      <Cell key={idx} fill={d.fill || scoreColor(d.value)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </motion.div>

        {/* Global Strengths & Issues with better scroll */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        >
          <GlassCard>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 size={24} className="text-[#1E88E5]" />
              <h3 className="text-lg font-semibold text-ink">All Strengths</h3>
              <span className="ml-auto text-sm bg-blue-600/10 text-blue-600 px-3 py-1 rounded-full font-medium">
                {allStrengths.length} found
              </span>
            </div>
            <div className="max-h-64 overflow-y-auto pr-2 space-y-2 custom-scroll">
              {allStrengths.length === 0 && <div className="text-sm text-ink-soft italic">No strengths detected yet.</div>}
              {allStrengths.map((s, idx) => (
                <div key={idx} className="rounded-xl p-3 border border-ink/5">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#1E88E5] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm text-ink">{s.title}</div>
                      {s.detail && <div className="text-xs text-ink-soft mt-0.5">{s.detail}</div>}
                      {s.page && <div className="text-[10px] text-ink-soft/60 mt-0.5">📄 {s.page}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle size={24} className="text-ink-soft" />
              <h3 className="text-lg font-semibold text-ink">All Issues</h3>
              <span className="ml-auto text-sm bg-ink/5 text-ink-soft px-3 py-1 rounded-full font-medium">
                {allIssues.length} found
              </span>
            </div>
            <div className="max-h-64 overflow-y-auto pr-2 space-y-2 custom-scroll">
              {allIssues.length === 0 && <div className="text-sm text-ink-soft italic">🎉 No issues detected.</div>}
              {allIssues.map((issue, idx) => (
                <div key={idx} className="rounded-xl p-3 border border-ink/5">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={16} className="text-ink-soft mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm text-ink">{issue.title}</div>
                      {issue.explanation && <div className="text-xs text-ink-soft mt-0.5">{issue.explanation}</div>}
                      {issue.recommended_fix && (
                        <div className="text-xs text-[#1E88E5] mt-1">💡 {issue.recommended_fix}</div>
                      )}
                      <div className="flex flex-wrap gap-1 mt-1">
                        {issue.severity && <Badge tone="ink">{issue.severity}</Badge>}
                        {issue.page && <Badge tone="warm">{issue.page}</Badge>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Page‑Level Analysis */}
        {totalPages > 0 && currentPage && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
          >
            <GlassCard className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-ink">🧭 Page‑Level Analysis</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevPage}
                    disabled={currentPageIndex === 0}
                    className="p-2 rounded-full border border-ink/10 disabled:opacity-40 hover:bg-white/60 transition"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <span className="text-sm text-ink-soft">
                    {currentPageIndex + 1} / {totalPages}
                  </span>
                  <button
                    onClick={nextPage}
                    disabled={currentPageIndex === totalPages - 1}
                    className="p-2 rounded-full border border-ink/10 disabled:opacity-40 hover:bg-white/60 transition"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/2 flex-shrink-0">
                  <div className="relative w-full h-[340px] md:h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart
                        key={currentPageIndex}
                        cx="50%"
                        cy="50%"
                        outerRadius="80%"
                        data={getRadarData(currentPage)}
                        animationDuration={900}
                        animationBegin={0}
                      >
                        <PolarGrid stroke="#96c1d7" />
                        <PolarAngleAxis dataKey="metric" tick={{ fill: '#1700aa', fontSize: 11 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
                        <Radar
                          name="Score"
                          dataKey="value"
                          stroke="#1E88E5"
                          fill="#1E88E5"
                          fillOpacity={0.35}
                          animationDuration={900}
                          animationBegin={0}
                        />
                        <Legend wrapperStyle={{ fontSize: '12px' }} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-3 text-center text-sm text-ink-soft/80">
                    Radar metrics for <span className="font-medium text-ink">{currentPage.title || currentPage.url}</span>
                  </div>
                </div>

                <div className="lg:w-1/2 flex flex-col max-h-[450px] overflow-y-auto pr-2 space-y-3 custom-scroll">
                  <h4 className="text-xl font-bold text-ink truncate">{currentPage.title || currentPage.url}</h4>
                  <div className="text-xs text-ink-soft truncate">{currentPage.url}</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge tone="gold">SEO: {currentPage.seo_score ?? '—'}</Badge>
                    <Badge tone="warm">Words: {currentPage.word_count ?? '—'}</Badge>
                    <Badge tone="ink">Readability: {currentPage.readability_score ?? '—'}</Badge>
                    {currentPage.h1_count > 0 && <Badge tone="gold">H1: {currentPage.h1_count}</Badge>}
                    {currentPage.total_images > 0 && <Badge tone="warm">Images: {currentPage.total_images}</Badge>}
                    <Badge tone="ink">Links: {currentPage.internal_links ?? 0}/{currentPage.external_links ?? 0}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-ink-soft/80">
                    <div>📄 H1: <span className="text-ink font-medium">{currentPage.h1_count ?? 0}</span></div>
                    <div>📑 H2: <span className="text-ink font-medium">{currentPage.h2_count ?? 0}</span></div>
                    <div>📋 H3: <span className="text-ink font-medium">{currentPage.h3_count ?? 0}</span></div>
                    <div>🖼️ Alt Tags: <span className="text-ink font-medium">{currentPage.total_images - (currentPage.missing_alt_tags || 0)}/{currentPage.total_images || 0}</span></div>
                    <div>🔗 Internal Links: <span className="text-ink font-medium">{currentPage.internal_links ?? 0}</span></div>
                    <div>🌐 External Links: <span className="text-ink font-medium">{currentPage.external_links ?? 0}</span></div>
                    <div>📊 Text/HTML Ratio: <span className="text-ink font-medium">{currentPage.text_to_html_ratio ?? 0}%</span></div>
                    <div>📝 Grammar Errors: <span className="text-ink font-medium">{currentPage.grammar_errors ?? 0}</span></div>
                    <div className="col-span-2">📖 Meta Desc: <span className="text-ink font-medium">{currentPage.meta_description ? currentPage.meta_description.slice(0, 80) + (currentPage.meta_description.length > 80 ? '…' : '') : 'None'}</span></div>
                  </div>
                  {aiData?.results_preview?.[currentPageIndex] && (
                    <div className="grid grid-cols-2 gap-2 text-sm text-ink-soft/80 border-t border-ink/5 pt-3">
                      <div>🤖 AI Score: <span className="text-ink font-medium">{aiData.results_preview[currentPageIndex].ai_readiness_score ?? '—'}</span></div>
                      <div>🎯 Topic Clarity: <span className="text-ink font-medium">{aiData.results_preview[currentPageIndex].topic_clarity ?? '—'}</span></div>
                      <div>📝 Content Completeness: <span className="text-ink font-medium">{aiData.results_preview[currentPageIndex].content_completeness ?? '—'}</span></div>
                      <div>🏷️ Page Type: <span className="text-ink font-medium">{aiData.results_preview[currentPageIndex].page_type || 'unknown'}</span></div>
                      <div className="col-span-2">📌 Freshness: <span className="text-ink font-medium">{aiData.results_preview[currentPageIndex].freshness_status || 'unknown'}</span></div>
                    </div>
                  )}
                </div>
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {pages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPageIndex(idx)}
                      className={`h-2.5 rounded-full transition-all ${idx === currentPageIndex
                        ? 'w-8 bg-ink'
                        : 'w-2.5 bg-ink/20 hover:bg-ink/40'
                        }`}
                      aria-label={`Go to page ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </GlassCard>
          </motion.div>
        )}

        {/* Raw Data */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowRaw(!showRaw)}
            className="text-xs text-ink-soft hover:text-ink underline"
          >
            {showRaw ? 'Hide Raw Data' : 'Show Raw Data'}
          </button>
          {showRaw && (
            <div className="mt-2 p-4 bg-white/50 rounded-lg text-xs overflow-auto max-h-96 border border-ink/5 text-left">
              <pre className="text-ink-soft">{JSON.stringify({ seo: seoData, ai: aiData }, null, 2)}</pre>
            </div>
          )}
        </div>

      </div>
    </motion.div>
  );
}

// ─── Export ──────────────────────────────────────────
export default function Page() {
  return (
    <Suspense fallback={<LoadingState />}>
      <AuditContent />
    </Suspense>
  );
}
'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, Calendar, Globe, Code } from 'lucide-react';
import Link from 'next/link';
import { Reveal, EASE } from '../../components/motion-kit';
import SectionLabel from '../../components/SectionLabel';

const works = [
  {
    img: '/work-1.png',
    title: 'holovox.io',
    tag: 'Your Conference Call Assistant',
    link: 'https://holovox.io/',
    description: 'AI-powered tool that transcribes, summarizes, and analyzes your conference calls in real-time. Get actionable insights without taking notes.',
    technologies: ['Next.js', 'AI/ML', 'WebRTC', 'Tailwind'],
    year: '2024',
    category: 'SaaS',
  },
  {
    img: '/work-6.png',
    title: 'lumiere.one',
    tag: 'Find Your Person',
    link: 'https://lumiere-one-lac.vercel.app/',
    description: 'A modern matchmaking platform that uses AI to connect people based on deep compatibility scores and shared values, not just surface-level interests.',
    technologies: ['React', 'Node.js', 'AI Matching', 'PostgreSQL'],
    year: '2024',
    category: 'Social',
  },
  {
    img: '/work-3.png',
    title: 'hashfor.com',
    tag: 'AI Visibility Engine',
    link: 'https://hashfor-8c2a.vercel.app/',
    description: 'AI-driven SEO and visibility platform that helps businesses dominate search rankings with predictive content optimization and real-time analytics.',
    technologies: ['Vue.js', 'Python', 'AI/ML', 'Elasticsearch'],
    year: '2023',
    category: 'Marketing',
  },
  {
    img: '/work-4.png',
    title: 'cortex.ai',
    tag: 'Your Business Web Assistant',
    link: 'https://cortex-jade-pi.vercel.app/',
    description: 'Intelligent virtual assistant for businesses that automates customer support, lead qualification, and data entry across web and mobile platforms.',
    technologies: ['Next.js', 'AI Agents', 'WebSocket', 'Supabase'],
    year: '2024',
    category: 'AI',
  },
  {
    img: '/work-2.png',
    title: 'deep-trace.com',
    tag: 'AI Content Detection',
    link: 'https://deep-trace-snowy.vercel.app/',
    description: 'Advanced AI detection and deepfake identification tool that helps publishers and platforms verify content authenticity with 99.2% accuracy.',
    technologies: ['TensorFlow', 'Python', 'React', 'AWS'],
    year: '2023',
    category: 'Security',
  },
  {
    img: '/work-5.png',
    title: 'cybercity.io',
    tag: 'Secure Your Business',
    link: 'https://vulnerability-dun.vercel.app/',
    description: 'Enterprise-grade vulnerability assessment and cybersecurity platform that continuously monitors your digital infrastructure for threats and compliance gaps.',
    technologies: ['Go', 'React', 'PostgreSQL', 'Kubernetes'],
    year: '2024',
    category: 'Security',
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <Link href="/#portfolio" className="inline-flex items-center gap-2 text-ink-soft hover:text-ink transition text-sm font-medium mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          
          <Reveal>
            <SectionLabel>Portfolio</SectionLabel>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.08]">
              Our work speaks <br />
              <span className="font-serif-italic font-normal text-ink-soft">for itself.</span>
            </h1>
            <p className="mt-4 text-lg text-ink-soft max-w-2xl font-light leading-relaxed">
              A curated selection of projects that pushed boundaries and delivered real results for our clients.
            </p>
          </Reveal>
        </div>

        {/* Projects - Alternating Layout */}
        <div className="space-y-16 md:space-y-24">
          {works.map((work, index) => (
            <Reveal key={work.title}>
              <motion.div 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <motion.a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-2xl bg-ink/3"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <img
                      src={work.img}
                      alt={work.title}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </motion.a>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-ink-soft">
                    <span className="px-3 py-1 rounded-full bg-ink/5 text-xs font-medium">{work.category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {work.year}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-normal text-ink tracking-[-0.02em]">
                    {work.title}
                  </h2>
                  
                  <p className="text-sm font-medium text-ink/70">{work.tag}</p>
                  
                  <p className="text-base text-ink-soft leading-relaxed font-light">
                    {work.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {work.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs rounded-full bg-ink/5 text-ink-soft border border-ink/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <motion.a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="glass-pill inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-ink mt-2"
                  >
                    Visit project <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 md:mt-28 text-center py-12 border-t border-ink/5">
          <Reveal>
            <h3 className="text-xl sm:text-2xl font-serif font-normal text-ink">
              Want to work together?
            </h3>
            <p className="mt-2 text-ink-soft font-light">
              Let&apos;s create something extraordinary.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              className="glass-pill inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-ink mt-6"
            >
              Get in touch <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </Reveal>
        </div>

      </div>
    </div>
  );
}
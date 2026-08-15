'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Reveal, Stagger, StaggerItem, scaleIn, fadeUp, EASE } from '../../components/motion-kit';
import SectionLabel from '../../components/SectionLabel';

// ─── Stats ────────────────────────────────────────────
const stats = [
  { v: '120+', l: 'Projects shipped' },
  { v: '$5M+', l: 'Client revenue generated' },
  { v: '40+', l: 'Brands worldwide' },
  { v: '8 yrs', l: 'Average team experience' },
];

// ─── Team ──────────────────────────────────────────────
const team = [
  {
    name: 'Mannoon Hussain',
    role: 'Founder & CEO',
    bio: '15 years in brand and product design. Formerly at IDEO and Apple.',
    initials: 'MH',
  },
  {
    name: 'Moiz Shah',
    role: 'Head of Strategy',
    bio: 'PhD in behavioral economics. Ex-McKinsey, loves early-stage startups.',
    initials: 'MS',
  },
  {
    name: 'Abdul Aziz',
    role: 'Lead Designer',
    bio: 'Award-winning visual designer with passion for systems and storytelling.',
    initials: 'AA',
  },
  {
    name: 'Shafqat Hussain',
    role: 'Senior Developer',
    bio: 'Full-stack engineer with a focus on performance and clean code.',
    initials: 'CH',
  },
];

// ─── Values ────────────────────────────────────────────
const values = [
  {
    icon: '🎯',
    title: 'Purpose-driven',
    desc: 'We design for impact, not decoration. Every choice serves a goal.',
  },
  {
    icon: '🤝',
    title: 'Collaborative',
    desc: 'We work alongside you, not in a silo. Your team is our team.',
  },
  {
    icon: '⚡',
    title: 'Fast & iterative',
    desc: 'We ship early, learn fast, and refine relentlessly.',
  },
  {
    icon: '🧠',
    title: 'Craft & care',
    desc: 'Every pixel, every word – we sweat the details so you don’t have to.',
  },
];

// ─── Component ──────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="min-h-screen pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* ─── Back to site ─── */}
        <div className="py-8 px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Back to site
          </Link>
        </div>

        {/* ─── Hero ─── */}
        <section className="relative rounded-3xl overflow-hidden glass-panel p-10 sm:p-16 text-center pt-24 sm:pt-32 lg:pt-40">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-ink/5 via-transparent to-ink/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="relative z-10">
            <Reveal>
              <span className="text-sm font-medium text-ink-soft uppercase tracking-widest">About</span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.05]">
                We help bold ideas <br />
                <span className="font-serif-italic text-blue-600">become real products</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-ink-soft max-w-3xl mx-auto leading-relaxed">
                Scalentiq AutoWebs is a small, senior team of strategists, designers, and engineers. 
                We partner with founders and product teams to launch brands, websites, and digital 
                products that drive measurable growth.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ─── Our Story ─── */}
        <section className="mt-24 md:mt-32 grid md:grid-cols-5 gap-12 md:gap-20 items-start">
          <div className="md:col-span-3">
            <Reveal>
              <SectionLabel>Our story</SectionLabel>
              <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.1]">
                Built by practitioners, <span className="font-serif-italic">not consultants</span>.
              </h2>
              <div className="mt-6 space-y-4 text-base sm:text-lg text-ink-soft leading-relaxed">
                <p>
                  Scalentiq AutoWebs was born from a simple belief: the best work happens when 
                  strategy and execution are in the same hands. We’ve spent the last eight years 
                  helping startups raise, launch, and scale – not from the sidelines, but in the trenches.
                </p>
                <p>
                  Today, we’re a remote‑first team spread across three continents. We bring together 
                  diverse perspectives, deep craft, and a shared obsession with making things that work.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-2 glass-card rounded-3xl p-8 aspect-[4/3] flex items-center justify-center bg-ink/5">
            <div className="text-center">
              <span className="text-7xl">⚡</span>
              <p className="mt-4 text-sm text-ink-soft max-w-xs mx-auto">
                Strategy + Design + Development — all under one roof.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Values ─── */}
        <section className="mt-24 md:mt-32">
          <Reveal>
            <SectionLabel>What we stand for</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.1]">
              Four principles that guide <span className="font-serif-italic">everything we do</span>.
            </h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12" stagger={0.1}>
            {values.map((v) => (
              <StaggerItem key={v.title} variants={scaleIn}>
                <div className="glass-card rounded-3xl p-6 hover:bg-white/55 transition group">
                  <span className="text-4xl block mb-4">{v.icon}</span>
                  <h3 className="text-xl font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* ─── Stats ─── */}
        <section className="mt-24 md:mt-32">
          <Reveal>
            <SectionLabel>By the numbers</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.1]">
              Real results, <span className="font-serif-italic text-blue-600">real trust</span>.
            </h2>
          </Reveal>
          <div className="mt-10 glass-panel rounded-3xl p-6 sm:p-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">{s.v}</div>
                <div className="text-sm text-ink-soft mt-1">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── Team ─── */}
        <section className="mt-24 md:mt-32">
          <Reveal>
            <SectionLabel>Meet the team</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.1]">
              Senior practitioners <span className="font-serif-italic text-blue-600">who love what they do</span>.
            </h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12" stagger={0.08}>
            {team.map((member) => (
              <StaggerItem key={member.name} variants={scaleIn}>
                <div className="glass-card rounded-3xl p-6 hover:bg-white/55 transition group">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-ink/10 flex items-center justify-center text-2xl font-semibold text-ink/60 flex-shrink-0">
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ink">{member.name}</h3>
                      <p className="text-sm text-ink-soft">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed">{member.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* ─── How we work ─── */}
        <section className="mt-24 md:mt-32">
          <Reveal variants={scaleIn} className="glass-dark rounded-3xl p-8 sm:p-12 text-white">
            <SectionLabel>How we work</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-normal tracking-[-0.02em] leading-[1.1]">
              A simple <span className="font-serif-italic text-white/90">four‑step</span> process.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              {['Discover', 'Define', 'Design', 'Deliver'].map((step, i) => (
                <div key={step} className="relative pt-6">
                  <motion.span
                    className="absolute top-0 left-0 h-px bg-white/40 block w-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: EASE }}
                  />
                  <div className="text-sm font-mono text-white/50 mb-2">0{i + 1}</div>
                  <h3 className="text-xl font-bold">{step}</h3>
                  <p className="text-white/70 text-sm mt-2 leading-relaxed">
                    {i === 0 && 'We dig into your business, audience, and competitive landscape.'}
                    {i === 1 && 'We align on strategy, positioning, and a clear brief.'}
                    {i === 2 && 'We craft high‑fidelity designs and iterate until they’re right.'}
                    {i === 3 && 'We ship, measure, and hand over a system you can maintain.'}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ─── CTA ─── */}
        <section className="mt-24 md:mt-32 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-ink">
              Ready to build <span className="font-serif-italic text-blue-600">something great</span>?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-ink-soft max-w-xl mx-auto">
              Let’s talk about your next project.
            </p>
            <Link
              href="/#contact"
              className="inline-block mt-8 bg-blue-600 rounded-full px-8 py-4 text-sm font-medium text-white hover:bg-blue-70 transition border border-ink/10"
            >
              Get in touch →
            </Link>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
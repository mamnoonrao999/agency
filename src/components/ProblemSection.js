'use client';

import { motion } from 'framer-motion';
import { XCircle, UserX, ZapOff, Clock, BarChart3, AlertCircle } from 'lucide-react';
import { Reveal, fadeIn } from './motion-kit';
import SectionLabel from './SectionLabel';

const painPoints = [
  {
    icon: XCircle,
    title: "No follow-up",
    description: "You get leads, but no one follows up — they slip through the cracks.",
  },
  {
    icon: ZapOff,
    title: "No automation",
    description: "Manual processes are eating your time and killing your margins.",
  },
  {
    icon: UserX,
    title: "Leads go cold",
    description: "Your website captures attention, but fails to convert interest into action.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-ink/[0.02] border-y border-ink/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.1]">
              Most Websites Are Just <span className="font-serif-italic font-normal text-ink-soft">Digital Brochures</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-ink-soft font-light leading-relaxed max-w-2xl mx-auto">
              They look nice, but they don't work. Here's what's actually happening:
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {painPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.1} variants={fadeIn}>
              <motion.div 
                className="glass-card rounded-2xl p-6 sm:p-8 text-center group hover:bg-white/55 transition duration-300"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-ink/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-ink/10 transition">
                  <point.icon className="w-6 h-6 text-ink-soft group-hover:text-ink transition" />
                </div>
                <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{point.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bridge to Services */}
        <Reveal delay={0.3} variants={fadeIn}>
          <div className="mt-12 text-center">
            <p className="text-sm text-ink-soft font-light">
              That's why we built a different kind of agency. <br className="sm:hidden" />
              <span className="font-medium text-ink">One that actually delivers results.</span>
            </p>
            <div className="mt-4 w-12 h-0.5 bg-ink/10 mx-auto rounded-full" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
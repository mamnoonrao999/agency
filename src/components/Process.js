'use client';

import { motion } from 'framer-motion';
import { Reveal, Stagger, StaggerItem, scaleIn, EASE } from './motion-kit';
import SectionLabel from './SectionLabel';

const steps = [
  { n: '01', t: 'Discover', d: 'We dig into your business, audience and competitive landscape to find the angle nobody else is using.' },
  { n: '02', t: 'Define', d: 'Strategy, positioning and a single page brief that everyone — including future hires — can rally around.' },
  { n: '03', t: 'Design', d: 'Concepts, identity systems and interfaces refined in tight loops until every detail earns its place.' },
  { n: '04', t: 'Deliver', d: 'We ship, measure and iterate. Then we hand over a system your team can actually maintain.' },
];

export default function Process() {
  return (
    <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal variants={scaleIn} className="glass-dark rounded-[2rem] p-4 sm:p-8 lg:p-16 text-white">
          <SectionLabel>Process</SectionLabel>
          <h2 className="mt-3 sm:mt-6 text-2xl sm:text-4xl md:text-5xl font-serif font-normal tracking-[-0.02em] leading-[1.05] max-w-3xl">
            A simple <span className="font-serif-italic font-normal text-white/90">four-step</span> way of working.
          </h2>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-8 md:mt-16" stagger={0.12}>
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="relative pt-4 sm:pt-6">
                  <motion.span
                    className="absolute top-0 left-0 h-px bg-white/40 block"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: EASE }}
                  />
                  <div className="text-[10px] sm:text-sm font-mono text-white/50 mb-2 sm:mb-6">{s.n}</div>
                  <h3 className="text-base sm:text-2xl font-bold tracking-tight mb-1.5 sm:mb-3">{s.t}</h3>
                  <p className="text-xs sm:text-base text-white/70 leading-relaxed">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}
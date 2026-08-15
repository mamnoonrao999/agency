'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Reveal, Stagger, StaggerItem, scaleIn, EASE } from './motion-kit';
import SectionLabel from './SectionLabel';

const testimonials = [
  { q: "Scalentiq AutoWebs Studio didn't just redesign our brand they rebuilt how customers feel about us. Conversions doubled in a quarter.", a: 'Sarah Chen', r: 'CEO, Northkin' },
  { q: 'The most thoughtful, fast and detail-obsessed team we\'ve worked with. Every deliverable felt finished.', a: 'Marcus Rivera', r: 'Head of Product, Aurora' },
  { q: 'They translated a messy vision into a clear brand and a website that actually performs. Worth every cent.', a: 'Lina Park', r: 'Founder, Petal' },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.1] max-w-3xl">
            Loved by the <span className="font-serif-italic font-normal text-blue-600">founders</span> we work with.
          </h2>
        </Reveal>
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-10 md:mt-16" stagger={0.12}>
          {testimonials.map((t) => (
            <StaggerItem key={t.a} hover variants={scaleIn}>
              <figure className="glass-card rounded-3xl p-5 sm:p-8 flex flex-col gap-4 sm:gap-6 h-full">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.4 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.08, duration: 0.4, ease: EASE }}
                    >
                      <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-500 text-yellow-500" />
                    </motion.span>
                  ))}
                </div>
                <blockquote className="text-base sm:text-lg text-ink leading-relaxed flex-1">"{t.q}"</blockquote>
                <figcaption>
                  <div className="font-semibold text-ink text-sm sm:text-base">{t.a}</div>
                  <div className="text-xs sm:text-sm text-ink-soft">{t.r}</div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
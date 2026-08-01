'use client';

import { Reveal, Stagger, StaggerItem, scaleIn, motion } from '@/components/motion-kit'; // ← motion added
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

// Use absolute paths (files must be in public/assets/)
const work1 = '/assets/work-1.jpg';
const work2 = '/assets/work-2.jpg';
const work3 = '/assets/work-3.jpg';
const work4 = '/assets/work-4.jpg';

const works = [
  { img: work1, t: 'Nimble — SaaS rebrand', tag: 'Brand · Web' },
  { img: work2, t: 'Northkin Stationery', tag: 'Identity · Print' },
  { img: work3, t: 'Aurora Mobile App', tag: 'Product · UI/UX' },
  { img: work4, t: 'Petal Skincare', tag: 'Packaging · Web' },
];

const EASE = [0.22, 0.7, 0.2, 1];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 px-6 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <Reveal>
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="mt-6 text-4xl sm:text-5xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.05] max-w-2xl">
              Selected work, <span className="font-serif-italic font-normal">real outcomes.</span>
            </h2>
          </Reveal>
          <motion.a // ← changed to motion.a
            href="#"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, gap: '0.9rem' }}
            className="glass-pill inline-flex items-center gap-2 text-ink font-medium px-5 py-2.5 rounded-full"
          >
            View all projects <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>
        <Stagger className="grid md:grid-cols-3 gap-6" stagger={0.1}>
          {works.map((w) => (
            <StaggerItem key={w.t} hover variants={scaleIn}>
              <a href="#" className="group block glass-card rounded-3xl p-3 h-full">
                <div className="overflow-hidden rounded-2xl aspect-[4/3]">
                  <motion.img
                    src={w.img}
                    alt={w.t}
                    width={1024}
                    height={768}
                    loading="lazy"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-end justify-between px-3 py-4">
                  <div>
                    <h3 className="text-xl font-bold text-ink tracking-tight">{w.t}</h3>
                    <p className="text-sm text-ink-soft mt-1">{w.tag}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-ink-soft group-hover:text-ink group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
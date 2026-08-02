'use client';

import { ArrowUpRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem, scaleIn, fadeIn } from './motion-kit';
import SectionLabel from './SectionLabel';

const services = [
  { n: '01', t: 'Brand Strategy', d: 'Positioning, messaging and identity systems that give your brand a sharp, lasting point of view.' },
  { n: '02', t: 'Web Design & Development', d: 'High-craft websites engineered for speed, conversion and a memorable first impression.' },
  { n: '03', t: 'Product & UI/UX', d: 'End-to-end product design — research, flows and pixel-perfect interfaces that ship.' },
  { n: '04', t: 'Visual Identity', d: 'Logos, type systems and art direction that translate strategy into something you can feel.' },
  { n: '05', t: 'Motion & 3D', d: 'Animation, micro-interactions and 3D moments that bring your interfaces to life.' },
  { n: '06', t: 'SEO & Growth', d: 'Technical SEO, content frameworks and growth loops that compound over time.' },
];

export default function Services() {
  return (
    <section id="service" className="py-28 px-6 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <Reveal>
            <SectionLabel>Services</SectionLabel>
            <h2 className="mt-6 text-4xl sm:text-5xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.05] max-w-2xl">
              Everything you need <span className="font-serif-italic font-normal">to launch</span> and grow.
            </h2>
          </Reveal>
          <Reveal delay={0.15} variants={fadeIn}>
            <p className="text-ink-soft max-w-md">Six disciplines, one accountable team. Engage us for a single sprint or a full retainer.</p>
          </Reveal>
        </div>
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.08}>
          {services.map((s) => (
            <StaggerItem key={s.n} hover variants={scaleIn}>
              <div className="glass-card rounded-3xl p-8 group h-full hover:bg-white/55 transition">
                <div className="flex items-start justify-between mb-10">
                  <span className="text-sm font-mono text-ink-soft">{s.n}</span>
                  <ArrowUpRight className="w-5 h-5 text-ink-soft group-hover:text-ink group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
                </div>
                <h3 className="text-2xl font-bold text-ink tracking-tight mb-3">{s.t}</h3>
                <p className="text-ink-soft leading-relaxed">{s.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
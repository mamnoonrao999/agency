'use client';

import { motion } from 'framer-motion';
import { Check, Zap, TrendingUp, ShieldCheck, Users, ArrowUpRight } from 'lucide-react';
import { Reveal, fadeIn } from './motion-kit';

const solutions = [
  {
    img: '/icons/website.png',
    iconBg: 'bg-blue-50',
    titleTop: 'I Need',
    titleBottom: 'A Website',
    underline: 'bg-blue-500',
    description:
      'For businesses that need a professional website that converts visitors into customers.',
    features: ['Custom Website Design', 'Landing Pages', 'E-commerce Solutions', 'Conversion Optimization'],
    checkBg: 'bg-blue-500',
    button: {
      label: 'Explore Website Solutions',
      className: 'bg-blue-600 hover:bg-blue-700',
    },
  },
  {
    img: '/icons/automation.png',
    iconBg: 'bg-emerald-50',
    titleTop: 'I Need',
    titleBottom: 'GoHighLevel Automation',
    underline: 'bg-emerald-500',
    description:
      'For businesses that want to automate follow-ups, capture more leads, and close more deals.',
    features: ['GoHighLevel CRM Setup', 'Funnels & Workflows', 'Lead Nurturing Automation', 'Appointment Scheduling'],
    checkBg: 'bg-emerald-500',
    button: {
      label: 'Explore Automation Solutions',
      className: 'bg-emerald-600 hover:bg-emerald-700',
    },
  },
  {
    img: '/icons/website-automation.png',
    iconBg: 'bg-violet-50',
    titleTop: 'I Need',
    titleBottom: 'Both',
    underline: 'bg-violet-500',
    description:
      'For businesses that want a complete growth system that works together seamlessly.',
    features: ['High-Converting Website', 'GoHighLevel Automation', 'Integrated System', 'Ongoing Optimization'],
    checkBg: 'bg-violet-500',
    button: {
      label: 'Build My Growth System',
      className: 'bg-violet-600 hover:bg-violet-700',
    },
    featured: true,
  },
];

const stats = [
  {
    icon: Zap,
    color: 'text-blue-600',
    title: 'From 0 → 1',
    subtitle: 'Startups to Success',
  },
  {
    icon: TrendingUp,
    color: 'text-blue-600',
    title: 'Built to Scale',
    subtitle: 'Scalable Solutions',
  },
  {
    icon: ShieldCheck,
    color: 'text-emerald-600',
    title: '100% Client Satisfaction',
    subtitle: 'Results That Matter',
  },
  {
    icon: Users,
    color: 'text-violet-600',
    title: 'Growth Partners',
    subtitle: 'Not Just Another Agency',
  },
];

export default function SolutionsSection() {
  return (
    <section className=" px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* soft background glows */}
      <div className="pointer-events-none absolute -left-32 top-24 w-72 h-72 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-0 w-80 h-80 rounded-full bg-orange-200/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Hero copy */}
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.1]">
              Build The Digital System
              <br />
              <span className="font-serif-italic font-normal text-blue-600">
                Your Business Needs To Grow.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-ink-soft font-light leading-relaxed max-w-2xl mx-auto">
              Whether you need a high-converting website, powerful GoHighLevel
              automation, or a complete customer acquisition system, we build
              solutions designed around your goals.
            </p>
          </Reveal>

          <Reveal delay={0.1} variants={fadeIn}>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-px w-24 sm:w-32 bg-ink/10" />
              <span className="w-2 h-2 rotate-45 bg-blue-500 rounded-[2px]" />
              <div className="h-px w-24 sm:w-32 bg-ink/10" />
            </div>
          </Reveal>
        </div>

        {/* Sub-heading */}
        <Reveal delay={0.15} variants={fadeIn}>
          <div className="mt-10 sm:mt-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-serif text-ink">What Are You Looking For?</h2>
            <p className="mt-2 text-sm sm:text-base text-ink-soft font-light">
              Choose the solution that fits your business needs
            </p>
          </div>
        </Reveal>

        {/* Solution cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {solutions.map((sol, index) => (
            <Reveal key={sol.titleBottom} delay={0.1 + index * 0.1} variants={fadeIn}>
              <motion.div
                className={`glass-card rounded-2xl p-6 sm:p-8 h-full flex flex-col hover:bg-white/60 transition duration-300 ${
                  sol.featured ? 'ring-1 ring-violet-200/60' : ''
                }`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden ${sol.iconBg}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={sol.img} alt={sol.titleBottom} className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-semibold text-ink leading-snug">
                      {sol.titleTop}
                      <br />
                      {sol.titleBottom}
                    </p>
                    <span className={`mt-2 block h-0.5 w-8 rounded-full ${sol.underline}`} />
                  </div>
                </div>

                <p className="mt-5 text-sm text-ink-soft leading-relaxed">{sol.description}</p>

                {/* Checklist — animates in one item at a time, replays every time it scrolls into view */}
                <ul className="mt-5 space-y-3 flex-1">
                  {sol.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-ink"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.4 }}
                      transition={{ duration: 0.35, delay: 0.15 + i * 0.15, ease: 'easeOut' }}
                    >
                      <motion.span
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${sol.checkBg}`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.3, delay: 0.2 + i * 0.15, ease: 'backOut' }}
                      >
                        <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                      </motion.span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full text-white text-sm font-semibold px-5 py-3.5 transition ${sol.button.className}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {sol.button.label}
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                </motion.a>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Stats strip */}
        <Reveal delay={0.3} variants={fadeIn}>
          <div className="mt-8 sm:mt-10 glass-card rounded-2xl px-6 sm:px-10 py-6 sm:py-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.title} className="flex items-center gap-3">
                  <stat.icon className={`w-6 h-6 shrink-0 ${stat.color}`} strokeWidth={2} />
                  <div>
                    <p className="text-sm font-semibold text-ink leading-tight">{stat.title}</p>
                    <p className="text-xs text-ink-soft mt-0.5">{stat.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
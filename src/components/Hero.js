'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Zap, TrendingUp, Check } from 'lucide-react';
import { EASE } from './motion-kit';

export default function Hero() {
  const line1 = ['We', 'create,', 'you', 'grow'];

  return (
    <section id="top" className="relative min-h-screen flex flex-col">
      <div className="flex-1 flex items-start justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20">
          {/* Badge – smaller on mobile */}
          <div className="flex justify-center pb-8 sm:pb-12 lg:pb-20 xl:pb-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-1.5 sm:gap-2 glass-pill text-ink-soft rounded-full px-2.5 py-0.5 text-[8px] sm:px-4 sm:py-1.5 sm:text-[11px] tracking-[0.18em] font-medium rounded-3xl border border-ink/10 bg-gradient-to-b from-ink-soft/40 via-ink-soft/30 to-ink-soft/40"
            >
              <motion.span
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white/95"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              YOUR IDEAS, OUR EXPERTISE
            </motion.div>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal tracking-[-0.03em] text-ink leading-[1.02]">
              <motion.span
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } } }}
                className="inline"
              >
                {line1.map((w) => (
                  <motion.span
                    key={w}
                    variants={{
                      hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
                      show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
                    }}
                    className="inline-block mr-[0.2em] sm:mr-[0.25em]"
                  >
                    {w}
                  </motion.span>
                ))}
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
                    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
                  }}
                  className="font-serif-italic font-normal"
                >
                  – simple
                </motion.span>
                <br />
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
                    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
                  }}
                  className="font-serif-italic font-normal inline-block mr-[0.2em] sm:mr-[0.25em]"
                >
                  as that.
                </motion.span>
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
                    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
                  }}
                  className="inline-block"
                >
                  AGENCY
                </motion.span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7, ease: EASE }}
              className="mt-4 sm:mt-8 text-sm sm:text-lg text-ink-soft max-w-xl leading-relaxed"
            >
              We focus on turning ideas into impactful digital solutions. From strategy and design to execution, we handle the hard work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
              className="mt-5 sm:mt-8 flex flex-wrap gap-3 sm:gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 sm:gap-2 glass-pill rounded-full px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium text-ink hover:bg-white/60 transition-all duration-300 border border-ink/10"
              >
                Get in touch
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-45" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-ink-soft hover:text-ink transition-colors duration-300"
              >
                See our work →
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sliding Stats – smaller text on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6, ease: EASE }}
        className="w-full border-t border-ink/5 py-3 sm:py-6 overflow-hidden"
      >
        <motion.div
          className="flex gap-3 sm:gap-6 lg:gap-12 whitespace-nowrap items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          whileHover={{ animationPlayState: 'paused' }}
          style={{ width: 'max-content' }}
        >
          {[...Array(4)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-3 sm:gap-6 lg:gap-12 items-center">
              <div className="flex items-center gap-1 sm:gap-2 text-[9px] sm:text-xs lg:text-sm text-ink-soft">
                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-ink-soft" />
                <span>Startup specialists</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-[9px] sm:text-xs lg:text-sm text-ink-soft">
                <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-ink-soft" />
                <span>From 0 → 1</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-[9px] sm:text-xs lg:text-sm text-ink-soft">
                <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-ink-soft" />
                <span>Built to scale</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-[9px] sm:text-xs lg:text-sm text-ink-soft">
                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-ink-soft" />
                <span>100% client satisfaction</span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
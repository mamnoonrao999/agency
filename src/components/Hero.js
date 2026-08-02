'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { EASE } from './motion-kit';

export default function Hero() {
  const avatars = '/assets/avatars.jpg';
  const line1 = ['We', 'create,', 'you', 'grow'];
  const logos = ['miro', 'shopify', 'webflow', 'ClickUp', 'Canva', 'hotjar', 'Voiceflow', 'monday.com', 'Adobe', 'mailerlite'];

  function LogoChip({ name, highlight = false, index = 0 }) {
    const isScript = ['Voiceflow', 'Canva'].includes(name);
    return (
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.9 + index * 0.05, duration: 0.6, ease: EASE }}
        whileHover={{ y: -6, scale: 1.03 }}
        className={`glass-card rounded-2xl h-20 grid place-items-center text-ink text-lg font-semibold cursor-default ${highlight ? 'ring-1 ring-white/80 bg-white/40' : ''}`}
      >
        <span className={isScript ? 'font-serif-italic text-2xl text-ink/80' : ''}>{name}</span>
      </motion.div>
    );
  }

  return (
    <section id="top" className="relative min-h-screen px-6 sm:px-8 flex items-start">
      <div className="mx-auto max-w-7xl w-full">

        <div className="max-w-3xl pt-40">
          {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 bg-chip text-white rounded-full px-4 py-1.5 text-[11px] tracking-[0.18em] font-medium mb-8"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-white"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            $5M+ IN CLIENT REVENUE GENERATED
          </motion.div> */}

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-[-0.03em] text-ink leading-[1.02]">
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
                  className="inline-block mr-[0.25em]"
                >
                  {w}
                </motion.span>
              ))}
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
                  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
                }}
                className="font-serif-italic font-normal inline-block"
              >
                – simple
              </motion.span>
              <br />
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
                  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
                }}
                className="font-serif-italic font-normal inline-block mr-[0.25em]"
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
            className="mt-8 text-base sm:text-lg text-ink-soft max-w-xl leading-relaxed"
          >
            We focus on turning ideas into impactful digital solutions. From strategy and design to execution, we handle the hard work.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {logos.map((l, i) => (
            <LogoChip key={l} name={l} highlight={i === 2} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
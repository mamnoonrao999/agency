'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Star } from 'lucide-react';

// Use absolute paths (files must be in public/assets/)
const heroBg = '/assets/hero-bg.jpg';
const avatars = '/assets/avatars.jpg';

const EASE = [0.22, 0.7, 0.2, 1];

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

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '18%']), { stiffness: 80, damping: 24, mass: 0.4 });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const line1 = ['We', 'create,', 'you', 'grow'];

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.img
        src={heroBg}
        alt=""
        width={1920}
        height={1280}
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/30" />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 pt-44 pb-24">
        <div className="flex justify-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease: EASE }}
            whileHover={{ y: -4 }}
            className="glass-pill rounded-2xl px-4 py-3 flex items-center gap-3"
          >
            <img src={avatars} alt="Happy clients" width={64} height={28} className="h-7 w-16 object-cover rounded-full" />
            <div className="text-right">
              <div className="flex items-center justify-end gap-1 text-sm font-semibold text-ink">
                4,9/5
                <motion.span animate={{ rotate: [0, 18, -18, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                  <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                </motion.span>
              </div>
              <div className="text-xs text-ink-soft">100+ Happy clients worldwide</div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-3xl">
          <motion.div
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
          </motion.div>

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

        <div className="mt-24 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {logos.map((l, i) => (
            <LogoChip key={l} name={l} highlight={i === 2} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
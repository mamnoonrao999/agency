'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Check } from 'lucide-react';
import { Reveal, Stagger, StaggerItem, scaleIn, EASE } from './motion-kit';
import SectionLabel from './SectionLabel';

const steps = [
  { n: '01', t: 'Discover', d: 'We dig into your business, audience and competitive landscape to find the angle nobody else is using.' },
  { n: '02', t: 'Define', d: 'Strategy, positioning and a single page brief that everyone — including future hires — can rally around.' },
  { n: '03', t: 'Design', d: 'Concepts, identity systems and interfaces refined in tight loops until every detail earns its place.' },
  { n: '04', t: 'Deliver', d: 'We ship, measure and iterate. Then we hand over a system your team can actually maintain.' },
];

export default function Process() {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView && !isAnimating) {
      setIsAnimating(true);
      const startTime = Date.now();
      const duration = 4000; // 4 seconds – slow and smooth

      const updateProgress = () => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / duration) * 100, 100);
        setProgress(newProgress);

        if (newProgress < 100) {
          requestAnimationFrame(updateProgress);
        }
      };

      requestAnimationFrame(updateProgress);
    }
  }, [isInView, isAnimating]);

  // Each card gets a tick when progress crosses its threshold
  const getTickState = (index) => {
    // 4 cards evenly spaced: 12.5, 37.5, 62.5, 87.5
    const thresholds = [12.5, 37.5, 62.5, 87.5];
    return progress >= thresholds[index];
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal variants={scaleIn} className="glass-dark rounded-[2rem] p-5 sm:p-8 lg:p-16 text-white">
          <SectionLabel>Process</SectionLabel>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-[-0.02em] leading-[1.1] max-w-3xl">
            A simple <span className="font-serif-italic font-normal text-white/90">four-step</span> way of working.
          </h2>

          {/* ─── Grid with continuous line ─── */}
          <div className="relative mt-10 md:mt-16">
            {/* Background line (always visible, dim) */}
            <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

            {/* Animated line fill – moves slowly & smoothly */}
            <motion.div
              className="absolute top-0 left-0 h-px bg-white/60"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeInOut', duration: 0.1 }} // smooth updates
              style={{ boxShadow: '0 0 12px rgba(255,255,255,0.15)' }}
            />

            {/* Glow behind the line */}
            <motion.div
              className="absolute top-0 left-0 h-[3px] -translate-y-[1px] bg-white/20 blur-sm"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeInOut', duration: 0.1 }}
            />

            <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10" stagger={0.12}>
              {steps.map((s, index) => (
                <StaggerItem key={s.n}>
                  <div className="relative pt-5 sm:pt-6">
                    {/* Header: Number on left, Tick on right */}
                    <div className="flex items-center justify-between mb-3 sm:mb-6">
                      <div className="text-xs sm:text-sm font-mono text-white/50">{s.n}</div>

                      {/* Tick / Checkmark – appears when line reaches this card */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.3 }}
                        animate={{
                          opacity: getTickState(index) ? 1 : 0,
                          scale: getTickState(index) ? 1 : 0.3,
                        }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                      >
                        <div className="w-5 h-5 rounded-full bg-green-900 border border-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-black/20">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      </motion.div>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-bold tracking-tight mb-2 sm:mb-3">{s.t}</h3>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed">{s.d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}






// 'use client';

// import { motion } from 'framer-motion';
// import { Reveal, Stagger, StaggerItem, scaleIn, EASE } from './motion-kit';
// import SectionLabel from './SectionLabel';

// const steps = [
//   { n: '01', t: 'Discover', d: 'We dig into your business, audience and competitive landscape to find the angle nobody else is using.' },
//   { n: '02', t: 'Define', d: 'Strategy, positioning and a single page brief that everyone — including future hires — can rally around.' },
//   { n: '03', t: 'Design', d: 'Concepts, identity systems and interfaces refined in tight loops until every detail earns its place.' },
//   { n: '04', t: 'Deliver', d: 'We ship, measure and iterate. Then we hand over a system your team can actually maintain.' },
// ];

// export default function Process() {
//   return (
//     <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         <Reveal variants={scaleIn} className="glass-dark rounded-[2rem] p-5 sm:p-8 lg:p-16 text-white">
//           <SectionLabel>Process</SectionLabel>
//           <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-[-0.02em] leading-[1.1] max-w-3xl">
//             A simple <span className="font-serif-italic font-normal text-white/90">four-step</span> way of working.
//           </h2>
//           <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mt-10 md:mt-16" stagger={0.12}>
//             {steps.map((s) => (
//               <StaggerItem key={s.n}>
//                 <div className="relative pt-5 sm:pt-6">
//                   <motion.span
//                     className="absolute top-0 left-0 h-px bg-white/40 block"
//                     initial={{ width: '0%' }}
//                     whileInView={{ width: '100%' }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.9, ease: EASE }}
//                   />
//                   <div className="text-xs sm:text-sm font-mono text-white/50 mb-3 sm:mb-6">{s.n}</div>
//                   <h3 className="text-lg sm:text-2xl font-bold tracking-tight mb-2 sm:mb-3">{s.t}</h3>
//                   <p className="text-sm sm:text-base text-white/70 leading-relaxed">{s.d}</p>
//                 </div>
//               </StaggerItem>
//             ))}
//           </Stagger>
//         </Reveal>
//       </div>
//     </section>
//   );
// }
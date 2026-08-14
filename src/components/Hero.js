'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Zap, TrendingUp, Check } from 'lucide-react';
import { EASE } from './motion-kit';

export default function Hero() {
  return (
    <section id="top" className="relative flex flex-col min-h-screen">
      <div className="flex flex-1 items-center justify-center pb-12 sm:pb-16 lg:pb-20 xl:pb-22">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-35">
          {/* Badge */}
          <div className="flex justify-center pb-6 sm:pb-10 lg:pb-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 glass-pill text-ink-soft rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-[11px] tracking-[0.18em] font-medium border border-ink/10 bg-gradient-to-b from-ink-soft/40 via-ink-soft/30 to-ink-soft/40"
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-white/95"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              FREE WEBSITE + FUNNEL AUDIT
            </motion.div>
          </div>

          {/* ── Heading — just edit the text below directly ── */}
          <div className="max-w-4xl mx-auto sm:mx-0">
            <motion.h1
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal tracking-[-0.03em] text-ink leading-[1.05]"
            >
              Turn Your Website Into
              <br />
              <span className="font-serif-italic font-normal">Your Best Salesperson.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7, ease: EASE }}
              className="mt-5 sm:mt-8 text-base sm:text-lg text-ink-soft max-w-xl leading-relaxed"
            >
              We build high-converting websites and GoHighLevel systems that turn visitors into booked calls.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
              className="mt-6 sm:mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 glass-pill rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-ink hover:bg-white/60 transition-all duration-300 border border-ink/10"
              >
                Get My Free Website Audit
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink transition-colors duration-300 pl-5 sm:pl-0"
              >
                See our work →
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
              className="mt-4 text-xs text-ink-soft pl-5 sm:pl-0"
            >
              60 seconds · No credit card · Personalized report
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sliding Stats */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6, ease: EASE }}
        className="w-full border-t border-ink/5 py-3 sm:py-6 overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          className="flex gap-3 sm:gap-6 lg:gap-12 whitespace-nowrap items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          whileHover={{ animationPlayState: 'paused' }}
          style={{ width: 'max-content' }}
        >
          {[...Array(4)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-3 sm:gap-6 lg:gap-12 items-center flex-shrink-0">
              <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs lg:text-sm text-ink-soft flex-shrink-0">
                <Sparkles className="hidden sm:block w-3.5 h-3.5 lg:w-4 lg:h-4 text-ink-soft" />
                <span>Startup specialists</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs lg:text-sm text-ink-soft flex-shrink-0">
                <Zap className="hidden sm:block w-3.5 h-3.5 lg:w-4 lg:h-4 text-ink-soft" />
                <span>From 0 → 1</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs lg:text-sm text-ink-soft flex-shrink-0">
                <TrendingUp className="hidden sm:block w-3.5 h-3.5 lg:w-4 lg:h-4 text-ink-soft" />
                <span>Built to scale</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs lg:text-sm text-ink-soft flex-shrink-0">
                <Check className="hidden sm:block w-3.5 h-3.5 lg:w-4 lg:h-4 text-ink-soft" />
                <span>100% client satisfaction</span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}






// 'use client';

// import { motion } from 'framer-motion';
// import { ArrowUpRight, Sparkles, Zap, TrendingUp, Check } from 'lucide-react';
// import { EASE } from './motion-kit';

// export default function Hero() {
//   return (
//     <section id="top" className="relative flex flex-col min-h-screen">
//       <div className="flex flex-1 items-center justify-center pb-12 sm:pb-16 lg:pb-20 xl:pb-22">
//         <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-35">
//           {/* Badge */}
//           <div className="flex justify-center pb-6 sm:pb-10 lg:pb-14">
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
//               className="inline-flex items-center gap-2 glass-pill text-ink-soft rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-[11px] tracking-[0.18em] font-medium border border-ink/10 bg-gradient-to-b from-ink-soft/40 via-ink-soft/30 to-ink-soft/40"
//             >
//               <motion.span
//                 className="w-1.5 h-1.5 rounded-full bg-white/95"
//                 animate={{ opacity: [1, 0.3, 1] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               />
//               FREE WEBSITE + FUNNEL AUDIT
//             </motion.div>
//           </div>

//           {/* ── Heading — just edit the text below directly ── */}
//           <div className="max-w-4xl mx-auto sm:mx-0">
//             <motion.h1
//               initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
//               animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
//               transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
//               className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal tracking-[-0.03em] text-ink leading-[1.05]"
//             >
//               Turn Your Website Into
//               <br />
//               <span className="font-serif-italic font-normal">Your Best Salesperson.</span>

//               {/* <span className="font-serif-italic font-normal">as that.</span>  */}
//               {/* AGENCY */}
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.75, duration: 0.7, ease: EASE }}
//               className="mt-5 sm:mt-8 text-base sm:text-lg text-ink-soft max-w-xl leading-relaxed"
//             >
//               We build high-converting websites and GoHighLevel systems that turn visitors into booked calls.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
//               className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4"
//             >
//               <a
//                 href="#contact"
//                 className="group inline-flex items-center gap-2 glass-pill rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-ink hover:bg-white/60 transition-all duration-300 border border-ink/10"
//               >
//                 Get My Free Website Audit
//                 <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
//               </a>
//               <a
//                 href="#portfolio"
//                 className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink transition-colors duration-300"
//               >
//                 See our work →
//               </a>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
//               className="mt-4 px-4 text-xs"
//             >
//               60 seconds · No credit card · Personalized report
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Sliding Stats */}
//       <motion.div
//         initial={{ opacity: 0, y: 16 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.0, duration: 0.6, ease: EASE }}
//         className="w-full border-t border-ink/5 py-4 sm:py-6 overflow-hidden"
//       >
//         <motion.div
//           className="flex gap-4 sm:gap-6 lg:gap-12 whitespace-nowrap items-center"
//           animate={{ x: ['0%', '-50%'] }}
//           transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
//           whileHover={{ animationPlayState: 'paused' }}
//           style={{ width: 'max-content' }}
//         >
//           {[...Array(4)].map((_, setIndex) => (
//             <div key={setIndex} className="flex gap-4 sm:gap-6 lg:gap-12 items-center">
//               <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs lg:text-sm text-ink-soft">
//                 <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-ink-soft" />
//                 <span>Startup specialists</span>
//               </div>
//               <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs lg:text-sm text-ink-soft">
//                 <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-ink-soft" />
//                 <span>From 0 → 1</span>
//               </div>
//               <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs lg:text-sm text-ink-soft">
//                 <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-ink-soft" />
//                 <span>Built to scale</span>
//               </div>
//               <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs lg:text-sm text-ink-soft">
//                 <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-ink-soft" />
//                 <span>100% client satisfaction</span>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }
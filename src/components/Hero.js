'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Zap, TrendingUp, Check } from 'lucide-react';
import { EASE } from './motion-kit';

export default function Hero() {
  const line1 = ['We', 'create,', 'you', 'grow'];

  return (
    <section id="top" className="relative min-h-screen flex flex-col">
      {/* ─── Main content ─── */}
      <div className="flex-1 flex items-start justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20">
          {/* Badge */}
          <div className="flex justify-center pb-12 sm:pb-16 lg:pb-20 xl:pb-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 glass-pill text-ink-soft rounded-full px-3 py-1 text-[10px] sm:px-4 sm:py-1.5 sm:text-[11px] tracking-[0.18em] font-medium rounded-3xl border border-ink/10 bg-gradient-to-b from-ink-soft/40 via-ink-soft/30 to-ink-soft/40"
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-white/95"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              YOUR IDEAS, OUR EXPERTISE
            </motion.div>
          </div>

          {/* Heading and paragraph */}
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal tracking-[-0.03em] text-ink leading-[1.02]">
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
              className="mt-6 sm:mt-8 text-base sm:text-lg text-ink-soft max-w-xl leading-relaxed"
            >
              We focus on turning ideas into impactful digital solutions. From strategy and design to execution, we handle the hard work.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
              className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 glass-pill rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-ink hover:bg-white/60 transition-all duration-300 border border-ink/10"
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-ink transition-colors duration-300"
              >
                See our work →
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── Full‑width Sliding Stats Row ─── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6, ease: EASE }}
        className="w-full border-t border-ink/5 py-4 sm:py-6 overflow-hidden"
      >
        <motion.div
          className="flex gap-4 sm:gap-6 lg:gap-12 whitespace-nowrap items-center"
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
            <div key={setIndex} className="flex gap-4 sm:gap-6 lg:gap-12 items-center">
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-ink-soft">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-ink-soft" />
                <span>Startup specialists</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-ink-soft">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-ink-soft" />
                <span>From 0 → 1</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-ink-soft">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-ink-soft" />
                <span>Built to scale</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-ink-soft">
                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-ink-soft" />
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
// import { Star, ArrowUpRight, Sparkles, Zap, TrendingUp, Check } from 'lucide-react';
// import { EASE } from './motion-kit';

// export default function Hero() {
//   const line1 = ['We', 'create,', 'you', 'grow'];

//   return (
//     <section id="top" className="relative min-h-screen flex items-start">
//       <div>
//         <div className="mx-auto max-w-7xl w-full px-6 sm:px-8">
//           {/* Centered badge */}
//           <div className="flex justify-center pt-40 pb-20">
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
//               className="inline-flex items-center gap-2 bg-chip text-ink-soft rounded-full px-4 py-1.5 text-[11px] tracking-[0.18em] font-medium rounded-3xl border border-ink/10 bg-gradient-to-b from-ink-soft/40 via-ink-soft/30 to-ink-soft/40"
//             >
//               <motion.span
//                 className="w-1.5 h-1.5 rounded-full bg-white/95"
//                 animate={{ opacity: [1, 0.3, 1] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               />
//               YOUR IDEAS, OUR EXPERTISE
//             </motion.div>
//           </div>

//           {/* Left‑aligned heading and paragraph */}
//           <div className="max-w-4xl">
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-[-0.03em] text-ink leading-[1.02]">
//               <motion.span
//                 initial="hidden"
//                 animate="show"
//                 variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } } }}
//                 className="inline"
//               >
//                 {line1.map((w) => (
//                   <motion.span
//                     key={w}
//                     variants={{
//                       hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
//                       show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
//                     }}
//                     className="inline-block mr-[0.25em]"
//                   >
//                     {w}
//                   </motion.span>
//                 ))}
//                 <motion.span
//                   variants={{
//                     hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
//                     show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
//                   }}
//                   className="font-serif-italic font-normal"
//                 >
//                   – simple
//                 </motion.span>
//                 <br />
//                 <motion.span
//                   variants={{
//                     hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
//                     show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
//                   }}
//                   className="font-serif-italic font-normal inline-block mr-[0.25em]"
//                 >
//                   as that.
//                 </motion.span>
//                 <motion.span
//                   variants={{
//                     hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
//                     show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
//                   }}
//                   className="inline-block"
//                 >
//                   AGENCY
//                 </motion.span>
//               </motion.span>
//             </h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.75, duration: 0.7, ease: EASE }}
//               className="mt-8 text-base sm:text-lg text-ink-soft max-w-xl leading-relaxed"
//             >
//               We focus on turning ideas into impactful digital solutions. From strategy and design to execution, we handle the hard work.
//             </motion.p>

//             {/* ─── CTA Button ─── */}
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
//               className="mt-8 flex flex-wrap gap-4"
//             >
//               <a
//                 href="#contact"
//                 className="group inline-flex items-center gap-2 glass-pill rounded-full px-6 py-3 text-sm font-medium text-ink hover:bg-white/60 transition-all duration-300 border border-ink/10"
//               >
//                 Get in touch
//                 <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
//               </a>
//               <a
//                 href="#portfolio"
//                 className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-ink transition-colors duration-300"
//               >
//                 See our work →
//               </a>
//             </motion.div>


//           </div>
//         </div>

//         {/* ─── Sliding Stats Row ─── */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.0, duration: 0.6, ease: EASE }}
//           className="mt-12 border-t border-ink/5 pt-8 overflow-hidden"
//         >
//           <motion.div
//             className="flex gap-10 whitespace-nowrap items-center"
//             animate={{ x: ['0%', '-50%'] }}
//             transition={{
//               duration: 20,
//               repeat: Infinity,
//               ease: 'linear',
//             }}
//             whileHover={{ animationPlayState: 'paused' }}
//           >
//             {[...Array(2)].map((_, setIndex) => (
//               <div key={setIndex} className="flex gap-10 items-center">
//                 <div className="flex items-center gap-2 text-sm text-ink-soft">
//                   <Sparkles className="w-4 h-4 text-ink-soft" />
//                   <span>Startup specialists</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-ink-soft">
//                   <Zap className="w-4 h-4 text-ink-soft" />
//                   <span>From 0 → 1</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-ink-soft">
//                   <TrendingUp className="w-4 h-4 text-ink-soft" />
//                   <span>Built to scale</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-ink-soft">
//                   <Check className="w-4 h-4 text-ink-soft" />
//                   <span>100% client satisfaction</span>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>

//     </section>
//   );
// }






// 'use client';

// import { motion } from 'framer-motion';
// import { Star } from 'lucide-react';
// import { EASE } from './motion-kit';

// export default function Hero() {
//   const avatars = '/assets/avatars.jpg';
//   const line1 = ['We', 'create,', 'you', 'grow'];
//   const logos = ['miro', 'shopify', 'webflow', 'ClickUp', 'Canva', 'hotjar', 'Voiceflow', 'monday.com', 'Adobe', 'mailerlite'];

//   function LogoChip({ name, highlight = false, index = 0 }) {
//     const isScript = ['Voiceflow', 'Canva'].includes(name);
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 24, scale: 0.96 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ delay: 0.9 + index * 0.05, duration: 0.6, ease: EASE }}
//         whileHover={{ y: -6, scale: 1.03 }}
//         className={`glass-card rounded-2xl h-20 grid place-items-center text-ink text-lg font-semibold cursor-default ${highlight ? 'ring-1 ring-white/80 bg-white/40' : ''}`}
//       >
//         <span className={isScript ? 'font-serif-italic text-2xl text-ink/80' : ''}>{name}</span>
//       </motion.div>
//     );
//   }

//   return (
//     <section id="top" className="relative min-h-screen px-6 sm:px-8 flex items-start">
//       <div className="mx-auto max-w-7xl w-full">
//         {/* Centered badge */}
//         <div className="flex justify-center pt-40 pb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
//             className="inline-flex items-center gap-2 bg-chip text-ink-soft rounded-full px-4 py-1.5 text-[11px] tracking-[0.18em] font-medium rounded-3xl border border-ink/10 bg-gradient-to-b from-ink-soft/40 via-ink-soft/30 to-ink-soft/40"
//           >
//             <motion.span
//               className="w-1.5 h-1.5 rounded-full bg-white/95"
//               animate={{ opacity: [1, 0.3, 1] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             />
//             YOUR IDEAS, OUR EXPERTISE
//           </motion.div>
//         </div>

//         {/* Left‑aligned heading and paragraph */}
//         <div className="max-w-4xl">
//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-[-0.03em] text-ink leading-[1.02]">
//             <motion.span
//               initial="hidden"
//               animate="show"
//               variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } } }}
//               className="inline"
//             >
//               {line1.map((w) => (
//                 <motion.span
//                   key={w}
//                   variants={{
//                     hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
//                     show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
//                   }}
//                   className="inline-block mr-[0.25em]"
//                 >
//                   {w}
//                 </motion.span>
//               ))}
//               <motion.span
//                 variants={{
//                   hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
//                   show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
//                 }}
//                 className="font-serif-italic font-normal"
//               >
//                 – simple
//               </motion.span>
//               <br />
//               <motion.span
//                 variants={{
//                   hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
//                   show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
//                 }}
//                 className="font-serif-italic font-normal inline-block mr-[0.25em]"
//               >
//                 as that.
//               </motion.span>
//               <motion.span
//                 variants={{
//                   hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
//                   show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
//                 }}
//                 className="inline-block"
//               >
//                 AGENCY
//               </motion.span>
//             </motion.span>
//           </h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.75, duration: 0.7, ease: EASE }}
//             className="mt-8 text-base sm:text-lg text-ink-soft max-w-xl leading-relaxed"
//           >
//             We focus on turning ideas into impactful digital solutions. From strategy and design to execution, we handle the hard work.
//           </motion.p>
//         </div>

//         {/* Logos grid – full width */}
//         {/* <div className="mt-16 grid grid-cols-2 sm:grid-cols-5 gap-3">
//           {logos.map((l, i) => (
//             <LogoChip key={l} name={l} highlight={i === 2} index={i} />
//           ))}
//         </div> */}
//       </div>
//     </section>
//   );
// }






// 'use client';

// import { motion } from 'framer-motion';
// import { Star } from 'lucide-react';
// import { EASE } from './motion-kit';

// export default function Hero() {
//   const avatars = '/assets/avatars.jpg';
//   const line1 = ['We', 'create,', 'you', 'grow'];
//   const logos = ['miro', 'shopify', 'webflow', 'ClickUp', 'Canva', 'hotjar', 'Voiceflow', 'monday.com', 'Adobe', 'mailerlite'];

//   function LogoChip({ name, highlight = false, index = 0 }) {
//     const isScript = ['Voiceflow', 'Canva'].includes(name);
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 24, scale: 0.96 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ delay: 0.9 + index * 0.05, duration: 0.6, ease: EASE }}
//         whileHover={{ y: -6, scale: 1.03 }}
//         className={`glass-card rounded-2xl h-20 grid place-items-center text-ink text-lg font-semibold cursor-default ${highlight ? 'ring-1 ring-white/80 bg-white/40' : ''}`}
//       >
//         <span className={isScript ? 'font-serif-italic text-2xl text-ink/80' : ''}>{name}</span>
//       </motion.div>
//     );
//   }

//   return (
//     <section id="top" className="relative min-h-screen px-6 sm:px-8 flex items-start">
//       <div className="mx-auto max-w-7xl w-full">

//         <div className="max-w-3xl pt-40">
//           {/* <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
//             className="inline-flex items-center gap-2 bg-chip text-white rounded-full px-4 py-1.5 text-[11px] tracking-[0.18em] font-medium mb-8"
//           >
//             <motion.span
//               className="w-1.5 h-1.5 rounded-full bg-white"
//               animate={{ opacity: [1, 0.3, 1] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             />
//             $5M+ IN CLIENT REVENUE GENERATED
//           </motion.div> */}

//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-[-0.03em] text-ink leading-[1.02]">
//             <motion.span
//               initial="hidden"
//               animate="show"
//               variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } } }}
//               className="inline"
//             >
//               {line1.map((w) => (
//                 <motion.span
//                   key={w}
//                   variants={{
//                     hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
//                     show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
//                   }}
//                   className="inline-block mr-[0.25em]"
//                 >
//                   {w}
//                 </motion.span>
//               ))}
//               <motion.span
//                 variants={{
//                   hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
//                   show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
//                 }}
//                 className="font-serif-italic font-normal inline-block"
//               >
//                 – simple
//               </motion.span>
//               <br />
//               <motion.span
//                 variants={{
//                   hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
//                   show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
//                 }}
//                 className="font-serif-italic font-normal inline-block mr-[0.25em]"
//               >
//                 as that.
//               </motion.span>
//               <motion.span
//                 variants={{
//                   hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
//                   show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
//                 }}
//                 className="inline-block"
//               >
//                 AGENCY
//               </motion.span>
//             </motion.span>
//           </h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.75, duration: 0.7, ease: EASE }}
//             className="mt-8 text-base sm:text-lg text-ink-soft max-w-xl leading-relaxed"
//           >
//             We focus on turning ideas into impactful digital solutions. From strategy and design to execution, we handle the hard work.
//           </motion.p>
//         </div>

//         <div className="mt-16 grid grid-cols-2 sm:grid-cols-5 gap-3">
//           {logos.map((l, i) => (
//             <LogoChip key={l} name={l} highlight={i === 2} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
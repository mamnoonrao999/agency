'use client';

import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem, fadeUp, EASE } from './motion-kit';
import SectionLabel from './SectionLabel';

const openings = [
  { t: 'Senior Product Designer', l: 'Remote · Full-time', d: 'Design' },
  { t: 'Brand Strategist', l: 'New York · Hybrid', d: 'Strategy' },
  { t: 'Webflow Developer', l: 'Remote · Contract', d: 'Engineering' },
  { t: 'Motion Designer', l: 'Remote · Full-time', d: 'Motion' },
];
const perks = ['Remote-first', 'Equity for everyone', 'Learning budget', '4 weeks PTO'];

export default function Career() {
  return (
    <section id="career" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-16">
          <Reveal className="lg:col-span-6">
            <SectionLabel>Career</SectionLabel>
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.1]">
              Come build <span className="font-serif-italic font-normal">with us.</span>
            </h2>
          </Reveal>
          <Stagger className="lg:col-span-6 space-y-4 text-ink-soft text-base sm:text-lg" stagger={0.08}>
            <StaggerItem>
              <p>We're a tight team that values craft, ownership and clear writing. Remote-first, async by default, with a few weeks in person each year.</p>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-wrap gap-2 pt-2">
                {perks.map((p) => (
                  <motion.span
                    key={p}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className="glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs sm:text-sm text-ink"
                  >
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> {p}
                  </motion.span>
                ))}
              </div>
            </StaggerItem>
          </Stagger>
        </div>
        <Stagger className="glass-panel rounded-3xl overflow-hidden" stagger={0.08}>
          {openings.map((o, i) => (
            <StaggerItem key={o.t} variants={fadeUp}>
              <motion.a
                href="#contact"
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6 lg:p-8 hover:bg-white/30 transition ${i !== 0 ? 'border-t border-white/40' : ''}`}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-6">
                  <span className="text-xs font-medium text-ink-soft uppercase tracking-wider sm:w-24">{o.d}</span>
                  <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-ink tracking-tight">{o.t}</h3>
                </div>
                <div className="flex items-center justify-between sm:justify-end sm:gap-8">
                  <span className="text-xs sm:text-sm text-ink-soft">{o.l}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-ink">
                    Apply <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}// 'use client';

// import { motion } from 'framer-motion';
// import { Check, ArrowUpRight } from 'lucide-react';
// import { Reveal, Stagger, StaggerItem, fadeUp, EASE } from './motion-kit';
// import SectionLabel from './SectionLabel';

// const openings = [
//   { t: 'Senior Product Designer', l: 'Remote · Full-time', d: 'Design' },
//   { t: 'Brand Strategist', l: 'New York · Hybrid', d: 'Strategy' },
//   { t: 'Webflow Developer', l: 'Remote · Contract', d: 'Engineering' },
//   { t: 'Motion Designer', l: 'Remote · Full-time', d: 'Motion' },
// ];
// const perks = ['Remote-first', 'Equity for everyone', 'Learning budget', '4 weeks PTO'];

// export default function Career() {
//   return (
//     <section id="career" className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid lg:grid-cols-12 gap-6 md:gap-12 mb-8 md:mb-16">
//           <Reveal className="lg:col-span-6">
//             <SectionLabel>Career</SectionLabel>
//             <h2 className="mt-3 sm:mt-6 text-2xl sm:text-4xl md:text-5xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.05]">
//               Come build <span className="font-serif-italic font-normal">with us.</span>
//             </h2>
//           </Reveal>
//           <Stagger className="lg:col-span-6 space-y-3 sm:space-y-4 text-ink-soft text-sm sm:text-lg" stagger={0.08}>
//             <StaggerItem>
//               <p>We're a tight team that values craft, ownership and clear writing. Remote-first, async by default, with a few weeks in person each year.</p>
//             </StaggerItem>
//             <StaggerItem>
//               <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1.5 sm:pt-2">
//                 {perks.map((p) => (
//                   <motion.span
//                     key={p}
//                     whileHover={{ y: -3, scale: 1.04 }}
//                     className="glass-pill inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 sm:px-3 sm:py-1.5 text-[8px] sm:text-xs lg:text-sm text-ink"
//                   >
//                     <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" /> {p}
//                   </motion.span>
//                 ))}
//               </div>
//             </StaggerItem>
//           </Stagger>
//         </div>
//         <Stagger className="glass-panel rounded-3xl overflow-hidden" stagger={0.08}>
//           {openings.map((o, i) => (
//             <StaggerItem key={o.t} variants={fadeUp}>
//               <motion.a
//                 href="#contact"
//                 className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 p-3 sm:p-6 lg:p-8 hover:bg-white/30 transition ${i !== 0 ? 'border-t border-white/40' : ''}`}
//                 whileHover={{ x: 4 }}
//                 transition={{ duration: 0.25, ease: EASE }}
//               >
//                 <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
//                   <span className="text-[8px] sm:text-xs font-medium text-ink-soft uppercase tracking-wider sm:w-24">{o.d}</span>
//                   <h3 className="text-sm sm:text-xl lg:text-2xl font-bold text-ink tracking-tight">{o.t}</h3>
//                 </div>
//                 <div className="flex items-center justify-between sm:justify-end sm:gap-8">
//                   <span className="text-[8px] sm:text-sm text-ink-soft">{o.l}</span>
//                   <span className="inline-flex items-center gap-1.5 text-[8px] sm:text-sm font-medium text-ink">
//                     Apply <ArrowUpRight className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
//                   </span>
//                 </div>
//               </motion.a>
//             </StaggerItem>
//           ))}
//         </Stagger>
//       </div>
//     </section>
//   );
// }
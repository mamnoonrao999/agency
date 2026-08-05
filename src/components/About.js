'use client';

import { motion } from 'framer-motion';
import { Reveal, Stagger, StaggerItem, scaleIn, EASE } from './motion-kit';
import SectionLabel from './SectionLabel';

const stats = [
  { v: '120+', l: 'Projects shipped' },
  { v: '$5M+', l: 'Client revenue generated' },
  { v: '40+', l: 'Brands worldwide' },
  { v: '8 yrs', l: 'Average team experience' },
];

function Counter({ value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE }}
      className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight"
    >
      {value}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <SectionLabel>About</SectionLabel>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.1]">
            A studio of <span className="font-serif-italic font-normal">strategists,</span>{' '}
            designers and <span className="font-serif-italic font-normal">builders.</span>
          </h2>
        </Reveal>
        <Stagger className="lg:col-span-7 space-y-4 sm:space-y-6" stagger={0.12}>
          <StaggerItem>
            <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
              GrowthStack Studio is a small, senior team based across three continents. We partner with founders and product teams to ship brands and digital products that move metrics — not just mood boards.
            </p>
          </StaggerItem>
          <StaggerItem>
            <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
              We've spent the last eight years helping startups raise, launch and scale. Every engagement is hands-on with the people who'll actually do the work.
            </p>
          </StaggerItem>
          <StaggerItem variants={scaleIn}>
            <div className="glass-panel rounded-3xl p-5 sm:p-8 grid grid-cols-2 gap-5 sm:gap-6 mt-4 sm:mt-6">
              {stats.map((s) => (
                <motion.div key={s.l} whileHover={{ y: -4 }} className="text-left">
                  <Counter value={s.v} />
                  <div className="text-xs sm:text-sm text-ink-soft mt-1">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}// 'use client';

// import { motion } from 'framer-motion';
// import { Reveal, Stagger, StaggerItem, scaleIn, EASE } from './motion-kit';
// import SectionLabel from './SectionLabel';

// const stats = [
//   { v: '120+', l: 'Projects shipped' },
//   { v: '$5M+', l: 'Client revenue generated' },
//   { v: '40+', l: 'Brands worldwide' },
//   { v: '8 yrs', l: 'Average team experience' },
// ];

// function Counter({ value }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 14 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, ease: EASE }}
//       className="text-xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight"
//     >
//       {value}
//     </motion.div>
//   );
// }

// export default function About() {
//   return (
//     <section id="about" className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-6 md:gap-12 lg:gap-20">
//         <Reveal className="lg:col-span-5">
//           <SectionLabel>About</SectionLabel>
//           <h2 className="mt-3 sm:mt-6 text-2xl sm:text-4xl md:text-5xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.05]">
//             A studio of <span className="font-serif-italic font-normal">strategists,</span><br />
//             designers and <span className="font-serif-italic font-normal">builders.</span>
//           </h2>
//         </Reveal>
//         <Stagger className="lg:col-span-7 space-y-3 sm:space-y-6" stagger={0.12}>
//           <StaggerItem>
//             <p className="text-sm sm:text-lg text-ink-soft leading-relaxed">
//               GrowthStack Studio is a small, senior team based across three continents. We partner with founders and product teams to ship brands and digital products that move metrics — not just mood boards.
//             </p>
//           </StaggerItem>
//           <StaggerItem>
//             <p className="text-sm sm:text-lg text-ink-soft leading-relaxed">
//               We've spent the last eight years helping startups raise, launch and scale. Every engagement is hands-on with the people who'll actually do the work.
//             </p>
//           </StaggerItem>
//           <StaggerItem variants={scaleIn}>
//             <div className="glass-panel rounded-3xl p-4 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-4 sm:mt-6">
//               {stats.map((s) => (
//                 <motion.div key={s.l} whileHover={{ y: -4 }} className="text-center sm:text-left">
//                   <Counter value={s.v} />
//                   <div className="text-[10px] sm:text-sm text-ink-soft mt-0.5 sm:mt-1">{s.l}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </StaggerItem>
//         </Stagger>
//       </div>
//     </section>
//   );
// }
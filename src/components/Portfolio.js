'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem, scaleIn, EASE } from './motion-kit';
import SectionLabel from './SectionLabel';

const works = [
  {
    img: '/work-1.png',
    t: 'holovox.io',
    tag: 'Your Conference Call Assistant',
    link: 'https://holovox.io/',
  },
  {
    img: '/work-6.png',
    t: 'lumiere.one',
    tag: 'Find Your Person',
    link: 'https://lumiere-one-lac.vercel.app/',
  },
  {
    img: '/work-3.png',
    t: 'hashfor.com',
    tag: 'AI Visibilty Engine',
    link: 'https://hashfor-8c2a.vercel.app/',
  },
  {
    img: '/work-4.png',
    t: 'cortex.ai',
    tag: 'Your Business Web Assistant',
    link: 'https://cortex-jade-pi.vercel.app/',
  },
  {
    img: '/work-2.png',
    t: 'deep-trace.com',
    tag: 'AI Content Detection',
    link: 'https://deep-trace-snowy.vercel.app/',
  },
  {
    img: '/work-5.png',
    t: 'cybercity.io',
    tag: 'Secure Your Business',
    link: 'https://vulnerability-dun.vercel.app/',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 md:gap-8 mb-8 md:mb-16">
          <Reveal>
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="mt-3 sm:mt-6 text-2xl sm:text-4xl md:text-5xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.05] max-w-2xl">
              Selected work, <span className="font-serif-italic font-normal">real outcomes.</span>
            </h2>
          </Reveal>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            className="glass-pill inline-flex items-center gap-2 text-ink font-medium px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-[10px] sm:text-sm lg:text-base"
          >
            View all projects <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </motion.a>
        </div>
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6" stagger={0.1}>
          {works.map((w) => (
            <StaggerItem key={w.t} hover variants={scaleIn}>
              <a
                href={w.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl h-full transition hover:shadow-sm"
              >
                {/* Container adapts to image size – no fixed aspect ratio */}
                <div className="overflow-hidden rounded-2xl">
                  <motion.img
                    src={w.img}
                    alt={w.t}
                    loading="lazy"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="flex items-end justify-between p-2">
                  <div>
                    <h3 className="font-bold text-ink tracking-tight">{w.t}</h3>
                    <p className="text-xs sm:text-sm text-ink-soft mt-1">{w.tag}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-ink-soft group-hover:text-ink group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        {/* <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6" stagger={0.1}>
          {works.map((w) => (
            <StaggerItem key={w.t} hover variants={scaleIn}>
              <a
                href={w.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl overflow-hidden transition hover:shadow-sm"
              >
                <div className="overflow-hidden rounded-2xl aspect-video bg-ink/5">
                  <motion.img
                    src={w.img}
                    alt={w.t}
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-start justify-between px-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs sm:text-sm font-semibold text-ink tracking-tight truncate">
                      {w.t}
                    </h3>
                    <p className="text-[8px] sm:text-[10px] lg:text-xs text-ink-soft mt-0.5 truncate">{w.tag}</p>
                  </div>
                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-ink-soft group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition flex-shrink-0 ml-1.5" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger> */}
      </div>
    </section>
  );
}

// 'use client';

// import { motion } from 'framer-motion';
// import { ArrowUpRight } from 'lucide-react';
// import { Reveal, Stagger, StaggerItem, scaleIn, EASE } from './motion-kit';
// import SectionLabel from './SectionLabel';

// // Images are in public/images/ – reference with leading slash
// const works = [
//   {
//     img: '/work-1.png',
//     t: 'holovox.io',
//     tag: 'Your Conference Call Assistant',
//     link: 'https://holovox.io/', // replace with actual URL
//   },
//   {
//     img: '/work-6.png',
//     t: 'lumiere.one',
//     tag: 'Find Your Person',
//     link: 'https://lumiere-one-lac.vercel.app/',
//   },
//   {
//     img: '/work-3.png',
//     t: 'hashfor.com',
//     tag: 'AI Visibilty Engine',
//     link: 'https://hashfor-8c2a.vercel.app/',
//   },
//   {
//     img: '/work-4.png',
//     t: 'cortex.ai',
//     tag: 'Your Business Web Assistant',
//     link: 'https://cortex-jade-pi.vercel.app/',
//   },
//   {
//     img: '/work-2.png',
//     t: 'deep-trace.com',
//     tag: 'AI Content Detection',
//     link: 'https://deep-trace-snowy.vercel.app/',
//   },
//   {
//     img: '/work-5.png',
//     t: 'cybercity.io',
//     tag: 'Secure Your Business',
//     link: 'https://vulnerability-dun.vercel.app/', // replace with actual URL
//   },
// ];

// export default function Portfolio() {
//   return (
//     <section id="portfolio" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 md:gap-8 mb-12 md:mb-16">
//           <Reveal>
//             <SectionLabel>Portfolio</SectionLabel>
//             <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.05] max-w-2xl">
//               Selected work, <span className="font-serif-italic font-normal">real outcomes.</span>
//             </h2>
//           </Reveal>
//           <motion.a
//             href="#"
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.04 }}
//             className="glass-pill inline-flex items-center gap-2 text-ink font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base"
//           >
//             View all projects <ArrowUpRight className="w-4 h-4" />
//           </motion.a>
//         </div>
//         <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6" stagger={0.1}>
//           {works.map((w) => (
//             <StaggerItem key={w.t} hover variants={scaleIn}>
//               <a
//                 href={w.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group block rounded-3xl h-full transition hover:shadow-sm"
//               >
//                 {/* Container adapts to image size – no fixed aspect ratio */}
//                 <div className="overflow-hidden rounded-2xl">
//                   <motion.img
//                     src={w.img}
//                     alt={w.t}
//                     loading="lazy"
//                     whileHover={{ scale: 1.06 }}
//                     transition={{ duration: 0.7, ease: EASE }}
//                     className="w-full h-auto object-contain"
//                   />
//                 </div>
//                 <div className="flex items-end justify-between p-2">
//                   <div>
//                     <h3 className="font-bold text-ink tracking-tight">{w.t}</h3>
//                     <p className="text-xs sm:text-sm text-ink-soft mt-1">{w.tag}</p>
//                   </div>
//                   <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-ink-soft group-hover:text-ink group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
//                 </div>
//               </a>
//             </StaggerItem>
//           ))}
//         </Stagger>
//       </div>
//     </section>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem, scaleIn, EASE } from './motion-kit';
import SectionLabel from './SectionLabel';

// Images are in public/images/ – reference with leading slash
const works = [
  {
    img: '/work-1.png',
    t: 'holovox.io',
    tag: 'Your Conference Call Assistant',
    link: 'https://holovox.io/', // replace with actual URL
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
    link: 'https://vulnerability-dun.vercel.app/', // replace with actual URL
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          <Reveal>
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.05] max-w-2xl">
              Selected work, <span className="font-serif-italic font-normal">real outcomes.</span>
            </h2>
          </Reveal>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            className="glass-pill inline-flex items-center gap-2 text-ink font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base"
          >
            View all projects <ArrowUpRight className="w-4 h-4" />
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
      </div>
    </section>
  );
}


// 'use client';

// import { motion } from 'framer-motion';
// import { ArrowUpRight } from 'lucide-react';
// import { Reveal, Stagger, StaggerItem, scaleIn, EASE } from './motion-kit';
// import SectionLabel from './SectionLabel';

// const work1 = '/assets/work-1.jpg';
// const work2 = '/assets/work-2.jpg';
// const work3 = '/assets/work-3.jpg';
// const work4 = '/assets/work-4.jpg';
// const works = [
//   { img: work1, t: 'Nimble — SaaS rebrand', tag: 'Brand · Web' },
//   { img: work2, t: 'Northkin Stationery', tag: 'Identity · Print' },
//   { img: work3, t: 'Aurora Mobile App', tag: 'Product · UI/UX' },
//   { img: work4, t: 'Petal Skincare', tag: 'Packaging · Web' },
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
//               <a href="#" className="group block glass-card rounded-3xl p-3 h-full">
//                 <div className="overflow-hidden rounded-2xl aspect-[4/3]">
//                   <motion.img
//                     src={w.img}
//                     alt={w.t}
//                     width={1024}
//                     height={768}
//                     loading="lazy"
//                     whileHover={{ scale: 1.08 }}
//                     transition={{ duration: 0.7, ease: EASE }}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="flex items-end justify-between px-2 sm:px-3 py-3 sm:py-4">
//                   <div>
//                     <h3 className="text-base sm:text-xl font-bold text-ink tracking-tight">{w.t}</h3>
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
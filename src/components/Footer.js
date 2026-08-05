'use client';

import { motion } from 'framer-motion';
import { Reveal, Stagger, StaggerItem, fadeIn } from './motion-kit';
import Logo from './Logo';

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const TwitterIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const DribbbleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8.56 2.75c-1.8 1.4-3.2 3.6-3.8 6.2" />
    <path d="M21.25 8.5c-1.7.5-3.6.9-5.6 1.2" />
    <path d="M2.75 14.5c2.5.8 5.1 1.4 7.8 1.8" />
    <path d="M15.4 2.8c-1.5 1.8-2.6 4.2-3.2 6.8" />
    <path d="M18.2 18.2c-2.1-1.5-4.5-2.6-7.2-3.2" />
    <path d="M5.8 21.5c1.9-1.5 4.1-2.6 6.6-3.2" />
  </svg>
);

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Service', href: '#service' },
  { label: 'Career', href: '#career' },
  { label: 'Contact', href: '#contact' },
];
const legal = ['Privacy', 'Terms', 'Cookies'];
const social = [
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: LinkedinIcon, label: 'LinkedIn' },
  { Icon: DribbbleIcon, label: 'Dribbble' },
];

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-10">
      <Stagger className="mx-auto max-w-7xl pt-8 sm:pt-12 border-t border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8" stagger={0.1}>
        <StaggerItem className="sm:col-span-2 lg:col-span-5">
          <Logo />
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink-soft max-w-sm">A creative agency turning ideas into impactful digital products.</p>
        </StaggerItem>
        <StaggerItem className="sm:col-span-2 lg:col-span-4">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 text-sm">
            <div>
              <div className="font-semibold text-ink mb-2 sm:mb-3">Studio</div>
              <ul className="space-y-2 text-ink-soft">
                {nav.map((n) => (
                  <motion.li key={n.href} whileHover={{ x: 4 }}>
                    <a href={n.href} className="hover:text-ink text-sm">{n.label}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-semibold text-ink mb-2 sm:mb-3">Legal</div>
              <ul className="space-y-2 text-ink-soft">
                {legal.map((l) => (
                  <motion.li key={l} whileHover={{ x: 4 }}>
                    <a href="#" className="hover:text-ink text-sm">{l}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </StaggerItem>
        <StaggerItem className="sm:col-span-2 lg:col-span-3">
          <div className="font-semibold text-ink mb-2 sm:mb-3 text-sm">Follow</div>
          <div className="flex gap-2 sm:gap-3">
            {social.map(({ Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                whileHover={{ y: -4, rotate: -6, scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border grid place-items-center text-ink hover:bg-chip hover:text-white hover:border-chip transition"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </StaggerItem>
      </Stagger>
      <Reveal variants={fadeIn} className="mx-auto max-w-7xl mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-soft">
        <p>© {new Date().getFullYear()} GrowthStack Studio. All rights reserved.</p>
        <p>Crafted with care in California.</p>
      </Reveal>
    </footer>
  );
}// 'use client';

// import { motion } from 'framer-motion';
// import { Reveal, Stagger, StaggerItem, fadeIn } from './motion-kit';
// import Logo from './Logo';

// const InstagramIcon = ({ className }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//   </svg>
// );
// const TwitterIcon = ({ className }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//   </svg>
// );
// const LinkedinIcon = ({ className }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//     <rect x="2" y="9" width="4" height="12" />
//     <circle cx="4" cy="4" r="2" />
//   </svg>
// );
// const DribbbleIcon = ({ className }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <circle cx="12" cy="12" r="10" />
//     <path d="M8.56 2.75c-1.8 1.4-3.2 3.6-3.8 6.2" />
//     <path d="M21.25 8.5c-1.7.5-3.6.9-5.6 1.2" />
//     <path d="M2.75 14.5c2.5.8 5.1 1.4 7.8 1.8" />
//     <path d="M15.4 2.8c-1.5 1.8-2.6 4.2-3.2 6.8" />
//     <path d="M18.2 18.2c-2.1-1.5-4.5-2.6-7.2-3.2" />
//     <path d="M5.8 21.5c1.9-1.5 4.1-2.6 6.6-3.2" />
//   </svg>
// );

// const nav = [
//   { label: 'About', href: '#about' },
//   { label: 'Portfolio', href: '#portfolio' },
//   { label: 'Service', href: '#service' },
//   { label: 'Career', href: '#career' },
//   { label: 'Contact', href: '#contact' },
// ];
// const legal = ['Privacy', 'Terms', 'Cookies'];
// const social = [
//   { Icon: InstagramIcon, label: 'Instagram' },
//   { Icon: TwitterIcon, label: 'Twitter' },
//   { Icon: LinkedinIcon, label: 'LinkedIn' },
//   { Icon: DribbbleIcon, label: 'Dribbble' },
// ];

// export default function Footer() {
//   return (
//     <footer className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-10">
//       <Stagger className="mx-auto max-w-7xl pt-6 sm:pt-12 border-t border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-8" stagger={0.1}>
//         <StaggerItem className="sm:col-span-2 lg:col-span-5">
//           <Logo />
//           <p className="mt-2 sm:mt-4 text-xs sm:text-base text-ink-soft max-w-sm">A creative agency turning ideas into impactful digital products.</p>
//         </StaggerItem>
//         <StaggerItem className="sm:col-span-2 lg:col-span-4">
//           <div className="grid grid-cols-2 gap-4 sm:gap-8 text-xs sm:text-sm">
//             <div>
//               <div className="font-semibold text-ink mb-1.5 sm:mb-3">Studio</div>
//               <ul className="space-y-1.5 sm:space-y-2 text-ink-soft">
//                 {nav.map((n) => (
//                   <motion.li key={n.href} whileHover={{ x: 4 }}>
//                     <a href={n.href} className="hover:text-ink text-[10px] sm:text-sm">{n.label}</a>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <div className="font-semibold text-ink mb-1.5 sm:mb-3">Legal</div>
//               <ul className="space-y-1.5 sm:space-y-2 text-ink-soft">
//                 {legal.map((l) => (
//                   <motion.li key={l} whileHover={{ x: 4 }}>
//                     <a href="#" className="hover:text-ink text-[10px] sm:text-sm">{l}</a>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </StaggerItem>
//         <StaggerItem className="sm:col-span-2 lg:col-span-3">
//           <div className="font-semibold text-ink mb-1.5 sm:mb-3 text-xs sm:text-sm">Follow</div>
//           <div className="flex gap-1.5 sm:gap-3">
//             {social.map(({ Icon, label }) => (
//               <motion.a
//                 key={label}
//                 href="#"
//                 aria-label={label}
//                 whileHover={{ y: -4, rotate: -6, scale: 1.08 }}
//                 whileTap={{ scale: 0.94 }}
//                 className="w-6 h-6 sm:w-10 sm:h-10 rounded-full border border-border grid place-items-center text-ink hover:bg-chip hover:text-white hover:border-chip transition"
//               >
//                 <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
//               </motion.a>
//             ))}
//           </div>
//         </StaggerItem>
//       </Stagger>
//       <Reveal variants={fadeIn} className="mx-auto max-w-7xl mt-4 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[8px] sm:text-xs text-ink-soft">
//         <p>© {new Date().getFullYear()} GrowthStack Studio. All rights reserved.</p>
//         <p>Crafted with care in California.</p>
//       </Reveal>
//     </footer>
//   );
// }
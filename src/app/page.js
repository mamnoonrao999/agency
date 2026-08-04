'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from '@/components/ThemeProvider';
import ScrollProgress from '@/components/ScrollProgress';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Career from '@/components/Career';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <ThemeProvider>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen relative z-10"
        >
          <ScrollProgress />
          <Nav />
          <Hero />
          {/* <Marquee /> */}
          <About />
          <Services />
          <Portfolio />
          <Process />
          <Testimonials />
          <Career />
          <Contact />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

















// 'use client';

// import { useRef, createContext, useContext, useEffect, useState } from 'react';
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
//   useReducedMotion,
//   AnimatePresence,
// } from 'framer-motion';
// import {
//   Star,
//   ArrowUpRight,
//   Check,
//   Mail,
//   Phone,
//   MapPin,
// } from 'lucide-react';

// // ─── Motion Kit ──────────────────────────────────────────────────────
// const EASE = [0.22, 0.7, 0.2, 1];

// const fadeUp = {
//   hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
//   show: {
//     opacity: 1,
//     y: 0,
//     filter: 'blur(0px)',
//     transition: { duration: 0.7, ease: EASE },
//   },
// };

// const fadeIn = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.94, y: 18 },
//   show: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: { duration: 0.65, ease: EASE },
//   },
// };

// const container = (stagger = 0.09, delay = 0) => ({
//   hidden: {},
//   show: { transition: { staggerChildren: stagger, delayChildren: delay } },
// });

// function Reveal({ children, className, delay = 0, variants = fadeUp, as = 'div' }) {
//   const reduced = useReducedMotion();
//   const Tag = motion[as];
//   return (
//     <Tag
//       className={className}
//       initial={reduced ? undefined : 'hidden'}
//       whileInView="show"
//       viewport={{ once: true, amount: 0.2, margin: '0px 0px -8% 0px' }}
//       variants={variants}
//       transition={{ delay }}
//     >
//       {children}
//     </Tag>
//   );
// }

// function Stagger({ children, className, stagger = 0.09, delay = 0 }) {
//   const reduced = useReducedMotion();
//   return (
//     <motion.div
//       className={className}
//       initial={reduced ? undefined : 'hidden'}
//       whileInView="show"
//       viewport={{ once: true, amount: 0.15 }}
//       variants={container(stagger, delay)}
//     >
//       {children}
//     </motion.div>
//   );
// }

// function StaggerItem({ children, className, variants = fadeUp, hover = false }) {
//   return (
//     <motion.div
//       className={className}
//       variants={variants}
//       whileHover={hover ? { y: -6, transition: { duration: 0.25, ease: EASE } } : undefined}
//     >
//       {children}
//     </motion.div>
//   );
// }

// // ─── Theme Provider ──────────────────────────────────────────────────
// const ThemeContext = createContext();

// function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     const stored = localStorage.getItem('theme');
//     const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     const initial = stored || (systemPrefersDark ? 'dark' : 'light');
//     setTheme(initial);
//   }, []);

//   useEffect(() => {
//     const root = document.documentElement;
//     if (theme === 'dark') root.classList.add('dark');
//     else root.classList.remove('dark');
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// function useTheme() {
//   const context = useContext(ThemeContext);
//   if (!context) throw new Error('useTheme must be used within a ThemeProvider');
//   return context;
// }

// // ─── Theme Toggle ────────────────────────────────────────────────────
// const SunIcon = ({ className }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <circle cx="12" cy="12" r="5" />
//     <line x1="12" y1="1" x2="12" y2="3" />
//     <line x1="12" y1="21" x2="12" y2="23" />
//     <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
//     <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
//     <line x1="1" y1="12" x2="3" y2="12" />
//     <line x1="21" y1="12" x2="23" y2="12" />
//     <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
//     <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
//   </svg>
// );

// const MoonIcon = ({ className }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
//   </svg>
// );

// function ThemeToggle() {
//   const { theme, toggleTheme } = useTheme();
//   return (
//     <motion.button
//       onClick={toggleTheme}
//       whileHover={{ scale: 1.1, rotate: theme === 'light' ? 20 : -20 }}
//       whileTap={{ scale: 0.9 }}
//       className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-ink hover:bg-white/60 transition"
//       aria-label="Toggle theme"
//     >
//       {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
//     </motion.button>
//   );
// }

// // ─── Logo ────────────────────────────────────────────────────────────
// function Logo() {
//   return (
//     <a href="#top" className="text-2xl font-extrabold tracking-tight text-ink">
//       Elev<span className="font-serif-italic font-normal">are</span>
//     </a>
//   );
// }

// // ─── Section Label ───────────────────────────────────────────────────
// function SectionLabel({ children }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true, amount: 0.6 }}
//       transition={{ duration: 0.5, ease: EASE }}
//       className="inline-flex items-center gap-2 bg-chip text-white rounded-full px-4 py-1.5 text-[11px] tracking-[0.18em] font-medium"
//     >
//       <motion.span
//         className="w-1.5 h-1.5 rounded-full bg-white"
//         animate={{ opacity: [1, 0.25, 1], scale: [1, 0.75, 1] }}
//         transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
//       />
//       {String(children).toUpperCase()}
//     </motion.div>
//   );
// }

// // ─── Navigation ──────────────────────────────────────────────────────
// function Nav() {
//   const nav = [
//     { label: 'About', href: '#about' },
//     { label: 'Portfolio', href: '#portfolio' },
//     { label: 'Service', href: '#service' },
//     { label: 'Career', href: '#career' },
//     { label: 'Contact', href: '#contact' },
//   ];

//   return (
//     <motion.header
//       initial={{ y: -40, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
//       className="fixed top-0 inset-x-0 z-50 px-4 sm:px-8 pt-5"
//     >
//       <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
//         <ThemeToggle />
//         <motion.div
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.97 }}
//           className="glass-pill rounded-full px-5 py-2.5 flex items-center"
//         >
//           <Logo />
//         </motion.div>
//         <nav className="hidden lg:flex glass-pill rounded-full px-3 py-2.5">
//           <ul className="flex items-center gap-1 text-sm font-medium text-ink">
//             {nav.map((n, i) => (
//               <motion.li
//                 key={n.href}
//                 initial={{ opacity: 0, y: -8 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.25 + i * 0.06, duration: 0.5, ease: EASE }}
//               >
//                 <a href={n.href} className="relative px-4 py-2 rounded-full hover:bg-white/60 transition inline-block">
//                   {n.label}
//                 </a>
//               </motion.li>
//             ))}
//           </ul>
//         </nav>
//         <motion.a
//           href="#contact"
//           whileHover={{ scale: 1.04 }}
//           whileTap={{ scale: 0.96 }}
//           className="glass-pill rounded-full pl-5 pr-1.5 py-1.5 flex items-center gap-3 text-sm font-medium text-ink hover:bg-white/80 transition group"
//         >
//           Get started
//           <span className="grid place-items-center w-9 h-9 rounded-full bg-ink text-white overflow-hidden">
//             <motion.span initial={false} whileHover={{ rotate: 45 }} className="grid place-items-center">
//               <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </motion.span>
//           </span>
//         </motion.a>
//       </div>
//     </motion.header>
//   );
// }

// // ─── Hero ─────────────────────────────────────────────────────────────
// // Now uses the SAME background as every other section – no image, just body gradient
// // ─── Hero ─────────────────────────────────────────────────────────────
// // Now uses the SAME background as every other section – no image, no overlay, no box
// function Hero() {
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
//     <section id="top" className="relative min-h-screen px-6 sm:px-8 pt-44 pb-24 flex items-start">
//       <div className="mx-auto max-w-7xl w-full">
//         {/* Content – same as before, no wrapper box */}
//         <div className="flex justify-end mb-12">
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.55, duration: 0.7, ease: EASE }}
//             whileHover={{ y: -4 }}
//             className="glass-pill rounded-2xl px-4 py-3 flex items-center gap-3"
//           >
//             <img src={avatars} alt="Happy clients" width={64} height={28} className="h-7 w-16 object-cover rounded-full" />
//             <div className="text-right">
//               <div className="flex items-center justify-end gap-1 text-sm font-semibold text-ink">
//                 4,9/5
//                 <motion.span animate={{ rotate: [0, 18, -18, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
//                   <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
//                 </motion.span>
//               </div>
//               <div className="text-xs text-ink-soft">100+ Happy clients worldwide</div>
//             </div>
//           </motion.div>
//         </div>

//         <div className="max-w-3xl">
//           <motion.div
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
//           </motion.div>

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

//         <div className="mt-24 grid grid-cols-2 sm:grid-cols-5 gap-3">
//           {logos.map((l, i) => (
//             <LogoChip key={l} name={l} highlight={i === 2} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── Marquee ──────────────────────────────────────────────────────────
// function Marquee() {
//   const tags = ['Brand Strategy', 'Web Design', 'Product UI/UX', 'Visual Identity', 'Motion & 3D', 'SEO & Growth'];
//   const items = [...tags, ...tags, ...tags, ...tags];
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       className="py-16 overflow-hidden"
//     >
//       <motion.div
//         className="flex gap-6 whitespace-nowrap items-center"
//         animate={{ x: ['0%', '-50%'] }}
//         transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
//       >
//         {items.map((t, i) => (
//           <motion.span
//             key={i}
//             whileHover={{ scale: 1.06, y: -4 }}
//             className="glass-pill rounded-full px-8 py-4 text-xl font-semibold text-ink tracking-tight inline-flex items-center gap-3 cursor-default"
//           >
//             <span className="w-2 h-2 rounded-full bg-ink/40" />
//             {t}
//           </motion.span>
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// }

// // ─── About ────────────────────────────────────────────────────────────
// function About() {
//   const stats = [
//     { v: '120+', l: 'Projects shipped' },
//     { v: '$5M+', l: 'Client revenue generated' },
//     { v: '40+', l: 'Brands worldwide' },
//     { v: '8 yrs', l: 'Average team experience' },
//   ];

//   function Counter({ value }) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 14 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, ease: EASE }}
//         className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight"
//       >
//         {value}
//       </motion.div>
//     );
//   }

//   return (
//     <section id="about" className="py-28 px-6 sm:px-8">
//       <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-20">
//         <Reveal className="lg:col-span-5">
//           <SectionLabel>About</SectionLabel>
//           <h2 className="mt-6 text-4xl sm:text-5xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.05]">
//             A studio of <span className="font-serif-italic font-normal">strategists,</span><br />
//             designers and <span className="font-serif-italic font-normal">builders.</span>
//           </h2>
//         </Reveal>
//         <Stagger className="lg:col-span-7 space-y-6" stagger={0.12}>
//           <StaggerItem>
//             <p className="text-lg text-ink-soft leading-relaxed">
//               GrowthStack Studio is a small, senior team based across three continents. We partner with founders and product teams to ship brands and digital products that move metrics — not just mood boards.
//             </p>
//           </StaggerItem>
//           <StaggerItem>
//             <p className="text-lg text-ink-soft leading-relaxed">
//               We've spent the last eight years helping startups raise, launch and scale. Every engagement is hands-on with the people who'll actually do the work.
//             </p>
//           </StaggerItem>
//           <StaggerItem variants={scaleIn}>
//             <div className="glass-panel rounded-3xl p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
//               {stats.map((s) => (
//                 <motion.div key={s.l} whileHover={{ y: -4 }}>
//                   <Counter value={s.v} />
//                   <div className="text-sm text-ink-soft mt-1">{s.l}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </StaggerItem>
//         </Stagger>
//       </div>
//     </section>
//   );
// }

// // ─── Services ────────────────────────────────────────────────────────
// function Services() {
//   const services = [
//     { n: '01', t: 'Brand Strategy', d: 'Positioning, messaging and identity systems that give your brand a sharp, lasting point of view.' },
//     { n: '02', t: 'Web Design & Development', d: 'High-craft websites engineered for speed, conversion and a memorable first impression.' },
//     { n: '03', t: 'Product & UI/UX', d: 'End-to-end product design — research, flows and pixel-perfect interfaces that ship.' },
//     { n: '04', t: 'Visual Identity', d: 'Logos, type systems and art direction that translate strategy into something you can feel.' },
//     { n: '05', t: 'Motion & 3D', d: 'Animation, micro-interactions and 3D moments that bring your interfaces to life.' },
//     { n: '06', t: 'SEO & Growth', d: 'Technical SEO, content frameworks and growth loops that compound over time.' },
//   ];

//   return (
//     <section id="service" className="py-28 px-6 sm:px-8">
//       <div className="mx-auto max-w-7xl">
//         <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
//           <Reveal>
//             <SectionLabel>Services</SectionLabel>
//             <h2 className="mt-6 text-4xl sm:text-5xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.05] max-w-2xl">
//               Everything you need <span className="font-serif-italic font-normal">to launch</span> and grow.
//             </h2>
//           </Reveal>
//           <Reveal delay={0.15} variants={fadeIn}>
//             <p className="text-ink-soft max-w-md">Six disciplines, one accountable team. Engage us for a single sprint or a full retainer.</p>
//           </Reveal>
//         </div>
//         <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.08}>
//           {services.map((s) => (
//             <StaggerItem key={s.n} hover variants={scaleIn}>
//               <div className="glass-card rounded-3xl p-8 group h-full hover:bg-white/55 transition">
//                 <div className="flex items-start justify-between mb-10">
//                   <span className="text-sm font-mono text-ink-soft">{s.n}</span>
//                   <ArrowUpRight className="w-5 h-5 text-ink-soft group-hover:text-ink group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-ink tracking-tight mb-3">{s.t}</h3>
//                 <p className="text-ink-soft leading-relaxed">{s.d}</p>
//               </div>
//             </StaggerItem>
//           ))}
//         </Stagger>
//       </div>
//     </section>
//   );
// }

// // ─── Portfolio ───────────────────────────────────────────────────────
// function Portfolio() {
//   const work1 = '/assets/work-1.jpg';
//   const work2 = '/assets/work-2.jpg';
//   const work3 = '/assets/work-3.jpg';
//   const work4 = '/assets/work-4.jpg';
//   const works = [
//     { img: work1, t: 'Nimble — SaaS rebrand', tag: 'Brand · Web' },
//     { img: work2, t: 'Northkin Stationery', tag: 'Identity · Print' },
//     { img: work3, t: 'Aurora Mobile App', tag: 'Product · UI/UX' },
//     { img: work4, t: 'Petal Skincare', tag: 'Packaging · Web' },
//   ];

//   return (
//     <section id="portfolio" className="py-28 px-6 sm:px-8">
//       <div className="mx-auto max-w-7xl">
//         <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
//           <Reveal>
//             <SectionLabel>Portfolio</SectionLabel>
//             <h2 className="mt-6 text-4xl sm:text-5xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.05] max-w-2xl">
//               Selected work, <span className="font-serif-italic font-normal">real outcomes.</span>
//             </h2>
//           </Reveal>
//           <motion.a
//             href="#"
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.04, gap: '0.9rem' }}
//             className="glass-pill inline-flex items-center gap-2 text-ink font-medium px-5 py-2.5 rounded-full"
//           >
//             View all projects <ArrowUpRight className="w-4 h-4" />
//           </motion.a>
//         </div>
//         <Stagger className="grid md:grid-cols-3 gap-6" stagger={0.1}>
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
//                 <div className="flex items-end justify-between px-3 py-4">
//                   <div>
//                     <h3 className="text-xl font-bold text-ink tracking-tight">{w.t}</h3>
//                     <p className="text-sm text-ink-soft mt-1">{w.tag}</p>
//                   </div>
//                   <ArrowUpRight className="w-5 h-5 text-ink-soft group-hover:text-ink group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
//                 </div>
//               </a>
//             </StaggerItem>
//           ))}
//         </Stagger>
//       </div>
//     </section>
//   );
// }

// // ─── Process ─────────────────────────────────────────────────────────
// function Process() {
//   const steps = [
//     { n: '01', t: 'Discover', d: 'We dig into your business, audience and competitive landscape to find the angle nobody else is using.' },
//     { n: '02', t: 'Define', d: 'Strategy, positioning and a single page brief that everyone — including future hires — can rally around.' },
//     { n: '03', t: 'Design', d: 'Concepts, identity systems and interfaces refined in tight loops until every detail earns its place.' },
//     { n: '04', t: 'Deliver', d: 'We ship, measure and iterate. Then we hand over a system your team can actually maintain.' },
//   ];

//   return (
//     <section className="py-28 px-6 sm:px-8">
//       <div className="mx-auto max-w-7xl">
//         <Reveal variants={scaleIn} className="glass-dark rounded-[2rem] p-8 sm:p-16 text-white">
//           <SectionLabel>Process</SectionLabel>
//           <h2 className="mt-6 text-4xl sm:text-5xl font-serif font-normal tracking-[-0.02em] leading-[1.05] max-w-3xl">
//             A simple <span className="font-serif-italic font-normal text-white/90">four-step</span> way of working.
//           </h2>
//           <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16" stagger={0.12}>
//             {steps.map((s) => (
//               <StaggerItem key={s.n}>
//                 <div className="relative pt-6">
//                   <motion.span
//                     className="absolute top-0 left-0 h-px bg-white/40 block"
//                     initial={{ width: '0%' }}
//                     whileInView={{ width: '100%' }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.9, ease: EASE }}
//                   />
//                   <div className="text-sm font-mono text-white/50 mb-6">{s.n}</div>
//                   <h3 className="text-2xl font-bold tracking-tight mb-3">{s.t}</h3>
//                   <p className="text-white/70 leading-relaxed">{s.d}</p>
//                 </div>
//               </StaggerItem>
//             ))}
//           </Stagger>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// // ─── Testimonials ────────────────────────────────────────────────────
// function Testimonials() {
//   const testimonials = [
//     { q: "GrowthStack Studio didn't just redesign our brand — they rebuilt how customers feel about us. Conversions doubled in a quarter.", a: 'Sarah Chen', r: 'CEO, Northkin' },
//     { q: 'The most thoughtful, fast and detail-obsessed team we\'ve worked with. Every deliverable felt finished.', a: 'Marcus Rivera', r: 'Head of Product, Aurora' },
//     { q: 'They translated a messy vision into a clear brand and a website that actually performs. Worth every cent.', a: 'Lina Park', r: 'Founder, Petal' },
//   ];

//   return (
//     <section className="py-28 px-6 sm:px-8">
//       <div className="mx-auto max-w-7xl">
//         <Reveal>
//           <SectionLabel>Testimonials</SectionLabel>
//           <h2 className="mt-6 text-4xl sm:text-5xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.05] max-w-3xl">
//             Loved by the <span className="font-serif-italic font-normal">founders</span> we work with.
//           </h2>
//         </Reveal>
//         <Stagger className="grid md:grid-cols-3 gap-6 mt-16" stagger={0.12}>
//           {testimonials.map((t) => (
//             <StaggerItem key={t.a} hover variants={scaleIn}>
//               <figure className="glass-card rounded-3xl p-8 flex flex-col gap-6 h-full">
//                 <div className="flex gap-1">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <motion.span
//                       key={i}
//                       initial={{ opacity: 0, scale: 0.4 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.15 + i * 0.08, duration: 0.4, ease: EASE }}
//                     >
//                       <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
//                     </motion.span>
//                   ))}
//                 </div>
//                 <blockquote className="text-lg text-ink leading-relaxed flex-1">"{t.q}"</blockquote>
//                 <figcaption>
//                   <div className="font-semibold text-ink">{t.a}</div>
//                   <div className="text-sm text-ink-soft">{t.r}</div>
//                 </figcaption>
//               </figure>
//             </StaggerItem>
//           ))}
//         </Stagger>
//       </div>
//     </section>
//   );
// }

// // ─── Career ──────────────────────────────────────────────────────────
// function Career() {
//   const openings = [
//     { t: 'Senior Product Designer', l: 'Remote · Full-time', d: 'Design' },
//     { t: 'Brand Strategist', l: 'New York · Hybrid', d: 'Strategy' },
//     { t: 'Webflow Developer', l: 'Remote · Contract', d: 'Engineering' },
//     { t: 'Motion Designer', l: 'Remote · Full-time', d: 'Motion' },
//   ];
//   const perks = ['Remote-first', 'Equity for everyone', 'Learning budget', '4 weeks PTO'];

//   return (
//     <section id="career" className="py-28 px-6 sm:px-8">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid lg:grid-cols-12 gap-12 mb-16">
//           <Reveal className="lg:col-span-6">
//             <SectionLabel>Career</SectionLabel>
//             <h2 className="mt-6 text-4xl sm:text-5xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.05]">
//               Come build <span className="font-serif-italic font-normal">with us.</span>
//             </h2>
//           </Reveal>
//           <Stagger className="lg:col-span-6 space-y-4 text-ink-soft text-lg" stagger={0.08}>
//             <StaggerItem>
//               <p>We're a tight team that values craft, ownership and clear writing. Remote-first, async by default, with a few weeks in person each year.</p>
//             </StaggerItem>
//             <StaggerItem>
//               <div className="flex flex-wrap gap-2 pt-2">
//                 {perks.map((p) => (
//                   <motion.span
//                     key={p}
//                     whileHover={{ y: -3, scale: 1.04 }}
//                     className="glass-pill inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-ink"
//                   >
//                     <Check className="w-3.5 h-3.5" /> {p}
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
//                 className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 hover:bg-white/30 transition ${i !== 0 ? 'border-t border-white/40' : ''}`}
//                 whileHover={{ x: 8 }}
//                 transition={{ duration: 0.25, ease: EASE }}
//               >
//                 <div className="flex items-center gap-6">
//                   <span className="text-xs font-medium text-ink-soft uppercase tracking-wider w-24">{o.d}</span>
//                   <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight">{o.t}</h3>
//                 </div>
//                 <div className="flex items-center justify-between sm:gap-8">
//                   <span className="text-ink-soft text-sm">{o.l}</span>
//                   <span className="inline-flex items-center gap-2 text-sm font-medium text-ink">
//                     Apply <ArrowUpRight className="w-4 h-4" />
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

// // ─── Contact ─────────────────────────────────────────────────────────
// function Contact() {
//   function Field({ label, ...rest }) {
//     return (
//       <motion.div variants={fadeUp}>
//         <label className="text-xs font-medium text-white/60 uppercase tracking-wider">{label}</label>
//         <input
//           {...rest}
//           className="mt-2 w-full bg-transparent border-b border-white/20 py-2 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
//         />
//       </motion.div>
//     );
//   }

//   return (
//     <section id="contact" className="py-28 px-6 sm:px-8">
//       <div className="mx-auto max-w-7xl">
//         <Reveal variants={scaleIn} className="glass-dark rounded-[2rem] text-white p-8 sm:p-16 relative overflow-hidden">
//           <motion.div
//             className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-sky-400/40 to-pink-300/30 blur-3xl"
//             animate={{ scale: [1, 1.15, 1], x: [0, -30, 0], y: [0, 20, 0] }}
//             transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
//           />
//           <div className="relative grid lg:grid-cols-2 gap-12">
//             <Stagger stagger={0.1}>
//               <StaggerItem>
//                 <SectionLabel>Contact</SectionLabel>
//               </StaggerItem>
//               <StaggerItem>
//                 <h2 className="mt-6 text-4xl sm:text-6xl font-serif font-normal tracking-[-0.02em] leading-[1.02]">
//                   Let's build <span className="font-serif-italic font-normal">something</span> worth talking about.
//                 </h2>
//               </StaggerItem>
//               <StaggerItem>
//                 <p className="text-white/70 mt-6 max-w-md">Tell us about your project. We reply within one business day.</p>
//               </StaggerItem>
//               <StaggerItem>
//                 <ul className="mt-10 space-y-4 text-white/80">
//                   {[
//                     { I: Mail, t: 'hello@GrowthStack Studio.studio' },
//                     { I: Phone, t: '+1 (415) 555-0119' },
//                     { I: MapPin, t: 'San Francisco · Lisbon · Singapore' },
//                   ].map(({ I, t }) => (
//                     <motion.li key={t} whileHover={{ x: 6 }} className="flex items-center gap-3">
//                       <I className="w-4 h-4" /> {t}
//                     </motion.li>
//                   ))}
//                 </ul>
//               </StaggerItem>
//             </Stagger>

//             <motion.form
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.2 }}
//               variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
//               className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 space-y-4"
//               onSubmit={(e) => e.preventDefault()}
//             >
//               <Field label="Name" placeholder="Jane Doe" />
//               <Field label="Email" placeholder="jane@company.com" type="email" />
//               <Field label="Company" placeholder="Acme Inc." />
//               <motion.div variants={fadeUp}>
//                 <label className="text-xs font-medium text-white/60 uppercase tracking-wider">Project</label>
//                 <textarea
//                   rows={4}
//                   placeholder="Tell us about your goals…"
//                   className="mt-2 w-full bg-transparent border-b border-white/20 py-2 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
//                 />
//               </motion.div>
//               <motion.button
//                 variants={fadeUp}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="mt-4 w-full inline-flex items-center justify-center gap-3 bg-white text-ink rounded-full px-6 py-4 font-semibold hover:bg-white/90 transition"
//               >
//                 Send inquiry <ArrowUpRight className="w-4 h-4" />
//               </motion.button>
//             </motion.form>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// // ─── Footer ──────────────────────────────────────────────────────────
// function Footer() {
//   const nav = [
//     { label: 'About', href: '#about' },
//     { label: 'Portfolio', href: '#portfolio' },
//     { label: 'Service', href: '#service' },
//     { label: 'Career', href: '#career' },
//     { label: 'Contact', href: '#contact' },
//   ];
//   const legal = ['Privacy', 'Terms', 'Cookies'];

//   const InstagramIcon = ({ className }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//       <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//       <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//     </svg>
//   );
//   const TwitterIcon = ({ className }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//       <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//     </svg>
//   );
//   const LinkedinIcon = ({ className }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//       <rect x="2" y="9" width="4" height="12" />
//       <circle cx="4" cy="4" r="2" />
//     </svg>
//   );
//   const DribbbleIcon = ({ className }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//       <circle cx="12" cy="12" r="10" />
//       <path d="M8.56 2.75c-1.8 1.4-3.2 3.6-3.8 6.2" />
//       <path d="M21.25 8.5c-1.7.5-3.6.9-5.6 1.2" />
//       <path d="M2.75 14.5c2.5.8 5.1 1.4 7.8 1.8" />
//       <path d="M15.4 2.8c-1.5 1.8-2.6 4.2-3.2 6.8" />
//       <path d="M18.2 18.2c-2.1-1.5-4.5-2.6-7.2-3.2" />
//       <path d="M5.8 21.5c1.9-1.5 4.1-2.6 6.6-3.2" />
//     </svg>
//   );

//   const social = [
//     { Icon: InstagramIcon, label: 'Instagram' },
//     { Icon: TwitterIcon, label: 'Twitter' },
//     { Icon: LinkedinIcon, label: 'LinkedIn' },
//     { Icon: DribbbleIcon, label: 'Dribbble' },
//   ];

//   return (
//     <footer className="px-6 sm:px-8 pb-10">
//       <Stagger className="mx-auto max-w-7xl pt-12 border-t border-border grid md:grid-cols-12 gap-8" stagger={0.1}>
//         <StaggerItem className="md:col-span-5">
//           <Logo />
//           <p className="mt-4 text-ink-soft max-w-sm">A creative agency turning ideas into impactful digital products.</p>
//         </StaggerItem>
//         <StaggerItem className="md:col-span-4">
//           <div className="grid grid-cols-2 gap-8 text-sm">
//             <div>
//               <div className="font-semibold text-ink mb-3">Studio</div>
//               <ul className="space-y-2 text-ink-soft">
//                 {nav.map((n) => (
//                   <motion.li key={n.href} whileHover={{ x: 4 }}>
//                     <a href={n.href} className="hover:text-ink">{n.label}</a>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <div className="font-semibold text-ink mb-3">Legal</div>
//               <ul className="space-y-2 text-ink-soft">
//                 {legal.map((l) => (
//                   <motion.li key={l} whileHover={{ x: 4 }}>
//                     <a href="#" className="hover:text-ink">{l}</a>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </StaggerItem>
//         <StaggerItem className="md:col-span-3">
//           <div className="font-semibold text-ink mb-3 text-sm">Follow</div>
//           <div className="flex gap-3">
//             {social.map(({ Icon, label }) => (
//               <motion.a
//                 key={label}
//                 href="#"
//                 aria-label={label}
//                 whileHover={{ y: -4, rotate: -6, scale: 1.08 }}
//                 whileTap={{ scale: 0.94 }}
//                 className="w-10 h-10 rounded-full border border-border grid place-items-center text-ink hover:bg-chip hover:text-white hover:border-chip transition"
//               >
//                 <Icon className="w-4 h-4" />
//               </motion.a>
//             ))}
//           </div>
//         </StaggerItem>
//       </Stagger>
//       <Reveal variants={fadeIn} className="mx-auto max-w-7xl mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-soft">
//         <p>© {new Date().getFullYear()} GrowthStack Studio Studio. All rights reserved.</p>
//         <p>Crafted with care in California.</p>
//       </Reveal>
//     </footer>
//   );
// }

// // ─── Scroll Progress ─────────────────────────────────────────────────
// function ScrollProgress() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });
//   return (
//     <motion.div
//       style={{ scaleX }}
//       className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-sky-400 via-teal-400 to-pink-300"
//     />
//   );
// }

// // ─── Page ────────────────────────────────────────────────────────────
// export default function Page() {
//   return (
//     <ThemeProvider>
//       <AnimatePresence>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="min-h-screen relative z-10"
//         >
//           <ScrollProgress />
//           <Nav />
//           <Hero />
//           <Marquee />
//           <About />
//           <Services />
//           <Portfolio />
//           <Process />
//           <Testimonials />
//           <Career />
//           <Contact />
//           <Footer />
//         </motion.div>
//       </AnimatePresence>
//     </ThemeProvider>
//   );
// }
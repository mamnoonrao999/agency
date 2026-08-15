'use client';

import { motion } from 'framer-motion';
import { Reveal, fadeIn } from './motion-kit';
import SectionLabel from './SectionLabel';

/* ---------------------------------------------------------- */
/* Data — each step points at a real image file in /public/icons */
/* ---------------------------------------------------------- */

const problems = [
  {
    number: '01',
    title: 'No follow-up',
    description: 'You get leads, but no one follows up — they slip through the cracks.',
    tag: 'Leads get lost',
    tint: 'blue',
    steps: [
      { img: '/file.svg', label: 'New lead\ncomes in', badge: { kind: 'exclaim', value: '!', tone: 'blue' } },
      { img: '/icons/chat.png', label: 'Message\nreceived', badge: { kind: 'count', value: '1', tone: 'blue' } },
      { img: '/icons/clock.png', label: 'No one\nresponds' },
      { img: '/icons/lead-lost.png', label: 'Lead is lost\nforever', muted: true, badge: { kind: 'x', tone: 'grey' } },
    ],
  },
  {
    number: '02',
    title: 'No automation',
    description: 'Manual processes are eating your time and killing your margins.',
    tag: 'Time & money wasted',
    tint: 'violet',
    loop: true,
    steps: [
      { img: '/icons/new-lead.png', label: 'New lead\ncomes in' },
      { img: '/icons/copy-doc.png', label: 'Manually copy\ninformation' },
      { img: '/icons/crm.png', label: 'Update\nCRM' },
      { img: '/icons/mail.png', label: 'Send\nfollow-up' },
      { img: '/icons/spreadsheet.png', label: 'Update\nspreadsheet', tone: 'green' },
    ],
  },
  {
    number: '03',
    title: 'Leads go cold',
    description: 'Your website captures attention, but fails to convert interest into action.',
    tag: 'Interest disappears',
    tint: 'orange',
    steps: [
      { img: '/icons/new-lead.png', label: 'Interested\nlead', highlight: true, badge: { kind: 'heart', tone: 'orange' } },
      { img: '/icons/chat.png', label: 'They show\ninterest' },
      { img: '/icons/hourglass.png', label: 'No response\nfrom you' },
      { img: '/icons/snowflake.png', label: 'Lead loses\ninterest', frozen: true },
      { img: '/icons/snowflake.png', label: 'Lead goes\ncold', frozen: true },
    ],
  },
];

const tints = {
  blue: { badgeBg: 'bg-blue-50', badgeText: 'text-blue-600', tagBg: 'bg-blue-50', tagText: 'text-blue-600', ring: 'ring-blue-100', bar: 'bg-blue-500' },
  violet: { badgeBg: 'bg-violet-50', badgeText: 'text-violet-600', tagBg: 'bg-violet-50', tagText: 'text-violet-600', ring: 'ring-violet-100', bar: 'bg-violet-500' },
  orange: { badgeBg: 'bg-orange-50', badgeText: 'text-orange-600', tagBg: 'bg-orange-50', tagText: 'text-orange-600', ring: 'ring-orange-100', bar: 'bg-orange-500' },
};

/* Small overlay badge (exclaim / count / heart / x) */
const Badge = ({ kind, value, tone }) => {
  const toneClasses = {
    blue: 'bg-blue-500 text-white',
    orange: 'bg-orange-500 text-white',
    grey: 'bg-ink/25 text-white',
  };
  return (
    <span
      className={`absolute -top-1.5 -right-1.5 w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-full text-[9px] sm:text-[10px] font-bold flex items-center justify-center ring-2 ring-white ${toneClasses[tone]}`}
    >
      {kind === 'heart' ? '♥' : kind === 'x' ? '✕' : value}
    </span>
  );
};

/* ---------------------------------------------------------- */
/* Step + connector                                            */
/* ---------------------------------------------------------- */

function Step({ step, index }) {
  const { img, label, muted, frozen, highlight, badge } = step;

  let boxClasses = 'bg-white border-ink/10';
  if (muted) boxClasses = 'bg-ink/[0.03] border-ink/10 opacity-40 grayscale';
  if (frozen) boxClasses = 'bg-blue-50/70 border-blue-100';
  if (highlight) boxClasses = 'bg-orange-50 border-orange-200';
  if (step.tone === 'green') boxClasses = 'bg-emerald-50 border-emerald-100';

  return (
    <motion.div
      className="flex-1 basis-0 min-w-0 flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.4, delay: index * 0.12 }}
    >
      <div className={`relative w-10 h-10 sm:w-14 sm:h-14 rounded-xl border flex items-center justify-center overflow-hidden ${boxClasses}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={label.replace('\n', ' ')} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
        {badge && <Badge {...badge} />}
      </div>
      <p className="text-[10px] sm:text-xs text-ink-soft text-center leading-tight whitespace-pre-line px-0.5">
        {label}
      </p>
    </motion.div>
  );
}

function Connector({ index }) {
  return (
    <div className="flex-1 min-w-[10px] sm:min-w-[16px] flex items-center self-center -mt-6 sm:-mt-8">
      <motion.div
        className="w-full h-0 border-t border-dashed border-ink/25 origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.45, delay: 0.15 + index * 0.12, ease: 'easeInOut' }}
      />
    </div>
  );
}

/* ---------------------------------------------------------- */
/* Section                                                      */
/* ---------------------------------------------------------- */

export default function ProblemSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-ink/[0.02]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.1]">
              We solve the problems <br className="hidden sm:block" />
              that cost you <span className="font-serif-italic font-normal text-blue-600">growth.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-ink-soft font-light leading-relaxed max-w-2xl mx-auto">
              Most businesses lose leads, waste time, and miss opportunities.
              <br className="hidden sm:block" /> Here's why — and how we fix it.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 space-y-5 sm:space-y-6">
          {problems.map((problem, pIndex) => {
            const t = tints[problem.tint];
            return (
              <Reveal key={problem.title} delay={pIndex * 0.1} variants={fadeIn}>
                <motion.div
                  className="glass-card rounded-2xl p-6 sm:p-8 hover:bg-white/55 transition duration-300"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10">
                    {/* Left: text */}
                    <div className="lg:w-[270px] shrink-0">
                      <span className={`inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-semibold ${t.badgeBg} ${t.badgeText}`}>
                        {problem.number}
                      </span>
                      <h3 className="mt-4 text-xl sm:text-2xl font-serif text-ink">{problem.title}</h3>
                      <p className="mt-2 text-sm text-ink-soft leading-relaxed">{problem.description}</p>
                      <span className={`mt-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ring-1 ${t.tagBg} ${t.tagText} ${t.ring}`}>
                        {problem.tag}
                      </span>
                    </div>

                    {/* Right: flow diagram — steps distribute evenly across full width */}
                    <div className="flex-1 min-w-0">
                      {problem.loop && (
                        <div className="hidden sm:flex justify-center mb-3">
                          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium bg-ink/5 text-ink-soft">
                            Repeat again and again
                          </span>
                        </div>
                      )}

                      <div className="flex items-start w-full">
                        {problem.steps.map((step, i) => (
                          <div key={i} className="flex items-start flex-1 basis-0 min-w-0">
                            <Step step={step} index={i} />
                            {i < problem.steps.length - 1 && <Connector index={i} />}
                          </div>
                        ))}
                      </div>

                      {/* Bottom line — always full width, replays left-to-right on every scroll-in */}
                      <div className="mt-4 h-1 rounded-full bg-ink/5 overflow-hidden">
                        <motion.div
                          className={`h-full w-full rounded-full ${t.bar} origin-left`}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: false, amount: 0.4 }}
                          transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal delay={0.3} variants={fadeIn}>
          <div className="mt-14 sm:mt-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-serif text-ink">Ready to fix this?</h3>
            <p className="mt-2 text-sm sm:text-base text-ink-soft font-light">
              We build systems that capture, follow up, and convert — automatically.
            </p>
            <motion.a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 text-white text-sm font-medium px-6 py-3 hover:bg-blue-700 transition"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Build Your Growth Engine
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}





// 'use client';

// import { motion } from 'framer-motion';
// import { XCircle, UserX, ZapOff, Clock, BarChart3, AlertCircle } from 'lucide-react';
// import { Reveal, fadeIn } from './motion-kit';
// import SectionLabel from './SectionLabel';

// const painPoints = [
//   {
//     icon: XCircle,
//     title: "No follow-up",
//     description: "You get leads, but no one follows up — they slip through the cracks.",
//   },
//   {
//     icon: ZapOff,
//     title: "No automation",
//     description: "Manual processes are eating your time and killing your margins.",
//   },
//   {
//     icon: UserX,
//     title: "Leads go cold",
//     description: "Your website captures attention, but fails to convert interest into action.",
//   },
// ];

// export default function ProblemSection() {
//   return (
//     <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-ink/[0.02]">
//       <div className="mx-auto max-w-7xl">
//         <div className="text-center max-w-3xl mx-auto">
//           <Reveal>
//             <SectionLabel>The Problem</SectionLabel>
//             <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.1]">
//               Most Websites Are Just <span className="font-serif-italic font-normal text-ink-soft">Digital Brochures</span>
//             </h2>
//             <p className="mt-4 text-base sm:text-lg text-ink-soft font-light leading-relaxed max-w-2xl mx-auto">
//               They look nice, but they don't work. Here's what's actually happening:
//             </p>
//           </Reveal>
//         </div>

//         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
//           {painPoints.map((point, index) => (
//             <Reveal key={point.title} delay={index * 0.1} variants={fadeIn}>
//               <motion.div 
//                 className="glass-card rounded-2xl p-6 sm:p-8 text-center group hover:bg-white/55 transition duration-300"
//                 whileHover={{ y: -4 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="w-12 h-12 rounded-full bg-ink/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-ink/10 transition">
//                   <point.icon className="w-6 h-6 text-ink-soft group-hover:text-ink transition" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
//                 <p className="mt-2 text-sm text-ink-soft leading-relaxed">{point.description}</p>
//               </motion.div>
//             </Reveal>
//           ))}
//         </div>

//         {/* Bridge to Services */}
//         <Reveal delay={0.3} variants={fadeIn}>
//           <div className="mt-12 text-center">
//             <p className="text-sm text-ink-soft font-light">
//               That's why we built a different kind of agency. <br className="sm:hidden" />
//               <span className="font-medium text-ink">One that actually delivers results.</span>
//             </p>
//             <div className="mt-4 w-12 h-0.5 bg-ink/10 mx-auto rounded-full" />
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }
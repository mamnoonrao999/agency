'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Reveal, Stagger, StaggerItem, scaleIn, fadeUp } from './motion-kit';
import SectionLabel from './SectionLabel';

function Field({ label, id, ...rest }) {
  return (
    <motion.div variants={fadeUp}>
      <label htmlFor={id} className="text-xs font-medium text-white/60 uppercase tracking-wider">
        {label}
      </label>
      <input
        id={id}
        {...rest}
        className="mt-2 w-full bg-transparent border-b border-white/20 py-2 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
      />
    </motion.div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', company: '', project: '' });
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal variants={scaleIn} className="glass-dark rounded-[2rem] text-white p-5 sm:p-8 lg:p-16 relative overflow-hidden">
          <motion.div
            className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-48 h-48 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-sky-400/40 to-pink-300/30 blur-3xl"
            animate={{ scale: [1, 1.15, 1], x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative grid lg:grid-cols-2 gap-8 md:gap-12">
            <Stagger stagger={0.1}>
              <StaggerItem>
                <SectionLabel>Contact</SectionLabel>
              </StaggerItem>
              <StaggerItem>
                <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-6xl font-serif font-normal tracking-[-0.02em] leading-[1.05]">
                  Let's build <span className="font-serif-italic font-normal text-blue-600">something</span> worth talking about.
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-white/70 mt-3 sm:mt-6 max-w-md text-sm sm:text-base">
                  Tell us about your project. We reply within one business day.
                </p>
              </StaggerItem>
              <StaggerItem>
                <ul className="mt-6 sm:mt-10 space-y-3 sm:space-y-4 text-white/80 text-sm sm:text-base">
                  {[
                    { I: Mail, t: 'scalentiqautowebs@gmail.com' },
                    { I: Phone, t: '+92 3046851117' },
                    { I: MapPin, t: 'Karachi · Pakistan' },
                  ].map(({ I, t }) => (
                    <motion.li key={t} whileHover={{ x: 4 }} className="flex items-center gap-3">
                      <I className="w-4 h-4" /> {t}
                    </motion.li>
                  ))}
                </ul>
              </StaggerItem>
            </Stagger>

            <motion.form
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-5 sm:p-8 border border-white/10 space-y-4"
              onSubmit={handleSubmit}
            >
              <Field
                label="Name"
                id="name"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Field
                label="Email"
                id="email"
                type="email"
                placeholder="jane@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Field
                label="Company"
                id="company"
                placeholder="Acme Inc."
                value={formData.company}
                onChange={handleChange}
              />
              <motion.div variants={fadeUp}>
                <label htmlFor="project" className="text-xs font-medium text-white/60 uppercase tracking-wider">
                  Project
                </label>
                <textarea
                  id="project"
                  rows={3}
                  placeholder="Tell us about your goals…"
                  className="mt-2 w-full bg-transparent border-b border-white/20 py-2 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
                  value={formData.project}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              {status.success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 text-sm"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent! We’ll get back to you soon.</span>
                </motion.div>
              )}

              {status.error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm"
                >
                  {status.error}
                </motion.div>
              )}

              <motion.button
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status.loading}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white rounded-full px-6 py-3.5 sm:py-4 font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {status.loading ? (
                  'Sending…'
                ) : (
                  <>
                    Send inquiry <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}







// 'use client';

// import { motion } from 'framer-motion';
// import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
// import { Reveal, Stagger, StaggerItem, scaleIn, fadeUp } from './motion-kit';
// import SectionLabel from './SectionLabel';

// function Field({ label, ...rest }) {
//   return (
//     <motion.div variants={fadeUp}>
//       <label className="text-xs font-medium text-white/60 uppercase tracking-wider">{label}</label>
//       <input
//         {...rest}
//         className="mt-2 w-full bg-transparent border-b border-white/20 py-2 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
//       />
//     </motion.div>
//   );
// }

// export default function Contact() {
//   return (
//     <section id="contact" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         <Reveal variants={scaleIn} className="glass-dark rounded-[2rem] text-white p-5 sm:p-8 lg:p-16 relative overflow-hidden">
//           <motion.div
//             className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-48 h-48 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-sky-400/40 to-pink-300/30 blur-3xl"
//             animate={{ scale: [1, 1.15, 1], x: [0, -30, 0], y: [0, 20, 0] }}
//             transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
//           />
//           <div className="relative grid lg:grid-cols-2 gap-8 md:gap-12">
//             <Stagger stagger={0.1}>
//               <StaggerItem>
//                 <SectionLabel>Contact</SectionLabel>
//               </StaggerItem>
//               <StaggerItem>
//                 <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-6xl font-serif font-normal tracking-[-0.02em] leading-[1.05]">
//                   Let's build <span className="font-serif-italic font-normal">something</span> worth talking about.
//                 </h2>
//               </StaggerItem>
//               <StaggerItem>
//                 <p className="text-white/70 mt-3 sm:mt-6 max-w-md text-sm sm:text-base">Tell us about your project. We reply within one business day.</p>
//               </StaggerItem>
//               <StaggerItem>
//                 <ul className="mt-6 sm:mt-10 space-y-3 sm:space-y-4 text-white/80 text-sm sm:text-base">
//                   {[
//                     { I: Mail, t: 'hello@Scalentiq AutoWebs.studio' },
//                     { I: Phone, t: '+1 (415) 555-0119' },
//                     { I: MapPin, t: 'San Francisco · Lisbon · Singapore' },
//                   ].map(({ I, t }) => (
//                     <motion.li key={t} whileHover={{ x: 4 }} className="flex items-center gap-3">
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
//               className="bg-white/5 backdrop-blur-xl rounded-3xl p-5 sm:p-8 border border-white/10 space-y-4"
//               onSubmit={(e) => e.preventDefault()}
//             >
//               <Field label="Name" placeholder="Jane Doe" />
//               <Field label="Email" placeholder="jane@company.com" type="email" />
//               <Field label="Company" placeholder="Acme Inc." />
//               <motion.div variants={fadeUp}>
//                 <label className="text-xs font-medium text-white/60 uppercase tracking-wider">Project</label>
//                 <textarea
//                   rows={3}
//                   placeholder="Tell us about your goals…"
//                   className="mt-2 w-full bg-transparent border-b border-white/20 py-2 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
//                 />
//               </motion.div>
//               <motion.button
//                 variants={fadeUp}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-white/10 text-white rounded-full px-6 py-3.5 sm:py-4 font-semibold hover:bg-white/20 transition text-sm sm:text-base"
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
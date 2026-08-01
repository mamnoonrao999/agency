'use client';

import { Reveal, Stagger, StaggerItem, scaleIn, fadeUp, motion } from '@/components/motion-kit'; // ← motion imported
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import SectionLabel from './SectionLabel';

function Field({ label, ...rest }) {
  return (
    <motion.div variants={fadeUp}>
      <label className="text-xs font-medium text-white/60 uppercase tracking-wider">{label}</label>
      <input
        {...rest}
        className="mt-2 w-full bg-transparent border-b border-white/20 py-2 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
      />
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal variants={scaleIn} className="glass-dark rounded-[2rem] text-white p-8 sm:p-16 relative overflow-hidden">
          <motion.div // ← now motion is defined
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-sky-400/40 to-pink-300/30 blur-3xl"
            animate={{ scale: [1, 1.15, 1], x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative grid lg:grid-cols-2 gap-12">
            <Stagger stagger={0.1}>
              <StaggerItem>
                <SectionLabel>Contact</SectionLabel>
              </StaggerItem>
              <StaggerItem>
                <h2 className="mt-6 text-4xl sm:text-6xl font-serif font-normal tracking-[-0.02em] leading-[1.02]">
                  Let's build <span className="font-serif-italic font-normal">something</span> worth talking about.
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-white/70 mt-6 max-w-md">Tell us about your project. We reply within one business day.</p>
              </StaggerItem>
              <StaggerItem>
                <ul className="mt-10 space-y-4 text-white/80">
                  {[
                    { I: Mail, t: 'hello@elevare.studio' },
                    { I: Phone, t: '+1 (415) 555-0119' },
                    { I: MapPin, t: 'San Francisco · Lisbon · Singapore' },
                  ].map(({ I, t }) => (
                    <motion.li key={t} whileHover={{ x: 6 }} className="flex items-center gap-3">
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
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <Field label="Name" placeholder="Jane Doe" />
              <Field label="Email" placeholder="jane@company.com" type="email" />
              <Field label="Company" placeholder="Acme Inc." />
              <motion.div variants={fadeUp}>
                <label className="text-xs font-medium text-white/60 uppercase tracking-wider">Project</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals…"
                  className="mt-2 w-full bg-transparent border-b border-white/20 py-2 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                />
              </motion.div>
              <motion.button
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full inline-flex items-center justify-center gap-3 bg-white text-ink rounded-full px-6 py-4 font-semibold hover:bg-white/90 transition"
              >
                Send inquiry <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </motion.form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
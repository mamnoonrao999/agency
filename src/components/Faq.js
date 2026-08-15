'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Reveal, EASE } from './motion-kit';
import SectionLabel from './SectionLabel';

const faqs = [
  {
    q: 'What services does Scalentiq AutoWebs offer?',
    a: 'We offer Brand Strategy, Web Design & Development, Product UI/UX, Visual Identity, Motion & 3D, and SEO & Growth – a full‑stack creative agency.',
  },
  {
    q: 'How much does a project typically cost?',
    a: 'Every project is scoped individually. We work on a fixed‑price basis for defined deliverables, or on a retainer for ongoing support. Contact us for a tailored quote.',
  },
  {
    q: 'How long does a project take?',
    a: 'Timelines depend on scope. A simple website can take 4–6 weeks, while a full rebrand + web build might take 8–12 weeks. We’ll give you a clear roadmap upfront.',
  },
  {
    q: 'Do you work with startups?',
    a: 'Absolutely. We specialise in helping startups from 0→1 – we understand the pace, the constraints, and the need for scalable, impactful design.',
  },
  {
    q: 'What’s your design process?',
    a: 'We follow a four‑step process: Discover, Define, Design, Deliver. We dig deep, align on strategy, craft high‑fidelity designs, and hand over a system you can maintain.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes – we offer retainer packages for maintenance, content updates, and growth optimisation. We’re with you for the long haul.',
  },
];

function FaqItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-ink/5 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-4 sm:py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base font-medium text-ink pr-4">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDown className="w-5 h-5 text-ink-soft group-hover:text-ink transition" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="pb-4 sm:pb-5 text-sm sm:text-base text-ink-soft leading-relaxed pr-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="min-h-screen py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-[-0.02em] text-ink leading-[1.05]">
              Frequently asked <span className="font-serif-italic font-normal">questions</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-ink-soft max-w-2xl mx-auto">
              Everything you need to know before getting started.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 glass-panel rounded-3xl p-6 sm:p-8 lg:p-10">
          <div className="divide-y divide-ink/5">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === index}
                onClick={() => toggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
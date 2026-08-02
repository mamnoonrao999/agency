'use client';

import { motion } from 'framer-motion';
import { EASE } from './motion-kit';

export default function SectionLabel({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="inline-flex items-center gap-2 bg-chip text-white rounded-full px-4 py-1.5 text-[11px] tracking-[0.18em] font-medium"
    >
      <motion.span
        className="w-1.5 h-1.5 rounded-full bg-white"
        animate={{ opacity: [1, 0.25, 1], scale: [1, 0.75, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      {String(children).toUpperCase()}
    </motion.div>
  );
}
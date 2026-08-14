'use client';

import { motion } from 'framer-motion';

export default function Marquee() {
  const tags = ['Brand Strategy', 'Web Design', 'Product UI/UX', 'Visual Identity', 'Motion & 3D', 'SEO & Scalentiq'];
  const items = [...tags, ...tags, ...tags, ...tags];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 overflow-hidden glass-dark"
    >
      <motion.div
        className="flex gap-6 whitespace-nowrap items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((t, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.06, y: -4 }}
            className="glass-pill rounded-full px-8 py-4 text-xl font-semibold text-ink tracking-tight inline-flex items-center gap-3 cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-ink/40" />
            {t}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
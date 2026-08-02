'use client';

import { motion, useReducedMotion } from 'framer-motion';

export const EASE = [0.22, 0.7, 0.2, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, y: 18 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

export const container = (stagger = 0.09, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export function Reveal({ children, className, delay = 0, variants = fadeUp, as = 'div' }) {
  const reduced = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduced ? undefined : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -8% 0px' }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
}

export function Stagger({ children, className, stagger = 0.09, delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? undefined : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container(stagger, delay)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, variants = fadeUp, hover = false }) {
  return (
    <motion.div
      className={className}
      variants={variants}
      whileHover={hover ? { y: -6, transition: { duration: 0.25, ease: EASE } } : undefined}
    >
      {children}
    </motion.div>
  );
}

export { motion };
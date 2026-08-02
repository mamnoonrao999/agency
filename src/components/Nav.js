'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { EASE } from './motion-kit';

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Service', href: '#service' },
  { label: 'Career', href: '#career' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
      className="fixed top-0 inset-x-0 z-50 px-4 sm:px-8 pt-5 min-h-scren backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
        
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-full px-5 py-2.5 flex items-center"
        >
          <Logo />
        </motion.div>
        <nav className="hidden lg:flex rounded-full px-3 py-2.5">
          <ul className="flex items-center gap-1 text-sm font-medium text-ink">
            {nav.map((n, i) => (
              <motion.li
                key={n.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.06, duration: 0.5, ease: EASE }}
              >
                <a href={n.href} className="relative px-4 py-2 rounded-full hover:bg-white/60 transition inline-block">
                  {n.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="rounded-full pl-5 pr-1.5 py-1.5 flex items-center gap-3 text-sm font-medium text-ink hover:bg-white/80 transition group"
        >
          Get started
          <span className="grid place-items-center w-9 h-9 rounded-full bg-ink text-white overflow-hidden">
            <motion.span initial={false} whileHover={{ rotate: 45 }} className="grid place-items-center">
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.span>
          </span>
        </motion.a>
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
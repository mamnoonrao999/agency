'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { EASE } from './motion-kit';

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Service', href: '#service' },
  // { label: 'Career', href: '#career' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
      className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-5 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo – always visible */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center"
        >
          <Logo />
        </motion.div>

        {/* Desktop navigation – hidden below lg */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center gap-1 text-sm font-medium text-ink">
            {nav.map((n, i) => (
              <motion.li
                key={n.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.06, duration: 0.5, ease: EASE }}
              >
                <a
                  href={n.href}
                  className="relative px-3 py-2 rounded-full hover:bg-white/60 transition inline-block text-sm"
                >
                  {n.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Right side: CTA + ThemeToggle + mobile menu button */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Full "Get started" from sm up */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-ink hover:bg-white/30 transition group rounded-full pl-4 pr-2 py-1.5"
          >
            Get started
            <span className="grid place-items-center w-8 h-8 rounded-full bg-ink text-white overflow-hidden">
              <motion.span
                initial={false}
                whileHover={{ rotate: 45 }}
                className="grid place-items-center"
              >
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.span>
            </span>
          </motion.a>

          <ThemeToggle />

          {/* Mobile / tablet menu toggle – visible below lg */}
          <motion.button
            onClick={() => setOpen((o) => !o)}
            whileTap={{ scale: 0.92 }}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full text-ink hover:bg-white/30 transition"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile / tablet dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="lg:hidden overflow-hidden mt-2"
          >
            <nav className="mx-auto max-w-7xl glass-panel rounded-3xl p-3 flex flex-col">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-2xl text-sm font-medium text-ink hover:bg-white/50 transition"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center justify-center gap-2 bg-ink text-white rounded-2xl px-4 py-3 text-sm font-medium"
              >
                Get started <ArrowUpRight className="w-4 h-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
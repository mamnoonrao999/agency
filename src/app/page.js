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
import Faq from '@/components/Faq';
import ProblemSection from '@/components/ProblemSection';

export default function Page() {
  return (
    <ThemeProvider>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen relative z-10 w-full overflow-x-hidden"
        >
          {/* <ScrollProgress /> */}
          <Nav />
          <Hero />
          {/* <Marquee /> */}
          {/* <About /> */}
          <ProblemSection />
          <Services />
          <Process />
          <Portfolio />
          <Testimonials />
          {/* <Career /> */}
          <Faq />
          <Contact />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
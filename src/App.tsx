import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Contact from './components/Contact';
import ProductShowcase from './components/3D/ProductShowcase';
import FloatingCards from './components/3D/FloatingCards';
import AIChat from './components/Features/AIChat';
import InteractiveTimeline from './components/Features/InteractiveTimeline';
import DataVisualization from './components/Features/DataVisualization';
import SpinWheel from './components/Gamification/SpinWheel';
import VoiceNavigation from './components/Accessibility/VoiceNavigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import './i18n/config';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 transform origin-left z-50"
        style={{ scaleX }}
      />
      <Navbar />
      <div className="pt-16">
        <Hero />
        <ProductShowcase />
        <FloatingCards />
        <Services />
        <Stats />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              Try Your Luck!
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Spin the wheel for a chance to win exclusive rewards
            </p>
            <SpinWheel />
          </motion.div>
        </div>
        <InteractiveTimeline />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
            Real-Time Analytics
          </h2>
          <DataVisualization />
        </div>
        <Contact />
        <AIChat />
        <VoiceNavigation />
      </div>
    </div>
  );
}

export default App;
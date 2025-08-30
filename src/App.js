import React from 'react';
import { motion } from 'framer-motion';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import HeroSection from './sections/HeroSection/HeroSection';
import ServicesSection from './sections/ServicesSection/ServicesSection';
import AboutSection from './sections/AboutSection/AboutSection';
import LeadFormSection from './sections/LeadFormSection/LeadFormSection';
import Footer from './components/Footer/Footer';

function App() {

  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const sectionTransition = {
    duration: 0.7,
    ease: "easeOut"
  }

  return (
    <div className="App">
      <Navbar />
      <main>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={sectionVariants}
          transition={sectionTransition}
          viewport={{ once: true, amount: 0.2 }}
        >
          <HeroSection />
        </motion.div>
        
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={sectionVariants}
          transition={sectionTransition}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ServicesSection />
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={sectionVariants}
          transition={sectionTransition}
          viewport={{ once: true, amount: 0.2 }}
        >
          <AboutSection />
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={sectionVariants}
          transition={sectionTransition}
          viewport={{ once: true, amount: 0.2 }}
        >
          <LeadFormSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
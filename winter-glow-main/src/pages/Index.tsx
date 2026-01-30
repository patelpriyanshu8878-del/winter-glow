import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navbar from '@/components/Navbar';
import Snowfall from '@/components/Snowfall';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Career from '@/components/Career';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background relative overflow-x-hidden">
        <Snowfall />
        <Navbar />
        <Hero />
        <About />
        <Career />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default Index;

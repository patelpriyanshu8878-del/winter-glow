import React, { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { ChevronDown, TreePine, Sparkles } from 'lucide-react';

const Hero = () => {
  const { isChristmas } = useTheme();
  const [displayText, setDisplayText] = useState('');
  const fullText = "Data-driven solutions for a smarter tomorrow, blending innovation with impact.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background decorations */}
      {isChristmas && (
        <>
          <div className="absolute top-20 left-10 opacity-20">
            <TreePine className="w-32 h-32 text-secondary" />
          </div>
          <div className="absolute bottom-20 right-10 opacity-20">
            <TreePine className="w-48 h-48 text-secondary" />
          </div>
          <div className="absolute top-40 right-20 opacity-30">
            <Sparkles className="w-16 h-16 text-accent animate-pulse" />
          </div>
        </>
      )}

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Greeting */}
        <div className="mb-6 inline-flex items-center gap-2 glass-card px-6 py-2 rounded-full">
          {isChristmas ? (
            <>
              <span className="text-2xl">🎄</span>
              <span className="text-muted-foreground">Hello, I'm Priyanshu!</span>
              <span className="text-2xl">🎅</span>
            </>
          ) : (
            <span className="text-muted-foreground">Welcome to my portfolio</span>
          )}
        </div>

        {/* Name */}
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-4 glow-heading">
          <span className="text-foreground">Patel </span>
          <span className="text-primary">Priyanshu</span>
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-8">
          Aspiring <span className="text-primary font-semibold">Data Scientist</span> & 
          <span className="text-secondary font-semibold"> Developer</span>
        </h2>

        {/* Typing Tagline */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-foreground/80 font-light min-h-[2rem]">
            {displayText}
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={scrollToAbout}
            className="glass-card px-8 py-4 rounded-xl font-semibold text-foreground border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 grow-hover"
          >
            Explore My Work
          </button>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 grow-hover"
            style={{ boxShadow: 'var(--glow-primary)' }}
          >
            Let's Connect
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

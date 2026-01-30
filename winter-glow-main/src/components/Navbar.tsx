import React, { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Snowflake, Sun, Menu, X, TreePine, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Career', href: '#career' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { mode, toggleMode, isChristmas } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-card py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {isChristmas && <TreePine className="w-6 h-6 text-secondary" />}
          <span className="font-playfair text-xl font-bold text-foreground">
            Priyanshu
          </span>
          {isChristmas && <Bell className="w-5 h-5 text-accent animate-bounce" />}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-foreground/80 hover:text-primary transition-colors font-medium relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleMode}
            className="glass-card border-primary/30 hover:border-primary group"
          >
            {isChristmas ? (
              <>
                <Sun className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                <span className="hidden sm:inline">Professional</span>
              </>
            ) : (
              <>
                <Snowflake className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                <span className="hidden sm:inline">Christmas</span>
              </>
            )}
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 rounded-xl p-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

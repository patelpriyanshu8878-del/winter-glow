import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Github, Linkedin, Mail, Send, Heart, Snowflake } from 'lucide-react';

const socials = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/patelpriyanshu8878-del',
    color: 'hover:text-gray-900 dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/priyanshu-patel',
    color: 'hover:text-blue-600',
  },
  {
    name: 'Gmail',
    icon: Mail,
    url: 'mailto:patelpriyanshu8878@gmail.com',
    color: 'hover:text-red-500',
  },
];

const Contact = () => {
  const { isChristmas } = useTheme();

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4 glow-heading">
          Contact & <span className="text-primary">Socials</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Let's connect and create something amazing together
        </p>

        {/* Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-8 text-center grow-hover group"
              style={{ boxShadow: 'var(--glow-primary)' }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <social.icon className={`w-8 h-8 text-muted-foreground ${social.color} transition-colors`} />
              </div>
              <h4 className="font-bold text-foreground text-lg">{social.name}</h4>
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="glass-card rounded-3xl p-8 md:p-12 max-w-2xl mx-auto text-center">
          <h3 className="font-playfair text-2xl font-bold mb-6 text-foreground">
            Get in Touch
          </h3>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:patelpriyanshu8878@gmail.com" className="hover:text-primary transition-colors">
                patelpriyanshu8878@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Github className="w-5 h-5 text-primary" />
              <a href="https://github.com/patelpriyanshu8878-del" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                github.com/patelpriyanshu8878-del
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Linkedin className="w-5 h-5 text-primary" />
              <a href="https://linkedin.com/in/priyanshu-patel" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                linkedin.com/in/priyanshu-patel
              </a>
            </div>
          </div>

          <a
            href="mailto:patelpriyanshu8878@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all grow-hover"
            style={{ boxShadow: 'var(--glow-primary)' }}
          >
            <Send className="w-5 h-5" />
            Send Message
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4 flex items-center justify-center gap-2 flex-wrap">
            {isChristmas && <Snowflake className="w-4 h-4 text-primary" />}
            Build with me - Let's connect with each other and work together.
            {isChristmas && <Snowflake className="w-4 h-4 text-primary" />}
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made by Patel Priyanshu
          </p>
          <p className="text-xs text-muted-foreground/50 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;

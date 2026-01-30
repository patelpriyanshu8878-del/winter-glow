import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { FolderGit2, Award, Cpu, Database, Code2, Target } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpeg';

const stats = [
  { icon: FolderGit2, label: 'Projects', value: '4+', color: 'text-primary' },
  { icon: Award, label: 'Certificates', value: '4+', color: 'text-secondary' },
  { icon: Cpu, label: 'Technologies', value: '10+', color: 'text-accent' },
];

const domains = [
  {
    icon: Database,
    title: 'Data Scientist',
    description: 'Transforming complex data into actionable insights using ML & AI',
  },
  {
    icon: Code2,
    title: 'Developer',
    description: 'Building robust web applications with modern technologies',
  },
  {
    icon: Target,
    title: 'Goals',
    description: 'Becoming a leading AI/ML expert and innovative problem solver',
  },
];

const About = () => {
  const { isChristmas } = useTheme();

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 glow-heading">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Profile Card */}
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Picture */}
            <div className="relative">
              <div
                className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 breathing"
              >
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <img src={profilePhoto} alt="Patel Priyanshu" className="w-full h-full object-cover" />
                </div>
              </div>
              {isChristmas && (
                <div className="absolute -top-2 -right-2 text-3xl animate-bounce">🎅</div>
              )}
            </div>

            {/* Description */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                I am <span className="text-primary">Patel Priyanshu</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I am B.E. Computer Engineering student passionate about turning data into meaningful solutions. 
                I specialize in Data Science, Machine Learning, and Web Development. 
                I provide my details below to showcase my journey and skills.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 text-center grow-hover cursor-pointer"
            >
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <div className="font-playfair text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 grow-hover cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <domain.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-playfair text-xl font-bold mb-3 text-foreground">
                {domain.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

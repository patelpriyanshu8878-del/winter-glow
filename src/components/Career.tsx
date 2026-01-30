import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { GraduationCap, School, Calendar, MapPin } from 'lucide-react';

const timelineData = [
  {
    type: 'education',
    title: 'B.E. Computer Engineering',
    institution: 'UPL University of Sustainable Technology',
    location: 'Gujarat, India',
    period: '2024 - 2028',
    status: 'Currently in Semester 4',
    icon: GraduationCap,
    description: 'Pursuing Bachelor of Engineering with focus on Computer Science, Data Science, and Software Development.',
  },
  {
    type: 'schooling',
    title: 'Higher Secondary (11th-12th Science)',
    institution: 'Pramukhswami Vidhyalay',
    location: 'Sarangpur, Gujarat',
    period: 'Completed',
    status: 'Science Stream',
    icon: School,
    description: 'Completed higher secondary education with focus on Science stream, building strong foundation in Mathematics and Physics.',
  },
];

const Career = () => {
  const { isChristmas } = useTheme();

  return (
    <section id="career" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4 glow-heading">
          Career & <span className="text-primary">Education</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          My academic journey and educational milestones
        </p>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-primary rounded-full hidden md:block"
            style={{ boxShadow: 'var(--glow-primary)' }}
          />

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div className="flex-1">
                <div className="glass-card rounded-2xl p-8 grow-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
                      }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.status}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <School className="w-4 h-4" />
                      <span className="text-sm">{item.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden md:flex w-6 h-6 rounded-full bg-primary border-4 border-background relative z-10"
                style={{ boxShadow: 'var(--glow-primary)' }}
              />

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;

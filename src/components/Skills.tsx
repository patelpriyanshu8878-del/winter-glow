import React from 'react';
import { IconType } from 'react-icons';
import {
  FaGithub,
  FaGitAlt,
  FaLinux,
  FaDocker,
  FaPython,
  FaReact,
} from "react-icons/fa"; 

import {
  SiPostman,
  SiJupyter,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiPytorch,
  SiMongodb,
  SiMysql,
  SiFigma,
} from "react-icons/si";

import { useTheme } from '@/contexts/ThemeContext';

type Tool = {
  name: string;
  icon: IconType;
};

const toolsRow1: Tool[] = [
  { name: "Postman", icon: SiPostman},
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Jupyter", icon: SiJupyter },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "Matplotlib", icon: FaPython }, // Using FaPython as a placeholder for Matplotlib
];


const toolsRow2: Tool[] = [
  { name: "Linux", icon: FaLinux },
  { name: "Figma", icon: SiFigma },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "Docker", icon: FaDocker },
  { name: "PyTorch", icon: SiPytorch },
  { name: "React", icon: FaReact },
];


const languages = [
  { name: 'HTML', percentage: 95, color: 'from-orange-500 to-red-500' },
  { name: 'Python', percentage: 90, color: 'from-blue-500 to-yellow-500' },
  { name: 'CSS', percentage: 85, color: 'from-blue-400 to-purple-500' },
  { name: 'JavaScript', percentage: 80, color: 'from-yellow-400 to-yellow-600' },
  { name: 'C', percentage: 75, color: 'from-blue-600 to-blue-800' },
  { name: 'C++', percentage: 70, color: 'from-blue-500 to-indigo-600' },
];

const Skills = () => {
  const { isChristmas } = useTheme();

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4 glow-heading">
          Tools & <span className="text-primary">Languages</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Technologies and programming languages I work with
        </p>

        {/* Tools Section */}
        <div className="mb-20">
          <h3 className="font-playfair text-2xl font-bold text-center mb-8 text-foreground">
            Development Tools
          </h3>

        {/* Row 1 – Flowing Right (Infinite Loop) */}
        <div className="overflow-visible mb-6 w-full">
          <div
            className="flex gap-6 animate-marquee-right w-max"
          >
            {/* First copy */}
            {toolsRow1.map((tool, index) => {
              const Tool = tool.icon;
              return (
                <div
                  key={`row1-a-${index}`}
                  className="glass-card rounded-xl px-6 py-4 flex items-center gap-3 min-w-[150px] grow-hover cursor-pointer"
                >
                  <Tool className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">
                    {tool.name}
                  </span>
                </div>
              );
            })}

            {/* Second copy (for seamless loop) */}
            {toolsRow1.map((tool, index) => {
              const Tool = tool.icon;
              return (
                <div
                  key={`row1-b-${index}`}
                  className="glass-card rounded-xl px-6 py-4 flex items-center gap-3 min-w-[150px] grow-hover cursor-pointer"
                >
                  <Tool className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

              
          {/* Row 2 – Flowing Left (Infinite Loop) */}
          <div className="mt-16 overflow-visible mb-6 w-full">
            <div
              className="flex gap-6 animate-marquee-left w-max"
            >
              {/* First copy */}
              {toolsRow2.map((tool, index) => {
                const Tool = tool.icon;
                return (
                  <div
                    key={`row2-a-${index}`}
                    className="glass-card rounded-xl px-6 py-4 flex items-center gap-3 min-w-[150px] grow-hover cursor-pointer"
                  >
                    <Tool className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">
                      {tool.name}
                    </span>
                  </div>
                );
             })}

              {/* Second copy (for seamless loop) */}
              {toolsRow2.map((tool, index) => {
                const Tool = tool.icon;
                return (
                  <div
                    key={`row2-b-${index}`}
                    className="glass-card rounded-xl px-6 py-4 flex items-center gap-3 min-w-[150px] grow-hover cursor-pointer"
                  >
                    <Tool className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">
                      {tool.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>


        {/* Languages Section */}
        <div>
          <h3 className="mt-16 font-playfair text-2xl font-bold text-center mb-8 text-foreground">
            Programming Languages
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 text-center grow-hover cursor-pointer group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary group-hover:scale-110 transition-transform">
                  {lang.name.charAt(0)}
                </div>
                <h4 className="font-bold text-foreground mb-3">{lang.name}</h4>
                
                {/* Progress Bar */}
                <div className="h-2 bg-muted rounded-full overflow-hidden mb-2">
                  <div
                    className={`h-full bg-gradient-to-r ${lang.color} rounded-full transition-all duration-1000 group-hover:shadow-lg`}
                    style={{ 
                      width: `${lang.percentage}%`,
                      boxShadow: 'var(--glow-primary)'
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-primary">{lang.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;

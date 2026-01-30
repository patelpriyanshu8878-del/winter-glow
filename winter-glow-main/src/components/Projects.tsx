import React, { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import {
  ExternalLink,
  Github,
  Brain,
  Database,
  Globe,
  LineChart,
  Bot,
} from "lucide-react";
const certificateHack4Delhi = new URL(
  "../assets/certificate-hack4delhi.png",
  import.meta.url
).href;
const certificatePythonBootcamp = new URL(
  "../assets/certificate-python-bootcamp.png",
  import.meta.url
).href;
const certificateDataScience = new URL(
  "../assets/Internship_data_science.png",
  import.meta.url
).href;
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const projects = [
  {
    title: "Machine Learning Pipeline",
    description:
      "End-to-end ML pipeline for data preprocessing, model training, and deployment with automated workflows.",
    tools: ["Python", "Scikit-learn", "TensorFlow", "Docker"],
    icon: Brain,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Interactive dashboard for visualizing complex datasets with real-time updates and filtering capabilities.",
    tools: ["Python", "Pandas", "Plotly", "Streamlit"],
    icon: LineChart,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Web Application",
    description:
      "Full-stack web application with modern UI, authentication, and database integration.",
    tools: ["React", "Node.js", "MongoDB", "Tailwind"],
    icon: Globe,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Database Management System",
    description:
      "Custom DBMS solution for efficient data storage, retrieval, and management operations.",
    tools: ["MySQL", "Python", "SQL", "Flask"],
    icon: Database,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "AI Chatbot",
    description:
      "Intelligent conversational agent using NLP for customer support and information retrieval.",
    tools: ["Python", "TensorFlow", "NLP", "API"],
    icon: Bot,
    color: "from-indigo-500 to-purple-500",
  },
];

const certificates = [
  {
    title: "Hack4Delhi - Unstop Holiday Fest 2025",
    issuer: "NSUT Delhi",
    image: certificateHack4Delhi,
  },
  {
    title: "Complete 2026 Python Bootcamp",
    issuer: "CodeWithHarry",
    image: certificatePythonBootcamp,
  },
  {
    title: "Internship in Data Science",
    issuer: "Udemy",
    image: certificateDataScience,
  },
  {
    title: "SQL Database Management (On way..)",
    issuer: "LinkedIn Learning",
    image: "/placeholder.svg",
  },
];

const Projects = () => {
  const { isChristmas } = useTheme();
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof certificates)[0] | null
  >(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4 glow-heading">
          Projects & <span className="text-primary">Achievements</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Showcasing my work and certifications
        </p>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="font-playfair text-2xl font-bold text-center mb-8 text-foreground">
            Featured Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 grow-hover cursor-pointer group"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <project.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h4 className="font-playfair text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <h3 className="font-playfair text-2xl font-bold text-center mb-8 text-foreground">
            Certificates
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-4 grow-hover cursor-pointer group"
                style={{ boxShadow: "var(--glow-primary)" }}
              >
                {/* Certificate Image */}
                <div className="aspect-video rounded-xl bg-muted mb-4 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                {/* Info */}
                <h4 className="font-bold text-foreground mb-1 text-sm">
                  {cert.title}
                </h4>
                <p className="text-xs text-muted-foreground mb-3">
                  {cert.issuer}
                </p>

                {/* Open Button */}
                <button
                  onClick={() => setSelectedCertificate(cert)}
                  className="w-full py-2 text-sm font-medium bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Open
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Modal */}
        <Dialog
          open={!!selectedCertificate}
          onOpenChange={() => setSelectedCertificate(null)}
        >
          <DialogContent className="max-w-4xl glass-card border-primary/20">
            <DialogTitle className="font-playfair text-xl font-bold">
              {selectedCertificate?.title}
            </DialogTitle>
            <div className="mt-4">
              <img
                src={selectedCertificate?.image}
                alt={selectedCertificate?.title}
                className="w-full rounded-xl"
              />
              <p className="text-center text-muted-foreground mt-4">
                Issued by: {selectedCertificate?.issuer}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;

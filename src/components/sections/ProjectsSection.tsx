"use client";
import { motion } from "framer-motion";

// Types for our project data
interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  emojiLabel: string;
  bgColorClass: string;
  technologies: string[];
  projectLink?: string;
  sourceLink?: string;
}

export default function ProjectsSection() {
  // Projects data
  const projects: ProjectItem[] = [
    {
      title: "Medha",
      subtitle: "AI Voice Agent",
      description:
        "An AI-powered voice assistant that can perform tasks and answer questions about my experience.",
      emoji: "💬",
      emojiLabel: "AI Voice Agent",
      bgColorClass: "bg-accent-secondary/20",
      technologies: ["Next.js", "ElevenLabs", "TypeScript", "Tailwind CSS"],
      projectLink: "https://agentic-assistant.vercel.app/",
      sourceLink: "https://github.com/ishaan000/agentic-assistant",
    },
    {
      title: "Seeker",
      subtitle: "AI Job Search Assistant",
      description:
        "An agent-powered job search platform that streamlines job discovery and outreach using OpenAI.",
      emoji: "🔍",
      emojiLabel: "AI Job Search Assistant",
      bgColorClass: "bg-accent-primary/20",
      technologies: [
        "TypeScript",
        "Flask",
        "OpenAI",
        "Google Search API",
        "NoSQL",
      ],
      projectLink: "https://github.com/ishaan000/Seeker",
      sourceLink: "https://github.com/ishaan000/Seeker",
    },
    {
      title: "Footprint AI",
      subtitle: "AI Climate Action Coach",
      description:
        "An AI-powered climate coach that tracks your carbon footprint and delivers personalized sustainability recommendations.",
      emoji: "🌍",
      emojiLabel: "AI Climate Coach",
      bgColorClass: "bg-accent-secondary/20",
      technologies: [
        "Next.js",
        "TypeScript",
        "Perplexity Sonar API",
        "PostgreSQL",
        "Redis",
        "Docker",
      ],
      projectLink: "https://footprint-ai.vercel.app/",
      sourceLink: "https://github.com/ishaan000/footprint-ai",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/ishaan000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-accent-primary text-accent-primary rounded-lg font-medium transition-all hover:bg-accent-primary hover:text-white hover:shadow-md transform hover:-translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Project card component
function ProjectCard({ project }: { project: ProjectItem }) {
  const {
    title,
    subtitle,
    description,
    emoji,
    emojiLabel,
    bgColorClass,
    technologies,
    projectLink,
    sourceLink,
  } = project;

  // Handle card click to navigate to the main project link
  const handleCardClick = () => {
    const link = projectLink || sourceLink;
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-black/30 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all cursor-pointer flex flex-col card-glow"
    >
      <div
        className={`h-48 ${bgColorClass} flex items-center justify-center text-center p-4`}
      >
        <div>
          <span className="text-4xl">{emoji}</span>
          <h4 className="mt-2">{emojiLabel}</h4>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <h4 className="text-sm text-accent-primary/80 mb-3">{subtitle}</h4>
        <p className="text-text-secondary mb-4">{description}</p>
        <div className="flex gap-2 mb-4 flex-wrap">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-accent-primary/20 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto pt-3 relative z-10">
          {projectLink && (
            <a
              href={projectLink}
              className="px-3 py-1.5 border-2 border-accent-primary text-accent-primary rounded-lg font-medium flex items-center transition-all hover:bg-accent-primary hover:text-white hover:shadow-md transform hover:-translate-y-0.5"
              onClick={(e) => e.stopPropagation()} // Prevent triggering the parent onClick
              aria-label="View Project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View Project
            </a>
          )}
          {sourceLink && (
            <a
              href={sourceLink}
              className="px-3 py-1.5 border-2 border-accent-secondary text-accent-secondary rounded-lg font-medium flex items-center transition-all hover:bg-accent-secondary hover:text-white hover:shadow-md transform hover:-translate-y-0.5"
              onClick={(e) => e.stopPropagation()} // Prevent triggering the parent onClick
              aria-label="View Source Code"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

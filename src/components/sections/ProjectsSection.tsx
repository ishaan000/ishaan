"use client";
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
      title: "Git Guide",
      subtitle: "Github Knowledge Interface",
      description:
        "An interactive and modern guide to mastering Git. Developers learn Git through an engaging and interactive interface.",
      emoji: "📖",
      emojiLabel: "Git Guide",
      bgColorClass: "bg-accent-primary/20",
      technologies: [
        "React",
        "TypeScript",
        "Material UI",
        "Framer Motion",
        "Node.js",
      ],
      projectLink: "https://git-guide-xi.vercel.app/",
      sourceLink: "https://github.com/ishaan000/git-guide",
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
            <ProjectCard key={index} project={project} />
          ))}
        </div>
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
      className="bg-black/30 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all cursor-pointer"
    >
      <div
        className={`h-48 ${bgColorClass} flex items-center justify-center text-center p-4`}
      >
        <div>
          <span className="text-4xl">{emoji}</span>
          <h4 className="mt-2">{emojiLabel}</h4>
        </div>
      </div>
      <div className="p-6">
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
        <div className="flex gap-4 mt-3 relative z-10">
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

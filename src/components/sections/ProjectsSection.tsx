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
      title: "FootPrint",
      subtitle: "Climate Impact Engine",
      description:
        "AI-assisted personal climate suggestion engine that tracks CO₂ emissions and provides eco-friendly recommendations.",
      emoji: "🌱",
      emojiLabel: "Climate Impact Engine",
      bgColorClass: "bg-accent-secondary/20",
      technologies: [
        "Next.js",
        "Perplexity Sonar",
        "TypeScript",
        "Material UI",
        "Vector DB",
        "Supabase",
      ],
      projectLink: "https://footprint-ai.vercel.app/",
      sourceLink: "https://github.com/ishaan000/FootPrint",
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

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all">
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
        <div className="flex gap-4">
          {projectLink && (
            <a
              href={projectLink}
              className="text-accent-primary hover:underline"
            >
              View Project
            </a>
          )}
          {sourceLink && (
            <a
              href={sourceLink}
              className="text-accent-secondary hover:underline"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

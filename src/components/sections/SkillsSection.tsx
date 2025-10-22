// Types for our skill category data
interface SkillCategory {
  title: string;
  colorClass: string;
  skills: string[];
}

export default function SkillsSection() {
  // Skills data
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming",
      colorClass: "text-accent-primary",
      skills: ["Python", "TypeScript / JavaScript", "Go", "C++"],
    },
    {
      title: "AI & ML",
      colorClass: "text-accent-secondary",
      skills: [
        "OpenAI API",
        "LangChain",
        "Voice First Agents",
        "Prompt management and Self Tuning",
        "LiveKit",
      ],
    },
    {
      title: "Frontend",
      colorClass: "text-accent-primary",
      skills: ["Next.js", "React", "Tailwind CSS", "Material-UI", "Three.js"],
    },
    {
      title: "Backend",
      colorClass: "text-accent-secondary",
      skills: ["Node.js", "Express", "FastAPI", "GraphQL", "WebSockets"],
    },
    {
      title: "Databases",
      colorClass: "text-accent-primary",
      skills: ["PostgreSQL", "DynamoDB", "MySQL", "Supabase"],
    },
    {
      title: "Data Engineering",
      colorClass: "text-accent-secondary",
      skills: ["Spark", "Kafka", "Redis Queue", "ETL Pipelines"],
    },
    {
      title: "DevOps & Cloud",
      colorClass: "text-accent-primary",
      skills: [
        "AWS (EC2, S3, Lambda)",
        "Docker / Kubernetes",
        "Terraform",
        "GitHub Actions / CI/CD",
      ],
    },
    {
      title: "Other Skills",
      colorClass: "text-accent-secondary",
      skills: [
        "Agile Development",
        "AI-Powered UX",
        "HIPAA Compliance",
        "Test-Driven Development",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
}

// Skill card component
function SkillCard({ category }: { category: SkillCategory }) {
  const { title, colorClass, skills } = category;

  return (
    <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl">
      <h3 className={`text-xl font-bold mb-4 ${colorClass}`}>{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span
              className={`w-2 h-2 ${colorClass.replace(
                "text-",
                "bg-"
              )} rounded-full`}
            ></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

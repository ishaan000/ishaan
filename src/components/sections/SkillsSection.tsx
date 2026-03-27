"use client";
import { motion } from "framer-motion";

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
      title: "AI & Voice",
      colorClass: "text-accent-secondary",
      skills: [
        "Claude API",
        "OpenAI API",
        "LangChain",
        "LangFuse",
        "LiveKit",
        "Retell AI",
        "ElevenLabs",
        "Cartesia",
        "Hamming.ai",
      ],
    },
    {
      title: "AI Engineering",
      colorClass: "text-accent-primary",
      skills: [
        "LLM Orchestration",
        "Prompt Engineering",
        "LLM-as-Judge Evals",
        "Agent Design",
        "Voice Pipeline Architecture",
      ],
    },
    {
      title: "Frontend",
      colorClass: "text-accent-primary",
      skills: ["React", "Next.js", "Tailwind CSS", "Material-UI"],
    },
    {
      title: "Backend",
      colorClass: "text-accent-secondary",
      skills: ["Nest.js", "Node.js", "Express", "FastAPI", "GraphQL", "WebSockets"],
    },
    {
      title: "Communication & Integrations",
      colorClass: "text-accent-primary",
      skills: [
        "Twilio (SIP Trunking)",
        "Vonage (SMS)",
        "SendGrid (Email)",
        "Playwright (RPA/Automations)",
      ],
    },
    {
      title: "Databases",
      colorClass: "text-accent-secondary",
      skills: ["PostgreSQL", "DynamoDB", "MySQL", "Supabase", "MongoDB"],
    },
    {
      title: "DevOps & Cloud",
      colorClass: "text-accent-secondary",
      skills: [
        "AWS (EC2, S3, Lambda)",
        "Docker",
        "Kubernetes",
        "Terraform",
        "GitHub Actions",
        "CI/CD",
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
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <SkillCard category={category} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Skill card component
function SkillCard({ category }: { category: SkillCategory }) {
  const { title, colorClass, skills } = category;

  return (
    <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl card-glow transition-all">
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

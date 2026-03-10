// Types for our experience data
interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export default function ExperienceSection() {
  // Experience data
  const experiences: ExperienceItem[] = [
    {
      title: "Founding Engineer",
      company: "Paratus Health (YC W25)",
      period: "July 2025 - Present",
      responsibilities: [
        "Joining as the sole engineer at a Y Combinator healthcare startup meant owning everything from day one. The mission? AI voice agents that make healthcare communication faster and more human.",
        "I architected our voice-first infrastructure using LiveKit with a custom LLM orchestration layer, achieving sub-500ms response times. The platform now handles ~10K patient calls daily across 35+ clinics — including a pediatric after-hours system where accuracy is non-negotiable because a child's health could be at stake.",
        "I also built an internal Claude AI layer that lets the team create, clone, and refine voice agents without writing code. What used to take days of onboarding now takes hours. When you remove friction for both doctors and your own team, things scale fast.",
        "The full stack is Next.js, Express, Claude and OpenAI APIs, with LangFuse for prompt observability. The goal was never just to make AI work — it was to make AI work reliably when it matters most.",
      ],
    },
    {
      title: "Founding Engineer",
      company: "Cognovi",
      period: "July 2024 - June 2025",
      responsibilities: [
        "At Cognovi, I stepped in to tackle a big challenge: making mental health AI feel more trustworthy and insightful. We were building tools that detect cognitive distortions in user input — a powerful idea, but the outputs weren’t always consistent or reliable.",
        "I designed and deployed an agentic system that improved how the AI interprets and responds to emotional content, leading to more meaningful journaling experiences. I also built a custom evaluation framework to measure AI performance — not just in accuracy, but in emotional tone and helpfulness.",
        "On the product side, I led full-stack development (Next.js frontend, Express + OpenAI backend), and containerized the app for rapid deployment on AWS, cutting dev time in half.",
      ],
    },
    {
      title: "Full Stack Data Engineer (Contract)",
      company: "Albert Invent",
      period: "October 2023 - July 2024",
      responsibilities: [
        "Albert was growing fast — with distributed teams shipping features rapidly, UI consistency became a bottleneck. Developers were duplicating effort, and product quality started to drift.",
        "I partnered with the CTO to build “Maya,” a shared frontend framework using HTML web components and vanilla JS, giving the team a clean, reusable system that cut dev time in half and brought design coherence across the app.",
        "Alongside that, I built backend services in Go and optimized data pipelines using Ray and S3, reducing processing errors and speeding up retrieval across Postgres and DynamoDB.",
      ],
    },
    {
      title: "Full Stack Engineer",
      company: "SWAY",
      period: "September 2022 - October 2023",
      responsibilities: [
        "When I joined SWAY, the product was in its early stages and needed clear technical direction. I worked closely with the CEO to shape the foundation — from designing the database schema to building modular components and crafting a cohesive frontend experience.",
        "Using React, TypeScript, and GraphQL, I optimized key flows that improved performance by 40% and significantly reduced query times. These upgrades played a big role in growing user engagement and satisfaction.",
      ],
    },
    {
      title: "Data Engineer",
      company: "Virtusa",
      period: "May 2019 - August 2021",
      responsibilities: [
        "Virtusa’s machine learning teams needed cleaner, faster data — but the pipelines were breaking under scale. I designed Spark-based ETL flows and Kafka queues that could handle 2x more load, then restructured their AWS stack to support real-time workflows.",
        "The result: faster data ingestion, more reliable model training, and happier analysts.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
          Experience
        </h2>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Experience card component
function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  const { title, company, period, responsibilities } = experience;

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-8">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-accent-primary">{company}</p>
        </div>
        <p className="text-text-secondary mt-2 md:mt-0">{period}</p>
      </div>
      <ul className="list-disc pl-5 space-y-2 text-text-secondary">
        {responsibilities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

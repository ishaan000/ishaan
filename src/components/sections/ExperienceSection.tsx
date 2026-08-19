"use client";
import { motion } from "framer-motion";

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
      title: "Product Engineer",
      company: "Preveta",
      period: "May 2026 - Present",
      responsibilities: [
        "I joined Preveta's AI engine team to scale voice agents that guide oncology, urology, and GI patients through care journeys, where a missed follow-up can cost a life.",
        "I built out Langfuse observability across our voice agents, giving the team visibility into every trace, token, and cost per call.",
        "I integrated automated regression testing through Hamming.ai, giving the team the confidence to ship Agent Kate, our first fully automated patient outreach agent, to production.",
      ],
    },
    {
      title: "Founding Engineer",
      company: "Paratus Health (YC W25)",
      period: "July 2025 - April 2026",
      responsibilities: [
        "Joining as the sole engineer at a Y Combinator healthcare startup meant owning everything from day one: AI voice agents that make healthcare communication faster and more human.",
        "I architected the voice-first infrastructure with LiveKit, Twilio SIP trunking, and multiple voice providers to hit sub-500ms response times. The platform handled ~10K patient calls a day across 35+ clinics, including a pediatric after-hours system where accuracy was non-negotiable.",
        "I designed an end-to-end agent iteration pipeline: client feedback through Granola, piped into Claude Code via MCP, with prompt versioning in Langfuse and simulated testing through Hamming.ai. This cut new client onboarding from days to hours.",
      ],
    },
    {
      title: "Founding Engineer",
      company: "Cognovi",
      period: "July 2024 - June 2025",
      responsibilities: [
        "I stepped in to make mental health AI more trustworthy, designing an agentic system that improved how the AI interpreted and responded to emotional content, for more meaningful journaling experiences.",
        "I built a custom evaluation framework to measure AI performance beyond accuracy, covering emotional tone and helpfulness. I led full-stack development (Next.js, Express, OpenAI) and containerized the app for AWS, cutting dev time in half.",
      ],
    },
    {
      title: "Full Stack Data Engineer",
      company: "Albert Invent",
      period: "October 2023 - July 2024",
      responsibilities: [
        "I partnered with the CTO to build “Maya,” a shared frontend framework using web components and vanilla JS. It cut dev time in half and brought design coherence across a fast-growing, distributed team.",
        "I built backend services in Go and optimized data pipelines with Ray and S3, reducing processing errors and speeding up retrieval across Postgres and DynamoDB.",
      ],
    },
    {
      title: "Full Stack Engineer",
      company: "SWAY",
      period: "September 2022 - October 2023",
      responsibilities: [
        "I joined SWAY early and worked with the CEO to shape the technical foundation: database schema, modular components, and a cohesive frontend.",
        "Using React, TypeScript, and GraphQL, I optimized key flows, improving performance by 40% and cutting query times. This drove stronger user engagement.",
      ],
    },
    {
      title: "Data Engineer",
      company: "Virtusa",
      period: "May 2019 - August 2021",
      responsibilities: [
        "Virtusa's ML teams needed cleaner, faster data. I designed Spark-based ETL flows and Kafka queues that handled 2x more load, and restructured the AWS stack for real-time workflows.",
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ExperienceCard experience={exp} />
            </motion.div>
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
    <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-8 card-glow transition-all">
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

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
      title: "Founding Engineer (Contract)",
      company: "Cognovi",
      period: "July 2024 - Present",
      responsibilities: [
        "Drove design and deployment of agentic AI systems to analyze cognitive distortions, improving AI mental health tools",
        "Developed a robust evaluation framework for assessing AI-generated outputs, ensuring reliability and consistency in AI behavior",
        "Co-led product development across frontend (Next.js, MUI) and backend (Express, OpenAI API), improving user engagement and system reliability",
        "Containerized infrastructure with Docker and AWS, reducing deployment time by 50%",
      ],
    },
    {
      title: "Full Stack Data Engineer (Contract)",
      company: "Albert Invent",
      period: "October 2023 - July 2024",
      responsibilities: [
        "Developed Maya with the CTO, an internal frontend framework using HTML web components & JS, boosting dev efficiency by 50%",
        "Developed backend services in Go with Postgres and DynamoDB, optimizing data retrieval by 40%",
        "Built secure ETL pipelines with Python, Ray, and AWS S3, reducing data processing errors by 25%",
      ],
    },
    {
      title: "Full Stack Engineer",
      company: "SWAY",
      period: "September 2022 - October 2023",
      responsibilities: [
        "Partnered with the CEO to establish foundational web architecture, components, and UX design, which drove a 35% increase in site traffic and a 20% improvement in user satisfaction",
        "Optimized the app using React and TypeScript, increasing speed by 40%",
        "Integrated GraphQL into the tech stack, reducing query time by 25% and increasing data throughput",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "ServiceNow",
      period: "May 2022 - August 2022",
      responsibilities: [
        "Optimized the search experience for ServiceNow end-users by refactoring the filtering and sorting algorithms using JavaScript, resulting in highly relevant query results and reducing testing time by 50%",
        "Integrated ServiceNow's Automated Testing Framework with Jenkins, enhancing the automation process",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-12 bg-black/20 backdrop-blur-sm"
    >
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

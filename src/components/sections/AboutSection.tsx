import Image from "next/image";

export default function AboutSection() {
  // Education data
  const education = [
    {
      degree: "MS, Software Engineering",
      years: "2021 - 2023",
      institution: "San Jose State University, San Jose, CA",
    },
    {
      degree: "BE, Computer Science",
      years: "2016 - 2020",
      institution: "Rajiv Gandhi Technical University, India",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row gap-12 items-centerbg-black/20 backdrop-blur-sm">
        <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-accent-primary">
          <Image
            src="/profile.jpeg"
            alt="Ishaan Bhalla"
            fill
            sizes="(max-width: 768px) 100vw, 256px"
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-2xl">
          <p className="text-lg mb-4">
            I&apos;m a Full-Stack Engineer and independent consultant passionate
            about leveraging technology to create meaningful social impact. With
            expertise in agentic AI systems, scalable cloud architectures, and
            rapid end-to-end product development, I excel at transforming
            concepts into functional MVPs within tight timelines.
          </p>
          <p className="text-lg mb-4">
            As a freelance engineer, I specialize in helping startups and
            established companies quickly validate ideas through well-engineered
            prototypes and scalable solutions. Currently, I&apos;m engaged as a
            Founding Engineer at Cognovi on a contract basis, where I drive the
            design and deployment of agentic AI systems that improve mental
            health tools. Previously, I contributed to Albert Invent and SWAY as
            an engineer, developing innovative solutions across the full stack
            that created tangible business value.
          </p>
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-bold text-accent-secondary">
              Education
            </h3>
            {education.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.degree}</span>
                  <span className="text-text-secondary">{item.years}</span>
                </div>
                <p className="text-text-secondary">{item.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

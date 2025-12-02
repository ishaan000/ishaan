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
            I&apos;m a Full-Stack AI Engineer driven by curiosity, creativity,
            and a deep belief in tech&apos;s potential for good. With a focus on
            agentic voice systems, scalable cloud architectures, and fast,
            end-to-end product development, I thrive on turning early concepts
            into real, working products.
          </p>
          <p className="text-lg mb-4">
            Over the years, I&apos;ve collaborated with early-stage startups and
            growing teams, often stepping into multiple roles across design,
            engineering, and product. That range has shaped how I approach
            problems—balancing speed with depth, and always building with
            intention and impact in mind.
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

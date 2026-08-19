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
            I&apos;m a full-stack engineer who builds AI products end-to-end,
            from early architecture decisions to production systems that
            serve real users every day.
          </p>
          <p className="text-lg mb-4">
            Right now, I specialize in voice AI and agentic systems as a
            Product Engineer at Preveta. Before that, I built the entire
            voice platform at Paratus Health (YC W25) as the sole engineer,
            scaling to 10K+ calls a day across 35+ clinics. I&apos;ve usually
            been the first engineer on the team, and I build best close to
            the problem and the people it affects.
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

export default function AboutSection() {
  // Education data
  const education = [
    {
      degree: "MS, Software Engineering",
      years: "2021 - 2023",
      institution: "San Jose State University, San Jose, CA"
    },
    {
      degree: "BE, Computer Science",
      years: "2016 - 2020",
      institution: "Rajiv Gandhi Technical University, India"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-accent-primary">
          {/* Replace with your actual profile image */}
          <div className="w-full h-full bg-accent-primary/30 flex items-center justify-center text-lg">
            Profile Image
          </div>
        </div>
        <div className="max-w-2xl">
          <p className="text-lg mb-4">
            I&apos;m a Full-Stack Engineer passionate about building AI-first
            products that solve real-world problems. With extensive experience
            in agentic systems, scalable cloud architectures, and rapid
            end-to-end product development, I thrive in fast-paced
            environments and enjoy driving impact from 0 to 1.
          </p>
          <p className="text-lg mb-4">
            Currently, I&apos;m a Founding Engineer at Cognovi, where I drive
            the design and deployment of agentic AI systems to analyze
            cognitive distortions and improve AI mental health tools.
            Previously, I worked at Albert Invent and SWAY, developing
            innovative solutions across the full stack.
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
                <p className="text-text-secondary">
                  {item.institution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

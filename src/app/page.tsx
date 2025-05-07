export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="w-full py-4 px-6 md:px-12 flex justify-between items-center backdrop-blur-md bg-black/10 sticky top-0 z-10">
        <div className="text-xl font-bold gradient-text">Ishaan Bhalla</div>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          id="mobile-menu-button"
        >
          <span className="w-6 h-0.5 bg-white rounded-full transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-white rounded-full transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-white rounded-full transition-all duration-300"></span>
        </button>
        {/* Desktop navigation */}
        <div className="hidden md:flex gap-6">
          <a
            href="#about"
            className="hover:text-accent-primary transition-colors"
          >
            About
          </a>
          <a
            href="#experience"
            className="hover:text-accent-primary transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-accent-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-accent-primary transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-accent-primary transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Mobile navigation overlay - moved outside the nav to prevent layout issues */}
      <div
        id="mobile-menu"
        className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 items-center justify-center hidden"
      >
        <button
          className="absolute top-4 right-6 p-2"
          aria-label="Close menu"
          id="close-menu-button"
        >
          <span className="block w-6 h-0.5 bg-white rotate-45 absolute"></span>
          <span className="block w-6 h-0.5 bg-white -rotate-45 absolute"></span>
        </button>
        <div className="flex flex-col items-center gap-8 text-xl">
          <a
            href="#about"
            className="hover:text-accent-primary transition-colors"
          >
            About
          </a>
          <a
            href="#experience"
            className="hover:text-accent-primary transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-accent-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-accent-primary transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-accent-primary transition-colors"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-[500px] h-[500px] rounded-full bg-accent-primary blur-[150px]"></div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Ishaan Bhalla
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl text-text-secondary mb-8">
          Full-Stack Engineer passionate about building AI-first products that
          solve real-world problems
        </p>
        <div className="flex gap-4 flex-wrap justify-center mb-8">
          <span className="px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full text-text-secondary flex items-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center">📍</span>
            San Francisco
          </span>
          <span className="px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full text-text-secondary flex items-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center">📱</span>
            +1(669)609-3553
          </span>
          <span className="px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full text-text-secondary flex items-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center">📧</span>
            ibhalla1998@gmail.com
          </span>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-accent-primary hover:bg-accent-primary/80 text-white rounded-full transition-all transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-accent-secondary text-accent-secondary hover:bg-accent-secondary/10 rounded-full transition-all transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
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
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">MS, Software Engineering</span>
                  <span className="text-text-secondary">2021 - 2023</span>
                </div>
                <p className="text-text-secondary">
                  San Jose State University, San Jose, CA
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">BE, Computer Science</span>
                  <span className="text-text-secondary">2016 - 2020</span>
                </div>
                <p className="text-text-secondary">
                  Rajiv Gandhi Technical University, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
            {/* Cognovi */}
            <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Founding Engineer</h3>
                  <p className="text-accent-primary">Cognovi</p>
                </div>
                <p className="text-text-secondary mt-2 md:mt-0">
                  July 2024 - Present
                </p>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-text-secondary">
                <li>
                  Drove design and deployment of agentic AI systems to analyze
                  cognitive distortions, improving AI mental health tools
                </li>
                <li>
                  Developed a robust evaluation framework for assessing
                  AI-generated outputs, ensuring reliability and consistency in
                  AI behavior
                </li>
                <li>
                  Co-led product development across frontend (Next.js, MUI) and
                  backend (Express, OpenAI API), improving user engagement and
                  system reliability
                </li>
                <li>
                  Containerized infrastructure with Docker and AWS, reducing
                  deployment time by 50%
                </li>
              </ul>
            </div>

            {/* Albert Invent */}
            <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">
                    Full Stack Data Engineer
                  </h3>
                  <p className="text-accent-primary">Albert Invent</p>
                </div>
                <p className="text-text-secondary mt-2 md:mt-0">
                  October 2023 - July 2024
                </p>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-text-secondary">
                <li>
                  Developed Maya with the CTO, an internal frontend framework
                  using HTML web components & JS, boosting dev efficiency by 50%
                </li>
                <li>
                  Developed backend services in Go with Postgres and DynamoDB,
                  optimizing data retrieval by 40%
                </li>
                <li>
                  Built secure ETL pipelines with Python, Ray, and AWS S3,
                  reducing data processing errors by 25%
                </li>
              </ul>
            </div>

            {/* SWAY */}
            <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Full Stack Engineer</h3>
                  <p className="text-accent-primary">SWAY</p>
                </div>
                <p className="text-text-secondary mt-2 md:mt-0">
                  September 2022 - October 2023
                </p>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-text-secondary">
                <li>
                  Partnered with the CEO to establish foundational web
                  architecture, components, and UX design, which drove a 35%
                  increase in site traffic and a 20% improvement in user
                  satisfaction
                </li>
                <li>
                  Optimized the app using React and TypeScript, increasing speed
                  by 40%
                </li>
                <li>
                  Integrated GraphQL into the tech stack, reducing query time by
                  25% and increasing data throughput
                </li>
              </ul>
            </div>

            {/* ServiceNow */}
            <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">
                    Software Engineer Intern
                  </h3>
                  <p className="text-accent-primary">ServiceNow</p>
                </div>
                <p className="text-text-secondary mt-2 md:mt-0">
                  May 2022 - August 2022
                </p>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-text-secondary">
                <li>
                  Optimized the search experience for ServiceNow end-users by
                  refactoring the filtering and sorting algorithms using
                  JavaScript, resulting in highly relevant query results and
                  reducing testing time by 50%
                </li>
                <li>
                  Integrated ServiceNow&apos;s Automated Testing Framework with
                  Jenkins, enhancing the automation process
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 md:px-12 bg-black/20 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 - Seeker */}
            <div className="bg-black/30 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all">
              <div className="h-48 bg-accent-primary/20 flex items-center justify-center text-center p-4">
                <div>
                  <span className="text-4xl">🔍</span>
                  <h4 className="mt-2">AI Job Search Assistant</h4>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Seeker</h3>
                <p className="text-text-secondary mb-4">
                  An agent-powered job search platform that streamlines job
                  discovery and outreach using OpenAI.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2 py-1 bg-accent-primary/20 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-accent-primary/20 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-accent-primary/20 rounded-full text-sm">
                    Flask
                  </span>
                  <span className="px-2 py-1 bg-accent-primary/20 rounded-full text-sm">
                    GPT-4
                  </span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-accent-primary hover:underline">
                    View Project
                  </a>
                  <a href="#" className="text-accent-secondary hover:underline">
                    Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2 - FootPrint */}
            <div className="bg-black/30 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all">
              <div className="h-48 bg-accent-secondary/20 flex items-center justify-center text-center p-4">
                <div>
                  <span className="text-4xl">🌱</span>
                  <h4 className="mt-2">Climate Impact Engine</h4>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">FootPrint</h3>
                <p className="text-text-secondary mb-4">
                  AI-powered personal climate suggestion engine that tracks CO₂
                  emissions and provides eco-friendly recommendations.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2 py-1 bg-accent-primary/20 rounded-full text-sm">
                    Next.js 15
                  </span>
                  <span className="px-2 py-1 bg-accent-primary/20 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-accent-primary/20 rounded-full text-sm">
                    Material UI
                  </span>
                  <span className="px-2 py-1 bg-accent-primary/20 rounded-full text-sm">
                    Vector DB
                  </span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-accent-primary hover:underline">
                    View Project
                  </a>
                  <a href="#" className="text-accent-secondary hover:underline">
                    Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 3 - Healthcare Solution */}
            <div className="bg-black/30 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all">
              <div className="h-48 bg-accent-primary/20 flex items-center justify-center text-center p-4">
                <div>
                  <span className="text-4xl">🏥</span>
                  <h4 className="mt-2">Healthcare Onboarding</h4>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Healthcare Solution</h3>
                <p className="text-text-secondary mb-4">
                  Client intake portal for therapy services, automating patient
                  demographics collection, insurance verification, and payment
                  processing.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2 py-1 bg-accent-primary/20 rounded-full text-sm">
                    HIPAA Compliant
                  </span>
                  <span className="px-2 py-1 bg-accent-primary/20 rounded-full text-sm">
                    Stripe API
                  </span>
                  <span className="px-2 py-1 bg-accent-primary/20 rounded-full text-sm">
                    Secure Data
                  </span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-accent-primary hover:underline">
                    View Project
                  </a>
                  <a href="#" className="text-accent-secondary hover:underline">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Skill Categories */}
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-accent-primary">
              Programming
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                Python
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                TypeScript / JavaScript
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                Go
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                C++
              </li>
            </ul>
          </div>

          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-accent-secondary">
              AI & ML
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-secondary rounded-full"></span>
                OpenAI API
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-secondary rounded-full"></span>
                LangChain
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-secondary rounded-full"></span>
                Agentic AI
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-secondary rounded-full"></span>
                Vector Embeddings
              </li>
            </ul>
          </div>

          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-accent-primary">
              Frontend
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                Next.js / React
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                Material-UI
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                Web Components
              </li>
            </ul>
          </div>

          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-accent-secondary">
              Backend
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-secondary rounded-full"></span>
                Node.js / Express
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-secondary rounded-full"></span>
                FastAPI
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-secondary rounded-full"></span>
                GraphQL
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-secondary rounded-full"></span>
                WebSockets
              </li>
            </ul>
          </div>

          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-accent-primary">
              Databases
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                PostgreSQL
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                DynamoDB
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                MongoDB
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                MySQL
              </li>
            </ul>
          </div>

          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-accent-secondary">
              Data Engineering
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-secondary rounded-full"></span>
                Spark
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-secondary rounded-full"></span>
                Kafka
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-secondary rounded-full"></span>
                Redis Queue
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-secondary rounded-full"></span>
                ETL Pipelines
              </li>
            </ul>
          </div>

          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-accent-primary">
              DevOps & Cloud
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                AWS (EC2, S3, Lambda)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                Docker / Kubernetes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                Terraform
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                GitHub Actions / CI/CD
              </li>
            </ul>
          </div>

          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-accent-secondary">
              Other Skills
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-secondary rounded-full"></span>
                Agile Development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-secondary rounded-full"></span>
                AI-Powered UX
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-secondary rounded-full"></span>
                HIPAA Compliance
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-secondary rounded-full"></span>
                Test-Driven Development
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 md:px-12 bg-black/20 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-accent-primary/20 rounded-full">
                    📧
                  </span>
                  ibhalla1998@gmail.com
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-accent-primary/20 rounded-full">
                    📱
                  </span>
                  +1(669)609-3553
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-accent-primary/20 rounded-full">
                    📍
                  </span>
                  San Francisco, CA
                </p>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">Social Links</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ishaanbhalla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-accent-primary/20 rounded-full hover:bg-accent-primary/40 transition-colors"
                >
                  <span>GH</span>
                </a>
                <a
                  href="https://linkedin.com/in/ishaanbhalla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-accent-primary/20 rounded-full hover:bg-accent-primary/40 transition-colors"
                >
                  <span>LI</span>
                </a>
                <a
                  href="https://twitter.com/ishaanbhalla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-accent-primary/20 rounded-full hover:bg-accent-primary/40 transition-colors"
                >
                  <span>TW</span>
                </a>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-md p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1 text-text-secondary"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-black/30 border border-accent-primary/30 rounded-lg focus:outline-none focus:border-accent-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-text-secondary"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-black/30 border border-accent-primary/30 rounded-lg focus:outline-none focus:border-accent-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 text-text-secondary"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-black/30 border border-accent-primary/30 rounded-lg focus:outline-none focus:border-accent-primary"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-accent-primary hover:bg-accent-primary/80 text-white rounded-lg transition-all transform hover:scale-105 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 bg-black/40 backdrop-blur-md text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-text-secondary">
            © {new Date().getFullYear()} Ishaan Bhalla. All rights reserved.
          </p>
          <p className="text-sm mt-2 text-text-secondary/70">
            Built using NextJS, Tailwind and TypeScript
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="#about"
              className="text-sm text-text-secondary/70 hover:text-accent-primary transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm text-text-secondary/70 hover:text-accent-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm text-text-secondary/70 hover:text-accent-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-sm text-text-secondary/70 hover:text-accent-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm text-text-secondary/70 hover:text-accent-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

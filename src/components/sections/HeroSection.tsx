export default function HeroSection() {
  return (
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
        <ContactInfo icon="📍" text="San Francisco" />
        <ContactInfo icon="📱" text="+1(669)609-3553" />
        <ContactInfo icon="📧" text="ibhalla1998@gmail.com" />
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
  );
}

// Helper component for contact info items
function ContactInfo({ icon, text }: { icon: string; text: string }) {
  return (
    <span className="px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full text-text-secondary flex items-center gap-2">
      <span className="w-4 h-4 flex items-center justify-center">{icon}</span>
      {text}
    </span>
  );
}

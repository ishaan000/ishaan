"use client";
export default function HeroSection() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4 relative">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-[500px] h-[500px] rounded-full bg-accent-primary blur-[150px]"></div>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
        Ishaan Bhalla
      </h1>
      <p className="text-xl md:text-2xl max-w-3xl text-text-secondary mb-8">
        Full-Stack Engineer & Independent Consultant specializing in rapid MVP
        development and AI-first solutions that drive positive change
      </p>
      <div className="flex gap-4 flex-wrap justify-center mb-8">
        <ContactInfo icon="📍" text="San Francisco" />
        <ContactInfo icon="📱" text="+1(669)609-3553" />
        <ContactInfo icon="📧" text="ibhalla1998@gmail.com" />
      </div>

      {/* Half moon scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button
          onClick={scrollToNextSection}
          className="w-12 h-6 bg-transparent border-2 border-accent-primary rounded-t-full overflow-hidden cursor-pointer hover:bg-accent-primary/20 transition-all transform hover:scale-110"
          aria-label="Scroll down"
        >
          <div className="w-full h-full flex justify-center items-center">
            <svg
              width="16"
              height="8"
              viewBox="0 0 16 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L8 7L15 1"
                stroke="var(--accent-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
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

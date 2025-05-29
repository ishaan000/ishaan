"use client";
import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 flex items-center justify-center opacity-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="w-[500px] h-[500px] rounded-full bg-accent-primary blur-[150px]"></div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Ishaan Bhalla
        </h1>
      </motion.div>
      
      <motion.p 
        className="text-xl md:text-2xl max-w-3xl text-text-secondary mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Full-Stack Engineer & Independent Consultant specializing in rapid MVP
        development and AI-first solutions that drive positive change
      </motion.p>
      
      <motion.div 
        className="flex gap-4 flex-wrap justify-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <ContactInfo icon="📍" text="San Francisco" />
        <ContactInfo icon="📱" text="+1(669)609-3553" />
        <ContactInfo icon="📧" text="ibhalla1998@gmail.com" />
      </motion.div>

      {/* Half moon scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.button
          onClick={scrollToNextSection}
          className="w-12 h-6 bg-transparent border-2 border-accent-primary rounded-t-full overflow-hidden cursor-pointer hover:bg-accent-primary/20 transition-all transform"
          aria-label="Scroll down"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
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
        </motion.button>
      </motion.div>
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

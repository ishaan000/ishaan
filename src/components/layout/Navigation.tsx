"use client";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Handle body overflow
  useEffect(() => {
    
    // Prevent scrolling when menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Navigation links array for DRY code
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="w-full py-4 px-6 md:px-12 flex justify-between items-center backdrop-blur-md bg-black/10 sticky top-0 z-10">
        <div className="text-xl font-bold gradient-text scroll-to-top cursor-pointer">
          Ishaan Bhalla
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 z-20"
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Desktop navigation */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-accent-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile navigation overlay with smooth animation */}
      <div 
        className={`fixed inset-0 bg-background/95 backdrop-blur-lg z-50 flex items-center justify-center transition-all duration-400 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible pointer-events-none scale-95'}`}
      >
          <button
            className="absolute top-4 right-6 p-2 transition-all duration-300 ease-in-out hover:rotate-90"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="block w-6 h-0.5 bg-white rotate-45 absolute transition-all"></span>
            <span className="block w-6 h-0.5 bg-white -rotate-45 absolute transition-all"></span>
          </button>
          <div className="flex flex-col items-center gap-8 text-xl">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-accent-primary transition-colors transform hover:scale-110"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      
    </>
  );
}

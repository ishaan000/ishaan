"use client";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Toggle mobile menu
    const handleMobileMenuToggle = () => {
      const mobileMenu = document.getElementById("mobile-menu");
      const body = document.body;

      if (mobileMenu) {
        if (isMobileMenuOpen) {
          mobileMenu.classList.remove("hidden");
          mobileMenu.classList.add("flex");
          body.classList.add("overflow-hidden");
        } else {
          mobileMenu.classList.add("hidden");
          mobileMenu.classList.remove("flex");
          body.classList.remove("overflow-hidden");
        }
      }
    };

    handleMobileMenuToggle();

    // Cleanup
    return () => {
      document.body.classList.remove("overflow-hidden");
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
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-white rounded-full transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-white rounded-full transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-white rounded-full transition-all duration-300"></span>
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

      {/* Mobile navigation overlay */}
      <div
        id="mobile-menu"
        className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 items-center justify-center hidden"
      >
        <button
          className="absolute top-4 right-6 p-2"
          aria-label="Close menu"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="block w-6 h-0.5 bg-white rotate-45 absolute"></span>
          <span className="block w-6 h-0.5 bg-white -rotate-45 absolute"></span>
        </button>
        <div className="flex flex-col items-center gap-8 text-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-accent-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

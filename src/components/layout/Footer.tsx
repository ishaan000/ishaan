export default function Footer() {
  // Navigation links array for DRY code
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="py-8 px-6 md:px-12 bg-black/40 backdrop-blur-md text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-text-secondary">
          © {new Date().getFullYear()} Ishaan Bhalla. All rights reserved.
        </p>
        <p className="text-sm mt-2 text-text-secondary/70">
          Built using NextJS, Tailwind and TypeScript
        </p>
        <div className="flex justify-center gap-6 mt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary/70 hover:text-accent-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

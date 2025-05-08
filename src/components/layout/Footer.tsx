export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 bg-black/40 backdrop-blur-md text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-text-secondary">
          © {new Date().getFullYear()} Ishaan Bhalla. All rights reserved.
        </p>
        <p className="text-sm mt-2 text-text-secondary/70">
          Crafted with NextJS, Tailwind CSS, and TypeScript
        </p>
      </div>
    </footer>
  );
}

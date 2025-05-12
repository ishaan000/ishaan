export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-12 bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-md border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side with copyright */}
          <div className="text-left">
            <p className="text-text-secondary font-medium">
              © {new Date().getFullYear()} Ishaan Bhalla
            </p>
            <p className="text-sm mt-1 text-text-secondary/70">
              All rights reserved
            </p>
          </div>

          {/* Center with tech stack */}
          <div className="text-center">
            <p className="text-sm text-text-secondary/70">
              Crafted with
              <span className="px-1.5 py-0.5 mx-1 bg-black/30 rounded-md text-text-secondary inline-flex items-center">
                <span className="mr-1">⚛️</span>NextJS
              </span>
              <span className="px-1.5 py-0.5 mx-1 bg-black/30 rounded-md text-text-secondary inline-flex items-center">
                <span className="mr-1">🎨</span>Tailwind
              </span>
              <span className="px-1.5 py-0.5 mx-1 bg-black/30 rounded-md text-text-secondary inline-flex items-center">
                <span className="mr-1">🔷</span>TypeScript
              </span>
            </p>
          </div>

          {/* Right side with source code link */}
          <div className="text-right">
            <a
              href="https://github.com/ishaan000/ishaan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-text-secondary hover:text-accent-primary transition-all duration-300 border border-white/10 hover:border-accent-primary/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className=""
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

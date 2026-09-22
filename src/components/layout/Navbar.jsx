
export default function Navbar({ dark, setDark }) {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-700">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap items-center justify-between gap-3">

        {/* Logo */}
        <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-violet-600 to-blue-500 text-transparent bg-clip-text">
          Sharlene.dev
        </h1>

        {/* Links */}
        <div className="flex w-full sm:w-auto items-center justify-between gap-2">

          <div className="flex flex-wrap items-center gap-1 text-xs sm:text-sm">
            <a
              href="/#about"
              className="rounded-full px-3 py-2 font-medium text-slate-600 transition hover:bg-violet-50 hover:text-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-violet-300"
            >
              About
            </a>
            <a
              href="/#projects"
              className="rounded-full px-3 py-2 font-medium text-slate-600 transition hover:bg-violet-50 hover:text-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-violet-300"
            >
              Projects
            </a>
            <a
              href="/#contact"
              className="rounded-full px-3 py-2 font-medium text-slate-600 transition hover:bg-violet-50 hover:text-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-violet-300"
            >
              Contact
            </a>
            <a
              href="/certifications"
              className="rounded-full px-3 py-2 font-medium text-slate-600 transition hover:bg-violet-50 hover:text-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-violet-300"
            >
              Certifications
            </a>
          </div>

          {/* Dark mode button */}
          <button
            onClick={() => setDark(!dark)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="
              sm:ml-3 grid size-9 shrink-0 place-items-center rounded-full
              border border-slate-200 bg-white/80 text-base shadow-sm
              transition duration-300 hover:-translate-y-0.5 hover:border-violet-400
              hover:bg-violet-50 hover:shadow-md
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500
              dark:border-slate-700 dark:bg-slate-800/80 dark:hover:bg-slate-700
            "
          >
            {dark ? "☀️" : "🌙"}
          </button>

        </div>

      </div>

    </nav>
  );
}
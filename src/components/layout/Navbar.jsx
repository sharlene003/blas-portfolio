
export default function Navbar({ dark, setDark }) {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-700">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-blue-500 text-transparent bg-clip-text">
          Sharlene.dev
        </h1>

        {/* Links */}
        <div className="flex items-center gap-2">

          <div className="flex gap-2 text-sm">
            <a href="/#about" className="hover:text-violet-500">About</a>
            <a href="/#projects" className="hover:text-violet-500">Projects</a>
            <a href="/#contact" className="hover:text-violet-500">Contact</a>
            <a href="certifications" className="hover:text-violet-500">Certifications</a>
          </div>

          {/* Dark mode button */}
          <button
            onClick={() => setDark(!dark)}
            className="
              ml-4 px-3 py-1 rounded-full
              border border-slate-300 dark:border-slate-600
              text-sm
              hover:border-violet-500 transition
            "
          >
            {dark ? "☀️" : "🌙"}
          </button>

        </div>

      </div>

    </nav>
  );
}
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Sharlene Blas
            </h2>

            <p className="mt-4 text-slate-400 leading-7">
              Frontend Developer passionate about building clean,
              responsive, and user-friendly web applications using
              React, Vue.js, and modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-violet-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <a href="/#about" className="hover:text-violet-400 transition">
                  About
                </a>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="hover:text-violet-400 transition"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/certifications"
                  className="hover:text-violet-400 transition"
                >
                  Certifications
                </Link>
              </li>

              <li>
                <Link to="/#contact" className="hover:text-violet-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Let's Connect
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:blas.sharlene@gmail.com"
                className="flex items-center gap-3 hover:text-violet-400 transition"
              >
                <FaEnvelope />
                blas.sharlene@gmail.com
              </a>

              <a
                href="https://github.com/sharlene003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-violet-400 transition"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sharlene-blas-479a33184"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-violet-400 transition"
              >
                <FaLinkedin />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © {year} Sharlene Blas. All rights reserved.
          </p>

          <p className="flex items-center gap-2 mt-4 md:mt-0">
            Built with React & Tailwind
            <FaHeart className="text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
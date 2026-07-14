import Skills from "./components/sections/Skills";
import { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Reveal from "./components/Reveal";
import ProjectsPage from "./pages/Projects";
import Gallery from "./pages/Gallery";
import BackToTopButton from "./components/reusables/back";
import { Routes, Route } from "react-router-dom";
import CV from "./pages/Cv";
import CertificationCard from "./pages/Certification";
import { useLocation } from "react-router-dom";
import Footer from "./components/layout/Footer";
export default function App() {
  const [dark, setDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div
      className={
        dark ? "dark bg-slate-900 text-white" : "bg-white text-slate-900"
      }
    >
      <Navbar dark={dark} setDark={setDark} />
      {location.pathname !== "/" && <BackToTopButton />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Reveal>
                <Hero />
              </Reveal>

              <Reveal>
                <About />
              </Reveal>

              <Reveal>
                <Projects />
              </Reveal>

              <Reveal>
                <Contact />
              </Reveal>

              {/* <Skills /> */}
            </>
          }
        />
        <Route path="/cv" element={<CV />} />
        <Route path="/projects/:projectId" element={<ProjectsPage />} />

        <Route path="/projects/:type/:title" element={<Gallery />} />
        <Route path="/certifications" element={<CertificationCard />} />
      </Routes>
      <Footer />
    </div>
  );
}

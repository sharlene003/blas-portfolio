import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "E-Commerce",
    desc: "Modern shopping experience built with React.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    demo: "#",
    github: "#",
    redirect: "/projects/e-commerce",
  },
  {
    title: "Enterprise",
    desc: "Clean admin dashboard with reusable components",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    demo: "https://your-demo-link.com",
    github: "https://github.com/your-repo",
    redirect: "/projects/enterprise",
  },
  {
    title: "Content Management System",
    desc: "Clean admin dashboard with reusable components",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    demo: "https://your-demo-link.com",
    github: "https://github.com/your-repo",
    redirect: "/projects/content-management-system",
  },
  {
    title: "Gaming and Entertainment",
    desc: "Clean admin dashboard with reusable components",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    demo: "https://your-demo-link.com",
    github: "https://github.com/your-repo",
    redirect: "/projects/gaming-and-entertainment",
  },
  // {
  //   title: "Portfolio Website",
  //   desc: "Minimal personal portfolio design",
  //   demo: "https://your-demo-link.com",
  //   github: "https://github.com/your-repo",
  //   redirect: "/projects/portfolio-website",
  // },
];

export default function Projects() {
  const navigate = useNavigate();
  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-6 py-20 animate-fadeUp"
    >
      <div className="text-center">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-violet-600 to-blue-500 text-transparent bg-clip-text">
          Projects
        </h2>
        <div className="mt-2 w-16 h-1 mx-auto bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
        group
        overflow-hidden
        rounded-3xl
        bg-white
        border border-slate-200
        hover:-translate-y-1
        hover:shadow-xl
        transition duration-500
      "
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="
            h-56 w-full object-cover
            group-hover:scale-105
            transition duration-500
          "
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                {project.title}
              </h3>

              <p className="mt-3 text-slate-500 leading-7">{project.desc}</p>

              {/* Links */}
              <div className="flex gap-4 mt-6">
                <a
                  onClick={() => navigate(project.redirect)}
                  className="
              px-4 py-2 rounded-full
              bg-gradient-to-r from-violet-600 to-blue-500
              text-white text-sm
              hover:opacity-90
              transition
              cursor-pointer
            "
                >
                  Go to Project
                </a>

                {/* <a
                  href={project.github}
                  className="
              px-4 py-2 rounded-full
              border border-slate-300
              text-sm text-slate-700
              hover:border-violet-400
              hover:text-violet-600
              transition
            "
                >
                  GitHub
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

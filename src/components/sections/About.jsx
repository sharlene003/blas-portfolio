const skills = ["VueJS", "NuxtJS", "ReactJS", "JavaScript","Vite"];
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const openUser = () => {
    navigate("/user/1");
  };
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-violet-600 to-blue-500 text-transparent bg-clip-text">
          About Me
        </h2>

        <div className="mt-2 w-16 h-1 mx-auto bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
      </div>

      {/* Content Card */}
      <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300">
        <p className="text-slate-600 leading-7 text-center">
          I’m a frontend developer who enjoys building clean, responsive, and
          user-friendly web applications. I focus on writing simple, scalable
          code and creating smooth user experiences.
        </p>
        {/* <button
          onClick={openUser}
          className="mt-6 px-6 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition"
        >
          View My Profile
        </button> */}
        <button onClick={() => navigate("/cv")}
          className="mt-6 px-6 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition"
          >
  View CV
</button>
        {/* Skills */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-1.5 text-sm rounded-full
              bg-violet-50 text-violet-600 border border-violet-100
              hover:bg-violet-100 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

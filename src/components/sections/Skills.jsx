const skills = ["VueJS", "NuxtJS", "ReactJS", "JavaScript","Vite"];

export default function Skills() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-3">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-4 py-1.5 text-sm rounded-full border border-slate-200 text-slate-600 hover:border-violet-300 hover:text-violet-600 transition"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
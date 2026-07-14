
export default function CertificationCard({ cert }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800">
          {cert.title}
        </h3>

        <p className="text-violet-600 font-medium mt-2">
          {cert.issuer}
        </p>

        {/* <p className="text-gray-500 text-sm mt-1">
          Issued: {cert.date}
        </p> */}

        {/* <div className="flex flex-wrap gap-2 mt-4">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs"
            >
              {skill}
            </span>
          ))}
        </div> */}

        {/* <a
          href={cert.credential}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-5 py-2 rounded-full bg-violet-600 text-white hover:bg-violet-700 transition"
        >
          View Credential
        </a> */}
      </div>
    </div>
  );
}
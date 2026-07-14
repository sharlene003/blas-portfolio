import CertificationCard from "../components/certificate/card";
import certifications from "../utils/Certification";

export default function Certifications() {
  return (
    <section className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
            Certifications
          </h1>

          {/* <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            These certifications reflect my commitment to continuously learning
            modern web development, cloud technologies, and software engineering
            best practices.
          </p> */}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
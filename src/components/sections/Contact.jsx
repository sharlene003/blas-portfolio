export default function Contact() {
  return (
    <section
      id="contact"
      className="relative max-w-5xl mx-auto px-6 py-24"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[300px] h-[300px] bg-violet-300 opacity-20 blur-3xl rounded-full" />
      </div>

      {/* Heading */}
      <div className="text-center">

        <h2 className="
          text-4xl font-bold
          bg-gradient-to-r from-violet-600 via-blue-500 to-indigo-500
          text-transparent bg-clip-text
        ">
          Let’s Work Together
        </h2>

        <p className="mt-4 text-slate-500 max-w-xl mx-auto leading-7">
          I’m always open to discussing new projects,
          creative ideas, or opportunities to build
          something meaningful.
        </p>

      </div>

      {/* Contact Card */}
      <div className="
        mt-12
        bg-white/70
        backdrop-blur-xl
        border border-white/30
        rounded-3xl
        p-10
        shadow-xl
        flex flex-col md:flex-row
        items-center
        justify-between
        gap-6
        hover:-translate-y-1
        transition duration-500
      ">

        {/* Left */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-900">
            Get in touch ✨
          </h3>

          <p className="mt-2 text-slate-500">
            Feel free to reach out anytime.
          </p>
        </div>

        {/* Right */}
        <div className="flex gap-4">

          <a
            href="mailto:your@email.com"
            className="
              px-6 py-3 rounded-full
              bg-gradient-to-r from-violet-600 to-blue-500
              text-white font-medium
              hover:opacity-90
              hover:-translate-y-0.5
              transition duration-300
            "
          >
            Email Me
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="
              px-6 py-3 rounded-full
              border border-slate-300
              text-slate-700 font-medium
              hover:border-violet-400
              hover:text-violet-600
              transition duration-300
            "
          >
            GitHub
          </a>

        </div>

      </div>

    </section>
  );
}
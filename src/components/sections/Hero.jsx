import { useEffect, useState } from "react";

export default function Hero() {
  const words = ["Hi, I’m Sharlene", "Frontend Developer"];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];
    let speed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    
   <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-gradient-to-br from-slate-50 via-violet-50 to-blue-50">
    <el-autocomplete></el-autocomplete>
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-violet-400 blur-3xl opacity-20 rounded-full animate-pulse" />

<div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-blue-400 blur-3xl opacity-20 rounded-full animate-pulse" />
     <div className="text-center">

        <h1 className="text-5xl md:text-6xl font-semibold text-slate-900">
          {text}
          <span className="border-r-2 border-violet-600 ml-1 animate-pulse"></span>
        </h1>

        <p className="mt-6 text-slate-500">
          Building clean and modern web applications
        </p>

      </div>
    </section>
  );
}
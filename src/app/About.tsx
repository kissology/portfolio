'use client';

import Image from "next/image";

interface AboutProps {
  aboutRef: React.RefObject<null>;
  aboutVisible: boolean;
}

export default function About({ aboutRef, aboutVisible }: AboutProps) {
  return (
    <section id="about" className="snap-start min-h-screen flex items-center justify-center px-4 text-center bg-transparent">
      <div className="max-w-4xl flex flex-col items-center space-y-8">
        <Image
          src="/headshot.jpeg"
          alt="Caitlin Ma headshot"
          width={300}
          height={300}
          className="rounded-full object-cover border-4 border-white shadow-lg"
        />

        <h2
          ref={aboutRef}
          className={`text-center text-5xl mb-15 underline-on-scroll ${
            aboutVisible ? "animate" : ""
          }`}
        >
          {` About Me`}
        </h2>

        <p className="text-lg leading-relaxed whitespace-pre-wrap px-4">
          Hi, I'm Caitlin! I'm a Full-Stack Software Engineer with experience building scalable web applications across both front-end and back-end systems. I specialize in modern JavaScript frameworks and crafting intuitive user experiences, while also designing robust APIs and driving feature development from concept to deployment. I thrive in cross-functional teams, translating complex business needs into impactful technical solutions. I’m passionate about building products that solve real-world problems.
        </p>
      </div>
    </section>
  );
}

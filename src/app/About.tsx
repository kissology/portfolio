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
          className={`text-center text-5xl mb-8 underline-on-scroll ${
            aboutVisible ? "animate" : ""
          }`}
        >
          {` About Me`}
        </h2>

        <p className="text-lg leading-relaxed px-4 max-w-2xl mx-auto text-center">
  I like to build scalable web applications and robust APIs, specializing in
  modern JavaScript frameworks, and end-to-end feature development, delivering
  impactful solutions that solve real-world problems.
</p>
      </div>
    </section>
  );
}

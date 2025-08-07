"use client";
import { useState, useEffect } from "react";
import VantaBackground from "./VantaBackground";
import useInView from "./hooks/useInView";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import UpScrollButton from "./buttons/UpScrollButton";
import DownScrollButton from "./buttons/DownScrollButton";

export default function Home() {
  const [aboutRef, aboutVisible] = useInView();
  const [stackRef, stackVisible] = useInView();
  const [experienceRef, experienceVisible] = useInView();
  const [projectsRef, projectsVisible] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`transition-opacity duration-1000 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <VantaBackground />
        <Navbar />
        <div className="relative min-h-screen overflow-hidden">
          <section
            id="header"
            className="relative snap-start min-h-screen flex items-center justify-center text-center px-4"
          >
            <div className="flex flex-col items-center">
              <h1
                className="text-8xl font-normal text-gray-100"
                style={{ fontFamily: "Poppins-Medium" }}
              >
                Caitlin Ma
              </h1>
              <p className="text-1xl mt-2 text-gray-300">
                Software Engineer | Builder | Collaborator
              </p>
              <DownScrollButton targetId="about" />
            </div>
          </section>

          <About aboutRef={aboutRef} aboutVisible={aboutVisible} />
        </div>
      </div>
      <Experience
        experienceRef={experienceRef}
        experienceVisible={experienceVisible}
      />
      <Skills stackRef={stackRef} stackVisible={stackVisible} />
      <Projects projectsRef={projectsRef} projectsVisible={projectsVisible} />
      <UpScrollButton />
    </>
  );
}

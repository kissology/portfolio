"use client";

import { useState } from "react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Social links (Desktop only) */}
      <div className="pl-4 pt-4 z-50 flex gap-4 hidden sm:flex bg-transparent">
        <a href="https://github.com/kissology" target="_blank" rel="noopener noreferrer">
          <button className="Btn">
            <span className="BG github-bg"></span>
            <span className="svgContainer">
              <SiGithub className="text-white w-5 h-5" />
            </span>
          </button>
        </a>
        <a href="https://linkedin.com/in/kissology" target="_blank" rel="noopener noreferrer">
          <button className="Btn">
            <span className="BG linkedin-bg"></span>
            <span className="svgContainer">
              <SiLinkedin className="text-white w-5 h-5" />
            </span>
          </button>
        </a>
        <a
  href="mailto:kissology90@gmail.com"
  className="Btn inline-flex items-center justify-center"
>
  <span className="BG gmail-bg"></span>
  <span className="svgContainer">
    <SiGmail className="text-white w-5 h-5" />
  </span>
</a>

      </div>

      {/* Burger Menu */}
      <div className="absolute top-4 right-4 z-50 bg-transparent">
        <button
          className="flex flex-col gap-1 w-11 h-11 justify-center items-center bg-white/90 rounded-lg shadow-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1 items-center justify-center">
            <div
              className={`w-5 h-1 bg-purple-500 rounded transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <div
              className={`w-5 h-1 bg-purple-500 rounded transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-5 h-1 bg-purple-500 rounded transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div  className={`absolute top-0 right-16 z-40 bg-black bg-opacity-70 p-8 w-64 flex flex-col gap-6 text-white text-lg transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
            <button className="hover:underline block" onClick={() => handleScroll("about")}>About</button>
            <button className="hover:underline block" onClick={() => handleScroll("experience")}>Experience</button>
            <button className="hover:underline block" onClick={() => handleScroll("stack")}>Skills</button>
            <button className="hover:underline block" onClick={() => handleScroll("projects")}>Projects</button>
            <a href="/Caitlin_Ma_Resume.pdf"target="_blank"rel="noopener noreferrer"className="hover:underline block text-center" onClick={() => setIsOpen(false)}> Resume</a>
          </div>
        )}
      </div>
    </>
  );
}

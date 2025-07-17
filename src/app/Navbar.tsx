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
      <div className="pl-4 pt-4 z-50 flex gap-4 hidden sm:flex">
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
        <a href="mailto:kissology90@gmail.com">
          <button className="Btn">
            <span className="BG gmail-bg"></span>
            <span className="svgContainer">
              <SiGmail className="text-white w-5 h-5" />
            </span>
          </button>
        </a>
      </div>

      {/* Burger Menu */}
      <div className="absolute top-4 right-4 z-50">
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
          <div className="absolute top-16 right-0 z-40 bg-black bg-opacity-80 p-4 rounded-lg flex flex-col gap-4 text-white text-lg">
            <button onClick={() => handleScroll("about")}>About</button>
            <button onClick={() => handleScroll("experience")}>Experience</button>
            <button onClick={() => handleScroll("stack")}>Skills</button>
            <button onClick={() => handleScroll("projects")}>Projects</button>
          </div>
        )}
      </div>
    </>
  );
}

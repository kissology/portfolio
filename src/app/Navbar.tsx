"use client";

import { useState, useEffect} from "react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import ContactModal from "./modals/ContactModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);
  

  return (
    <>
      {/* Burger Menu (Top Left) */}
      <div className="absolute top-4 left-4 z-30 bg-transparent">
        <button
          className="flex flex-col gap-1 w-11 h-11 justify-center items-center bg-white/90 rounded-lg shadow-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1 items-left justify-left">
            <div
              className={`w-5 h-1 bg-purple-800 rounded transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <div
              className={`w-5 h-1 bg-purple-800 rounded transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-5 h-1 bg-purple-800 rounded transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>

       {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`
              absolute top-0 left-16 z-40 w-38 bg-white/90 bg-opacity-70 p-6
              flex flex-col items-start gap-6 text-purple-900 text-lg text-left rounded-lg
              transform transition-transform duration-300 ease-in-out
              ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}
          >
            <button className="hover:underline block" onClick={() => handleScroll("about")}>About</button>
            <button className="hover:underline block" onClick={() => handleScroll("experience")}>Experience</button>
            <button className="hover:underline block" onClick={() => handleScroll("stack")}>Skills</button>
            <button className="hover:underline block" onClick={() => handleScroll("projects")}>Projects</button>
            <a 
              href="/Caitlin_Ma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline block text-center"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        )}
      </div>

      {/* Social links (Top Right) */}
      <div className="absolute top-4 right-4 z-50 flex gap-4 bg-transparent">
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
        <button
          onClick={() => setIsModalOpen(true)}
          className="Btn inline-flex items-center justify-center"
        >
          <span className="BG gmail-bg"></span>
          <span className="svgContainer">
            <SiGmail className="text-white w-5 h-5" />
          </span>
        </button>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

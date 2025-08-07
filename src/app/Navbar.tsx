"use client";

import { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  const menuTransition = useTransition(isOpen, {
    from: { opacity: 0, transform: "translateX(-12px) scale(0.98)" },
    enter: { opacity: 1, transform: "translateX(0px) scale(1)" },
    leave: { opacity: 0, transform: "translateX(-12px) scale(0.98)" },
    config: { tension: 240, friction: 22 },
  });

  const modalTransition = useTransition(isModalOpen, {
    from: { opacity: 0, transform: "scale(0.8)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.8)" },
    config: { tension: 180, friction: 30 },
  });

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
        {menuTransition((styles, open) =>
          open ? (
            <animated.div
              style={styles}
              className="
                absolute top-0 left-16 z-40 w-40 bg-white/90 p-6
                flex flex-col items-start gap-6 text-purple-900 text-lg text-left rounded-lg
                shadow-md
              "
            >
              <button
                className="hover:underline block"
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
              <button
                className="hover:underline block"
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </button>
              <button
                className="hover:underline block"
                onClick={() => scrollToSection("stack")}
              >
                Skills
              </button>
              <button
                className="hover:underline block"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </button>
              <a
                href="/Caitlin_Ma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline block text-center"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            </animated.div>
          ) : null,
        )}
      </div>

      {/* Social links (Top Right) */}
      <div className="absolute top-4 right-4 z-50 flex gap-4 bg-transparent">
        <a
          href="https://github.com/kissology"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="Btn">
            <span className="BG github-bg"></span>
            <span className="svgContainer">
              <SiGithub className="text-white w-5 h-5" />
            </span>
          </button>
        </a>
        <a
          href="https://linkedin.com/in/kissology"
          target="_blank"
          rel="noopener noreferrer"
        >
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
      {modalTransition((styles, item) =>
        item ? (
          <animated.div
            style={{
              ...styles,
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: `${styles.transform} translate(-50%, -50%)`,
              zIndex: 100,
            }}
          >
            <ContactModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </animated.div>
        ) : null,
      )}
    </>
  );
}

import { RefObject, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


interface ProjectsProps {
  projectsRef: RefObject<null>;
  projectsVisible: boolean;
}

const projects = [
  {
    id: 1,
    title: "Sprout",
    image: "/sprout.png",
    description:
      "A plant care tracking app that helps users monitor watering schedules, sunlight needs, and growth progress—all in one simple dashboard.",
    link: "https://github.com/kissology/Sprout_frontend",
  },
  {
    id: 2,
    title: "Tarot Reader",
    image: "/tarot.png",
    description:
      "A full-stack subscription-based tarot reading app that lets users generate custom spreads—daily draws, Celtic crosses, and more—with insightful interpretations and a personalized user experience.",
    link: "https://github.com/kissology/tarotreader-ui",
  },
];

export default function Projects({ projectsRef, projectsVisible }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section
        id="projects"
        className="relative snap-start min-h-screen flex flex-col items-center justify-center px-4 text-center"
      >
        <h2
          ref={projectsRef}
          className={`text-center text-5xl mb-10 underline-on-scroll ${
            projectsVisible ? "animate" : ""
          }`}
        >
          Projects
        </h2>

        {/* Grid layout for project cards */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl w-full mx-auto px-4">
  {projects.map((project) => (
    <div
      key={project.id}
      onClick={() => setSelectedProject(project)}
      className="cursor-pointer hover:scale-105 transition-transform duration-300 max-w-[300px] w-full bg-[#1a1a1a] text-white"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-60 object-cover"
      />
      <div className="w-full px-4 py-6">
        <h3 className="text-lg font-bold">{project.title}</h3>
      </div>
    </div>
  ))}
</div>

      </section>

      {/* Modal */}
      <AnimatePresence>
  {selectedProject && (
    <motion.div
    key={selectedProject.id}
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white text-black p-6 rounded-lg max-w-md w-full relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-2 right-3 text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">{selectedProject.title}</h2>
        <p className="mb-4">{selectedProject.description}</p>
        <a
          href={selectedProject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View project →
        </a>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}

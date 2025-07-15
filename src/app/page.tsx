'use client';

import VantaBackground from "./VantaBackground";
import { TechItem } from "./TechItem";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiNodedotjs,
  SiTypeorm,
  SiRuby,
  SiRubyonrails,
  SiPostgresql,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJira,
  SiFigma,
  SiGithub,
  SiRedis,
  SiDocker,
  SiJest,

} from "react-icons/si";
import Image from "next/image";
import { useImperativeHandle } from "react";
import useInView from "./hooks/useInView";


export default function Home() {

  const [aboutRef, aboutVisible] = useInView();
  const [stackRef, stackVisible] = useInView();
  const [experienceRef, experienceVisible] = useInView();
  const [projectsRef, projectsVisible] = useInView();

  return (
    <>
      <VantaBackground />
      <div className="relative z-10 min-h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth text-white">
        {/* Header */}
        <section className="relative snap-start min-h-screen flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-9xl font-normal">Caitlin Ma</h1>
          <p className="text-2xl mt-2">Software Engineer | 
            Builder | Collabortator
         </p>
        </section>

       {/* About Me */}
       <section className="snap-start min-h-screen flex items-center justify-center px-4 text-center">
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


{/* Professional Experience + Education */}
<section className="relative snap-start min-h-screen px-6 py-20 flex flex-col items-center text-white">
  {/* Content */}
  <div className="relative z-10 border-white/20">
  <div className="w-full max-w-5xl space-y-12 text-left">
  
  <h2 
  
  ref={experienceRef}
  className={`text-center text-5xl mb-15 underline-on-scroll ${
    experienceVisible ? "animate" : ""
  }`}
>{`Professional Experience `}</h2>

  <div className="w-full max-w-5xl space-y-12 text-left">
    <div>
      <h3 className="text-2xl font-semibold">Software Engineer — Patra Corporation</h3>
      <p className="mt-2 text-sm italic text-white/70 font-bold">Mar. 2023 – Present</p>
      <ul className="list-disc list-inside mt-3 space-y-2 text-base">
        <li>Founding developer of Patra’s first SaaS product team, building both frontend and backend systems for a policy comparison platform.</li>
        <li>Developed React-based frontend with Next.js and a scalable NestJS backend.</li>
        <li>Led development of Agency Management system, including multi-step onboarding flows, role-based access, and permission control via NestJS and database migrations.</li>
        <li>Designed reusable components and scalable APIs to support deeply nested form structures.</li>
        <li>Feature expansion enabled support for complex lines of business, driving client adoption and profitability.</li>
        <li>Championed engineering best practices including code reviews, testing, and maintainability.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-2xl font-semibold">Web Developer — Freelance</h3>
      <p className="mt-2 text-sm italic text-white/70 font-bold">Feb. 2022 – Mar. 2023</p>
      <ul className="list-disc list-inside mt-3 space-y-2 text-base">
        <li>Improved SEO and site performance with lazy loading, async scripts, and optimized images (WebP), reducing load time by 30–50%.</li>
        <li>Integrated AWS Cognito for authentication flows including MFA and JWT session management.</li>
        <li>Built accessible, responsive UIs using semantic HTML and Tailwind/Bootstrap.</li>
      </ul>
    </div>

    <div className="pt-16 border-t border-white/20">
      <h2 className="text-3xl font-bold mb-12">Education</h2>
      <div className="flex flex-row flex-wrap gap-60">    
        <div className="flex items-center gap-6">
          <img src="/flatironlogo.png" alt="Flatiron School logo" className="w-16 h-16 object-contain" />
          <div>
            <h3 className="text-xl font-bold">Flatiron School</h3>
            <p className="text-lg text-gray-100">Software Engineering, BC</p>
            <p className="text-sm text-gray-400">Fullstack Web Development Program</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <img src="/purchase.png" alt="SUNY Purchase logo" className="w-16 h-16 object-contain" />
          <div>
            <h3 className="text-xl font-bold ">SUNY Purchase</h3>
            <p className="text-lg text-gray-100">Acting, BFA</p><p className="text-sm text-gray-400">Minor: Mathematics</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>

    {/* Stack Section */}
<section className="snap-start min-h-screen flex items-center justify-center px-4 text-center">
<div className="w-full px-6">
<div className="max-w-screen-xl mx-auto flex flex-col items-center">
    <h3  ref={stackRef}
  className={`text-center text-5xl mb-15 underline-on-scroll ${
    stackVisible ? "animate" : ""
  }`}
>{` Skills && Frameworks `}</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-white w-full">
    <TechItem name="TypeScript" icon={<SiTypescript className="text-5xl" />} />
    <TechItem name="React" icon={<SiReact className="text-5xl" />} />
    <TechItem name="Next.js" icon={<SiNextdotjs className="text-5xl" />} />
    <TechItem name="NestJS" icon={<SiNestjs className="text-5xl" />} />
    <TechItem name="Node.js" icon={<SiNodedotjs className="text-5xl" />} />
    <TechItem name="Ruby" icon={<SiRuby className="text-5xl" />} />
    <TechItem name="Rails" icon={<SiRubyonrails className="text-5xl" />} />
    <TechItem name="Python" icon={<SiPython className="text-5xl" />} />
    <TechItem name="Jest" icon={<SiJest className="text-5xl" />} />
    <TechItem name="PostgreSQL" icon={<SiPostgresql className="text-5xl" />} />
    <TechItem name="TypeORM" icon={<SiTypeorm className="text-5xl" />} />
    <TechItem name="HTML" icon={<SiHtml5 className="text-5xl" />} />
    <TechItem name="CSS" icon={<SiCss3 className="text-5xl" />} />
    <TechItem name="Jira" icon={<SiJira className="text-5xl" />} />
    <TechItem name="Figma" icon={<SiFigma className="text-5xl" />} />
    <TechItem name="Redis" icon={<SiRedis className="text-5xl" />} />
    <TechItem name="Docker" icon={<SiDocker className="text-5xl" />} />
    <TechItem name="Github" icon={<SiGithub className="text-5xl" />} />
  </div>
  </div>
  </div>
</section>

        {/* Projects */}
        <section className="relative snap-start min-h-screen flex items-center justify-center px-4 text-center">

          <div className="max-w-4xl space-y-6">
            <h2 ref={projectsRef}
  className={`text-center text-5xl mb-15 underline-on-scroll ${
    projectsVisible ? "animate" : ""
  }`}
>{` Projects `}</h2>
            <div className="p-4 border border-white/30 rounded">
            <h3 className="text-xl mb-1">Sprout</h3>
<p className="text-sm mb-1">
  A plant care tracking app that helps users monitor watering schedules, sunlight needs, and growth progress—all in one simple dashboard.
</p>
              <a href="#" className="text-blue-300 text-sm underline" target="_blank">View project →</a>
            </div>
            <div className="p-4 border border-white/30 rounded">
              <h3 className="text-xl mb-1">Tarot Reader</h3>
              <p className="text-sm mb-1">
              A full-stack subscription-based tarot reading app that lets users generate custom spreads—daily draws, Celtic crosses, and more—with insightful interpretations and a personalized user experience.
              </p>
              <a href="#" className="text-blue-300 text-sm underline" target="_blank">View project →</a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="snap-start min-h-screen flex flex-col items-center justify-center text-center space-y-4 px-4">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p>{`const reachOut = () => console.log("I would love to connect!");`}</p>
          <div className="flex justify-center gap-6 text-blue-300">
            <a href="https://github.com/kissology" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/kissology" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:kissology90@gmail.com">Email</a>
          </div>
        </section>
      </div>
      
    </>
  );
}

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
  SiLinkedin,
  SiGmail,

} from "react-icons/si";
import Image from "next/image";;
import useInView from "./hooks/useInView";


export default function Home() {

  const [aboutRef, aboutVisible] = useInView();
  const [stackRef, stackVisible] = useInView();
  const [experienceRef, experienceVisible] = useInView();
  const [projectsRef, projectsVisible] = useInView();

  return (
    <>

      <VantaBackground />
  
      {/* Social links */}
      <div className="pl-4 pt-4 z-50 flex gap-4 hidden sm:flex">
        <a href="https://github.com/kissology" target="_blank" rel="noopener noreferrer">
          <button className="Btn">
          <span className="BG github-bg"></span>
            <span className="svgContainer">
              <SiGithub className="text-white w-5 h-5" />
            </span>
          </button>
        </a>
  
        {/* LinkedIn */}
        <a href="https://linkedin.com/in/kissology" target="_blank" rel="noopener noreferrer">
          <button className="Btn">
          <span className="BG linkedin-bg"></span>
            <span className="svgContainer">
            <SiLinkedin className="text-white w-5 h-5" />
            </span>
          </button>
        </a>
  
        {/* Email */}
        <a href="kissology90@gmail.com">
          <button className="Btn">
          <span className="BG gmail-bg"></span>
            <span className="svgContainer">
            <SiGmail className="text-white w-5 h-5" />
            </span>
          </button>
        </a>
      </div>
      
  
      <section id="header" className="relative snap-start min-h-screen flex items-center justify-center text-center px-4">
  <div className="flex flex-col items-center">
    <h1 style={{ fontFamily: 'Valiny' }} className="text-9xl font-normal">Caitlin Ma</h1>
    <p className="text-2xl mt-2">Software Engineer | Builder | Collaborator</p>
    <button
  className="button !mt-20 rotate-180"
  onClick={(e) => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }

    const btn = e.currentTarget as HTMLElement;
    btn.blur();
    btn.classList.add("no-hover");
    setTimeout(() => {
      btn.classList.remove("no-hover");
    }, 300); 
  }}
  aria-label="Scroll down"
>
  <span className="button-box">

    <svg className="button-elem initial-arrow" viewBox="0 0 20 20">
      <polyline
        points="5 8 10 13 15 8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>


    <svg className="button-elem hover-arrow" viewBox="0 0 20 20">
      <polyline
        points="5 8 10 13 15 8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
</button>
</div>
        </section>

       {/* About Me */}
       <section id="about" className="snap-start min-h-screen flex items-center justify-center px-4 text-center">
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
>
  {`Professional Experience`}
</h2>

<div className="w-full max-w-5xl space-y-12 text-left">
  <div>
    <h3 className="text-2xl font-semibold">Software Engineer - Patra Co.</h3>
    <p className="mt-2 text-sm italic text-white/70 font-bold">Mar. 2023 – Present</p>
    <ul className="list-disc list-inside mt-3 space-y-2 text-base text-lg">
      <li>
        Founding developer on Patra’s first SaaS product, building both the frontend and backend systems for a sophisticated policy comparison application in the insurance and financial services sector. Developed a React-based frontend with Next.js and a scalable NestJS backend, enabling seamless data flow and system reliability. Accelerated future feature delivery by designing reusable, modular components and scalable API architecture.
      </li>
      <li>
  Led the development of an Agency Management system feature. Responsibilities included:
  <ul className="list-disc list-inside ml-8 space-y-2">
    <li>
      Designing and implementing a robust database schema and NestJS API endpoints to support dynamic roles and permissions across multiple user types.
    </li>
    <li>
      Writing database migrations to establish and manage permission structures.
    </li>
    <li>
      Building a multi-step UI flow to handle the order of operations for agency creation, user assignment, impersonation, and role-based access control.
    </li>
    <li>
      Optimizing endpoint interactions through a centralized UI hook to ensure consistency and efficiency across the onboarding flow.
    </li>
    <li>
      This feature enabled scalable client onboarding and contributed to increased sales opportunities through streamlined access management.
    </li>
  </ul>
</li>
<li>
  Drove the end-to-end development of a major service expansion in collaboration with cross-functional teams, ensuring business alignment through close stakeholder engagement.
  <ul className="list-disc list-inside ml-8 space-y-2">
    <li>
      Designed and implemented complex parent-child relationships that were previously unsupported in the application, updating the API, database, and UI to support deeply nested structures. This included building reusable components, adding field-level validation, and managing submission state across nested inputs.
    </li>
    <li>
      This expansion significantly increased business value by enabling the application to scale and support more complex lines of business requirements, making it a more compelling solution for clients with advanced workflows. It contributed to client base growth, increased adoption, and profitability, and was recognized by stakeholders as a high-impact release aligned with strategic goals.
    </li>
  </ul>
</li>

      <li>
        Championed and enforced engineering best practices across the team—driving high code quality, robust test coverage, and long-term maintainability through strategic architectural decisions, rigorous peer reviews, and comprehensive integration testing.
      </li>
    </ul>
  </div>

  <div>
    <h3 className="text-2xl font-semibold">Web Developer - Freelance</h3>
    <p className="mt-2 text-sm italic text-white/70 font-bold">Feb. 2021 – Mar. 2023</p>
    <ul className="list-disc list-inside mt-3 space-y-2 text-base text-lg
    ">
      <li>
        Improved SEO performance and load times by auditing client sites and implementing lazy loading, async script strategies, and optimized image formats (WebP), leading to 30–50% faster first paint times.
      </li>
      <li>
        Integrated AWS Cognito into client dashboards and apps, handling full user auth flows (sign-up, MFA, token refresh) and building secure role-based access components with JWT-based session management.
      </li>
      <li>
        Built fully responsive and accessible websites using semantic HTML, modern CSS frameworks (Tailwind, Bootstrap), and media queries to ensure consistent cross-browser compatibility across devices.
      </li>
    </ul>
  </div>
</div>


    <div className="pt-16 border-t border-white/20">
      <h2 className="text-3xl font-bold mb-12">Education</h2>
      <div className="flex flex-row justify-between flex-wrap gap-12">   
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
</section>


    {/* Stack Section */}
<section className="snap-start min-h-screen flex items-center justify-center px-4 text-left">
<div className="w-full px-6">
<div className="max-w-screen-xl mx-auto flex flex-col items-center">
    <h3  ref={stackRef}
  className={`text-left text-5xl mb-15 underline-on-scroll ${
    stackVisible ? "animate" : ""
  }`}
>{` Skills && Frameworks `}</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 w-full">
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
<div className = "flex items-center justify-center text-center">
        <button
  className="button !mb-20 rotate-360"
  onClick={(e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const btn = e.currentTarget as HTMLElement;
    btn.blur();
    btn.classList.add("no-hover");
    setTimeout(() => {
      btn.classList.remove("no-hover");
    }, 300);
  }}
  aria-label="Scroll down"
>
  <span className="button-box">

    <svg className="button-elem initial-arrow" viewBox="0 0 20 20">
      <polyline
        points="5 8 10 13 15 8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>


    <svg className="button-elem hover-arrow" viewBox="0 0 20 20">
      <polyline
        points="5 8 10 13 15 8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
</button>
</div>
    </>
    
  );
}

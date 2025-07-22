'use client';

interface ExperienceProps {
  experienceRef: React.RefObject<null>;
  experienceVisible: boolean;
}

export default function Experience({ experienceRef, experienceVisible }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="relative snap-start min-h-screen px-6 py-20 flex flex-col items-center text-white"
    >
      <div className="relative z-10 border-white/20">
        <div className="w-full max-w-5xl space-y-12 text-left">
          <h2
            ref={experienceRef}
            className={`text-center text-5xl mb-15 underline-on-scroll ${
              experienceVisible ? 'animate' : ''
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
                  Founding developer on Patra’s first SaaS product, building both the frontend and backend
                  systems for a sophisticated policy comparison application in the insurance and financial
                  services sector...
                </li>
                <li>
                  Led the development of an Agency Management system feature. Responsibilities included:
                  <ul className="list-disc list-inside ml-8 space-y-2">
                    <li>Designing and implementing a robust database schema and NestJS API...</li>
                    <li>Writing database migrations to manage permission structures.</li>
                    <li>Building a multi-step UI flow for onboarding and access control.</li>
                    <li>Centralizing endpoint logic for consistency.</li>
                    <li>Contributing to increased sales via streamlined onboarding.</li>
                  </ul>
                </li>
                <li>
                  Drove a major service expansion, enabling support for complex parent-child data structures.
                  <ul className="list-disc list-inside ml-8 space-y-2">
                    <li>Built reusable components and validation for nested inputs.</li>
                    <li>
                      Increased client adoption and business value through scalable workflows.
                    </li>
                  </ul>
                </li>
                <li>
                  Championed best practices through strong architecture, testing, and peer reviews.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Web Developer - Freelance</h3>
              <p className="mt-2 text-sm italic text-white/70 font-bold">Feb. 2021 – Mar. 2023</p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-base text-lg">
                <li>
                  Improved SEO and performance by optimizing loading strategies and using next-gen formats.
                </li>
                <li>
                  Integrated AWS Cognito for secure user auth flows and JWT-based role control.
                </li>
                <li>
                  Delivered responsive, accessible designs using Tailwind, Bootstrap, and semantic HTML.
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-16 border-t border-white/20">
            <h2 className="text-3xl font-bold mb-12">Education</h2>
            <div className="flex flex-row justify-between flex-wrap gap-12">
              <div className="flex items-center gap-6">
                <img
                  src="/flatironlogo.png"
                  alt="Flatiron School logo"
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold">Flatiron School</h3>
                  <p className="text-lg text-gray-100">Software Engineering, BC</p>
                  <p className="text-sm text-gray-400">Fullstack Web Development Program</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <img
                  src="/purchase.png"
                  alt="SUNY Purchase logo"
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold">SUNY Purchase</h3>
                  <p className="text-lg text-gray-100">Acting, BFA</p>
                  <p className="text-sm text-gray-400">Minor: Mathematics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

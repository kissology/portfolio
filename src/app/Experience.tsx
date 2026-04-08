"use client";
import Image from "next/image";
interface ExperienceProps {
  experienceRef: React.RefObject<null>;
  experienceVisible: boolean;
}

export default function Experience({
  experienceRef,
  experienceVisible,
}: ExperienceProps) {
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
              experienceVisible ? "animate" : ""
            }`}
          >
            {`Professional Experience`}
          </h2>

          <div className="w-full max-w-5xl space-y-12 text-left">
            <div>
              <h3 className="text-2xl font-semibold">
                Software Engineer - The Knot Worldwide, New York, NY
              </h3>
              <p className="mt-2 text-sm italic text-white/70 font-bold">
                October 2025 - Present
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-lg">
                <li>
                  Designed and built full-stack services using Typescript, NestJS,
                  Prisma, PostgreSQL, React/Next.js, Docker, AWS, and Terraform
                  for The Knot Worldwide’s vendor marketplace, helping modernize
                  functionality within a legacy application ecosystem that supports
                  nearly 950,000 businesses globally.
                </li>
                <li>
                  Serve as a go-to engineer for NestJS and Prisma, helping define
                  backend implementation patterns and resolve complex technical
                  issues across the team.
                </li>
                <li>
                  Delivered a high-priority spam mitigation solution by rapidly
                  standing up a new NestJS application foundation and core service
                  architecture, leveraging my deep NestJS expertise to take the
                  service from concept to production-ready launch within one week.
                </li>
                <li>
                  Led CI/CD migration automation with GitHub Actions and AWS for a
                  vendor scheduling and availability platform, serving as the
                  team’s go-to engineer for migrations and deployment workflows.
                  Developed backend logic for syncing calendar and event data
                  leveraging Databus and Cronofy, writing SQL queries to validate
                  data integrity during a legacy-to-new database migration, catching
                  discrepancies and ensuring accurate provisioning across systems.
                </li>
                <li>
                  Identified and solved critical infrastructure and environment
                  bugs that threatened delivery across multiple services,
                  developing a workable path forward that unblocked active
                  development. Persistently drove the solution through cross-team
                  dependencies and organizational friction, and the approach was
                  adopted across the vendor zone as the interim standard while a
                  permanent fix was being built.
                </li>
                <li>
                  Partner closely with stakeholders and adjacent engineering teams
                  to turn ambiguous business requirements into enterprise-grade
                  systems that improve reliability, streamline delivery, and
                  support broader business outcomes.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">
                Software Engineer - Patra, El Dorado Hills, CA
              </h3>
              <p className="mt-2 text-sm italic text-white/70 font-bold">
                March 2022 - August 2025
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-lg">
                <li>
                  Founding engineer on Patra’s first B2B SaaS product, building a
                  Next.js/React frontend and NestJS backend for an AI-powered
                  policy comparison platform in the insurance and financial
                  services space.
                </li>
                <li>
                  Owned key frontend initiatives that improved self-service
                  onboarding and expanded the platform’s ability to support complex
                  insurance workflows, including building a multi-step Next.js
                  onboarding flow for agency creation, user assignment,
                  impersonation, and role-based access control. This feature
                  reduced onboarding time by 40%, increased sales velocity by 25%,
                  and supported 10+ new clients in the first quarter.
                </li>
                <li>
                  Developed reusable nested-field UI components for complex
                  hierarchical policy data input, including field-level validation,
                  dynamic form states, full CRUD functionality, and side-by-side
                  policy comparison workflows for AI-extracted insurance data,
                  delivering a strategic product expansion in close partnership
                  with stakeholders.
                </li>
                <li>
                  Redesigned the platform’s data model and API structure to
                  support complex parent-child relationships, enabling the
                  application to capture and render and persist previously
                  unsupported data models. This feature enabled more advanced
                  client workflows, contributing to a 25% increase in enterprise
                  client adoption and a projected $1M in pipeline value
                </li>
                <li>
                  Championed maintainable engineering practices through reusable
                  component design, test driven development, scalable frontend
                  patterns, clean architecture, and strong collaboration across
                  product and engineering teams.
                </li>
                <li>
                  Regularly presented feature work in demos, technical walkthroughs,
                  and stakeholder sessions, clearly communicating UI decisions,
                  technical tradeoffs, and implementation details.
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-16 border-t border-white/20">
            <h2 className="text-3xl font-bold mb-12">Education</h2>
            <div className="flex flex-row justify-between flex-wrap gap-12">
              <div className="flex items-center gap-6">
                <Image
                  src="/flatironlogo.png"
                  alt="Flatiron School logo"
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold">Flatiron School</h3>
                  <p className="text-lg text-gray-100">
                    Certificate of Completion, Software Engineering
                  </p>
                  <p className="text-sm text-gray-400">
                    Oct 2021 - Feb 2022
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <Image
                  src="/purchase.png"
                  alt="SUNY Purchase logo"
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold">SUNY Purchase</h3>
                  <p className="text-lg text-gray-100">B.F.A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

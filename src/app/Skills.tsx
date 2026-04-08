"use client";

import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiNodedotjs,
  SiRuby,
  SiRubyonrails,
  SiPython,
  SiPhp,
  SiJest,
  SiPostgresql,
  SiTypeorm,
  SiHtml5,
  SiCss3,
  SiJira,
  SiFigma,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGithub,
  SiJquery,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
  SiPrisma,
  SiAmazonwebservices,
  SiSymfony,
  SiLaravel,
} from "react-icons/si";
import { TechItem } from "./TechItem";

interface SkillProps {
  stackRef: React.RefObject<null>;
  stackVisible: boolean;
}

export default function Skills({ stackRef, stackVisible }: SkillProps) {
  return (
    <section
      id="stack"
      className="snap-start min-h-screen flex items-center justify-center px-4 text-left"
    >
      <div className="w-full px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center">
          <h3
            ref={stackRef}
            className={`text-left text-5xl mb-15 underline-on-scroll ${
              stackVisible ? "animate" : ""
            }`}
          >
            {` Skills & Frameworks `}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 w-full">
            <TechItem
              name="TypeScript"
              icon={<SiTypescript className="text-5xl" />}
            />
            <TechItem name="React" icon={<SiReact className="text-5xl" />} />
            <TechItem
              name="Next.js"
              icon={<SiNextdotjs className="text-5xl" />}
            />
            <TechItem name="NestJS" icon={<SiNestjs className="text-5xl" />} />
            <TechItem
              name="AWS"
              icon={<SiAmazonwebservices className="text-5xl" />}
            />
            <TechItem name="Prisma" icon={<SiPrisma className="text-5xl" />} />
            <TechItem
              name="TypeORM"
              icon={<SiTypeorm className="text-5xl" />}
            />
            <TechItem
              name="Node.js"
              icon={<SiNodedotjs className="text-5xl" />}
            />
            <TechItem name="Jest" icon={<SiJest className="text-5xl" />} />
            <TechItem name="Docker" icon={<SiDocker className="text-5xl" />} />
            <TechItem name="Kubernetes" icon={<SiKubernetes className="text-5xl" />} />
            <TechItem name="Ruby" icon={<SiRuby className="text-5xl" />} />
            <TechItem
              name="Rails"
              icon={<SiRubyonrails className="text-5xl" />}
            />
            <TechItem name="Python" icon={<SiPython className="text-5xl" />} />
            <TechItem name="PHP" icon={<SiPhp className="text-5xl" />} />
            <TechItem
              name="PostgreSQL"
              icon={<SiPostgresql className="text-5xl" />}
            />
            <TechItem name="HTML" icon={<SiHtml5 className="text-5xl" />} />
            <TechItem name="CSS" icon={<SiCss3 className="text-5xl" />} />
            <TechItem name="Jira" icon={<SiJira className="text-5xl" />} />
            <TechItem name="Figma" icon={<SiFigma className="text-5xl" />} />
            <TechItem name="Redis" icon={<SiRedis className="text-5xl" />} />
            <TechItem name="Github" icon={<SiGithub className="text-5xl" />} />
            <TechItem name="jQuery" icon={<SiJquery className="text-5xl" />} />
            <TechItem name="Redux" icon={<SiRedux className="text-5xl" />} />
            <TechItem
              name="Bootstrap"
              icon={<SiBootstrap className="text-5xl" />}
            />
            <TechItem
              name="Tailwind CSS"
              icon={<SiTailwindcss className="text-5xl" />}
            />
            <TechItem
              name="Symfony"
              icon={<SiSymfony className="text-5xl" />}
            />
            <TechItem
              name="Laravel"
              icon={<SiLaravel className="text-5xl" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

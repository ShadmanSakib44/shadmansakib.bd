import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "./lib/config";
import VisitorMap from "./components/VisitorMap";

const SKILL_GROUPS = [
  {
    label: "Languages",
    items: ["Java", "JavaScript", "Python", "C++", "PHP", "C#"],
  },
  {
    label: "Frameworks",
    items: ["Spring Boot", "React.js", "Next.js", "Express", "Node.js"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "Oracle"],
  },
  {
    label: "Infrastructure",
    items: ["Docker", "REST APIs", "JWT Authentication"],
  },
  {
    label: "Tools",
    items: ["Git", "VS Code", "Jira", "Trello", "Notion"],
  },
  {
    label: "Practices",
    items: ["Agile Development", "Code Refactoring", "Testing", "API Design"],
  },
];

const EXPERIENCE = [
  {
    title: "Software Engineer I",
    org: "Synesis IT PLC",
    period: "October 2025 — Present",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Backend Developer Intern",
    org: "Synesis IT PLC",
    period: "June 2024 — October 2024",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Sub Executive, Documentation Team",
    org: "IUT Mars Rover Anirban",
    period: "2022 — 2024",
    location: "Gazipur, Bangladesh",
  },
];

export default function Page() {
  return (
    <section>
      <Image
        src="/profile.jpg"
        alt="Shadman Sakib"
        className="rounded-lg bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-8 sm:mb-8"
        unoptimized
        width={280}
        height={320}
        priority
      />
      <h1 className="mb-2 text-2xl font-medium">Shadman Sakib</h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-6">
        Software Engineer ·  Dhaka, Bangladesh
      </p>
      <div className="prose prose-neutral dark:prose-invert mb-10">
        <p>
         
          
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {" · "}
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" · "}
          <a href={socialLinks.email}>Email</a>
         
        </p>
        <p className="text-sm">
          I believe good software feels simple. It just works quietly in the
          background.
        </p>
        <p className="text-sm">
          I’m Shadman Sakib, a software engineer who enjoys building reliable
          backend systems and full-stack applications. I’ve worked on
          large-scale platforms, authentication systems, and APIs designed for
          real users. I like breaking down complex problems, improving
          performance step by step, and turning ideas into systems people can
          depend on.
        </p>
        <p className="text-sm">
          These days, I’m exploring distributed systems, intelligent
          applications, and ways to build infrastructure that grows smoothly
          over time.
        </p>
      </div>

      {/* Selected Publications — at top */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">selected publications</h2>
        <div className="space-y-3 text-sm">
          <p>
            <a
              href="https://ieeexplore.ieee.org/document/11171691"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 hover:underline"
            >
              From Chat to Checkup: Can Large Language Models Assist in Diabetes Prediction?
            </a>
            <span className="text-neutral-500 dark:text-neutral-400 ml-1">
              (2025, IEEE Xplore)
            </span>
            <br />
            <span className="text-neutral-500 dark:text-neutral-400 text-xs italic">
              Shadman Sakib, Oishy Fatema Akhand, Ajwad Abrar
            </span>
          </p>
          <p>
            <a
              href="https://arxiv.org/abs/2603.28163"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 hover:underline"
            >
              From Reviews to Requirements: Can LLMs Generate Human-Like User Stories?
            </a>
            <span className="text-neutral-500 dark:text-neutral-400 ml-1">
              (Accepted, NLP4RE&apos;26)
            </span>
            <br />
            <span className="text-neutral-500 dark:text-neutral-400 text-xs italic">
              Shadman Sakib†, Oishy Fatema Akhand†, Tasnia Tasneem†, Shohel Ahmed*
            </span>
          </p>
        </div>
        <p className="mt-3">
          <Link
            href="/publications"
            className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
          >
            View all publications →
          </Link>
        </p>
      </div>

      {/* Technical Skills */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">technical skills</h2>
        <div className="space-y-4">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {group.label}:
              </span>{" "}
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                {group.items.join(", ")}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience — no bullet details */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">professional experience</h2>
        <div className="space-y-6">
          {EXPERIENCE.map((job, i) => (
            <div
              key={i}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
            >
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <h3 className="font-semibold text-black dark:text-white">
                  {job.org} — {job.title}
                </h3>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {job.period} · {job.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">education</h2>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h3 className="font-semibold text-black dark:text-white">
            Islamic University of Technology (IUT)
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            BSc in Software Engineering · 2021 — 2025 · Bangladesh
          </p>
          
        </div>
      </div>

      {/* Visitor Map */}
      <div className="mt-8">
        <VisitorMap />
      </div>
    </section>
  );
}

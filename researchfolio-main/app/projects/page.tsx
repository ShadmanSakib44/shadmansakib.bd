import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Shadman Sakib — Software engineering projects: emotion detection, EduCast, ResuMetrics.",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
          >
            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
              <h2 className="text-lg font-semibold text-black dark:text-white">
                {project.title}
              </h2>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                {project.year}
                {project.tech ? ` · ${project.tech}` : ""}
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
              {project.description}
            </p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Shadman Sakib — Research publications: LLMs for diabetes prediction, user stories from reviews (NLP4RE).",
};

const PUBLICATIONS = [
  {
    title:
      "From Chat to Checkup: Can Large Language Models Assist in Diabetes Prediction?",
    authors: "Shadman Sakib, Oishy Fatema Akhand, Ajwad Abrar",
    year: 2025,
    venue: "IEEE Xplore",
    url: "https://ieeexplore.ieee.org/document/11171691",
    linkLabel: "View on IEEE Xplore",
    summary:
      "Evaluated large language models for medical prediction tasks using structured datasets.",
  },
  {
    title:
      "From Reviews to Requirements: Can LLMs Generate Human-Like User Stories?",
    authors:
      "Shadman Sakib†, Oishy Fatema Akhand†, Tasnia Tasneem†, Shohel Ahmed*",
    year: 2026,
    venue: "Accepted",
    url: "https://arxiv.org/abs/2603.28163",
    linkLabel: "View on arXiv",
    summary:
      "Research on generating software requirements from user reviews using NLP models.",
  },
];

export default function PublicationsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Publications</h1>
      <div className="space-y-6">
        {PUBLICATIONS.map((pub, i) => (
          <div
            key={i}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
          >
            <h2 className="text-lg font-semibold text-black dark:text-white mb-2">
              {pub.url ? (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  {pub.title}
                </a>
              ) : (
                pub.title
              )}
            </h2>
            {"authors" in pub && pub.authors && (
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1 italic">
                {pub.authors}
              </p>
            )}
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
              {pub.year} · {pub.venue}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {pub.summary}
            </p>
            {pub.url && (
              <p className="mt-2">
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                >
                  {pub.linkLabel ?? "Link"} →
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

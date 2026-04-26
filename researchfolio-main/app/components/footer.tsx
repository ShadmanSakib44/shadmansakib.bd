"use client";

import React from "react";
import Link from "next/link";

const YEAR = new Date().getFullYear();
const RESUME_PDF = "/SHADMAN_SAKIB_RESUME%20(1).pdf";

const footerLinks = [
  { path: "/", name: "about" },
  { path: "/publications", name: "publications" },
  { path: "/projects", name: "projects" },
  { path: RESUME_PDF, name: "resume", external: true },
];

export default function Footer() {
  return (
    <small className="block text-[#1C1C1C] dark:text-[#D4D4D4]">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <time>© {YEAR} Shadman Sakib</time>
        <div className="flex flex-wrap items-center gap-x-3.5 text-sm font-medium transition-opacity duration-300 hover:opacity-90">
          {footerLinks.map(({ path, name, external }, i) => (
            <React.Fragment key={path}>
              {i > 0 && <span className="text-neutral-400 dark:text-neutral-500">·</span>}
              {external ? (
                <a
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:underline"
                >
                  {name}
                </a>
              ) : (
                <Link href={path} className="no-underline hover:underline">
                  {name}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  );
}

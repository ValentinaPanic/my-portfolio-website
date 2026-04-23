"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
          >
            VP
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              My Projects
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A collection of things I have built — exploring AI-augmented
              workflows, design systems, and modern frontend architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.name}
                className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow flex flex-col"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  {project.name}
                </h2>
                <p className="text-purple-600 font-medium mb-3">
                  {project.tagline}
                </p>
                <p className="text-gray-700 mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all text-sm"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

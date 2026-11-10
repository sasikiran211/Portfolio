import React, { useState } from 'react';
import { Briefcase, ExternalLink, ArrowRight, X, CheckCircle2, AlertCircle } from 'lucide-react';
import { projectsData, Project } from '../data/projectsData';
import { GithubIcon } from './icons/SocialIcons';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-cream-light/40 border-t border-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-ocean/70 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Project Case Studies</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ocean tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-ocean/80">
            Practical development across full-stack data workflows and fundamental algorithmic data structures. Structured for verifiable results and ongoing enhancement.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-beige shadow-card hover:shadow-elevated transition-luxury flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header Top Bar */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cream text-ocean border border-beige">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center space-x-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-beige/30 text-ocean">
                    <span className="w-2 h-2 rounded-full bg-ocean/70" />
                    <span>{project.status}</span>
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ocean group-hover:text-ocean-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-ocean/70 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm text-ocean/80 leading-relaxed font-sans">
                  {project.overview}
                </p>

                {/* Problem & Solution Preview */}
                <div className="space-y-2 pt-2 text-xs text-ocean/80">
                  <div className="p-3 bg-cream/50 rounded-xl border border-beige/40">
                    <strong className="text-ocean block mb-1">Focus Area:</strong>
                    <span>{project.problemStatement}</span>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-ocean/60 mb-2">
                    Technologies & Architecture
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-cream text-ocean border border-beige/60 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 sm:px-8 py-4 bg-cream/40 border-t border-beige/60 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center space-x-1.5 text-sm font-semibold text-ocean hover:text-ocean-light transition-colors"
                >
                  <span>Detailed Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center space-x-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white hover:bg-beige/30 text-ocean border border-beige transition-colors"
                      title="GitHub Repository"
                      aria-label="View Project on GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white hover:bg-beige/30 text-ocean border border-beige transition-colors"
                      title="Live Demo"
                      aria-label="View Live Project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scalable Architecture Notice */}
        <div className="mt-10 p-5 rounded-2xl bg-white/70 border border-beige text-center max-w-2xl mx-auto">
          <p className="text-xs text-ocean/80 font-sans">
            <strong>Scalable Portfolio Architecture:</strong> Projects are decoupled in <code className="bg-cream px-1.5 py-0.5 rounded text-ocean font-mono text-[11px]">src/data/projectsData.ts</code>. Additional data analytics, Power BI dashboards, and ML models can be added seamlessly.
          </p>
        </div>

      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ocean/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-beige shadow-elevated p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-beige/60 pb-4">
              <div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-cream text-ocean border border-beige">
                  {activeModalProject.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ocean mt-2">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm text-ocean/70 font-medium">
                  {activeModalProject.subtitle}
                </p>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
                className="p-1.5 rounded-lg text-ocean/70 hover:text-ocean hover:bg-cream transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-sm text-ocean/80">
              <div>
                <h4 className="font-serif font-bold text-base text-ocean mb-1">
                  1. Project Overview
                </h4>
                <p className="leading-relaxed">{activeModalProject.overview}</p>
              </div>

              <div className="p-4 bg-cream/40 rounded-xl border border-beige/60 space-y-3">
                <div>
                  <h4 className="font-semibold text-ocean text-xs uppercase tracking-wider mb-1">
                    Problem Statement
                  </h4>
                  <p className="text-xs leading-relaxed">{activeModalProject.problemStatement}</p>
                </div>
                <div className="pt-2 border-t border-beige/40">
                  <h4 className="font-semibold text-ocean text-xs uppercase tracking-wider mb-1">
                    Engineered Solution
                  </h4>
                  <p className="text-xs leading-relaxed">{activeModalProject.solution}</p>
                </div>
              </div>

              <div>
                <h4 className="font-serif font-bold text-base text-ocean mb-2">
                  2. Key Features & Architecture
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm">
                  {activeModalProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-ocean flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-serif font-bold text-base text-ocean mb-2">
                  3. Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-cream text-ocean text-xs font-semibold border border-beige"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {activeModalProject.accentNote && (
                <div className="flex items-start space-x-2 p-3 rounded-lg bg-amber-50/60 border border-amber-200/80 text-amber-900 text-xs">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{activeModalProject.accentNote}</span>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-beige/60">
              <span className="text-xs text-ocean/60">
                Status: <strong>{activeModalProject.status}</strong>
              </span>
              <div className="flex items-center space-x-3">
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-ocean text-cream text-xs font-semibold hover:bg-ocean-light transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-lg bg-white border border-beige text-xs font-semibold text-ocean hover:bg-cream transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

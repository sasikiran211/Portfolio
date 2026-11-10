import React, { useState } from 'react';
import { Briefcase, ArrowRight, X, CheckCircle2, Terminal, ExternalLink } from 'lucide-react';
import { projectsData, Project } from '../data/projectsData';
import { GithubIcon } from './icons/SocialIcons';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-neutral-50/50 dark:bg-black border-t border-neutral-200/80 dark:border-white/5">
      
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-heading font-semibold text-[#1C39BB] dark:text-blue-400 tracking-wider mb-2 uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
            Three core engineering and analytical initiatives spanning civic dispatch systems, customer retention analytics, and AI-driven business intelligence.
          </p>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-[#0C0C0C] rounded-3xl border border-neutral-200 dark:border-white/10 hover:border-[#1C39BB]/40 dark:hover:border-[#1C39BB]/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-4">
                
                {/* Top Bar Indicators */}
                <div className="flex items-center justify-between text-xs pb-3 border-b border-neutral-100 dark:border-white/10">
                  <span className="font-heading font-bold text-[#1C39BB] dark:text-blue-400">
                    {project.projectNumber}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-white/10 text-[11px] font-sans">
                    {project.status}
                  </span>
                </div>

                {/* Project Header Banner */}
                <div className="relative h-40 rounded-2xl bg-neutral-900 dark:bg-black p-5 flex flex-col justify-between overflow-hidden text-white">
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] font-heading font-semibold px-2.5 py-0.5 rounded bg-white/20 text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                    <Terminal className="w-4 h-4 text-[#1C39BB] dark:text-blue-400" />
                  </div>

                  <div className="z-10">
                    <h3 className="font-heading text-2xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-300 font-sans mt-0.5">
                      {project.categoryTag}
                    </p>
                  </div>
                </div>

                {/* Overview Text */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed line-clamp-3">
                  {project.overview}
                </p>

                {/* Problem Statement Card */}
                <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-white/[0.02] border border-neutral-100 dark:border-white/5 space-y-1 text-xs">
                  <strong className="text-neutral-900 dark:text-white block font-heading font-semibold">Core Focus:</strong>
                  <span className="text-neutral-600 dark:text-neutral-300 font-sans text-[11px] leading-relaxed line-clamp-2">
                    {project.problemStatement}
                  </span>
                </div>

                {/* Tech Badges */}
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1.5 font-sans font-medium">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-white/[0.04] text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Actions */}
              <div className="p-6 sm:p-8 pt-0 border-t border-neutral-100 dark:border-white/10 mt-4 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center space-x-1.5 text-xs font-heading font-bold text-[#1C39BB] dark:text-blue-400 hover:underline"
                >
                  <span>Detailed Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center space-x-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300 transition-colors"
                      title="Live Deployment"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Deep-Dive Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
          <div className="bg-white dark:bg-[#0C0C0C] rounded-3xl border border-neutral-200 dark:border-white/15 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative text-neutral-900 dark:text-white">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 border-b border-neutral-100 dark:border-white/10 pb-5 mb-6">
              <div className="flex items-center space-x-2 text-xs font-heading font-semibold text-[#1C39BB] dark:text-blue-400">
                <span>{activeModalProject.projectNumber}</span>
                <span>&bull;</span>
                <span>{activeModalProject.category}</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white">
                {activeModalProject.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 font-sans">
                {activeModalProject.categoryTag}
              </p>
            </div>

            {/* Modal Content Sections */}
            <div className="space-y-6 text-sm font-sans">
              
              <div>
                <h4 className="font-heading font-bold text-base text-neutral-900 dark:text-white mb-2">
                  Project Overview
                </h4>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {activeModalProject.overview}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-100 dark:border-white/5 space-y-2">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#1C39BB] dark:text-blue-400">
                  Problem & Proposed Solution
                </h4>
                <p className="text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  <strong>Challenge:</strong> {activeModalProject.problemStatement}
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  <strong>Technical Architecture:</strong> {activeModalProject.solution}
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-base text-neutral-900 dark:text-white mb-2">
                  Technical Implementation Details
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.features.map((feat: string, i: number) => (
                    <li key={i} className="flex items-start space-x-2 text-neutral-700 dark:text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#1C39BB] dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {activeModalProject.capabilities && (
                <div>
                  <h4 className="font-heading font-bold text-base text-neutral-900 dark:text-white mb-2">
                    Key Capabilities & Impact
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModalProject.capabilities.map((item: string, i: number) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-neutral-50 dark:bg-white/[0.02] border border-neutral-100 dark:border-white/5 text-xs text-neutral-600 dark:text-neutral-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies Badges */}
              <div className="pt-2">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-400 mb-2">
                  Full Stack / Dependencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-white/5 text-neutral-800 dark:text-neutral-200 text-xs font-mono border border-neutral-200 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-white/10 flex items-center justify-between">
              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#1C39BB] text-white font-heading font-semibold text-xs hover:bg-[#152c99] transition-all shadow-sm"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              )}

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-xs font-heading font-medium"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

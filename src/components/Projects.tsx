import React, { useState } from 'react';
import { Briefcase, ArrowRight, X, CheckCircle2, AlertCircle, Terminal } from 'lucide-react';
import { projectsData, Project } from '../data/projectsData';
import { GithubIcon } from './icons/SocialIcons';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-[#0C0C0C]/60 border-t border-white/5">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#CCFF00]/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#CCFF00] tracking-widest mb-2 uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>[SECTION // 03 &bull; FEATURED LABS]</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-[#EBEBEB] tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#EBEBEB]/70 leading-relaxed font-sans">
            Three key engineering and analytical initiatives spanning hackathon smart-city infrastructure, revenue intelligence, and AI-driven business intelligence.
          </p>
        </div>

        {/* 3 Projects Grid with Perspective Hover & 3D Tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-[#0C0C0C] rounded-3xl border border-white/10 hover:border-[#CCFF00]/40 transition-all duration-300 shadow-glass-card hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(204,255,0,0.12)] flex flex-col justify-between overflow-hidden group card-tilt"
            >
              {/* Visual Header / Futuristic HUD Display Canvas */}
              <div className="p-6 sm:p-8 space-y-4">
                
                {/* Top Bar Indicators */}
                <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-white/10">
                  <span className="text-[#CCFF00] font-bold">{project.projectNumber}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-white/70 border border-white/10 text-[10px]">
                    {project.status}
                  </span>
                </div>

                {/* Project Abstract Visual Area */}
                <div className="relative h-44 rounded-2xl bg-black border border-white/10 p-4 flex flex-col justify-between overflow-hidden group-hover:border-[#CCFF00]/40 transition-colors">
                  {/* Background grid */}
                  <div className="absolute inset-0 bg-tech-grid opacity-30" />
                  <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#CCFF00]/10 rounded-full blur-2xl group-hover:bg-[#CCFF00]/20 transition-all" />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80 border border-white/10">
                      {project.category}
                    </span>
                    <Terminal className="w-4 h-4 text-[#CCFF00]" />
                  </div>

                  <div className="relative z-10">
                    <h4 className="font-sans text-2xl font-black text-white tracking-tight">
                      {project.title}
                    </h4>
                    <p className="text-xs text-[#EBEBEB]/70 font-mono mt-0.5">
                      {project.categoryTag}
                    </p>
                  </div>
                </div>

                {/* Overview Text */}
                <p className="text-xs sm:text-sm text-[#EBEBEB]/70 font-sans leading-relaxed line-clamp-3">
                  {project.overview}
                </p>

                {/* Problem & Solution Snip */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5 text-xs font-mono">
                  <div className="text-[#CCFF00]">
                    <strong className="text-white block font-sans">Focus Objective:</strong>
                    <span className="text-[#EBEBEB]/80 text-[11px] leading-relaxed">{project.problemStatement}</span>
                  </div>
                </div>

                {/* Capabilities / Tech Badges */}
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block mb-2">
                    SYSTEM ARCHITECTURE
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] text-white/80 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Action Footer */}
              <div className="px-6 sm:px-8 py-4 bg-black/60 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center space-x-1.5 font-mono text-xs font-bold text-[#CCFF00] hover:text-white transition-colors"
                >
                  <span>CASE STUDY & SPECS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center space-x-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/[0.04] hover:bg-[#CCFF00]/10 text-white hover:text-[#CCFF00] border border-white/10 hover:border-[#CCFF00]/40 transition-all"
                      title="GitHub Repository"
                      aria-label="View on GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Futuristic Case Study Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0C0C0C] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-bold text-[#CCFF00]">
                    {activeModalProject.projectNumber}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80">
                    {activeModalProject.category}
                  </span>
                </div>
                <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white pt-1">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#EBEBEB]/70 font-mono">
                  {activeModalProject.subtitle}
                </p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
                className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-5 text-sm text-[#EBEBEB]/80 font-sans">
              
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#CCFF00] mb-1.5">
                  [01 // PROJECT OVERVIEW]
                </h4>
                <p className="leading-relaxed text-xs sm:text-sm">{activeModalProject.overview}</p>
              </div>

              <div className="p-4 bg-white/[0.02] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                <div>
                  <span className="text-white font-bold block mb-1 uppercase text-[10px] text-white/40">
                    PROBLEM STATEMENT
                  </span>
                  <p className="text-[#EBEBEB]/90 leading-relaxed">{activeModalProject.problemStatement}</p>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <span className="text-[#CCFF00] font-bold block mb-1 uppercase text-[10px]">
                    ENGINEERED SOLUTION
                  </span>
                  <p className="text-[#EBEBEB]/90 leading-relaxed">{activeModalProject.solution}</p>
                </div>
              </div>

              {activeModalProject.capabilities && (
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#10B981] mb-2">
                    [02 // CORE CAPABILITIES & METHODOLOGIES]
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                    {activeModalProject.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center space-x-2 p-2 rounded-lg bg-white/[0.02] border border-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                  [03 // KEY SYSTEM FEATURES]
                </h4>
                <ul className="space-y-2 text-xs">
                  {activeModalProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#CCFF00] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                  [04 // TECHNOLOGY STACK]
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-black border border-white/15 text-xs font-mono text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {activeModalProject.accentNote && (
                <div className="flex items-start space-x-2 p-3 rounded-xl bg-white/[0.02] border border-white/10 font-mono text-xs text-white/60">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-[#CCFF00] mt-0.5" />
                  <span>{activeModalProject.accentNote}</span>
                </div>
              )}

            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs">
              <span className="text-white/40">
                STATUS: <strong className="text-white">{activeModalProject.status}</strong>
              </span>

              <div className="flex items-center space-x-3">
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#CCFF00] text-black font-bold hover:bg-[#B5E600] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>REPOSITORY</span>
                  </a>
                )}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

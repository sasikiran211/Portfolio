import React, { useState } from 'react';
import { Briefcase, ArrowRight, X, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink, Layers, GitBranch, ZoomIn } from 'lucide-react';
import { projectsData, Project } from '../data/projectsData';
import { GithubIcon } from './icons/SocialIcons';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const openProjectModal = (proj: Project) => {
    setActiveModalProject(proj);
    setActiveImageIndex(0);
    setIsZoomed(false);
  };

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!activeModalProject) return;
    setActiveImageIndex((prev) => (prev + 1) % activeModalProject.galleryImages.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!activeModalProject) return;
    setActiveImageIndex((prev) => (prev - 1 + activeModalProject.galleryImages.length) % activeModalProject.galleryImages.length);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-neutral-50/50 dark:bg-black border-t border-neutral-200/80 dark:border-white/5">
      
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-heading font-semibold text-[#1C39BB] dark:text-blue-400 tracking-wider mb-2 uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Featured Projects & Engineering Systems
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
            Three core architectural initiatives spanning municipal incident dispatch, customer retention intelligence, and AI-driven business intelligence with detailed multi-view technical diagrams.
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
              <div className="p-6 sm:p-7 space-y-4">
                
                {/* Top Bar Indicators */}
                <div className="flex items-center justify-between text-xs pb-3 border-b border-neutral-100 dark:border-white/10">
                  <span className="font-heading font-bold text-[#1C39BB] dark:text-blue-400">
                    {project.projectNumber}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-white/10 text-[11px] font-sans">
                    {project.status}
                  </span>
                </div>

                {/* Project Visual Thumbnail Preview */}
                <div
                  onClick={() => openProjectModal(project)}
                  className="relative h-44 rounded-2xl bg-neutral-950 border border-neutral-200/80 dark:border-white/10 overflow-hidden cursor-pointer group/thumb shadow-inner"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover/thumb:scale-105 transition-transform duration-500 opacity-90 group-hover/thumb:opacity-100"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Badges on Thumbnail */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-heading font-semibold px-2 py-0.5 rounded bg-black/60 text-white backdrop-blur-md border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white">
                    <span className="text-xs font-mono text-blue-200 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-blue-400" />
                      <span>{project.galleryImages.length} Visuals</span>
                    </span>
                    <span className="text-[11px] font-heading font-semibold text-white/90 bg-[#1C39BB]/80 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                      Inspect Diagrams &rarr;
                    </span>
                  </div>
                </div>

                {/* Title & Category */}
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-[#1C39BB] dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans mt-0.5">
                    {project.categoryTag}
                  </p>
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
              <div className="p-6 sm:p-7 pt-0 border-t border-neutral-100 dark:border-white/10 mt-4 flex items-center justify-between">
                <button
                  onClick={() => openProjectModal(project)}
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

      {/* Full-Screen Project Case Study Deep-Dive Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className="bg-white dark:bg-[#0C0C0C] rounded-3xl border border-neutral-200 dark:border-white/15 max-w-4xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-9 shadow-2xl relative text-neutral-900 dark:text-white">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1.5 border-b border-neutral-100 dark:border-white/10 pb-5 mb-6">
              <div className="flex items-center space-x-2 text-xs font-heading font-semibold text-[#1C39BB] dark:text-blue-400">
                <span>{activeModalProject.projectNumber}</span>
                <span>&bull;</span>
                <span>{activeModalProject.category}</span>
                <span>&bull;</span>
                <span className="text-neutral-500">{activeModalProject.status}</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white">
                {activeModalProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-sans">
                {activeModalProject.subtitle}
              </p>
            </div>

            {/* Interactive Visual Gallery Component */}
            <div className="mb-8 space-y-3">
              <div className="flex items-center justify-between text-xs font-heading font-semibold">
                <span className="text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#1C39BB] dark:text-blue-400" />
                  <span>Architecture Diagrams & Visuals ({activeImageIndex + 1} / {activeModalProject.galleryImages.length})</span>
                </span>
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="inline-flex items-center space-x-1 text-xs text-[#1C39BB] dark:text-blue-400 hover:underline"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>{isZoomed ? 'Standard View' : 'Enlarge Diagram'}</span>
                </button>
              </div>

              {/* Main Visual Display Frame */}
              <div className={`relative rounded-2xl bg-neutral-950 border border-neutral-200 dark:border-white/10 overflow-hidden flex flex-col justify-center items-center transition-all ${isZoomed ? 'h-[460px] sm:h-[540px]' : 'h-72 sm:h-96'}`}>
                <img
                  src={activeModalProject.galleryImages[activeImageIndex].src}
                  alt={activeModalProject.galleryImages[activeImageIndex].title}
                  className="w-full h-full object-contain p-2"
                />

                {/* Left / Right Nav Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm border border-white/20 transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm border border-white/20 transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Diagram Caption Bar */}
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white">
                  <span className="font-heading font-bold text-xs sm:text-sm block">
                    {activeModalProject.galleryImages[activeImageIndex].title}
                  </span>
                  <p className="text-[11px] text-neutral-300 font-sans line-clamp-2">
                    {activeModalProject.galleryImages[activeImageIndex].description}
                  </p>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="grid grid-cols-5 gap-2 pt-1">
                {activeModalProject.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative h-14 sm:h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#1C39BB] shadow-md scale-[1.02]'
                        : 'border-transparent opacity-60 hover:opacity-100 bg-neutral-900'
                    }`}
                  >
                    <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
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

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-100 dark:border-white/5 space-y-1.5">
                  <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-rose-600 dark:text-rose-400">
                    The Problem & Friction
                  </h5>
                  <p className="text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
                    {activeModalProject.problemStatement}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-100 dark:border-white/5 space-y-1.5">
                  <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-[#1C39BB] dark:text-blue-400">
                    Engineered Solution
                  </h5>
                  <p className="text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
                    {activeModalProject.solution}
                  </p>
                </div>
              </div>

              {/* Architecture & Pipeline */}
              {activeModalProject.architectureSummary && (
                <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-[#1C39BB]/10 border border-blue-200 dark:border-[#1C39BB]/20 space-y-2">
                  <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-[#1C39BB] dark:text-blue-300 flex items-center gap-1.5">
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>System Architecture & Pipeline Flow</span>
                  </h5>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                    {activeModalProject.architectureSummary}
                  </p>
                  {activeModalProject.dataFlowSteps && (
                    <ul className="space-y-1 pt-1 text-xs text-neutral-700 dark:text-neutral-300">
                      {activeModalProject.dataFlowSteps.map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start space-x-2">
                          <span className="font-mono text-[#1C39BB] dark:text-blue-400 font-bold">{sIdx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* Features List */}
              <div>
                <h4 className="font-heading font-bold text-base text-neutral-900 dark:text-white mb-2">
                  Key Technical Features & Deliverables
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

              {/* Technologies Badges */}
              <div className="pt-2">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-400 mb-2">
                  Full Stack & Dependencies
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
              <div className="flex items-center space-x-3">
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#1C39BB] text-white font-heading font-semibold text-xs hover:bg-[#152c99] transition-all shadow-sm"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {activeModalProject.liveDemoUrl && (
                  <a
                    href={activeModalProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/15 text-neutral-900 dark:text-white font-heading font-semibold text-xs hover:bg-neutral-100 dark:hover:bg-white/10 transition-all shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4 text-[#1C39BB] dark:text-blue-400" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-xs font-heading font-medium"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

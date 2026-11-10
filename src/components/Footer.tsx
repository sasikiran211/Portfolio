import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { profileData } from '../data/profileData';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-100 dark:bg-[#060606] text-neutral-800 dark:text-neutral-200 py-14 border-t border-neutral-200 dark:border-white/10 relative overflow-hidden font-sans">
      
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-200 dark:border-white/10">
          
          {/* Identity & Technical Description (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#1C39BB] flex items-center justify-center font-heading font-extrabold text-sm text-white shadow-sm">
                SK
              </div>
              <div>
                <span className="font-heading text-xl font-bold tracking-tight text-neutral-900 dark:text-white block">
                  {profileData.name}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-sans block">
                  B.Tech CSE (AI & ML) &bull; Aspiring Data Analyst & Data Scientist
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-sm leading-relaxed">
              Vasireddy Venkatadri Institute of Technology (VVITU). Grounded in quantitative thinking, SQL data architectures, and disciplined algorithmic problem-solving.
            </p>

            <div className="flex items-center space-x-2 pt-1">
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] hover:bg-neutral-200 dark:hover:bg-[#1C39BB]/20 text-neutral-700 dark:text-neutral-300 hover:text-[#1C39BB] dark:hover:text-blue-300 border border-neutral-200 dark:border-white/10 transition-colors shadow-sm"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] hover:bg-neutral-200 dark:hover:bg-[#1C39BB]/20 text-neutral-700 dark:text-neutral-300 hover:text-[#1C39BB] dark:hover:text-blue-300 border border-neutral-200 dark:border-white/10 transition-colors shadow-sm"
                title="GitHub"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={profileData.socialLinks.takeuforward}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] hover:bg-neutral-200 dark:hover:bg-[#1C39BB]/20 text-neutral-700 dark:text-neutral-300 hover:text-[#1C39BB] dark:hover:text-blue-300 border border-neutral-200 dark:border-white/10 transition-colors shadow-sm"
                title="Take U Forward Profile"
                aria-label="Take U Forward"
              >
                <Terminal className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (4 cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-sans">
            <div className="space-y-2">
              <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#1C39BB] dark:text-blue-400 block mb-1">
                Sections
              </span>
              <ul className="space-y-1.5 text-neutral-600 dark:text-neutral-400">
                <li><a href="#about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Projects</a></li>
                <li><a href="#achievements" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Achievements</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#1C39BB] dark:text-blue-400 block mb-1">
                Dossier
              </span>
              <ul className="space-y-1.5 text-neutral-600 dark:text-neutral-400">
                <li><a href="#certificates" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Certificates</a></li>
                <li><a href="#timeline" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Timeline</a></li>
                <li><a href="#resume" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Resume View</a></li>
                <li><a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Return to Top (3 cols) */}
          <div className="md:col-span-3 flex md:flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-white dark:bg-white/[0.04] hover:bg-neutral-200 dark:hover:bg-white/[0.08] text-neutral-800 dark:text-neutral-200 text-xs font-heading font-semibold border border-neutral-200 dark:border-white/10 transition-all shadow-sm active:scale-95"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

            <div className="text-[11px] text-neutral-500 dark:text-neutral-400 md:text-right mt-4">
              <span>Updated November 2026</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Attributions */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 font-sans gap-2">
          <p>&copy; {new Date().getFullYear()} Sasikiran Kakumani. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

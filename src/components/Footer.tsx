import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { profileData } from '../data/profileData';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-[#EBEBEB] py-16 border-t border-white/10 relative overflow-hidden">
      
      {/* Background Dots */}
      <div className="absolute inset-0 bg-tech-dots opacity-15 pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Identity & Technical Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0C0C0C] border border-[#CCFF00] flex items-center justify-center font-mono font-bold text-sm text-[#CCFF00] shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                SK
              </div>
              <div>
                <span className="font-sans text-xl font-extrabold tracking-tight text-white block">
                  {profileData.name}
                </span>
                <span className="text-xs text-white/50 font-mono block">
                  DATA ANALYTICS &bull; AI/ML ENGINEERING
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#EBEBEB]/70 max-w-sm leading-relaxed font-sans">
              B.Tech CSE (AI & ML) at Vasireddy Venkatadri Institute of Technology. Grounded in quantitative thinking, SQL data architectures, and disciplined algorithmic practice.
            </p>

            <div className="flex items-center space-x-2.5 pt-2 font-mono">
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-[#CCFF00]/10 text-white hover:text-[#CCFF00] border border-white/10 transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-[#CCFF00]/10 text-white hover:text-[#CCFF00] border border-white/10 transition-colors"
                title="GitHub"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={profileData.socialLinks.takeuforward}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-[#CCFF00]/10 text-white hover:text-[#CCFF00] border border-white/10 transition-colors"
                title="Take U Forward Profile"
                aria-label="Take U Forward"
              >
                <Terminal className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-mono">
            <div className="space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#CCFF00] block">
                [SECTIONS]
              </span>
              <ul className="space-y-2 text-white/60">
                <li><a href="#about" className="hover:text-white transition-colors">01 // ABOUT</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors">02 // SKILLS</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">03 // PROJECTS</a></li>
                <li><a href="#achievements" className="hover:text-white transition-colors">04 // ACHIEVEMENTS</a></li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#10B981] block">
                [TELEMETRY]
              </span>
              <ul className="space-y-2 text-white/60">
                <li><a href="#certificates" className="hover:text-white transition-colors">05 // CERTIFICATES</a></li>
                <li><a href="#education" className="hover:text-white transition-colors">06 // TIMELINE</a></li>
                <li><a href="/Sasikiran_Kakumani_Resume.pdf" className="hover:text-white transition-colors">RESUME PDF</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">07 // CONTACT</a></li>
              </ul>
            </div>
          </div>

          {/* Design Architecture Info */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs text-white/50">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 block">
              DESIGN SYSTEM V2
            </span>
            <p className="leading-relaxed text-[11px]">
              Obsidian (<span className="text-white font-bold">#0C0C0C</span>), Neon Lime (<span className="text-[#CCFF00] font-bold">#CCFF00</span>), and Emerald (<span className="text-[#10B981] font-bold">#10B981</span>).
            </p>
            <div className="flex items-center space-x-2 pt-1">
              <div className="w-5 h-5 rounded-md bg-[#0C0C0C] border border-white/20" title="Obsidian #0C0C0C" />
              <div className="w-5 h-5 rounded-md bg-[#CCFF00]" title="Neon Lime #CCFF00" />
              <div className="w-5 h-5 rounded-md bg-[#10B981]" title="Emerald #10B981" />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/50 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Sasikiran Kakumani &bull; All verified academic and technical dossiers reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-white hover:text-[#CCFF00] transition-colors border border-white/10"
          >
            <span>BACK TO APEX</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#CCFF00]" />
          </button>
        </div>

      </div>
    </footer>
  );
};

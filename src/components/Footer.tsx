import React from 'react';
import { ArrowUp, Code } from 'lucide-react';
import { profileData } from '../data/profileData';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ocean text-cream py-16 border-t border-ocean-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-ocean-muted/40">
          
          {/* Identity & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-cream text-ocean flex items-center justify-center font-serif font-bold text-lg">
                SK
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-cream block">
                  {profileData.name}
                </span>
                <span className="text-xs text-cream/70 font-sans block">
                  Data Analyst & AI/ML Undergraduate
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream/80 max-w-sm leading-relaxed">
              B.Tech CSE (AI & ML) student at Vasireddy Venkatadri Institute of Technology. Grounded in analytical inquiry, SQL pipelines, and continuous algorithmic practice.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-ocean-light hover:bg-cream hover:text-ocean text-cream transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-ocean-light hover:bg-cream hover:text-ocean text-cream transition-colors"
                title="GitHub"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={profileData.socialLinks.takeuforward}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-ocean-light hover:bg-cream hover:text-ocean text-cream transition-colors"
                title="Take U Forward Profile"
                aria-label="Take U Forward"
              >
                <Code className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs">
            <div className="space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-widest text-beige block">
                Portfolio Sections
              </span>
              <ul className="space-y-2">
                <li><a href="#about" className="text-cream/80 hover:text-cream transition-colors">About Me</a></li>
                <li><a href="#skills" className="text-cream/80 hover:text-cream transition-colors">Technical Skills</a></li>
                <li><a href="#projects" className="text-cream/80 hover:text-cream transition-colors">Projects</a></li>
                <li><a href="#coding" className="text-cream/80 hover:text-cream transition-colors">Coding Profiles</a></li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-widest text-beige block">
                Verification & Docs
              </span>
              <ul className="space-y-2">
                <li><a href="#certifications" className="text-cream/80 hover:text-cream transition-colors">Certifications (9)</a></li>
                <li><a href="#education" className="text-cream/80 hover:text-cream transition-colors">VVITU Degree & Marks</a></li>
                <li><a href="#resume" className="text-cream/80 hover:text-cream transition-colors">Resume PDF</a></li>
                <li><a href="#contact" className="text-cream/80 hover:text-cream transition-colors">Contact / Inquire</a></li>
              </ul>
            </div>
          </div>

          {/* Design Identity & Palette Info */}
          <div className="md:col-span-3 space-y-3 text-xs text-cream/70">
            <span className="text-[11px] font-bold uppercase tracking-widest text-beige block">
              Design System
            </span>
            <p className="leading-relaxed">
              Curated editorial palette: Cream (<span className="font-mono text-beige">#EEE8DF</span>), Beige (<span className="font-mono text-beige">#C4BCB0</span>), and Deep Ocean (<span className="font-mono text-beige">#2C365A</span>).
            </p>
            <div className="flex items-center space-x-2 pt-1">
              <div className="w-5 h-5 rounded-md bg-[#EEE8DF] border border-white/20" title="Cream #EEE8DF" />
              <div className="w-5 h-5 rounded-md bg-[#C4BCB0]" title="Beige #C4BCB0" />
              <div className="w-5 h-5 rounded-md bg-[#2C365A] border border-white/40" title="Deep Ocean #2C365A" />
            </div>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/70 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Sasikiran Kakumani &bull; All verified academic and technical records reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-ocean-light hover:bg-cream hover:text-ocean text-cream transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

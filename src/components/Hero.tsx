import React from 'react';
import { ArrowDown, ArrowUpRight, FileText, CheckCircle2, Database, Brain, Sparkles } from 'lucide-react';
import { profileData } from '../data/profileData';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Editorial Decorative Grid Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-beige rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-ocean/10 rounded-full blur-2xl -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/70 border border-beige shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-ocean">
                {profileData.availability}
              </span>
            </div>

            {/* Name & Academic Identity */}
            <div>
              <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-ocean/70 mb-2">
                Portfolio & Technical Showcase
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ocean leading-[1.15]">
                {profileData.name}
              </h1>
            </div>

            {/* Core Tagline / Editorial Headline */}
            <div className="border-l-2 border-ocean/40 pl-4 py-1">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold italic text-ocean/90">
                "{profileData.tagline}"
              </h2>
            </div>

            {/* Supporting Introduction */}
            <p className="text-base sm:text-lg text-ocean/80 leading-relaxed font-sans max-w-2xl">
              {profileData.heroSubtitle}
            </p>

            {/* Target Alignment Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold bg-ocean text-cream">
                <Database className="w-3 h-3 mr-1.5" /> Data Analytics (Primary)
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold bg-white border border-beige text-ocean">
                <Brain className="w-3 h-3 mr-1.5 text-ocean" /> Data Science & AI/ML
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold bg-beige/40 text-ocean">
                <Sparkles className="w-3 h-3 mr-1.5 text-ocean" /> 166+ DSA Solved
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center space-x-2 bg-ocean hover:bg-ocean-light text-cream font-medium px-6 py-3 rounded-xl transition-luxury shadow-md hover:shadow-lg active:scale-95"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('resume')}
                className="inline-flex items-center space-x-2 bg-white hover:bg-cream-light text-ocean font-medium px-5 py-3 rounded-xl border border-beige hover:border-ocean/40 transition-luxury shadow-sm active:scale-95"
              >
                <FileText className="w-4 h-4 text-ocean" />
                <span>Resume / Credentials</span>
              </button>

              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 rounded-xl bg-white hover:bg-beige/30 text-ocean border border-beige transition-colors"
                title="LinkedIn Profile"
                aria-label="Visit LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5 text-ocean" />
              </a>

              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 rounded-xl bg-white hover:bg-beige/30 text-ocean border border-beige transition-colors"
                title="GitHub Profile"
                aria-label="Visit GitHub Profile"
              >
                <GithubIcon className="w-5 h-5 text-ocean" />
              </a>
            </div>
          </div>

          {/* Editorial Visual Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative layered frame */}
              <div className="absolute -inset-3 bg-beige/40 rounded-2xl transform rotate-1 -z-10" />
              
              <div className="bg-white rounded-2xl border border-beige/80 p-6 sm:p-8 shadow-card space-y-6">
                
                {/* Monogram Portrait Display */}
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-ocean text-cream flex items-center justify-center font-serif text-3xl sm:text-4xl font-bold shadow-elevated border-4 border-cream">
                    SK
                  </div>
                  <div className="space-y-1">
                    <div className="inline-flex items-center space-x-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-beige/40 text-ocean">
                      <CheckCircle2 className="w-3 h-3 text-ocean" />
                      <span>Verified Academic Stage</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-ocean">
                      Sasikiran Kakumani
                    </h3>
                    <p className="text-xs sm:text-sm text-ocean/80 font-medium">
                      B.Tech CSE (AI & ML) &bull; Year 2
                    </p>
                    <p className="text-xs text-ocean/60">
                      Vasireddy Venkatadri Institute of Tech (VVITU)
                    </p>
                  </div>
                </div>

                {/* Academic & Technical Quick Stats */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-beige/60">
                  <div className="bg-cream/60 p-3 rounded-xl border border-beige/40">
                    <span className="text-xs text-ocean/70 block">Academic Standing</span>
                    <span className="font-serif text-xl font-bold text-ocean">7.5 CGPA</span>
                    <span className="text-[11px] text-ocean/60 block">B.Tech Sem 1 Record</span>
                  </div>

                  <div className="bg-cream/60 p-3 rounded-xl border border-beige/40">
                    <span className="text-xs text-ocean/70 block">DSA Problems Solved</span>
                    <span className="font-serif text-xl font-bold text-ocean">166+</span>
                    <span className="text-[11px] text-ocean/60 block">Take U Forward Track</span>
                  </div>

                  <div className="bg-cream/60 p-3 rounded-xl border border-beige/40">
                    <span className="text-xs text-ocean/70 block">Top Practice Streak</span>
                    <span className="font-serif text-xl font-bold text-ocean">51 Days</span>
                    <span className="text-[11px] text-ocean/60 block">40 Days Current Streak</span>
                  </div>

                  <div className="bg-cream/60 p-3 rounded-xl border border-beige/40">
                    <span className="text-xs text-ocean/70 block">Certifications</span>
                    <span className="font-serif text-xl font-bold text-ocean">9 Credentials</span>
                    <span className="text-[11px] text-ocean/60 block">SQL, Python, Java, AI</span>
                  </div>
                </div>

                {/* Direct Verification Links */}
                <div className="pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-ocean/70 mb-2">
                    Verified Public Records
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <a
                      href={profileData.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-2.5 py-1.5 rounded-lg bg-beige/30 hover:bg-beige/60 text-ocean font-medium transition-colors"
                    >
                      <span>LinkedIn Profile</span>
                      <ArrowUpRight className="w-3 h-3 ml-1" />
                    </a>
                    <a
                      href={profileData.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-2.5 py-1.5 rounded-lg bg-beige/30 hover:bg-beige/60 text-ocean font-medium transition-colors"
                    >
                      <span>GitHub: sasikiran211</span>
                      <ArrowUpRight className="w-3 h-3 ml-1" />
                    </a>
                    <a
                      href={profileData.socialLinks.codechef}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-2.5 py-1.5 rounded-lg bg-beige/30 hover:bg-beige/60 text-ocean font-medium transition-colors"
                    >
                      <span>CodeChef: sasikiran_24</span>
                      <ArrowUpRight className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

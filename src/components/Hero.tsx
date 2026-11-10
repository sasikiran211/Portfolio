import React from 'react';
import { ArrowDown, FileText, Terminal, Database, Cpu } from 'lucide-react';
import { profileData } from '../data/profileData';
import { ThreeCanvas } from './ThreeCanvas';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      
      {/* Background Radial Glow Spheres */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#CCFF00]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#10B981]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial & Technical Typography */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Technical System Status Tag */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-beacon" />
              <span className="text-xs font-mono text-[#EBEBEB]/80 tracking-wider">
                SYS.INIT // B.TECH CSE (AI & ML) &bull; YEAR 2
              </span>
            </div>

            {/* Name Heading (Oversized Space Grotesk) */}
            <div className="space-y-1">
              <span className="text-xs font-mono tracking-widest text-[#CCFF00] block uppercase">
                [TECHNICAL DOSSIER &bull; DATA ANALYST & AI/ML]
              </span>
              <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#EBEBEB] leading-[1.05]">
                SASIKIRAN<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#EBEBEB] to-white/60">
                  KAKUMANI
                </span>
              </h1>
            </div>

            {/* Core Message with Neon Lime Highlight */}
            <div className="border-l-2 border-[#CCFF00] pl-4 py-1">
              <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                Building with <span className="text-[#CCFF00] glow-text-lime">Data.</span> Exploring <span className="text-[#10B981] glow-text-emerald">AI.</span>
              </h2>
            </div>

            {/* Professional Introduction */}
            <p className="text-base sm:text-lg text-[#EBEBEB]/70 max-w-2xl font-sans leading-relaxed">
              B.Tech CSE–AIML undergraduate at Vasireddy Venkatadri Institute of Technology (VVITU). Specializing in <strong className="text-white">Data Analytics</strong> and <strong className="text-white">Data Science</strong> as primary directions, with active exploration in machine learning algorithms, automated data pipelines, and competitive algorithmic problem solving.
            </p>

            {/* Technical Alignment Pills */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00]">
                <Database className="w-3.5 h-3.5 mr-1.5" /> PRIMARY: DATA ANALYTICS & SQL
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-white/80">
                <Cpu className="w-3.5 h-3.5 mr-1.5 text-[#10B981]" /> AI / ML & GENERATIVE AI
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-white/80">
                <Terminal className="w-3.5 h-3.5 mr-1.5 text-[#CCFF00]" /> 166+ DSA PROBLEMS SOLVED
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center space-x-2 bg-[#CCFF00] hover:bg-[#B5E600] text-black font-mono font-bold px-6 py-3.5 rounded-xl transition-all shadow-[0_0_25px_rgba(204,255,0,0.3)] hover:shadow-[0_0_35px_rgba(204,255,0,0.5)] active:scale-95 text-xs sm:text-sm"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowDown className="w-4 h-4 text-black" />
              </button>

              <button
                onClick={() => scrollTo('education')}
                className="inline-flex items-center space-x-2 bg-white/[0.04] hover:bg-white/[0.08] text-[#EBEBEB] font-mono font-medium px-5 py-3.5 rounded-xl border border-white/15 hover:border-[#CCFF00]/40 transition-all shadow-sm active:scale-95 text-xs sm:text-sm"
              >
                <FileText className="w-4 h-4 text-[#CCFF00]" />
                <span>RESUME & DOSSIER</span>
              </button>

              {/* Social Channels Pill Icons */}
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-[#CCFF00]/10 text-white hover:text-[#CCFF00] border border-white/10 hover:border-[#CCFF00]/40 transition-all"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-[#CCFF00]/10 text-white hover:text-[#CCFF00] border border-white/10 hover:border-[#CCFF00]/40 transition-all"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive 3D Canvas + Floating HUD Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-[#0C0C0C]/80 border border-white/10 p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden group">
              
              {/* Inner HUD Terminal Header */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10 font-mono text-[11px] text-white/50">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00]/80" />
                  <span className="text-[#EBEBEB]/80 font-bold">3D_DATA_CORE // V2.0</span>
                </div>
                <span className="text-[#10B981]">ONLINE &bull; PARALLAX_ACTIVE</span>
              </div>

              {/* 3D WebGL Canvas */}
              <ThreeCanvas />

              {/* Floating Technical HUD Cards */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 font-mono text-xs">
                
                <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
                  <span className="text-[10px] text-white/40 block">ACADEMIC STANDING</span>
                  <span className="text-lg font-bold text-white">7.5 CGPA</span>
                  <span className="text-[10px] text-[#10B981] block">VVITU University Record</span>
                </div>

                <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
                  <span className="text-[10px] text-white/40 block">TUF MILESTONE</span>
                  <span className="text-lg font-bold text-[#CCFF00]">166 PROBLEMS</span>
                  <span className="text-[10px] text-white/50 block">Rank #577 Global</span>
                </div>

                <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
                  <span className="text-[10px] text-white/40 block">PEAK STREAK</span>
                  <span className="text-lg font-bold text-white">51 DAYS</span>
                  <span className="text-[10px] text-white/50 block">40 Days Current</span>
                </div>

                <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
                  <span className="text-[10px] text-white/40 block">CREDENTIALS</span>
                  <span className="text-lg font-bold text-[#10B981]">9 VERIFIED</span>
                  <span className="text-[10px] text-white/50 block">SQL, Python, Java, AI</span>
                </div>

              </div>

              {/* Bottom Interactive Prompt */}
              <div className="mt-3 pt-2 text-center text-[10px] font-mono text-white/40">
                [DRAG OR MOVE CURSOR ACROSS 3D CANVAS FOR PERSPECTIVE ORBIT]
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

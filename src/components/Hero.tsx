import React from 'react';
import { ArrowDown, FileText, Database, Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profileData';
import { ThreeCanvas } from './ThreeCanvas';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      
      {/* Subtle Ambient Background Accents */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#1C39BB]/5 dark:bg-[#1C39BB]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-blue-400/5 dark:bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/10 text-xs font-sans text-neutral-700 dark:text-neutral-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">
                Second Year B.Tech CSE (AI & ML) &bull; VVITU
              </span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.08]">
                Sasikiran <br className="hidden sm:inline" />
                <span className="text-[#1C39BB] dark:text-[#3b5cfb]">
                  Kakumani
                </span>
              </h1>
              
              <p className="font-heading text-2xl sm:text-3xl font-semibold text-neutral-800 dark:text-neutral-200 pt-1">
                Building with <span className="text-[#1C39BB] dark:text-blue-400 font-bold">Data.</span> Exploring <span className="text-neutral-900 dark:text-white font-bold">AI.</span>
              </p>
            </div>

            {/* Authentic Introduction */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl font-sans leading-relaxed">
              B.Tech Computer Science and Engineering (AI & ML) undergraduate at <strong className="text-neutral-900 dark:text-white font-semibold">Vasireddy Venkatadri Institute of Technology (VVITU)</strong>. Focused on building strong fundamentals in Data Structures & Algorithms, combined with practical projects in <strong className="text-neutral-900 dark:text-white font-semibold">Data Analytics</strong>, <strong className="text-neutral-900 dark:text-white font-semibold">SQL</strong>, <strong className="text-neutral-900 dark:text-white font-semibold">Python</strong>, and <strong className="text-neutral-900 dark:text-white font-semibold">Machine Learning</strong>.
            </p>

            {/* Focus Capabilities Pills */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-sans">
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-[#1C39BB]/15 border border-blue-200 dark:border-[#1C39BB]/30 text-[#1C39BB] dark:text-blue-300 font-medium">
                <Database className="w-3.5 h-3.5 mr-1.5" /> Primary: Data Analytics & SQL
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-300">
                <Cpu className="w-3.5 h-3.5 mr-1.5 text-[#1C39BB] dark:text-blue-400" /> AI / ML Foundations
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-300">
                <Terminal className="w-3.5 h-3.5 mr-1.5 text-emerald-600 dark:text-emerald-400" /> 166+ DSA Problems Solved
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center space-x-2 bg-[#1C39BB] hover:bg-[#152c99] text-white font-heading font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 text-xs sm:text-sm"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={() => scrollTo('resume')}
                className="inline-flex items-center space-x-2 bg-white dark:bg-white/[0.06] hover:bg-neutral-50 dark:hover:bg-white/[0.1] text-neutral-800 dark:text-neutral-100 font-heading font-medium px-5 py-3 rounded-xl border border-neutral-300 dark:border-white/15 transition-all shadow-sm active:scale-95 text-xs sm:text-sm"
              >
                <FileText className="w-4 h-4 text-[#1C39BB] dark:text-blue-400" />
                <span>View & Download Resume</span>
              </button>

              {/* Social Channels */}
              <div className="flex items-center space-x-2 pl-1">
                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-100 dark:bg-white/[0.04] hover:bg-blue-50 dark:hover:bg-[#1C39BB]/20 text-neutral-700 dark:text-neutral-200 hover:text-[#1C39BB] dark:hover:text-blue-300 border border-neutral-200 dark:border-white/10 transition-colors"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-100 dark:bg-white/[0.04] hover:bg-blue-50 dark:hover:bg-[#1C39BB]/20 text-neutral-700 dark:text-neutral-200 hover:text-[#1C39BB] dark:hover:text-blue-300 border border-neutral-200 dark:border-white/10 transition-colors"
                  title="GitHub Profile"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={profileData.socialLinks.takeuforward}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-100 dark:bg-white/[0.04] hover:bg-blue-50 dark:hover:bg-[#1C39BB]/20 text-neutral-700 dark:text-neutral-200 hover:text-[#1C39BB] dark:hover:text-blue-300 border border-neutral-200 dark:border-white/10 transition-colors"
                  title="Take U Forward Profile"
                  aria-label="Take U Forward"
                >
                  <Terminal className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Canvas + Verified Academic Metrics */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-white dark:bg-[#0c0c0c] border border-neutral-200 dark:border-white/10 p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-neutral-100 dark:border-white/10 text-xs font-sans text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#1C39BB] dark:bg-blue-400" />
                  <span className="font-heading font-semibold text-neutral-800 dark:text-neutral-200">
                    Interactive Geometry
                  </span>
                </div>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Profile
                </span>
              </div>

              {/* 3D WebGL Canvas */}
              <ThreeCanvas className="h-64 sm:h-72 w-full" />

              {/* Clean Metric Badges Grid */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-100 dark:border-white/10 text-xs">
                
                <div className="bg-neutral-50 dark:bg-white/[0.03] p-3 rounded-2xl border border-neutral-100 dark:border-white/5">
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block font-sans">Academic Standing</span>
                  <span className="text-xl font-heading font-extrabold text-neutral-900 dark:text-white">7.5 CGPA</span>
                  <span className="text-[11px] text-[#1C39BB] dark:text-blue-400 block font-medium">VVITU B.Tech</span>
                </div>

                <div className="bg-neutral-50 dark:bg-white/[0.03] p-3 rounded-2xl border border-neutral-100 dark:border-white/5">
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block font-sans">TUF Solved</span>
                  <span className="text-xl font-heading font-extrabold text-[#1C39BB] dark:text-blue-400">166 Problems</span>
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block">Rank #577</span>
                </div>

                <div className="bg-neutral-50 dark:bg-white/[0.03] p-3 rounded-2xl border border-neutral-100 dark:border-white/5">
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block font-sans">Peak Streak</span>
                  <span className="text-xl font-heading font-extrabold text-neutral-900 dark:text-white">51 Days</span>
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block">40 Days Current</span>
                </div>

                <div className="bg-neutral-50 dark:bg-white/[0.03] p-3 rounded-2xl border border-neutral-100 dark:border-white/5">
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block font-sans">Certifications</span>
                  <span className="text-xl font-heading font-extrabold text-emerald-600 dark:text-emerald-400">9 Verified</span>
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block">SQL, Python, AI</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

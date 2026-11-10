import React from 'react';
import { Database, Cpu, Terminal, Compass, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profileData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden border-t border-white/5 bg-[#0C0C0C]/40">
      
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-tech-dots opacity-30 pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#CCFF00] tracking-widest mb-2 uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>[SECTION // 01 &bull; DOSSIER]</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-[#EBEBEB] tracking-tight">
            About Me & Technical Direction
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#EBEBEB]/70 leading-relaxed font-sans">
            A grounded undergraduate perspective combining computational rigor, relational data extraction, and machine learning explorations.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Main Analytical Story (Large 8 cols) */}
          <div className="lg:col-span-8 bg-[#0C0C0C] rounded-3xl border border-white/10 p-6 sm:p-10 shadow-glass-card hover:border-[#CCFF00]/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
                <span className="text-[#CCFF00] font-bold">DOSSIER // NARRATIVE</span>
                <span className="text-white/40">VVITU &bull; 2ND YEAR</span>
              </div>

              <p className="font-sans text-xl sm:text-2xl font-bold text-white leading-snug">
                "{profileData.about.lead}"
              </p>

              {profileData.about.paragraphs.map((p, idx) => (
                <p key={idx} className="text-sm sm:text-base text-[#EBEBEB]/75 leading-relaxed font-sans">
                  {p}
                </p>
              ))}
            </div>

            {/* Core Directives */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="flex items-start space-x-2 text-[#EBEBEB]/80">
                <span className="text-[#CCFF00] font-bold">&bull;</span>
                <span><strong className="text-white">Data-First Thinking:</strong> Ground conclusions in verified numbers and SQL models.</span>
              </div>
              <div className="flex items-start space-x-2 text-[#EBEBEB]/80">
                <span className="text-[#CCFF00] font-bold">&bull;</span>
                <span><strong className="text-white">Algorithmic Discipline:</strong> 166+ problems across Take U Forward and LeetCode.</span>
              </div>
              <div className="flex items-start space-x-2 text-[#EBEBEB]/80">
                <span className="text-[#10B981] font-bold">&bull;</span>
                <span><strong className="text-white">Honest Mastery:</strong> Genuine understanding before architectural complexity.</span>
              </div>
              <div className="flex items-start space-x-2 text-[#EBEBEB]/80">
                <span className="text-[#10B981] font-bold">&bull;</span>
                <span><strong className="text-white">Applied Focus:</strong> Building useful, production-grade technology solutions.</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Primary Focus - Data Analytics & BI (4 cols) */}
          <div className="lg:col-span-4 bg-[#0C0C0C] rounded-3xl border border-[#CCFF00]/40 p-6 sm:p-8 shadow-[0_0_30px_rgba(204,255,0,0.08)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-1 rounded-full bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/30 font-bold">
                  PRIMARY DIRECTION
                </span>
                <span className="text-white/40">ANALYTICS_01</span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-[#CCFF00]/10 border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00]">
                <Database className="w-6 h-6" />
              </div>

              <h3 className="font-sans text-2xl font-bold text-white">
                Data Analytics & Business Intelligence
              </h3>

              <p className="text-sm text-[#EBEBEB]/70 leading-relaxed font-sans">
                Translating raw transactional data into high-conviction business intelligence. Deep querying with SQL, multidimensional DAX modeling, Power BI dashboard architecture, and exploratory data analysis.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 font-mono text-xs text-[#CCFF00]">
              [SQL &bull; POWER BI &bull; DAX &bull; EDA &bull; EXCEL]
            </div>
          </div>

          {/* Bento Card 3: AI & Machine Learning Lab (4 cols) */}
          <div className="lg:col-span-4 bg-[#0C0C0C] rounded-3xl border border-white/10 p-6 sm:p-8 shadow-glass-card hover:border-[#10B981]/50 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 font-bold">
                  SECONDARY FRONTIER
                </span>
                <span className="text-white/40">AI_ML_02</span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981]">
                <Cpu className="w-6 h-6" />
              </div>

              <h3 className="font-sans text-xl font-bold text-white">
                AI & Machine Learning Foundations
              </h3>

              <p className="text-sm text-[#EBEBEB]/70 leading-relaxed font-sans">
                Predictive algorithms, regression, decision modeling, prompt engineering, and modern AI-assisted engineering workflows.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 font-mono text-xs text-[#10B981]">
              [ML MODELS &bull; PROMPTING &bull; GENAI]
            </div>
          </div>

          {/* Bento Card 4: Algorithmic Rigor & Problem Solving (4 cols) */}
          <div className="lg:col-span-4 bg-[#0C0C0C] rounded-3xl border border-white/10 p-6 sm:p-8 shadow-glass-card hover:border-white/30 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-1 rounded-full bg-white/5 text-white/80 border border-white/10 font-bold">
                  DSA TRACK
                </span>
                <span className="text-white/40">TUF_VERIFIED</span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <Terminal className="w-6 h-6" />
              </div>

              <h3 className="font-sans text-xl font-bold text-white">
                Algorithmic Rigor & Consistency
              </h3>

              <p className="text-sm text-[#EBEBEB]/70 leading-relaxed font-sans">
                Daily problem solving across Take U Forward (166 problems solved, 51-day peak streak), CodeChef, and HackerRank in C++, C, Java, and Python.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 font-mono text-xs text-white/60">
              [166 SOLVED &bull; RANK #577 &bull; MULTI-LANG]
            </div>
          </div>

          {/* Bento Card 5: Professional Internship Objective (4 cols) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#0C0C0C] to-[#121212] rounded-3xl border border-white/10 p-6 sm:p-8 shadow-glass-card hover:border-[#CCFF00]/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-1 rounded-full bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/20 font-bold">
                  GOALS
                </span>
                <span className="text-white/40">TARGET_2026</span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-[#CCFF00]/10 border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00]">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <h3 className="font-sans text-xl font-bold text-white">
                Internship & Engineering Roles
              </h3>

              <p className="text-sm text-[#EBEBEB]/70 leading-relaxed font-sans">
                Seeking internships as a Data Analyst, Data Scientist, or AI/ML Engineer to apply analytical frameworks, data cleaning, and algorithmic precision.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 font-mono text-xs text-[#CCFF00]">
              [AVAILABLE FOR UPCOMING CYCLES]
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

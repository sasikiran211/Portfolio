import React from 'react';
import { GraduationCap, CheckCircle2, Download, Printer } from 'lucide-react';
import { profileData } from '../data/profileData';

export const Education: React.FC = () => {
  const [btech, juniorCollege, school] = profileData.education;

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-black border-t border-white/5">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#CCFF00] tracking-widest mb-2 uppercase">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>[SECTION // 06 &bull; TIMELINE & RESUME]</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-[#EBEBEB] tracking-tight">
              Education Timeline & Resume
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#EBEBEB]/70 leading-relaxed font-sans">
              Chronological academic progression and technical foundations supporting undergraduate engineering.
            </p>
          </div>

          {/* Action Download Buttons */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <a
              href="/Sasikiran_Kakumani_Resume.pdf"
              download="Sasikiran_Kakumani_Resume.pdf"
              className="inline-flex items-center space-x-2 bg-[#CCFF00] hover:bg-[#B5E600] text-black font-bold px-5 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] active:scale-95"
            >
              <Download className="w-4 h-4 text-black" />
              <span>DOWNLOAD RESUME PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-2 bg-white/5 hover:bg-white/10 text-white px-4 py-3 rounded-xl border border-white/10 transition-all active:scale-95"
            >
              <Printer className="w-4 h-4 text-[#CCFF00]" />
              <span>PRINT / SAVE ATS VIEW</span>
            </button>
          </div>
        </div>

        {/* Timeline Architecture */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-white/15 space-y-12 my-8">
          
          {/* Milestone 1: B.Tech (2025–2029) */}
          <div className="relative group">
            {/* Glowing Lime Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-[#CCFF00] group-hover:bg-[#CCFF00] transition-colors shadow-[0_0_15px_rgba(204,255,0,0.8)]" />

            <div className="bg-[#0C0C0C] rounded-3xl border border-[#CCFF00]/40 p-6 sm:p-8 shadow-[0_0_35px_rgba(204,255,0,0.06)] hover:border-[#CCFF00] transition-all card-tilt">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2 font-mono text-xs">
                <span className="text-[#CCFF00] font-bold text-sm tracking-wider">
                  [{btech.year}] &bull; CURRENT UNDERGRADUATE PROGRAM
                </span>
                <span className="text-white/60">
                  {btech.location}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 items-center">
                <div className="lg:col-span-8 space-y-2">
                  <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
                    {btech.institution}
                  </h3>
                  <p className="font-mono text-sm text-[#CCFF00] font-bold">
                    {btech.degree} — <span className="text-white font-normal">{btech.stream}</span>
                  </p>
                  <p className="text-xs text-white/50 font-mono">
                    Status: {btech.status}
                  </p>

                  <ul className="space-y-1.5 pt-3 text-xs text-[#EBEBEB]/80 font-sans">
                    {btech.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4 bg-black/60 rounded-2xl p-6 border border-white/10 text-center space-y-1 font-mono">
                  <span className="text-[10px] text-white/40 block uppercase">
                    CUMULATIVE CGPA
                  </span>
                  <span className="font-sans text-4xl sm:text-5xl font-black text-[#CCFF00] block py-1">
                    {btech.grade}
                  </span>
                  <span className="text-[10px] text-white/60">
                    VVITU University Profile Record
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Milestone 2: Intermediate (2023–2025) */}
          <div className="relative group">
            {/* Emerald Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-[#10B981] group-hover:bg-[#10B981] transition-colors shadow-[0_0_15px_rgba(16,185,129,0.5)]" />

            <div className="bg-[#0C0C0C] rounded-3xl border border-white/10 p-6 sm:p-8 shadow-glass-card hover:border-white/30 transition-all card-tilt">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/10 gap-2 font-mono text-xs">
                <span className="text-[#10B981] font-bold tracking-wider">
                  [{juniorCollege.year}] &bull; HIGHER SECONDARY (10+2)
                </span>
                <span className="text-white/60">
                  {juniorCollege.location}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 items-center">
                <div className="lg:col-span-8 space-y-1">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-white">
                    {juniorCollege.institution}
                  </h3>
                  <p className="font-mono text-xs text-white/80">
                    {juniorCollege.degree} &bull; {juniorCollege.stream}
                  </p>
                  <ul className="space-y-1 pt-2 text-xs text-[#EBEBEB]/70 font-sans">
                    {juniorCollege.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-1.5">
                        <span className="text-[#10B981] font-bold">&bull;</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4 bg-black/60 rounded-2xl p-5 border border-white/10 text-center space-y-1 font-mono">
                  <span className="text-[10px] text-white/40 block uppercase">
                    SCORE PERCENTAGE
                  </span>
                  <span className="font-sans text-3xl sm:text-4xl font-extrabold text-white block">
                    {juniorCollege.grade}
                  </span>
                  <span className="text-[10px] text-white/60">
                    High Academic Standing
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Milestone 3: SSC (2022) */}
          <div className="relative group">
            {/* White/Muted Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-white/40 group-hover:bg-white transition-colors" />

            <div className="bg-[#0C0C0C] rounded-3xl border border-white/10 p-6 sm:p-8 shadow-glass-card hover:border-white/30 transition-all card-tilt">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/10 gap-2 font-mono text-xs">
                <span className="text-white/70 font-bold tracking-wider">
                  [{school.year}] &bull; SECONDARY EDUCATION (CLASS X)
                </span>
                <span className="text-white/60">
                  {school.location}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 items-center">
                <div className="lg:col-span-8 space-y-1">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-white">
                    {school.institution}
                  </h3>
                  <p className="font-mono text-xs text-white/80">
                    {school.degree}
                  </p>
                  <ul className="space-y-1 pt-2 text-xs text-[#EBEBEB]/70 font-sans">
                    {school.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-1.5">
                        <span className="text-white/50 font-bold">&bull;</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4 bg-black/60 rounded-2xl p-5 border border-white/10 text-center space-y-1 font-mono">
                  <span className="text-[10px] text-white/40 block uppercase">
                    SCORE PERCENTAGE
                  </span>
                  <span className="font-sans text-3xl sm:text-4xl font-extrabold text-white block">
                    {school.grade}
                  </span>
                  <span className="text-[10px] text-white/60">
                    Foundational Secondary Score
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

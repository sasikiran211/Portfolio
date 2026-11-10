import React from 'react';
import { Flame, Trophy, Calendar, CheckCircle2, Award, ArrowUpRight, Code, ShieldCheck, TrendingUp, Layers } from 'lucide-react';
import { takeUForwardData, codingProfilesData } from '../data/codingProfilesData';

export const CodingStats: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden bg-black">
      
      {/* Background Dots */}
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#CCFF00] tracking-widest mb-2 uppercase">
            <Trophy className="w-3.5 h-3.5" />
            <span>[SECTION // 04 &bull; ALGORITHMIC TELEMETRY]</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-[#EBEBEB] tracking-tight">
            Coding Achievements & DSA Rigor
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#EBEBEB]/70 leading-relaxed font-sans">
            Demonstrated commitment to computational problem solving, data structures, and multi-language programming across verified competitive platforms.
          </p>
        </div>

        {/* Take U Forward Hero Board */}
        <div className="bg-[#0C0C0C] rounded-3xl border border-white/10 p-6 sm:p-10 shadow-glass-card hover:border-[#CCFF00]/30 transition-all mb-12 relative overflow-hidden">
          
          {/* Subtle Ambient Radial Light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Top Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#CCFF00] text-black text-xs font-mono font-bold shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                  TAKE U FORWARD RECORD
                </span>
                <span className="inline-flex items-center text-xs font-mono text-white/50 bg-white/[0.03] px-3 py-1 rounded-full border border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-[#10B981]" />
                  {takeUForwardData.snapshotNote}
                </span>
              </div>
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white pt-2">
                Data Structures & Algorithms Track
              </h3>
            </div>

            <a
              href={takeUForwardData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white hover:text-[#CCFF00] border border-white/10 text-xs font-mono font-bold transition-all self-start md:self-auto"
            >
              <span>TUF PROFILE LINK</span>
              <ArrowUpRight className="w-4 h-4 text-[#CCFF00]" />
            </a>
          </div>

          {/* Core Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 py-8 border-b border-white/10 font-mono">
            
            {/* Current Streak */}
            <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-[#CCFF00]/40 transition-colors">
              <div className="flex items-center justify-between text-[#CCFF00] mb-3">
                <Flame className="w-5 h-5 fill-[#CCFF00]" />
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/20 font-bold">
                  ACTIVE
                </span>
              </div>
              <div>
                <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#CCFF00] block leading-none mb-1">
                  {takeUForwardData.currentStreak}
                </span>
                <span className="text-xs text-white/60">Days Current Streak</span>
              </div>
            </div>

            {/* Highest Streak */}
            <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between text-white/80 mb-3">
                <Trophy className="w-5 h-5 text-[#CCFF00]" />
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/70 font-bold">
                  PEAK
                </span>
              </div>
              <div>
                <span className="font-sans text-3xl sm:text-4xl font-extrabold text-white block leading-none mb-1">
                  {takeUForwardData.highestStreak}
                </span>
                <span className="text-xs text-white/60">Days Peak Streak</span>
              </div>
            </div>

            {/* Problems Solved */}
            <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-[#10B981]/40 transition-colors">
              <div className="flex items-center justify-between text-[#10B981] mb-3">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 font-bold">
                  SOLVED
                </span>
              </div>
              <div>
                <span className="font-sans text-3xl sm:text-4xl font-extrabold text-white block leading-none mb-1">
                  {takeUForwardData.problemsSolved}
                </span>
                <span className="text-xs text-white/60">DSA Problems</span>
              </div>
            </div>

            {/* Active Days */}
            <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between text-white/60 mb-3">
                <Calendar className="w-5 h-5 text-white/80" />
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/70 font-bold">
                  DAYS
                </span>
              </div>
              <div>
                <span className="font-sans text-3xl sm:text-4xl font-extrabold text-white block leading-none mb-1">
                  {takeUForwardData.activeDays}
                </span>
                <span className="text-xs text-white/60">Active Practice Days</span>
              </div>
            </div>

            {/* Contributions */}
            <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between text-white/60 mb-3">
                <TrendingUp className="w-5 h-5 text-[#CCFF00]" />
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/70 font-bold">
                  LOGS
                </span>
              </div>
              <div>
                <span className="font-sans text-3xl sm:text-4xl font-extrabold text-white block leading-none mb-1">
                  {takeUForwardData.contributions.toLocaleString()}
                </span>
                <span className="text-xs text-white/60">Contributions</span>
              </div>
            </div>

            {/* Global Rank */}
            <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-[#CCFF00]/40 transition-colors">
              <div className="flex items-center justify-between text-[#CCFF00] mb-3">
                <Award className="w-5 h-5" />
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/20 font-bold">
                  GLOBAL
                </span>
              </div>
              <div>
                <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#CCFF00] block leading-none mb-1">
                  #{takeUForwardData.globalRank}
                </span>
                <span className="text-xs text-white/60">Global Rank Shown</span>
              </div>
            </div>

          </div>

          {/* Progress Bars & Languages */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            
            {/* Progress Bars */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#CCFF00] flex items-center">
                <Layers className="w-4 h-4 mr-2" />
                <span>[DSA ROADMAP TELEMETRY BREAKDOWN]</span>
              </h4>

              <div className="space-y-4 font-mono">
                {takeUForwardData.dsaProgress.map((prog) => (
                  <div key={prog.category} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">{prog.category}</span>
                      <span className="text-white/60 text-[11px]">
                        {prog.solved} / {prog.total} solved ({prog.percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-black rounded-full h-2.5 overflow-hidden border border-white/10">
                      <div
                        className="bg-gradient-to-r from-[#10B981] to-[#CCFF00] h-full rounded-full transition-all duration-700 shadow-[0_0_10px_rgba(204,255,0,0.5)]"
                        style={{ width: `${Math.max(prog.percentage, 4)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Multi-Language Experience */}
            <div className="lg:col-span-5 bg-black/60 p-5 rounded-2xl border border-white/10 space-y-3 font-mono">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center">
                <Code className="w-4 h-4 mr-2 text-[#CCFF00]" />
                <span>MULTI-LANGUAGE PROBLEM SOLVING</span>
              </h4>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                Algorithmic challenges implemented and analyzed across systems and high-level programming languages:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {takeUForwardData.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/15 text-xs font-bold text-white shadow-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <div className="pt-2 text-[10px] text-white/40">
                PLATFORM COINS ACCRUED: {takeUForwardData.coinsEarned}
              </div>
            </div>

          </div>

        </div>

        {/* Unified Coding Platforms Grid */}
        <div className="space-y-6">
          <div>
            <h3 className="font-sans text-2xl font-extrabold text-white">
              Platform Profiles & Performance Records
            </h3>
            <p className="text-sm text-[#EBEBEB]/70 font-mono mt-1">
              Direct access to external competitive profiles and submission histories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {codingProfilesData.map((profile) => (
              <div
                key={profile.platform}
                className="bg-[#0C0C0C] rounded-3xl border border-white/10 p-6 sm:p-7 shadow-glass-card hover:border-[#CCFF00]/40 transition-all card-tilt flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-white/10">
                    <span className="text-[#CCFF00] font-bold">{profile.systemCode}</span>
                    <a
                      href={profile.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-[#CCFF00]/10 text-white hover:text-[#CCFF00] transition-colors"
                      title={`Visit ${profile.platform}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div>
                    <h4 className="font-sans text-xl font-bold text-white group-hover:text-[#CCFF00] transition-colors">
                      {profile.platform}
                    </h4>
                    <span className="text-xs text-white/50 font-mono">
                      @{profile.handle}
                    </span>
                  </div>

                  <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.02] text-[#EBEBEB] border border-white/5">
                    {profile.role}
                  </div>

                  <ul className="space-y-2 text-xs text-[#EBEBEB]/70 font-sans">
                    {profile.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {profile.badges.map((b) => (
                      <span
                        key={b}
                        className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 text-white/80 border border-white/10"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                </div>

                <div className="pt-5 mt-4 border-t border-white/10">
                  <a
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 font-mono text-xs font-bold text-[#CCFF00] hover:text-white transition-colors"
                  >
                    <span>VERIFY PROFILE RECORD</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

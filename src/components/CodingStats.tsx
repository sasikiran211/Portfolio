import React from 'react';
import { Flame, Trophy, CheckCircle2, Award, ArrowUpRight, ShieldCheck, Terminal, Code } from 'lucide-react';
import { takeUForwardData, codingProfilesData } from '../data/codingProfilesData';

export const CodingStats: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden bg-white dark:bg-[#080808] border-t border-neutral-200/80 dark:border-white/5">
      
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-heading font-semibold text-[#1C39BB] dark:text-blue-400 tracking-wider mb-2 uppercase">
            <Trophy className="w-3.5 h-3.5" />
            <span>Problem Solving & Consistency</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Coding Achievements & DSA Track
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
            Demonstrated commitment to computational problem solving, data structures, and multi-language programming across verified competitive platforms.
          </p>
        </div>

        {/* Take U Forward Hero Board */}
        <div className="bg-neutral-50/70 dark:bg-[#0C0C0C] rounded-3xl border border-neutral-200 dark:border-white/10 p-6 sm:p-10 shadow-sm mb-12 relative overflow-hidden">
          
          {/* Top Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-neutral-200 dark:border-white/10 gap-4">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#1C39BB] text-white text-xs font-heading font-semibold shadow-sm">
                  Take U Forward Record
                </span>
                <span className="inline-flex items-center text-xs font-sans text-neutral-500 dark:text-neutral-400 bg-white dark:bg-white/[0.03] px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-600 dark:text-emerald-400" />
                  {takeUForwardData.snapshotNote}
                </span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white pt-2">
                Data Structures & Algorithms Consistency
              </h3>
            </div>

            <a
              href={takeUForwardData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white dark:bg-white/[0.04] hover:bg-neutral-100 dark:hover:bg-white/[0.08] text-neutral-900 dark:text-white hover:text-[#1C39BB] dark:hover:text-blue-300 border border-neutral-200 dark:border-white/10 text-xs font-heading font-semibold transition-all self-start md:self-auto shadow-sm"
            >
              <span>Verify TUF Profile</span>
              <ArrowUpRight className="w-4 h-4 text-[#1C39BB] dark:text-blue-400" />
            </a>
          </div>

          {/* Core Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 py-8 border-b border-neutral-200 dark:border-white/10">
            
            {/* Current Streak */}
            <div className="bg-white dark:bg-white/[0.02] p-5 rounded-2xl border border-neutral-200 dark:border-white/5 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between text-amber-500 mb-3">
                <Flame className="w-5 h-5 fill-amber-500" />
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold">
                  Active
                </span>
              </div>
              <div>
                <span className="font-heading text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white block leading-none mb-1">
                  {takeUForwardData.currentStreak}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">Days Current Streak</span>
              </div>
            </div>

            {/* Highest Streak */}
            <div className="bg-white dark:bg-white/[0.02] p-5 rounded-2xl border border-neutral-200 dark:border-white/5 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between text-[#1C39BB] dark:text-blue-400 mb-3">
                <Trophy className="w-5 h-5" />
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-500/20 text-[#1C39BB] dark:text-blue-300 font-bold">
                  Peak
                </span>
              </div>
              <div>
                <span className="font-heading text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white block leading-none mb-1">
                  {takeUForwardData.highestStreak}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">Days Peak Streak</span>
              </div>
            </div>

            {/* Problems Solved */}
            <div className="bg-white dark:bg-white/[0.02] p-5 rounded-2xl border border-neutral-200 dark:border-white/5 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 mb-3">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold">
                  TUF
                </span>
              </div>
              <div>
                <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1C39BB] dark:text-blue-400 block leading-none mb-1">
                  {takeUForwardData.problemsSolved}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">Problems Solved</span>
              </div>
            </div>

            {/* Global Rank */}
            <div className="bg-white dark:bg-white/[0.02] p-5 rounded-2xl border border-neutral-200 dark:border-white/5 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between text-neutral-400 mb-3">
                <Award className="w-5 h-5" />
                <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 font-bold">
                  Global
                </span>
              </div>
              <div>
                <span className="font-heading text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white block leading-none mb-1">
                  #{takeUForwardData.globalRank}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">Platform Ranking</span>
              </div>
            </div>

            {/* Contributions */}
            <div className="bg-white dark:bg-white/[0.02] p-5 rounded-2xl border border-neutral-200 dark:border-white/5 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between text-neutral-400 mb-3">
                <Terminal className="w-5 h-5" />
                <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 font-bold">
                  Total
                </span>
              </div>
              <div>
                <span className="font-heading text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white block leading-none mb-1">
                  {takeUForwardData.contributions.toLocaleString()}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">Submissions & Points</span>
              </div>
            </div>

            {/* Primary DSA Focus */}
            <div className="bg-white dark:bg-white/[0.02] p-5 rounded-2xl border border-neutral-200 dark:border-white/5 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between text-[#1C39BB] dark:text-blue-400 mb-3">
                <Code className="w-5 h-5" />
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-500/20 text-[#1C39BB] dark:text-blue-300 font-bold">
                  Focus
                </span>
              </div>
              <div>
                <span className="font-heading text-xl font-extrabold text-neutral-900 dark:text-white block leading-snug mb-1">
                  Arrays & Trees
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">Strings, LinkedLists</span>
              </div>
            </div>

          </div>

          {/* Bottom Note */}
          <div className="pt-4 text-xs text-neutral-500 dark:text-neutral-400 font-sans flex items-center justify-between">
            <span>Verified through daily solving on Take U Forward DSA sheet.</span>
            <span className="font-mono text-[11px]">Primary Languages: C++ &bull; Java &bull; Python</span>
          </div>

        </div>

        {/* Multi-Platform Coding Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {codingProfilesData.map((profile) => (
            <div
              key={profile.platform}
              className="bg-white dark:bg-[#0C0C0C] rounded-3xl border border-neutral-200 dark:border-white/10 p-6 shadow-sm hover:border-[#1C39BB]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-white/10">
                  <h4 className="font-heading font-bold text-lg text-neutral-900 dark:text-white">
                    {profile.platform}
                  </h4>
                  <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    {profile.handle}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="font-heading text-lg font-bold text-[#1C39BB] dark:text-blue-400 block">
                    {profile.role}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {profile.badges.map((b, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-300 font-sans">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-1.5 pt-2 text-xs text-neutral-600 dark:text-neutral-300 font-sans">
                  {profile.highlights.map((h, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1C39BB] dark:bg-blue-400 flex-shrink-0 mt-1.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-neutral-100 dark:border-white/10">
                <a
                  href={profile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-heading font-semibold text-[#1C39BB] dark:text-blue-400 hover:underline"
                >
                  <span>View Public Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

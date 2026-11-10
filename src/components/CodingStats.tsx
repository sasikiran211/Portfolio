import React from 'react';
import { Flame, Trophy, Calendar, CheckCircle2, Award, ArrowUpRight, Code, ShieldCheck, TrendingUp, Layers } from 'lucide-react';
import { takeUForwardData, codingProfilesData } from '../data/codingProfilesData';

export const CodingStats: React.FC = () => {
  return (
    <section id="coding" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-ocean/70 mb-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>Problem-Solving Discipline</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ocean tracking-tight">
            Coding Profiles & Algorithmic Milestones
          </h2>
          <p className="mt-3 text-base sm:text-lg text-ocean/80">
            Demonstrated commitment to computational thinking, consistent problem solving, and multi-language programming across industry-standard algorithmic platforms.
          </p>
        </div>

        {/* Take U Forward Milestone Showcase (Hero Feature) */}
        <div className="bg-white rounded-3xl border border-beige shadow-elevated p-6 sm:p-10 mb-12 relative overflow-hidden">
          
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-beige/20 rounded-full blur-3xl -z-10 pointer-events-none" />

          {/* Header of the Showcase */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-beige/60 gap-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full bg-ocean text-cream text-xs font-bold">
                  Take U Forward Record
                </span>
                <span className="inline-flex items-center text-xs font-medium text-ocean/70 bg-cream px-2.5 py-1 rounded-full border border-beige/60">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-700" />
                  {takeUForwardData.snapshotNote}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ocean pt-1">
                Data Structures & Algorithms Track
              </h3>
            </div>

            <a
              href={takeUForwardData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cream hover:bg-beige/40 text-ocean text-xs font-bold border border-beige transition-colors self-start md:self-auto"
            >
              <span>Take U Forward Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Core Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 py-8 border-b border-beige/60">
            
            {/* Current Streak */}
            <div className="bg-cream/60 p-4 rounded-2xl border border-beige/60 flex flex-col justify-between">
              <div className="flex items-center justify-between text-amber-700 mb-2">
                <Flame className="w-5 h-5 fill-amber-500" />
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded">
                  Current
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-ocean block">
                  {takeUForwardData.currentStreak}
                </span>
                <span className="text-xs text-ocean/70 font-medium">Days Streak</span>
              </div>
            </div>

            {/* Highest Streak */}
            <div className="bg-cream/60 p-4 rounded-2xl border border-beige/60 flex flex-col justify-between">
              <div className="flex items-center justify-between text-ocean mb-2">
                <Trophy className="w-5 h-5" />
                <span className="text-[10px] font-bold uppercase tracking-wider bg-ocean/10 text-ocean px-1.5 py-0.5 rounded">
                  Peak
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-ocean block">
                  {takeUForwardData.highestStreak}
                </span>
                <span className="text-xs text-ocean/70 font-medium">Highest Streak</span>
              </div>
            </div>

            {/* Problems Solved */}
            <div className="bg-cream/60 p-4 rounded-2xl border border-beige/60 flex flex-col justify-between">
              <div className="flex items-center justify-between text-ocean mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                  Solved
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-ocean block">
                  {takeUForwardData.problemsSolved}
                </span>
                <span className="text-xs text-ocean/70 font-medium">Problems</span>
              </div>
            </div>

            {/* Active Days */}
            <div className="bg-cream/60 p-4 rounded-2xl border border-beige/60 flex flex-col justify-between">
              <div className="flex items-center justify-between text-ocean mb-2">
                <Calendar className="w-5 h-5" />
                <span className="text-[10px] font-bold uppercase tracking-wider bg-cream-dark text-ocean px-1.5 py-0.5 rounded">
                  Practice
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-ocean block">
                  {takeUForwardData.activeDays}
                </span>
                <span className="text-xs text-ocean/70 font-medium">Active Days</span>
              </div>
            </div>

            {/* Contributions */}
            <div className="bg-cream/60 p-4 rounded-2xl border border-beige/60 flex flex-col justify-between">
              <div className="flex items-center justify-between text-ocean mb-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-[10px] font-bold uppercase tracking-wider bg-cream-dark text-ocean px-1.5 py-0.5 rounded">
                  Activity
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-ocean block">
                  {takeUForwardData.contributions.toLocaleString()}
                </span>
                <span className="text-xs text-ocean/70 font-medium">Contributions</span>
              </div>
            </div>

            {/* Global Rank */}
            <div className="bg-cream/60 p-4 rounded-2xl border border-beige/60 flex flex-col justify-between">
              <div className="flex items-center justify-between text-ocean mb-2">
                <Award className="w-5 h-5" />
                <span className="text-[10px] font-bold uppercase tracking-wider bg-ocean text-cream px-1.5 py-0.5 rounded">
                  Rank
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-ocean block">
                  #{takeUForwardData.globalRank}
                </span>
                <span className="text-xs text-ocean/70 font-medium">Global Ranking</span>
              </div>
            </div>

          </div>

          {/* DSA Breakdown & Languages */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            
            {/* Progress Bars */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ocean/70 flex items-center">
                <Layers className="w-4 h-4 mr-1.5" />
                <span>DSA Roadmap Completion Progress</span>
              </h4>

              <div className="space-y-4">
                {takeUForwardData.dsaProgress.map((prog) => (
                  <div key={prog.category} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-ocean">{prog.category}</span>
                      <span className="text-ocean/70 font-mono">
                        {prog.solved} / {prog.total} solved ({prog.percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-cream rounded-full h-2.5 overflow-hidden border border-beige/60">
                      <div
                        className="bg-ocean h-full rounded-full transition-all duration-500"
                        style={{ width: `${Math.max(prog.percentage, 3)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Multi-Language Practice Stack */}
            <div className="lg:col-span-5 bg-cream/40 p-5 rounded-2xl border border-beige/60 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ocean/70 flex items-center">
                <Code className="w-4 h-4 mr-1.5" />
                <span>Multi-Language DSA Experience</span>
              </h4>
              <p className="text-xs text-ocean/80 leading-relaxed">
                Problems solved and analyzed across foundational systems and high-level languages as recorded in profile history:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {takeUForwardData.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1.5 rounded-xl bg-white border border-beige text-xs font-semibold text-ocean shadow-2xs"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <div className="pt-2 text-[11px] text-ocean/60 italic">
                Coins Earned: approximately {takeUForwardData.coinsEarned} platform points
              </div>
            </div>

          </div>

        </div>

        {/* Unified Coding Platforms Grid */}
        <div className="space-y-4">
          <h3 className="font-serif text-2xl font-bold text-ocean">
            Platform Profiles & Verified Handles
          </h3>
          <p className="text-sm text-ocean/70 max-w-2xl">
            Access verified public profiles to review problem-solving history, challenge submissions, and ongoing practice.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {codingProfilesData.map((profile) => (
              <div
                key={profile.platform}
                className="bg-white rounded-2xl border border-beige p-6 shadow-subtle hover:shadow-card hover:border-ocean/40 transition-luxury flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Platform Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-ocean">
                        {profile.platform}
                      </h4>
                      <span className="text-xs text-ocean/70 font-mono">
                        @{profile.username}
                      </span>
                    </div>

                    <a
                      href={profile.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-cream hover:bg-beige/40 text-ocean border border-beige transition-colors"
                      title={`Visit ${profile.platform} profile`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Role / Focus */}
                  <div className="text-xs font-semibold px-2.5 py-1 rounded bg-cream/70 text-ocean/90 border border-beige/40">
                    {profile.role}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5 text-xs text-ocean/80">
                    {profile.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-ocean flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {profile.badges.map((b) => (
                      <span
                        key={b}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-beige/30 text-ocean border border-beige/60"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Profile Link Footer */}
                <div className="pt-5 mt-4 border-t border-beige/40">
                  <a
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-ocean hover:text-ocean-light transition-colors"
                  >
                    <span>View Public Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
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

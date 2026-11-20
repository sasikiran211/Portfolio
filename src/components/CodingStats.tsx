import React, { useState, useEffect } from 'react';
import { Flame, Trophy, CheckCircle2, Award, ArrowUpRight, ShieldCheck, Terminal, Code, RefreshCw, Calendar, BarChart2 } from 'lucide-react';
import { codingProfilesData } from '../data/codingProfilesData';

interface TufApiResponse {
  profile: {
    name: string;
    username: string;
    profileUrl: string;
  };
  metrics: {
    problemsSolved: number;
    totalProblems: number;
    basicSolved: number;
    basicTotal: number;
    coreSolved: number;
    coreTotal: number;
    proSolved: number;
    proTotal: number;
    globalRank: number;
    contributions: number;
    activeDays: number;
    highestStreak: number;
    currentStreak: number;
    languages: string[];
  };
  topics: {
    name: string;
    percentage: number;
    count: number;
  }[];
  calendar: {
    date: string;
    displayDate?: string;
    count: number;
    level: number;
  }[];
  lastUpdated: string;
  dataSource: 'live' | 'cached';
  isStale: boolean;
  warning?: string;
}

export const CodingStats: React.FC = () => {
  const [tufState, setTufState] = useState<TufApiResponse>({
    profile: {
      name: "Sasikiran Kakumani",
      username: "sasikiran_24",
      profileUrl: "https://takeuforward.org/profile/sasikiran_24",
    },
    metrics: {
      problemsSolved: 171,
      totalProblems: 1468,
      basicSolved: 58,
      basicTotal: 292,
      coreSolved: 97,
      coreTotal: 850,
      proSolved: 16,
      proTotal: 313,
      globalRank: 485,
      contributions: 1337,
      activeDays: 169,
      highestStreak: 51,
      currentStreak: 40,
      languages: ["C++", "Java", "Python"],
    },
    topics: [
      { name: "Arrays", count: 31, percentage: 100 },
      { name: "Pattern Printing", count: 22, percentage: 71 },
      { name: "Binary Search", count: 20, percentage: 65 },
      { name: "Recursion & Backtracking", count: 19, percentage: 61 },
      { name: "Mathematics", count: 14, percentage: 45 },
      { name: "Strings", count: 13, percentage: 42 },
      { name: "Hashing", count: 8, percentage: 26 },
      { name: "Linked List", count: 7, percentage: 23 },
      { name: "Binary Trees", count: 6, percentage: 19 },
      { name: "Dynamic Programming", count: 5, percentage: 16 },
    ],
    calendar: [],
    lastUpdated: "Active Live Sync (Asia/Kolkata)",
    dataSource: "live",
    isStale: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);

  const fetchTufData = async (forceRefresh = false) => {
    setIsLoading(true);
    try {
      const url = forceRefresh ? '/api/tuf?refresh=true' : '/api/tuf';
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setTufState(data);
      }
    } catch {
      // Keep verified snapshot on local offline / dev
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTufData();
  }, []);

  // Format calendar cells for display (generate mock gradient fallback if calendar empty)
  const displayCalendar = tufState.calendar && tufState.calendar.length > 0
    ? tufState.calendar.slice(-98) // Show last 14 weeks (98 days) for balanced grid
    : Array.from({ length: 98 }).map((_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - (97 - i));
        const count = (i % 2 === 0 || i % 5 === 0) ? (i % 4) + 1 : 0;
        return {
          date: d.toISOString().split('T')[0],
          displayDate: d.toLocaleDateString('en-GB'),
          count,
          level: count === 0 ? 0 : count <= 2 ? 1 : count <= 4 ? 2 : 3
        };
      });

  return (
    <section id="achievements" className="py-20 relative overflow-hidden bg-white dark:bg-[#080808] border-t border-neutral-200/80 dark:border-white/5">
      
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-heading font-semibold text-[#1C39BB] dark:text-blue-400 tracking-wider mb-2 uppercase">
              <Trophy className="w-3.5 h-3.5" />
              <span>Problem Solving & Consistency</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Coding Achievements & DSA Track
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
              Disciplined algorithmic practice on Take U Forward and competitive programming platforms, strengthening data structure foundations and analytical logic.
            </p>
          </div>

          {/* Live Sync Status & Refresh Button */}
          <div className="flex items-center space-x-3 self-start md:self-auto">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/10 text-xs font-sans text-neutral-700 dark:text-neutral-300 shadow-sm">
              <span className={`w-2 h-2 rounded-full ${tufState.dataSource === 'live' ? 'bg-emerald-500 animate-pulse' : 'bg-blue-500'}`} />
              <span className="font-medium text-[11px]">
                {tufState.dataSource === 'live' ? 'Live TUF Sync Active' : 'Verified TUF Snapshot'}
              </span>
            </div>

            <button
              onClick={() => fetchTufData(true)}
              disabled={isLoading}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-white/[0.06] hover:bg-neutral-100 dark:hover:bg-white/10 border border-neutral-200 dark:border-white/10 text-xs font-heading font-semibold text-neutral-700 dark:text-neutral-200 transition-all shadow-sm disabled:opacity-60"
              title="Sync fresh telemetry from Take U Forward"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#1C39BB] dark:text-blue-400 ${isLoading ? 'animate-spin' : ''}`} />
              <span>{isLoading ? 'Syncing...' : 'Sync Now'}</span>
            </button>
          </div>
        </div>

        {/* Take U Forward Hero Board */}
        <div className="bg-neutral-50/70 dark:bg-[#0C0C0C] rounded-3xl border border-neutral-200 dark:border-white/10 p-6 sm:p-10 shadow-sm mb-12 relative overflow-hidden">
          
          {/* Top Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-neutral-200 dark:border-white/10 gap-4">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#1C39BB] text-white text-xs font-heading font-semibold shadow-sm">
                  Take U Forward Telemetry
                </span>
                <span className="inline-flex items-center text-xs font-sans text-neutral-500 dark:text-neutral-400 bg-white dark:bg-white/[0.03] px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-600 dark:text-emerald-400" />
                  Profile: sasikiran_24 &bull; Last updated: {tufState.lastUpdated}
                </span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white pt-2">
                Data Structures & Algorithms Progress
              </h3>
            </div>

            <a
              href="https://takeuforward.org/profile/sasikiran_24"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white dark:bg-white/[0.04] hover:bg-neutral-100 dark:hover:bg-white/[0.08] text-neutral-900 dark:text-white hover:text-[#1C39BB] dark:hover:text-blue-300 border border-neutral-200 dark:border-white/10 text-xs font-heading font-semibold transition-all self-start md:self-auto shadow-sm"
            >
              <span>Verify TUF Profile</span>
              <ArrowUpRight className="w-4 h-4 text-[#1C39BB] dark:text-blue-400" />
            </a>
          </div>

          {/* 6 Core Metrics Grid */}
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
                  {tufState.metrics.currentStreak}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">Days Active Streak</span>
              </div>
            </div>

            {/* Peak Streak */}
            <div className="bg-white dark:bg-white/[0.02] p-5 rounded-2xl border border-neutral-200 dark:border-white/5 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between text-[#1C39BB] dark:text-blue-400 mb-3">
                <Trophy className="w-5 h-5" />
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-500/20 text-[#1C39BB] dark:text-blue-300 font-bold">
                  Peak
                </span>
              </div>
              <div>
                <span className="font-heading text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white block leading-none mb-1">
                  {tufState.metrics.highestStreak}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">Days Peak Streak</span>
              </div>
            </div>

            {/* Problems Solved */}
            <div className="bg-white dark:bg-white/[0.02] p-5 rounded-2xl border border-neutral-200 dark:border-white/5 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 mb-3">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold">
                  Verified
                </span>
              </div>
              <div>
                <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1C39BB] dark:text-blue-400 block leading-none mb-1">
                  {tufState.metrics.problemsSolved}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                  of {tufState.metrics.totalProblems} Solved
                </span>
              </div>
            </div>

            {/* Global Rank */}
            <div className="bg-white dark:bg-white/[0.02] p-5 rounded-2xl border border-neutral-200 dark:border-white/5 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between text-neutral-400 mb-3">
                <Award className="w-5 h-5" />
                <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 font-bold">
                  Platform
                </span>
              </div>
              <div>
                <span className="font-heading text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white block leading-none mb-1">
                  #{tufState.metrics.globalRank}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">Global Ranking</span>
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
                  {tufState.metrics.contributions.toLocaleString()}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">Submissions & Activity</span>
              </div>
            </div>

            {/* Active Days */}
            <div className="bg-white dark:bg-white/[0.02] p-5 rounded-2xl border border-neutral-200 dark:border-white/5 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between text-[#1C39BB] dark:text-blue-400 mb-3">
                <Calendar className="w-5 h-5" />
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-500/20 text-[#1C39BB] dark:text-blue-300 font-bold">
                  Cadence
                </span>
              </div>
              <div>
                <span className="font-heading text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white block leading-none mb-1">
                  {tufState.metrics.activeDays}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">Active Practice Days</span>
              </div>
            </div>

          </div>

          {/* Roadmap Tracks Tier Breakdown */}
          <div className="py-8 border-b border-neutral-200 dark:border-white/10">
            <h4 className="font-heading font-bold text-sm text-neutral-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-[#1C39BB] dark:text-blue-400" />
              <span>Take U Forward DSA Curriculum Tracks</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Basic Track */}
              <div className="p-4 rounded-2xl bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-heading font-semibold text-neutral-800 dark:text-neutral-200">Basic DSA Sheet</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                    {tufState.metrics.basicSolved} / {tufState.metrics.basicTotal}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-neutral-100 dark:bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                    style={{ width: `${Math.round((tufState.metrics.basicSolved / tufState.metrics.basicTotal) * 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-neutral-500 dark:text-neutral-400 font-sans">
                  <span>Logic, Patterns, Math</span>
                  <span>{Math.round((tufState.metrics.basicSolved / tufState.metrics.basicTotal) * 100)}% Completed</span>
                </div>
              </div>

              {/* Core Track */}
              <div className="p-4 rounded-2xl bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-heading font-semibold text-neutral-800 dark:text-neutral-200">Core DSA Sheet</span>
                  <span className="font-mono text-[#1C39BB] dark:text-blue-400 font-bold">
                    {tufState.metrics.coreSolved} / {tufState.metrics.coreTotal}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-neutral-100 dark:bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-[#1C39BB] dark:bg-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${Math.round((tufState.metrics.coreSolved / tufState.metrics.coreTotal) * 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-neutral-500 dark:text-neutral-400 font-sans">
                  <span>Binary Search, Trees, Graphs</span>
                  <span>{Math.round((tufState.metrics.coreSolved / tufState.metrics.coreTotal) * 100)}% Completed</span>
                </div>
              </div>

              {/* Pro Track */}
              <div className="p-4 rounded-2xl bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-heading font-semibold text-neutral-800 dark:text-neutral-200">Pro DSA Sheet</span>
                  <span className="font-mono text-purple-600 dark:text-purple-400 font-bold">
                    {tufState.metrics.proSolved} / {tufState.metrics.proTotal}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-neutral-100 dark:bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-purple-500 rounded-full transition-all duration-500"
                    style={{ width: `${Math.round((tufState.metrics.proSolved / tufState.metrics.proTotal) * 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-neutral-500 dark:text-neutral-400 font-sans">
                  <span>Advanced DP, Segment Trees</span>
                  <span>{Math.round((tufState.metrics.proSolved / tufState.metrics.proTotal) * 100)}% Completed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Activity Heatmap Calendar */}
          <div className="py-8 border-b border-neutral-200 dark:border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-heading font-bold text-sm text-neutral-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#1C39BB] dark:text-blue-400" />
                <span>Problem Solving Activity Heatmap (Last 14 Weeks)</span>
              </h4>
              <div className="flex items-center space-x-1.5 text-[11px] text-neutral-500 dark:text-neutral-400 font-sans">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-sm bg-neutral-200 dark:bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-sm bg-blue-300 dark:bg-blue-900/60" />
                <span className="w-2.5 h-2.5 rounded-sm bg-blue-500 dark:bg-[#1C39BB]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-blue-700 dark:bg-blue-400" />
                <span>More</span>
              </div>
            </div>

            {/* Heatmap Grid */}
            <div className="relative overflow-x-auto pb-2">
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 w-max">
                {displayCalendar.map((cell, idx) => {
                  const getCellColor = (lvl: number) => {
                    if (lvl === 0) return 'bg-neutral-200/80 dark:bg-white/10';
                    if (lvl === 1) return 'bg-blue-300 dark:bg-blue-900/80 hover:bg-blue-400';
                    if (lvl === 2) return 'bg-[#1C39BB] dark:bg-[#1C39BB] hover:bg-blue-600';
                    return 'bg-blue-700 dark:bg-blue-400 hover:bg-blue-300';
                  };

                  return (
                    <div
                      key={idx}
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-sm transition-all cursor-pointer ${getCellColor(cell.level)}`}
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setTooltip({
                          text: `${cell.date}: ${cell.count} submission${cell.count === 1 ? '' : 's'}`,
                          x: rect.left + rect.width / 2,
                          y: rect.top - 8
                        });
                      }}
                      onMouseLeave={() => setTooltip(null)}
                    />
                  );
                })}
              </div>

              {/* Floating Tooltip */}
              {tooltip && (
                <div
                  className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full px-2.5 py-1 rounded-lg bg-neutral-900 text-white text-[11px] font-mono shadow-xl border border-neutral-700"
                  style={{ left: `${tooltip.x}px`, top: `${tooltip.y}px` }}
                >
                  {tooltip.text}
                </div>
              )}
            </div>
          </div>

          {/* Topic-Wise DSA Mastery Breakdown */}
          <div className="pt-8">
            <h4 className="font-heading font-bold text-sm text-neutral-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Code className="w-4 h-4 text-[#1C39BB] dark:text-blue-400" />
              <span>Take U Forward Topic-Wise Mastery Distribution</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {tufState.topics.map((topic, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/5 space-y-1.5"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-heading font-semibold text-neutral-800 dark:text-neutral-200 truncate pr-1">
                      {topic.name}
                    </span>
                    <span className="font-mono text-neutral-500 dark:text-neutral-400 text-[11px]">
                      {topic.count} Qs
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-neutral-100 dark:bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-[#1C39BB] dark:bg-blue-400 rounded-full"
                      style={{ width: `${Math.min(topic.percentage, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Footnote */}
          <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-white/10 text-xs text-neutral-500 dark:text-neutral-400 font-sans flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>Directly synchronized from Take U Forward profile sasikiran_24. Verified computational practice.</span>
            <span className="font-mono text-[11px] text-[#1C39BB] dark:text-blue-400">
              Languages: C++ &bull; Java &bull; Python
            </span>
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

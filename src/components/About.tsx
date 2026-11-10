import React from 'react';
import { Database, Cpu, Terminal, Compass, CheckCircle2, Rocket } from 'lucide-react';
import { profileData } from '../data/profileData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden border-t border-neutral-200/80 dark:border-white/5 bg-neutral-50/50 dark:bg-black">
      
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-heading font-semibold text-[#1C39BB] dark:text-blue-400 tracking-wider mb-2 uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            About Me & Technical Direction
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
            Undergraduate perspective focused on strong foundations in Data Structures & Algorithms, quantitative data analysis, and practical machine learning applications.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Story Card (8 cols) */}
          <div className="lg:col-span-8 bg-white dark:bg-[#0C0C0C] rounded-3xl border border-neutral-200 dark:border-white/10 p-6 sm:p-10 shadow-sm dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-white/10 text-xs font-sans text-neutral-500 dark:text-neutral-400">
                <span className="font-heading font-semibold text-[#1C39BB] dark:text-blue-400">
                  Academic Profile
                </span>
                <span>Vasireddy Venkatadri Institute of Technology (VVITU)</span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white leading-snug">
                I'm Sasikiran, Computer Science (AI & ML) undergrad focused on building strong foundations in Data Structures & Algorithms, Problem Solving, and Computer Science fundamentals.
              </h3>

              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                Currently, I'm strengthening my DSA skills through structured problem solving while expanding my knowledge in Full-Stack Development, Data Analytics, SQL, Python, Power BI, Statistics, and AI/ML.
              </p>

              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                My goal is to develop strong software engineering and analytical thinking skills by combining consistent DSA practice with real-world projects and practical applications. I'm focused on learning systematically, understanding concepts deeply, and continuously improving my problem-solving ability.
              </p>
            </div>

            {/* Core Values */}
            <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
              <div className="flex items-start space-x-2 text-neutral-700 dark:text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#1C39BB] dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-neutral-900 dark:text-white">Data-First Mindset:</strong> Ground insights in verified data architectures and SQL queries.</span>
              </div>
              <div className="flex items-start space-x-2 text-neutral-700 dark:text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#1C39BB] dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-neutral-900 dark:text-white">Algorithmic Consistency:</strong> 166+ problems solved across Take U Forward and platforms.</span>
              </div>
              <div className="flex items-start space-x-2 text-neutral-700 dark:text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-neutral-900 dark:text-white">Structured Learning:</strong> Deep concept mastery before architectural complexity.</span>
              </div>
              <div className="flex items-start space-x-2 text-neutral-700 dark:text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-neutral-900 dark:text-white">Practical Impact:</strong> Transforming knowledge into responsive, working software.</span>
              </div>
            </div>
          </div>

          {/* Tech & Learning Focus Card (4 cols) - Matches User's Authentic Screenshot */}
          <div className="lg:col-span-4 bg-white dark:bg-[#0C0C0C] rounded-3xl border border-neutral-200 dark:border-white/10 p-6 sm:p-8 shadow-sm dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-white/10 text-xs font-sans">
                <span className="font-heading font-semibold text-[#1C39BB] dark:text-blue-400">
                  Focus Areas
                </span>
                <span className="text-neutral-400">Core Curriculum</span>
              </div>

              <h4 className="font-heading text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                Tech & Learning Focus
              </h4>

              {/* Exact 9 Bullets from Screenshot */}
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans">
                {profileData.about.techFocus.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1C39BB] dark:bg-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Closing Line from User Screenshot */}
            <div className="pt-6 mt-4 border-t border-neutral-100 dark:border-white/10">
              <p className="text-xs sm:text-sm font-heading font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <Rocket className="w-4 h-4 text-[#1C39BB] dark:text-blue-400" />
                <span>{profileData.about.closing}</span>
              </p>
            </div>
          </div>

          {/* Subcard 1: Primary Direction - Data Analytics & BI (4 cols) */}
          <div className="lg:col-span-4 bg-white dark:bg-[#0C0C0C] rounded-3xl border border-blue-200 dark:border-[#1C39BB]/40 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-[#1C39BB]/15 text-[#1C39BB] dark:text-blue-400 flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>

              <span className="text-xs font-heading font-semibold text-[#1C39BB] dark:text-blue-400 uppercase tracking-wider block">
                Primary Direction
              </span>

              <h4 className="font-heading text-xl font-bold text-neutral-900 dark:text-white">
                Data Analytics & SQL
              </h4>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                Transforming raw tabular data into decision intelligence. Multidimensional SQL queries, joins, aggregations, Power BI dashboards, and exploratory data analysis.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-white/10 text-xs font-mono text-[#1C39BB] dark:text-blue-400">
              SQL &bull; Power BI &bull; Excel &bull; EDA &bull; Python
            </div>
          </div>

          {/* Subcard 2: AI & Machine Learning Foundations (4 cols) */}
          <div className="lg:col-span-4 bg-white dark:bg-[#0C0C0C] rounded-3xl border border-neutral-200 dark:border-white/10 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/[0.04] text-[#1C39BB] dark:text-blue-400 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>

              <span className="text-xs font-heading font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider block">
                Secondary Direction
              </span>

              <h4 className="font-heading text-xl font-bold text-neutral-900 dark:text-white">
                AI & Machine Learning
              </h4>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                Supervised learning foundations, regression, classification, statistical modeling, and integrating modern AI capabilities into full-stack applications.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-white/10 text-xs font-mono text-neutral-500 dark:text-neutral-400">
              Scikit-Learn &bull; ML Models &bull; LLM Workflows
            </div>
          </div>

          {/* Subcard 3: Algorithmic Problem Solving (4 cols) */}
          <div className="lg:col-span-4 bg-white dark:bg-[#0C0C0C] rounded-3xl border border-neutral-200 dark:border-white/10 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/[0.04] text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Terminal className="w-5 h-5" />
              </div>

              <span className="text-xs font-heading font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                DSA Discipline
              </span>

              <h4 className="font-heading text-xl font-bold text-neutral-900 dark:text-white">
                Algorithmic Rigor
              </h4>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                Disciplined daily problem-solving on Take U Forward (166 problems solved, 51-day peak streak), CodeChef, and HackerRank across C++, Java, and Python.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-white/10 text-xs font-mono text-emerald-600 dark:text-emerald-400">
              166 Solved &bull; Rank #577 &bull; 51-Day Streak
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

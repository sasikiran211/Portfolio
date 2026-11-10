import React from 'react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profileData';

export const Education: React.FC = () => {
  const [btech, juniorCollege, school] = profileData.education;

  return (
    <section id="timeline" className="py-20 relative overflow-hidden bg-white dark:bg-[#080808] border-t border-neutral-200/80 dark:border-white/5">
      
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-heading font-semibold text-[#1C39BB] dark:text-blue-400 tracking-wider mb-2 uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Progression</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Education Timeline
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
            Chronological academic milestones and technical coursework supporting undergraduate engineering.
          </p>
        </div>

        {/* Timeline Architecture */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-neutral-200 dark:border-neutral-800 space-y-10 my-8">
          
          {/* Milestone 1: B.Tech (2025–2029) */}
          <div className="relative group">
            {/* Persian Blue Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-[#1C39BB] group-hover:bg-[#1C39BB] transition-colors shadow-sm" />

            <div className="bg-neutral-50/70 dark:bg-[#0C0C0C] rounded-3xl border border-blue-200 dark:border-[#1C39BB]/40 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-neutral-200/70 dark:border-white/10 gap-2 text-xs font-sans">
                <span className="font-heading font-bold text-[#1C39BB] dark:text-blue-400 text-sm">
                  {btech.year} &bull; Current Undergraduate Program
                </span>
                <span className="text-neutral-500 dark:text-neutral-400">
                  {btech.location}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 items-center">
                <div className="lg:col-span-8 space-y-2">
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
                    {btech.institution}
                  </h3>
                  <p className="font-heading text-sm text-[#1C39BB] dark:text-blue-400 font-semibold">
                    {btech.degree} — <span className="text-neutral-700 dark:text-neutral-200 font-normal">{btech.stream}</span>
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                    Stage: {btech.status}
                  </p>

                  <ul className="space-y-1.5 pt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-sans">
                    {btech.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1C39BB] dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4 bg-white dark:bg-black/60 rounded-2xl p-6 border border-neutral-200 dark:border-white/10 text-center space-y-1 shadow-sm">
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block uppercase font-medium">
                    Cumulative CGPA
                  </span>
                  <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#1C39BB] dark:text-blue-400 block leading-tight">
                    {btech.grade}
                  </span>
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block">
                    Semester 1 & 2 Record
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone 2: Junior College (2023–2025) */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-neutral-400 dark:border-neutral-600 group-hover:border-[#1C39BB] transition-colors" />

            <div className="bg-white dark:bg-[#0C0C0C] rounded-3xl border border-neutral-200 dark:border-white/10 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-neutral-100 dark:border-white/10 gap-2 text-xs font-sans">
                <span className="font-heading font-semibold text-neutral-800 dark:text-neutral-200 text-sm">
                  {juniorCollege.year} &bull; Senior Secondary / Intermediate
                </span>
                <span className="text-neutral-500 dark:text-neutral-400">
                  {juniorCollege.location}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 items-center">
                <div className="lg:col-span-8 space-y-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                    {juniorCollege.institution}
                  </h3>
                  <p className="font-sans text-sm text-neutral-600 dark:text-neutral-300">
                    {juniorCollege.degree} ({juniorCollege.stream})
                  </p>

                  <ul className="space-y-1.5 pt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-sans">
                    {juniorCollege.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4 bg-neutral-50 dark:bg-black/40 rounded-2xl p-6 border border-neutral-100 dark:border-white/5 text-center space-y-1">
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block uppercase font-medium">
                    Board Percentage
                  </span>
                  <span className="font-heading text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white block leading-tight">
                    {juniorCollege.grade}
                  </span>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 block font-medium">
                    977 / 1000 Marks
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone 3: School SSC (2022) */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-neutral-400 dark:border-neutral-600 group-hover:border-[#1C39BB] transition-colors" />

            <div className="bg-white dark:bg-[#0C0C0C] rounded-3xl border border-neutral-200 dark:border-white/10 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-neutral-100 dark:border-white/10 gap-2 text-xs font-sans">
                <span className="font-heading font-semibold text-neutral-800 dark:text-neutral-200 text-sm">
                  {school.year} &bull; Secondary School Certificate (Class X)
                </span>
                <span className="text-neutral-500 dark:text-neutral-400">
                  {school.location}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 items-center">
                <div className="lg:col-span-8 space-y-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                    {school.institution}
                  </h3>
                  <p className="font-sans text-sm text-neutral-600 dark:text-neutral-300">
                    {school.degree}
                  </p>

                  <ul className="space-y-1.5 pt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-sans">
                    {school.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4 bg-neutral-50 dark:bg-black/40 rounded-2xl p-6 border border-neutral-100 dark:border-white/5 text-center space-y-1">
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block uppercase font-medium">
                    Board Percentage
                  </span>
                  <span className="font-heading text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white block leading-tight">
                    {school.grade}
                  </span>
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block">
                    542 / 600 Marks
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

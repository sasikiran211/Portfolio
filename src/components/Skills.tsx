import React, { useState } from 'react';
import { Terminal, Database, Code2, Server, Cpu } from 'lucide-react';
import { skillsData } from '../data/skillsData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryFilters = [
    { id: 'all', label: 'All Domains' },
    { id: 'data-analytics', label: 'Data & Analytics' },
    { id: 'programming', label: 'Programming' },
    { id: 'computer-science', label: 'CS Fundamentals' },
    { id: 'ai-technology', label: 'AI & Technologies' },
  ];

  const filteredCategories =
    selectedCategory === 'all'
      ? skillsData
      : skillsData.filter((c) => c.id === selectedCategory);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'data-analytics':
        return <Database className="w-5 h-5 text-[#1C39BB] dark:text-blue-400" />;
      case 'programming':
        return <Code2 className="w-5 h-5 text-[#1C39BB] dark:text-blue-400" />;
      case 'computer-science':
        return <Server className="w-5 h-5 text-[#1C39BB] dark:text-blue-400" />;
      case 'ai-technology':
        return <Cpu className="w-5 h-5 text-[#1C39BB] dark:text-blue-400" />;
      default:
        return <Terminal className="w-5 h-5 text-[#1C39BB] dark:text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-white dark:bg-[#080808] border-t border-neutral-200/80 dark:border-white/5">
      
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-heading font-semibold text-[#1C39BB] dark:text-blue-400 tracking-wider mb-2 uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Skills & Engineering Stack
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
              Structured capabilities across data analytics, relational databases, object-oriented systems programming, and AI workflows.
            </p>
          </div>

          {/* Level Legend */}
          <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-[#0C0C0C] border border-neutral-200 dark:border-white/10 text-xs font-sans">
            <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block mb-1.5 uppercase font-medium">
              Proficiency Guide
            </span>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-[#1C39BB]/20 text-[#1C39BB] dark:text-blue-300 font-semibold">
                Primary Focus
              </span>
              <span className="px-2 py-0.5 rounded bg-neutral-200 dark:bg-white/10 text-neutral-800 dark:text-neutral-200">
                Core
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                Active Study
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none text-xs font-heading">
          {categoryFilters.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap border ${
                  isSelected
                    ? 'bg-[#1C39BB] text-white font-semibold border-[#1C39BB] shadow-sm'
                    : 'bg-neutral-100 dark:bg-[#0C0C0C] text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border-neutral-200 dark:border-white/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => {
            const isPrimary = category.id === 'data-analytics';

            return (
              <div
                key={category.id}
                className={`rounded-3xl p-6 sm:p-8 border transition-all ${
                  isPrimary
                    ? 'bg-blue-50/40 dark:bg-[#0C0C0C] border-blue-300 dark:border-[#1C39BB]/40 shadow-sm'
                    : 'bg-white dark:bg-[#0C0C0C] border-neutral-200 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 shadow-sm'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100 dark:border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/[0.04] flex items-center justify-center">
                      {getCategoryIcon(category.id)}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-neutral-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {isPrimary && (
                    <span className="px-2.5 py-1 rounded-full bg-[#1C39BB] text-white text-[10px] font-heading font-semibold uppercase tracking-wider">
                      Primary
                    </span>
                  )}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-100 dark:border-white/5 flex flex-col justify-between hover:border-[#1C39BB]/30 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-heading font-bold text-sm text-neutral-900 dark:text-white">
                          {skill.name}
                        </span>
                        {skill.status && (
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded font-sans font-medium ${
                              skill.status === 'Primary'
                                ? 'bg-blue-100 dark:bg-[#1C39BB]/20 text-[#1C39BB] dark:text-blue-300'
                                : skill.status === 'Active Study'
                                ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300'
                                : 'bg-neutral-200 dark:bg-white/10 text-neutral-700 dark:text-neutral-300'
                            }`}
                          >
                            {skill.status}
                          </span>
                        )}
                      </div>

                      <div className="pt-2 border-t border-neutral-200/50 dark:border-white/5 flex items-center text-[10px] text-neutral-500 dark:text-neutral-400 font-mono">
                        <span className="truncate">{skill.tag}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

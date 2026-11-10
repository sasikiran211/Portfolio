import React, { useState } from 'react';
import { Terminal } from 'lucide-react';
import { skillsData } from '../data/skillsData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryFilters = [
    { id: 'all', label: 'ALL MODULES' },
    { id: 'data-analytics', label: 'DATA & PYTHON' },
    { id: 'programming', label: 'PROGRAMMING' },
    { id: 'computer-science', label: 'CS & SYSTEMS' },
    { id: 'ai-technology', label: 'AI & MODERN TECH' },
  ];

  const filteredCategories = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-black">
      
      {/* Background Tech Lines */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#CCFF00] tracking-widest mb-2 uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>[SECTION // 02 &bull; CAPABILITIES]</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-[#EBEBEB] tracking-tight">
              Technical Architecture & Stack
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#EBEBEB]/70 leading-relaxed font-sans">
              Structured capabilities across data analytics, systems programming, computer science core foundations, and modern artificial intelligence.
            </p>
          </div>

          {/* Technical Tag Status Legend */}
          <div className="p-4 rounded-2xl bg-[#0C0C0C] border border-white/10 font-mono text-xs">
            <span className="text-[10px] text-white/40 block mb-2 uppercase tracking-wider">
              [STATUS // LEGEND]
            </span>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <span className="px-2 py-0.5 rounded bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/30 font-bold">
                PRIMARY
              </span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-white/80 border border-white/10">
                CORE
              </span>
              <span className="px-2 py-0.5 rounded bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                ACTIVE STUDY
              </span>
              <span className="px-2 py-0.5 rounded bg-white/[0.02] text-white/40 border border-white/5">
                PLANNED
              </span>
            </div>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none font-mono text-xs">
          {categoryFilters.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap border ${
                  isSelected
                    ? 'bg-[#CCFF00] text-black font-bold border-[#CCFF00] shadow-[0_0_20px_rgba(204,255,0,0.35)]'
                    : 'bg-[#0C0C0C] text-white/70 hover:text-white hover:bg-white/5 border-white/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => {
            const isPrimary = category.id === 'data-analytics';

            return (
              <div
                key={category.id}
                className={`rounded-3xl p-6 sm:p-8 border transition-all card-tilt ${
                  isPrimary
                    ? 'bg-[#0C0C0C] border-[#CCFF00]/30 shadow-[0_0_35px_rgba(204,255,0,0.06)]'
                    : 'bg-[#0C0C0C] border-white/10 hover:border-white/20 shadow-glass-card'
                }`}
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs">
                  <span className="text-[#CCFF00] font-bold">{category.categoryCode}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-white/60 border border-white/10 text-[10px]">
                    {category.badge}
                  </span>
                </div>

                <h3 className="font-sans text-2xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-[#EBEBEB]/70 leading-relaxed font-sans mb-6">
                  {category.description}
                </p>

                {/* Animated Skill Tags Grid */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const isStatusPrimary = skill.status === 'Primary';
                    const isActiveStudy = skill.status === 'Active Study';
                    const isPlanned = skill.status === 'Planned';

                    return (
                      <div
                        key={skill.name}
                        className={`group px-3.5 py-2 rounded-xl border transition-all flex items-center space-x-2 font-mono text-xs ${
                          isStatusPrimary
                            ? 'bg-[#CCFF00]/5 border-[#CCFF00]/30 hover:border-[#CCFF00] hover:bg-[#CCFF00]/10 hover:shadow-[0_0_15px_rgba(204,255,0,0.2)]'
                            : isActiveStudy
                            ? 'bg-[#10B981]/5 border-[#10B981]/30 hover:border-[#10B981] hover:bg-[#10B981]/10'
                            : isPlanned
                            ? 'bg-white/[0.02] border-white/5 opacity-60'
                            : 'bg-white/[0.03] border-white/10 hover:border-white/30 hover:bg-white/[0.06]'
                        }`}
                      >
                        <span className="text-[#EBEBEB] font-semibold group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[9px] px-1.5 py-0.5 rounded ${
                            isStatusPrimary
                              ? 'bg-[#CCFF00]/20 text-[#CCFF00]'
                              : isActiveStudy
                              ? 'bg-[#10B981]/20 text-[#10B981]'
                              : isPlanned
                              ? 'bg-white/10 text-white/50'
                              : 'bg-white/10 text-white/60'
                          }`}
                        >
                          {skill.tag}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

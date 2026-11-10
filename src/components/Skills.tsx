import React, { useState } from 'react';
import { Database, Wrench, Layers, BookOpen, Sparkles, Filter } from 'lucide-react';
import { skillsData, levelColors, SkillLevel } from '../data/skillsData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skill Domains', icon: Layers },
    { id: 'data-analytics', label: 'Data Analytics & BI', icon: Database },
    { id: 'python-ecosystem', label: 'Python Ecosystem', icon: Sparkles },
    { id: 'programming', label: 'Programming', icon: Wrench },
    { id: 'computer-science', label: 'CS Fundamentals', icon: BookOpen },
    { id: 'ai-technology', label: 'AI & Technology', icon: Sparkles },
  ];

  const filteredCategories = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-ocean/70 mb-2">
              <Wrench className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ocean tracking-tight">
              Skills & Technical Grounding
            </h2>
            <p className="mt-3 text-base sm:text-lg text-ocean/80">
              Categorized and transparently assessed competencies, with honest indicators from active practice to ongoing academic study.
            </p>
          </div>

          {/* Honest Level Legend */}
          <div className="mt-6 md:mt-0 p-3.5 rounded-xl bg-white border border-beige shadow-subtle">
            <span className="text-[11px] font-bold uppercase tracking-wider text-ocean/60 block mb-2">
              Proficiency Legend
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              {(['Proficient', 'Practising', 'Familiar', 'Currently Learning', 'Planned'] as SkillLevel[]).map((level) => {
                const style = levelColors[level];
                return (
                  <span
                    key={level}
                    className={`px-2 py-0.5 rounded border text-[11px] ${style.bg} ${style.text} ${style.border}`}
                  >
                    {level}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <Filter className="w-4 h-4 text-ocean/50 flex-shrink-0 mr-1" />
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-ocean text-cream shadow-sm'
                    : 'bg-white text-ocean hover:bg-beige/40 border border-beige'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const isPrimary = category.id === 'data-analytics';

            return (
              <div
                key={category.id}
                className={`rounded-2xl p-6 border transition-all ${
                  isPrimary
                    ? 'bg-white border-ocean/40 shadow-card md:col-span-2 lg:col-span-1'
                    : 'bg-white/80 border-beige hover:border-ocean/30 shadow-subtle'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-beige/30 text-ocean border border-beige/60">
                    {category.badge}
                  </span>
                  {isPrimary && (
                    <span className="text-[11px] font-bold text-ocean/80 uppercase tracking-wider bg-cream px-2 py-0.5 rounded">
                      Core Direction
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl font-bold text-ocean mb-2">
                  {category.title}
                </h3>
                <p className="text-xs text-ocean/70 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const style = levelColors[skill.level];

                    return (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center justify-between space-x-2 px-3 py-1.5 rounded-lg border text-xs transition-colors ${
                          skill.highlight
                            ? 'bg-cream-light font-medium border-ocean/30 shadow-2xs'
                            : 'bg-white border-beige/80'
                        }`}
                      >
                        <span className="text-ocean font-medium">{skill.name}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded border font-normal ${style.bg} ${style.text} ${style.border}`}
                        >
                          {skill.level}
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

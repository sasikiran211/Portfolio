import React from 'react';
import { BarChart3, LineChart, Cpu, Code2, Compass, CheckCircle } from 'lucide-react';
import { profileData } from '../data/profileData';

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  LineChart,
  Cpu,
  Code2
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-cream-light/60 border-t border-b border-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-ocean/70 mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Professional Background</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ocean tracking-tight">
            About Me & Analytical Direction
          </h2>
          <p className="mt-3 text-base sm:text-lg text-ocean/80">
            A grounded undergraduate perspective combining rigorous data handling, algorithmic consistency, and exploratory machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Storytelling */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-beige shadow-card space-y-4">
              <p className="font-serif text-lg sm:text-xl text-ocean font-medium italic border-b border-beige/40 pb-4">
                "{profileData.about.lead}"
              </p>
              
              {profileData.about.paragraphs.map((p, idx) => (
                <p key={idx} className="text-sm sm:text-base text-ocean/80 leading-relaxed font-sans">
                  {p}
                </p>
              ))}

              <div className="pt-4 border-t border-beige/40">
                <h4 className="text-xs font-bold uppercase tracking-wider text-ocean/70 mb-3">
                  Core Guiding Principles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-start space-x-2 text-xs sm:text-sm text-ocean">
                    <CheckCircle className="w-4 h-4 text-ocean flex-shrink-0 mt-0.5" />
                    <span><strong>Data-First Thinking:</strong> Ground conclusions in verifiable numbers.</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs sm:text-sm text-ocean">
                    <CheckCircle className="w-4 h-4 text-ocean flex-shrink-0 mt-0.5" />
                    <span><strong>Algorithmic Discipline:</strong> Consistent daily problem solving.</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs sm:text-sm text-ocean">
                    <CheckCircle className="w-4 h-4 text-ocean flex-shrink-0 mt-0.5" />
                    <span><strong>Honest Mastery:</strong> Genuine understanding before complexity.</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs sm:text-sm text-ocean">
                    <CheckCircle className="w-4 h-4 text-ocean flex-shrink-0 mt-0.5" />
                    <span><strong>Applied Focus:</strong> Building useful, reliable tools.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Competence */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-xl font-bold text-ocean mb-2">
              Areas of Practical Focus
            </h3>

            {profileData.about.focusAreas.map((area, idx) => {
              const Icon = iconMap[area.icon] || Code2;
              const isPrimary = idx === 0;

              return (
                <div
                  key={idx}
                  className={`p-5 rounded-xl border transition-all ${
                    isPrimary
                      ? 'bg-ocean text-cream border-ocean shadow-card'
                      : 'bg-white text-ocean border-beige hover:border-ocean/40 shadow-subtle'
                  }`}
                >
                  <div className="flex items-start space-x-3.5">
                    <div
                      className={`p-2.5 rounded-lg flex-shrink-0 ${
                        isPrimary ? 'bg-cream text-ocean' : 'bg-beige/30 text-ocean'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-serif font-bold text-base sm:text-lg">
                          {area.title}
                        </h4>
                      </div>
                      <p
                        className={`text-xs sm:text-sm leading-relaxed ${
                          isPrimary ? 'text-cream/90' : 'text-ocean/75'
                        }`}
                      >
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

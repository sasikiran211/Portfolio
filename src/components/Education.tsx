import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Award, BookOpen } from 'lucide-react';
import { profileData } from '../data/profileData';

export const Education: React.FC = () => {
  const [btech, juniorCollege, school] = profileData.education;

  return (
    <section id="education" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-ocean/70 mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ocean tracking-tight">
            Education & Academic Background
          </h2>
          <p className="mt-3 text-base sm:text-lg text-ocean/80">
            Current undergraduate degree in Computer Science and Engineering (AI & ML) supported by strong secondary education in mathematics and science.
          </p>
        </div>

        {/* Primary Hero: Undergraduate Degree (VVITU) */}
        <div className="bg-white rounded-3xl border-2 border-ocean/30 shadow-elevated p-6 sm:p-10 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-ocean text-cream text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl">
            Current Degree Program
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-ocean/60 tracking-wider uppercase block">
                  Undergraduate Qualification
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ocean">
                  {btech.institution}
                </h3>
                <p className="font-serif text-lg font-semibold text-ocean/90 italic">
                  {btech.degree} — <span className="font-sans font-medium text-ocean">{btech.stream}</span>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-ocean/70 pt-1">
                <span className="flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1 text-ocean" />
                  {btech.duration} ({btech.status})
                </span>
                <span className="flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-ocean" />
                  {btech.location}
                </span>
              </div>

              <div className="pt-3 border-t border-beige/60">
                <h4 className="text-xs font-bold uppercase tracking-wider text-ocean/70 mb-2 flex items-center">
                  <BookOpen className="w-3.5 h-3.5 mr-1 text-ocean" />
                  Academic Focus & Highlights
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-ocean/80">
                  {btech.highlights.map((h, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-ocean flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Prominent CGPA Badge */}
            <div className="lg:col-span-4 bg-cream/60 rounded-2xl p-6 border border-beige flex flex-col items-center justify-center text-center space-y-2">
              <div className="p-3 rounded-full bg-ocean text-cream">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-ocean/70 block">
                  Cumulative Academic Score
                </span>
                <span className="font-serif text-4xl sm:text-5xl font-bold text-ocean block py-1">
                  {btech.grade}
                </span>
                <span className="text-xs text-ocean/60 font-medium">
                  Recorded in university profile
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Supporting Secondary Education (Neat secondary milestone cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Junior College */}
          <div className="bg-white rounded-2xl border border-beige p-6 shadow-subtle hover:border-ocean/30 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-cream text-ocean border border-beige/60">
                Intermediate (10+2)
              </span>
              <span className="font-serif text-xl font-bold text-ocean">
                {juniorCollege.grade}
              </span>
            </div>

            <h4 className="font-serif text-lg font-bold text-ocean mb-1">
              {juniorCollege.institution}
            </h4>
            <p className="text-xs font-medium text-ocean/80 mb-2">
              {juniorCollege.degree} &bull; {juniorCollege.stream}
            </p>

            <div className="flex items-center space-x-3 text-xs text-ocean/60 mb-3">
              <span>{juniorCollege.duration}</span>
              <span>&bull;</span>
              <span>{juniorCollege.location}</span>
            </div>

            <ul className="space-y-1 text-xs text-ocean/75 border-t border-beige/40 pt-3">
              {juniorCollege.highlights.map((h, i) => (
                <li key={i} className="flex items-start space-x-1.5">
                  <span className="text-ocean font-bold">&bull;</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* School */}
          <div className="bg-white rounded-2xl border border-beige p-6 shadow-subtle hover:border-ocean/30 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-cream text-ocean border border-beige/60">
                Secondary School (SSC)
              </span>
              <span className="font-serif text-xl font-bold text-ocean">
                {school.grade}
              </span>
            </div>

            <h4 className="font-serif text-lg font-bold text-ocean mb-1">
              {school.institution}
            </h4>
            <p className="text-xs font-medium text-ocean/80 mb-2">
              {school.degree}
            </p>

            <div className="flex items-center space-x-3 text-xs text-ocean/60 mb-3">
              <span>{school.duration}</span>
              <span>&bull;</span>
              <span>{school.location}</span>
            </div>

            <ul className="space-y-1 text-xs text-ocean/75 border-t border-beige/40 pt-3">
              {school.highlights.map((h, i) => (
                <li key={i} className="flex items-start space-x-1.5">
                  <span className="text-ocean font-bold">&bull;</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

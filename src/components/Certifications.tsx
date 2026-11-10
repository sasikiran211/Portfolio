import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, Filter, X, ShieldCheck, Sparkles } from 'lucide-react';
import { certificatesData, Certificate } from '../data/certificatesData';

export const Certifications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalCert, setActiveModalCert] = useState<Certificate | null>(null);

  const categories = ['All', 'Data & SQL', 'Python & AI', 'Programming & Web'];

  const filteredCerts = selectedCategory === 'All'
    ? certificatesData
    : certificatesData.filter((c) => c.category === selectedCategory);

  return (
    <section id="certifications" className="py-20 bg-cream-light/40 border-t border-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-ocean/70 mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Qualifications</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ocean tracking-tight">
              Certifications & Industry Credentials
            </h2>
            <p className="mt-3 text-base sm:text-lg text-ocean/80">
              Validated assessments and specialized coursework across SQL querying, Python analytics, AWS prompt engineering, and Java development.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-beige text-ocean shadow-sm">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-emerald-700" />
              {certificatesData.length} Verified Credentials
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <Filter className="w-4 h-4 text-ocean/50 flex-shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-ocean text-cream shadow-sm'
                  : 'bg-white text-ocean hover:bg-beige/40 border border-beige'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl border border-beige p-6 shadow-subtle hover:shadow-card hover:border-ocean/40 transition-luxury flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Badge & Issuer */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-cream text-ocean border border-beige/60">
                    {cert.badgeText}
                  </span>
                  <span className="text-[11px] font-semibold text-ocean/70 bg-beige/30 px-2 py-0.5 rounded">
                    {cert.issuer}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-ocean leading-snug group-hover:text-ocean-light transition-colors">
                  {cert.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-ocean/75 leading-relaxed line-clamp-3">
                  {cert.summary}
                </p>

                {/* Skills Tags */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-ocean/60 mb-1.5">
                    Skills Covered
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] px-2 py-0.5 rounded bg-cream/80 text-ocean border border-beige/50 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-[11px] px-1.5 py-0.5 rounded bg-cream text-ocean/70 border border-beige/50">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-4 border-t border-beige/50 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalCert(cert)}
                  className="text-xs font-bold text-ocean hover:text-ocean-light transition-colors"
                >
                  View Credential Details
                </button>

                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-cream hover:bg-beige/40 text-ocean transition-colors"
                    title="Verify on Issuer Platform"
                    aria-label="Verify credential"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-[11px] text-ocean/50 font-mono">
                    {cert.completionDate || 'Verified'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Modal */}
      {activeModalCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ocean/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full border border-beige shadow-elevated p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-beige/60 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-cream text-ocean border border-beige">
                  {activeModalCert.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ocean pt-1">
                  {activeModalCert.title}
                </h3>
                <p className="text-xs font-medium text-ocean/70">
                  Issued by: <strong>{activeModalCert.issuer}</strong>
                </p>
              </div>
              <button
                onClick={() => setActiveModalCert(null)}
                aria-label="Close modal"
                className="p-1.5 rounded-lg text-ocean/70 hover:text-ocean hover:bg-cream transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Details */}
            <div className="space-y-4 text-xs sm:text-sm text-ocean/80">
              <div className="p-4 bg-cream/50 rounded-xl border border-beige/60">
                <h4 className="font-semibold text-ocean text-xs uppercase tracking-wider mb-1.5 flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1 text-ocean" />
                  Credential Summary
                </h4>
                <p className="leading-relaxed">{activeModalCert.summary}</p>
              </div>

              <div>
                <h4 className="font-semibold text-ocean text-xs uppercase tracking-wider mb-2">
                  Competencies & Skills Validated
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalCert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-md bg-white border border-beige text-xs text-ocean font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-cream/30 rounded-lg border border-beige/40">
                  <span className="text-ocean/60 block">Credential ID / Record</span>
                  <span className="font-mono text-ocean font-semibold">
                    {activeModalCert.credentialId || 'Verified Record'}
                  </span>
                </div>
                <div className="p-3 bg-cream/30 rounded-lg border border-beige/40">
                  <span className="text-ocean/60 block">Status</span>
                  <span className="text-emerald-700 font-semibold flex items-center pt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 mr-1" /> Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-beige/60">
              <button
                onClick={() => setActiveModalCert(null)}
                className="px-4 py-2 rounded-lg bg-cream hover:bg-beige/40 text-xs font-semibold text-ocean transition-colors"
              >
                Close
              </button>

              {activeModalCert.verificationUrl && (
                <a
                  href={activeModalCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-ocean text-cream text-xs font-semibold hover:bg-ocean-light transition-colors"
                >
                  <span>Verify on Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

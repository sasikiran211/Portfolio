import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, X, ShieldCheck, Search } from 'lucide-react';
import { certificatesData, Certificate } from '../data/certificatesData';

export const Certifications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalCert, setActiveModalCert] = useState<Certificate | null>(null);

  const categories = [
    'All',
    'Data Analytics',
    'Python',
    'SQL',
    'AI and Generative AI',
    'Software Development',
    'Programming Certifications'
  ];

  const filteredCerts = certificatesData.filter((c) => {
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certificates" className="py-20 relative overflow-hidden bg-[#0C0C0C]/50 border-t border-white/5">
      
      {/* Background Dots */}
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#CCFF00] tracking-widest mb-2 uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>[SECTION // 05 &bull; VERIFIED ACCREDITATIONS]</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-[#EBEBEB] tracking-tight">
              Certifications & Industry Credentials
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#EBEBEB]/70 leading-relaxed font-sans">
              Searchable catalog of standardized assessments, enterprise workshops, and specialized technical curricula.
            </p>
          </div>

          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-mono bg-white/[0.03] border border-white/10 text-white shadow-sm">
              <ShieldCheck className="w-4 h-4 mr-2 text-[#10B981]" />
              {certificatesData.length} VERIFIED CREDENTIALS
            </span>
          </div>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="space-y-4 mb-8">
          
          {/* Search Input */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword (e.g. SQL, Python, AWS, Java)..."
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-[#0C0C0C] border border-white/10 text-white text-xs font-mono placeholder:text-white/30 focus:outline-none focus:border-[#CCFF00] transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all border ${
                    isSelected
                      ? 'bg-[#CCFF00] text-black font-bold border-[#CCFF00] shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                      : 'bg-[#0C0C0C] text-white/70 hover:text-white hover:bg-white/5 border-white/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#0C0C0C] rounded-3xl border border-white/10 hover:border-[#CCFF00]/40 p-6 sm:p-7 shadow-glass-card transition-all duration-300 card-tilt flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header Code & Badge */}
                <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-white/10">
                  <span className="text-[#CCFF00] font-bold">{cert.code}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/80 border border-white/10">
                    {cert.issuer}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-sans text-xl font-bold text-white group-hover:text-[#CCFF00] transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-[#EBEBEB]/70 leading-relaxed font-sans line-clamp-3">
                  {cert.summary}
                </p>

                {/* Skills Tags */}
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block mb-1.5">
                    VALIDATED SKILLS
                  </span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded bg-white/[0.03] text-white/80 border border-white/5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <button
                  onClick={() => setActiveModalCert(cert)}
                  className="font-bold text-[#CCFF00] hover:text-white transition-colors"
                >
                  CREDENTIAL SPECS
                </button>

                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-[#CCFF00]/10 text-white hover:text-[#CCFF00] transition-colors"
                    title="Verify on Issuer Platform"
                    aria-label="Verify credential"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-[10px] text-white/40">
                    {cert.completionDate}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredCerts.length === 0 && (
          <div className="text-center py-12 text-white/50 font-mono text-xs">
            No matching credentials found for "{searchQuery}".
          </div>
        )}

      </div>

      {/* Credential Detail Modal */}
      {activeModalCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0C0C0C] rounded-3xl max-w-lg w-full border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4 font-mono">
              <div className="space-y-1">
                <span className="text-xs text-[#CCFF00] font-bold">
                  {activeModalCert.code}
                </span>
                <h3 className="font-sans text-2xl font-bold text-white pt-1">
                  {activeModalCert.title}
                </h3>
                <p className="text-xs text-white/60">
                  ISSUER: <strong className="text-white">{activeModalCert.issuer}</strong>
                </p>
              </div>

              <button
                onClick={() => setActiveModalCert(null)}
                aria-label="Close modal"
                className="p-1.5 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Details */}
            <div className="space-y-4 text-xs font-mono">
              <div className="p-4 bg-white/[0.02] rounded-2xl border border-white/10 space-y-1.5">
                <span className="text-[10px] text-white/40 block uppercase">
                  CREDENTIAL SYNOPSIS
                </span>
                <p className="text-white/80 font-sans leading-relaxed text-xs">
                  {activeModalCert.summary}
                </p>
              </div>

              <div>
                <span className="text-[10px] text-white/40 block uppercase mb-2">
                  VALIDATED COMPETENCIES
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalCert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-lg bg-black border border-white/15 text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white/[0.02] rounded-xl border border-white/5">
                  <span className="text-white/40 block text-[10px]">VERIFICATION ID</span>
                  <span className="text-white font-bold">{activeModalCert.credentialId || 'VERIFIED'}</span>
                </div>
                <div className="p-3 bg-white/[0.02] rounded-xl border border-white/5">
                  <span className="text-white/40 block text-[10px]">RECORD STATUS</span>
                  <span className="text-[#10B981] font-bold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> VERIFIED
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs">
              <button
                onClick={() => setActiveModalCert(null)}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              >
                CLOSE
              </button>

              {activeModalCert.verificationUrl && (
                <a
                  href={activeModalCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#CCFF00] text-black font-bold hover:bg-[#B5E600] transition-colors"
                >
                  <span>VERIFY ONLINE</span>
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

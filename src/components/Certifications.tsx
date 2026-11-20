import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, X, ShieldCheck, Search, FileText, ZoomIn, ZoomOut, RotateCcw, Download } from 'lucide-react';
import { certificatesData, Certificate } from '../data/certificatesData';

export const Certifications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalCert, setActiveModalCert] = useState<Certificate | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const categories = [
    'All',
    'Data Analytics',
    'Python',
    'SQL',
    'AI and Generative AI',
    'Software Development',
    'Programming Certifications',
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

  const openCertModal = (cert: Certificate) => {
    setActiveModalCert(cert);
    setZoomLevel(1);
  };

  return (
    <section id="certificates" className="py-20 relative overflow-hidden bg-neutral-50/50 dark:bg-black border-t border-neutral-200/80 dark:border-white/5">
      
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-heading font-semibold text-[#1C39BB] dark:text-blue-400 tracking-wider mb-2 uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Credentials</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Certifications & Industry Credentials
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
              Searchable catalog of standardized assessments, enterprise workshops, and specialized technical curricula with high-resolution document previews.
            </p>
          </div>

          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-sans bg-white dark:bg-[#0C0C0C] border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-neutral-200 shadow-sm">
              <ShieldCheck className="w-4 h-4 mr-2 text-emerald-600 dark:text-emerald-400" />
              <strong className="font-semibold mr-1">{certificatesData.length}</strong> Verified Credentials
            </span>
          </div>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="space-y-4 mb-8">
          
          {/* Search Input */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic (e.g. SQL, Python, AWS, Java)..."
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#0C0C0C] border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white text-xs font-sans placeholder:text-neutral-400 focus:outline-none focus:border-[#1C39BB] focus:ring-1 focus:ring-[#1C39BB] transition-colors shadow-sm"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none text-xs font-heading">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all border ${
                    isSelected
                      ? 'bg-[#1C39BB] text-white font-semibold border-[#1C39BB] shadow-sm'
                      : 'bg-white dark:bg-[#0C0C0C] text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border-neutral-200 dark:border-white/10'
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
              className="bg-white dark:bg-[#0C0C0C] rounded-3xl border border-neutral-200 dark:border-white/10 p-5 sm:p-6 shadow-sm hover:border-[#1C39BB]/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header info */}
                <div className="flex items-center justify-between text-xs pb-3 border-b border-neutral-100 dark:border-white/10">
                  <span className="font-sans font-medium text-neutral-500 dark:text-neutral-400">
                    {cert.issuer}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-[#1C39BB]/15 text-[#1C39BB] dark:text-blue-300 text-[10px] font-heading font-semibold">
                    {cert.category}
                  </span>
                </div>

                {/* Certificate High-Res Thumbnail Preview */}
                <div
                  onClick={() => openCertModal(cert)}
                  className="relative h-40 rounded-2xl bg-neutral-900 border border-neutral-200/80 dark:border-white/10 overflow-hidden cursor-pointer group/cert shadow-inner flex items-center justify-center p-2"
                >
                  <img
                    src={cert.previewImage}
                    alt={cert.title}
                    className="w-full h-full object-contain group-hover/cert:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#1C39BB] text-white text-xs font-heading font-semibold shadow-lg">
                      <FileText className="w-3.5 h-3.5" />
                      <span>View Credential Document</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading text-lg font-bold text-neutral-900 dark:text-white leading-snug group-hover:text-[#1C39BB] dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                    Issued: {cert.completionDate}
                  </p>
                </div>

                <p className="text-xs text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed line-clamp-2">
                  {cert.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-white/[0.04] text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-neutral-100 dark:border-white/10 flex items-center justify-between">
                <button
                  onClick={() => openCertModal(cert)}
                  className="text-xs font-heading font-semibold text-[#1C39BB] dark:text-blue-400 hover:underline"
                >
                  Inspect Document
                </button>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-sans text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Certificate Viewer Modal */}
      {activeModalCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className="bg-white dark:bg-[#0C0C0C] rounded-3xl border border-neutral-200 dark:border-white/15 max-w-3xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 shadow-2xl relative text-neutral-900 dark:text-white">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalCert(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1.5 border-b border-neutral-100 dark:border-white/10 pb-4 mb-4">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-[#1C39BB]/15 text-[#1C39BB] dark:text-blue-300 text-xs font-heading font-semibold">
                {activeModalCert.category}
              </span>
              <h3 className="font-heading text-xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                {activeModalCert.title}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                Issued by {activeModalCert.issuer} &bull; {activeModalCert.completionDate}
              </p>
            </div>

            {/* Document Viewer Frame with Zoom Controls */}
            <div className="mb-6 space-y-2">
              <div className="flex items-center justify-between text-xs font-sans text-neutral-500 dark:text-neutral-400">
                <span className="font-mono text-[11px]">{activeModalCert.code}</span>
                <div className="flex items-center space-x-1.5 bg-neutral-100 dark:bg-white/5 p-1 rounded-xl">
                  <button
                    onClick={() => setZoomLevel((z) => Math.max(0.75, z - 0.25))}
                    className="p-1 rounded-lg hover:bg-white dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-200"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono text-[11px] px-1">{Math.round(zoomLevel * 100)}%</span>
                  <button
                    onClick={() => setZoomLevel((z) => Math.min(2, z + 0.25))}
                    className="p-1 rounded-lg hover:bg-white dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-200"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setZoomLevel(1)}
                    className="p-1 rounded-lg hover:bg-white dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-200"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Document Container */}
              <div className="h-72 sm:h-96 rounded-2xl bg-neutral-950 border border-neutral-200 dark:border-white/10 overflow-auto flex items-center justify-center p-3">
                <div
                  style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center' }}
                  className="transition-transform duration-200 max-w-full"
                >
                  <img
                    src={activeModalCert.previewImage}
                    alt={activeModalCert.title}
                    className="w-full h-auto max-h-[340px] object-contain rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>

            {/* Description & Validated Skills */}
            <div className="space-y-4 text-sm font-sans">
              <div>
                <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-neutral-400 mb-1">
                  Curriculum & Verification Summary
                </h4>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-xs sm:text-sm">
                  {activeModalCert.summary}
                </p>
              </div>

              <div>
                <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-neutral-400 mb-2">
                  Skills Validated
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalCert.skills.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-white/5 text-neutral-800 dark:text-neutral-200 text-xs font-mono border border-neutral-200 dark:border-white/10"
                    >
                      <CheckCircle className="w-3 h-3 mr-1 text-emerald-600 dark:text-emerald-400" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-5 border-t border-neutral-100 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {activeModalCert.verificationUrl ? (
                  <a
                    href={activeModalCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#1C39BB] text-white font-heading font-semibold text-xs hover:bg-[#152c99] transition-all shadow-sm"
                  >
                    <span>Verify Credential Online</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-neutral-400">Institutional record</span>
                )}

                <a
                  href={activeModalCert.previewImage}
                  download
                  className="inline-flex items-center space-x-1 px-3 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-200 text-xs font-heading font-medium transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download SVG</span>
                </a>
              </div>

              <button
                onClick={() => setActiveModalCert(null)}
                className="px-4 py-2 rounded-xl text-neutral-600 dark:text-neutral-400 text-xs font-heading font-medium hover:text-neutral-900 dark:hover:text-white"
              >
                Close Viewer
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

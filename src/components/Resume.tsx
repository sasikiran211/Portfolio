import React, { useState } from 'react';
import { FileText, Download, Printer, CheckCircle } from 'lucide-react';
import { profileData } from '../data/profileData';
import { certificatesData } from '../data/certificatesData';
import { projectsData } from '../data/projectsData';

export const Resume: React.FC = () => {
  const [downloadNote, setDownloadNote] = useState<string | null>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDirectDownload = () => {
    const link = document.createElement('a');
    link.href = '/Sasikiran_Kakumani_Resume.pdf';
    link.download = 'Sasikiran_Kakumani_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadNote("Download initiated. You can also click 'Print ATS View' to generate or preview the print version directly!");
    setTimeout(() => setDownloadNote(null), 6000);
  };

  return (
    <section id="resume" className="py-20 relative overflow-hidden bg-neutral-50/50 dark:bg-black border-t border-neutral-200/80 dark:border-white/5">
      
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-heading font-semibold text-[#1C39BB] dark:text-blue-400 tracking-wider mb-2 uppercase">
              <FileText className="w-3.5 h-3.5" />
              <span>Official Document</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Curriculum Vitae & Resume
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
              Structured ATS-formatted dossier ready for Data Analyst, Data Science, and AI/ML internship evaluation.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleDirectDownload}
              className="inline-flex items-center space-x-2 bg-[#1C39BB] hover:bg-[#152c99] text-white font-heading font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm active:scale-95 text-xs sm:text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-2 bg-white dark:bg-white/[0.04] hover:bg-neutral-100 dark:hover:bg-white/[0.08] text-neutral-800 dark:text-neutral-200 font-heading font-medium px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-white/10 transition-all shadow-sm active:scale-95 text-xs sm:text-sm"
            >
              <Printer className="w-4 h-4 text-[#1C39BB] dark:text-blue-400" />
              <span>Print ATS View</span>
            </button>
          </div>
        </div>

        {downloadNote && (
          <div className="mb-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/40 text-neutral-800 dark:text-neutral-200 text-xs flex items-center space-x-2 shadow-sm animate-fadeIn">
            <CheckCircle className="w-4 h-4 text-[#1C39BB] dark:text-blue-400 flex-shrink-0" />
            <span>{downloadNote}</span>
          </div>
        )}

        {/* ATS Resume Sheet */}
        <div className="bg-white dark:bg-[#0C0C0C] rounded-3xl border border-neutral-200 dark:border-white/10 shadow-sm p-6 sm:p-12 max-w-4xl mx-auto print:border-none print:shadow-none print:p-0 print:max-w-none text-neutral-900 dark:text-neutral-100 font-sans">
          
          {/* Header */}
          <div className="border-b-2 border-neutral-200 dark:border-white/10 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white">
                  {profileData.name}
                </h3>
                <p className="text-sm font-heading font-semibold text-[#1C39BB] dark:text-blue-400 mt-1">
                  B.Tech CSE (AI & ML) Undergraduate &bull; Aspiring Data Analyst & Data Scientist
                </p>
              </div>

              <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1 sm:text-right font-sans">
                <p>{profileData.location}</p>
                <p>Email: {profileData.contactEmail}</p>
                <p>
                  <a href={profileData.socialLinks.linkedin} className="hover:underline text-[#1C39BB] dark:text-blue-400">
                    linkedin.com/in/SasikiranKakumani
                  </a>
                </p>
                <p>
                  <a href={profileData.socialLinks.github} className="hover:underline text-[#1C39BB] dark:text-blue-400">
                    github.com/sasikiran211
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-[#1C39BB] dark:text-blue-400 mb-2 border-b border-neutral-100 dark:border-white/5 pb-1">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
              B.Tech Computer Science and Engineering (AI & ML) undergraduate at Vasireddy Venkatadri Institute of Technology (7.5 CGPA). Focused on building strong fundamentals in Data Structures & Algorithms, combined with practical hands-on projects in Data Analytics, SQL, Python, Power BI, and Machine Learning. Active competitive programmer with 166 problems solved and a 51-day peak streak on Take U Forward. Seeking Data Analyst, Data Science, or AI/ML technical internships.
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-[#1C39BB] dark:text-blue-400 mb-3 border-b border-neutral-100 dark:border-white/5 pb-1">
              Education
            </h4>
            <div className="space-y-4">
              {profileData.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between text-xs gap-1">
                  <div>
                    <h5 className="font-heading font-bold text-sm text-neutral-900 dark:text-white">
                      {edu.degree} {edu.stream ? `— ${edu.stream}` : ''}
                    </h5>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {edu.institution}, {edu.location}
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <span className="font-heading font-bold text-neutral-900 dark:text-white">
                      {edu.grade}
                    </span>
                    <p className="text-neutral-500 dark:text-neutral-400 text-[11px]">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-[#1C39BB] dark:text-blue-400 mb-2 border-b border-neutral-100 dark:border-white/5 pb-1">
              Technical Skills
            </h4>
            <div className="space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300 font-sans">
              <p>
                <strong className="text-neutral-900 dark:text-white">Data Analytics & Databases:</strong> SQL (MySQL, PostgreSQL queries, joins, aggregations), Power BI, Microsoft Excel, Exploratory Data Analysis (EDA), Data Cleaning
              </p>
              <p>
                <strong className="text-neutral-900 dark:text-white">Programming Languages:</strong> Python, Java, C++, C
              </p>
              <p>
                <strong className="text-neutral-900 dark:text-white">Computer Science Fundamentals:</strong> Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Discrete Mathematics
              </p>
              <p>
                <strong className="text-neutral-900 dark:text-white">AI & Tools:</strong> Scikit-Learn, Machine Learning Foundations, Git, GitHub, VS Code, Google Colab
              </p>
            </div>
          </div>

          {/* Key Projects */}
          <div className="mb-6">
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-[#1C39BB] dark:text-blue-400 mb-3 border-b border-neutral-100 dark:border-white/5 pb-1">
              Technical Projects
            </h4>
            <div className="space-y-4">
              {projectsData.map((project) => (
                <div key={project.id} className="text-xs space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h5 className="font-heading font-bold text-sm text-neutral-900 dark:text-white">
                      {project.title} &bull; <span className="font-normal text-neutral-500 dark:text-neutral-400">{project.category}</span>
                    </h5>
                    <span className="text-neutral-500 dark:text-neutral-400 font-mono text-[11px]">
                      {project.techStack.slice(0, 3).join(', ')}
                    </span>
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
                    {project.problemStatement}
                  </p>
                  <ul className="list-disc pl-4 space-y-0.5 text-neutral-600 dark:text-neutral-400">
                    {project.features.slice(0, 2).map((feat: string, i: number) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Snapshot */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-[#1C39BB] dark:text-blue-400 mb-2 border-b border-neutral-100 dark:border-white/5 pb-1">
              Verified Certifications ({certificatesData.length})
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700 dark:text-neutral-300 font-sans">
              {certificatesData.map((c) => (
                <div key={c.id} className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1C39BB] dark:bg-blue-400 flex-shrink-0" />
                  <span className="truncate">{c.title} — {c.issuer}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

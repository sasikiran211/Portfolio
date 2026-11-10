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

    setDownloadNote("Initiated download. You can also click 'Print / Save as PDF' below to generate a fresh ATS-friendly PDF directly!");
    setTimeout(() => setDownloadNote(null), 8000);
  };

  return (
    <section id="resume" className="py-20 bg-cream-light/50 border-t border-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-ocean/70 mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>Professional Document</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ocean tracking-tight">
              Curriculum Vitae & Resume
            </h2>
            <p className="mt-3 text-base sm:text-lg text-ocean/80">
              Verified academic, algorithmic, and analytical credentials formatted for technical internship screening.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-3">
            <button
              onClick={handleDirectDownload}
              className="inline-flex items-center space-x-2 bg-ocean hover:bg-ocean-light text-cream font-medium px-5 py-2.5 rounded-xl transition-luxury shadow-md active:scale-95 text-xs sm:text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-2 bg-white hover:bg-cream-light text-ocean font-medium px-4 py-2.5 rounded-xl border border-beige transition-luxury shadow-sm active:scale-95 text-xs sm:text-sm"
            >
              <Printer className="w-4 h-4 text-ocean" />
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>

        {downloadNote && (
          <div className="mb-6 p-4 rounded-xl bg-white border border-beige/80 text-ocean text-xs flex items-center space-x-2 shadow-sm animate-fadeIn">
            <CheckCircle className="w-4 h-4 text-emerald-700 flex-shrink-0" />
            <span>{downloadNote}</span>
          </div>
        )}

        {/* Interactive Resume Sheet */}
        <div className="bg-white rounded-3xl border border-beige shadow-elevated p-6 sm:p-12 max-w-4xl mx-auto print:border-none print:shadow-none print:p-0 print:max-w-none text-ocean font-sans">
          
          {/* Header */}
          <div className="border-b-2 border-ocean/20 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ocean">
                  {profileData.name}
                </h3>
                <p className="text-sm font-semibold text-ocean/80 mt-1">
                  B.Tech CSE (AI & ML) Undergraduate &bull; Aspiring Data Analyst & Data Scientist
                </p>
              </div>

              <div className="text-xs text-ocean/70 space-y-1 sm:text-right">
                <p>{profileData.location}</p>
                <p>Email: {profileData.contactEmail}</p>
                <p>
                  <a href={profileData.socialLinks.linkedin} className="hover:underline text-ocean font-medium">
                    linkedin.com/in/SasikiranKakumani
                  </a>
                </p>
                <p>
                  <a href={profileData.socialLinks.github} className="hover:underline text-ocean font-medium">
                    github.com/sasikiran211
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h4 className="font-serif text-lg font-bold text-ocean uppercase tracking-wider border-b border-beige/60 pb-1 mb-3">
              Education
            </h4>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                <div>
                  <strong className="text-ocean block sm:inline">
                    Vasireddy Venkatadri Institute of Technology (VVITU)
                  </strong>{' '}
                  &bull; B.Tech in CSE (AI & ML)
                </div>
                <div className="text-ocean/70 font-medium">
                  7.5 CGPA &bull; 2023 – 2027 (Ongoing)
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm text-ocean/80">
                <div>
                  <strong className="text-ocean block sm:inline">Sri Gowthami Junior College</strong> &bull; Intermediate (MPC)
                </div>
                <div className="text-ocean/70">97.7% &bull; 2021 – 2023</div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm text-ocean/80">
                <div>
                  <strong className="text-ocean block sm:inline">Sri Gowthami E-techno School</strong> &bull; SSC (Class X)
                </div>
                <div className="text-ocean/70">90.33% &bull; 2021</div>
              </div>
            </div>
          </div>

          {/* Technical Skills Breakdown */}
          <div className="mb-6">
            <h4 className="font-serif text-lg font-bold text-ocean uppercase tracking-wider border-b border-beige/60 pb-1 mb-3">
              Technical Competencies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div>
                <strong className="text-ocean block mb-1">Data Analytics & BI:</strong>
                <span className="text-ocean/80">SQL, Excel, Power BI, DAX, Power Query, Data Cleaning, EDA</span>
              </div>
              <div>
                <strong className="text-ocean block mb-1">Python Data Science:</strong>
                <span className="text-ocean/80">Pandas, NumPy, Matplotlib, Seaborn</span>
              </div>
              <div>
                <strong className="text-ocean block mb-1">Programming Languages:</strong>
                <span className="text-ocean/80">Python, Java, C</span>
              </div>
              <div>
                <strong className="text-ocean block mb-1">Computer Science Core:</strong>
                <span className="text-ocean/80">Data Structures & Algorithms, DBMS, OOP, Operating Systems (learning)</span>
              </div>
              <div className="sm:col-span-2">
                <strong className="text-ocean block mb-1">AI & Emerging Tech:</strong>
                <span className="text-ocean/80">Machine Learning Fundamentals, Prompt Engineering, Generative AI Foundations</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="mb-6">
            <h4 className="font-serif text-lg font-bold text-ocean uppercase tracking-wider border-b border-beige/60 pb-1 mb-3">
              Selected Technical Projects
            </h4>
            <div className="space-y-4">
              {projectsData.map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <strong className="text-ocean text-sm">{proj.title}</strong>
                    <span className="text-ocean/60 text-xs italic">{proj.status}</span>
                  </div>
                  <p className="text-ocean/80 mt-1 leading-relaxed">{proj.overview}</p>
                  <p className="text-ocean/70 mt-1">
                    <span className="font-semibold text-ocean">Key Stack:</span> {proj.techStack.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Problem Solving & Milestones */}
          <div className="mb-6">
            <h4 className="font-serif text-lg font-bold text-ocean uppercase tracking-wider border-b border-beige/60 pb-1 mb-3">
              Coding Milestones & Achievements
            </h4>
            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-ocean/80">
              <li>
                <strong>Take U Forward Track:</strong> 166 problems solved across Basic & Core tracks (Global Rank #577, 51-day peak streak).
              </li>
              <li>
                <strong>Multi-Language Proficiency:</strong> Algorithmic practice across C++, C, Java, JavaScript, and Python.
              </li>
              <li>
                <strong>Active Profiles:</strong> Verified accounts on CodeChef (sasikiran_24), HackerRank (Sasikiran_24), LeetCode, and GeeksforGeeks.
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-serif text-lg font-bold text-ocean uppercase tracking-wider border-b border-beige/60 pb-1 mb-3">
              Verified Certifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificatesData.map((c) => (
                <div key={c.id} className="flex items-start space-x-1.5">
                  <span className="text-ocean font-bold">&bull;</span>
                  <span>
                    <strong>{c.title}</strong> — {c.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Replacement Note */}
          <div className="mt-8 pt-4 border-t border-beige/40 text-[11px] text-ocean/60 flex items-center justify-between print:hidden">
            <span>Configurable resume asset in <code>public/Sasikiran_Kakumani_Resume.pdf</code></span>
            <span>Version: 2026.11 Updated</span>
          </div>

        </div>

      </div>
    </section>
  );
};

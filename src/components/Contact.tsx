import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, ArrowUpRight, Copy, Check, Terminal, FileText } from 'lucide-react';
import { profileData } from '../data/profileData';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleInterest: 'Data Analyst Internship',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    const subject = encodeURIComponent(`[Internship Inquiry - ${formData.roleInterest}] From ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInterest: ${formData.roleInterest}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${profileData.contactEmail}?subject=${subject}&body=${body}`, '_blank');

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-[#0C0C0C]/70 border-t border-white/5">
      
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-[#CCFF00]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#CCFF00] tracking-widest mb-2 uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>[SECTION // 07 &bull; COMMUNICATIONS]</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-[#EBEBEB] tracking-tight">
            Connect & Internship Inquiries
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#EBEBEB]/70 leading-relaxed font-sans">
            Actively open to conversations regarding Data Analyst, Data Science, and AI/ML internship opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0C0C0C] rounded-3xl border border-white/10 p-6 sm:p-8 shadow-glass-card space-y-6">
              
              <div>
                <h3 className="font-sans text-2xl font-bold text-white mb-2">
                  Direct Inquiries & Channels
                </h3>
                <p className="text-xs sm:text-sm text-[#EBEBEB]/70 font-sans leading-relaxed">
                  Connect directly regarding technical internship openings or to explore project architectures and problem-solving metrics.
                </p>
              </div>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-2 font-mono">
                <div className="flex items-center justify-between text-xs text-white/40">
                  <span>DIRECT EMAIL // PRIMARY</span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center space-x-1 text-[#CCFF00] hover:underline"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#10B981]" />
                        <span className="text-[#10B981]">COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${profileData.contactEmail}`}
                  className="text-sm sm:text-base font-bold text-white hover:text-[#CCFF00] transition-colors block break-all"
                >
                  {profileData.contactEmail}
                </a>
              </div>

              {/* Social Platform Shortcuts */}
              <div className="space-y-2.5 pt-2 font-mono text-xs">
                <span className="text-[10px] text-white/40 uppercase block mb-1">
                  VERIFIED PLATFORM PROFILES
                </span>

                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#CCFF00]/40 transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-xl bg-black text-white group-hover:text-[#CCFF00] transition-colors border border-white/5">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-white font-bold block">LinkedIn</span>
                      <span className="text-[11px] text-white/50">/in/SasikiranKakumani</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#CCFF00]" />
                </a>

                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#CCFF00]/40 transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-xl bg-black text-white group-hover:text-[#CCFF00] transition-colors border border-white/5">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-white font-bold block">GitHub</span>
                      <span className="text-[11px] text-white/50">@sasikiran211</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#CCFF00]" />
                </a>

                <a
                  href={profileData.socialLinks.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#CCFF00]/40 transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-xl bg-black text-white group-hover:text-[#CCFF00] transition-colors border border-white/5">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-white font-bold block">CodeChef</span>
                      <span className="text-[11px] text-white/50">@sasikiran_24</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#CCFF00]" />
                </a>

                <a
                  href={profileData.socialLinks.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#10B981]/40 transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-xl bg-black text-white group-hover:text-[#10B981] transition-colors border border-white/5">
                      <Terminal className="w-4 h-4 text-[#10B981]" />
                    </div>
                    <div>
                      <span className="text-white font-bold block">HackerRank</span>
                      <span className="text-[11px] text-white/50">@Sasikiran_24 (Certified)</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#10B981]" />
                </a>
              </div>

              {/* Resume Quick Action */}
              <div className="pt-2">
                <a
                  href="/Sasikiran_Kakumani_Resume.pdf"
                  download="Sasikiran_Kakumani_Resume.pdf"
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs border border-white/10 transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#CCFF00]" />
                  <span>DOWNLOAD VERIFIED RESUME PDF</span>
                </a>
              </div>

            </div>
          </div>

          {/* Interactive Form Column with Large Neon Lime CTA (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#0C0C0C] rounded-3xl border border-white/10 p-6 sm:p-10 shadow-glass-card">
              
              <div className="mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-[#CCFF00] uppercase block">
                  [DISPATCH PROTOCOL // INQUIRY FORM]
                </span>
                <h3 className="font-sans text-2xl font-bold text-white mt-1">
                  Send a Direct Message
                </h3>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-black/60 rounded-2xl border border-white/10 space-y-3 font-mono">
                  <div className="w-12 h-12 rounded-full bg-[#CCFF00] text-black flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(204,255,0,0.5)]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-sans text-xl font-bold text-white">
                    INQUIRY COMPILED SUCCESSFULLY
                  </h4>
                  <p className="text-xs text-white/70 max-w-md mx-auto font-sans">
                    Your inquiry has been formulated. If your mail application did not auto-launch, write directly to <strong className="text-white">{profileData.contactEmail}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs border border-white/10 transition-colors"
                  >
                    SEND ANOTHER TRANSMISSION
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 mb-2 uppercase">
                        SENDER NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe / Recruiter"
                        className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:border-[#CCFF00] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-white/60 mb-2 uppercase">
                        SENDER EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:border-[#CCFF00] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 mb-2 uppercase">
                      INQUIRY CONTEXT / OPPORTUNITY TRACK
                    </label>
                    <select
                      value={formData.roleInterest}
                      onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white focus:outline-none focus:border-[#CCFF00] transition-colors"
                    >
                      <option value="Data Analyst Internship">Data Analyst Internship</option>
                      <option value="Data Science Internship">Data Science Internship</option>
                      <option value="AI / ML Internship">AI / ML Internship</option>
                      <option value="Software / Systems Internship">Software / Systems Internship</option>
                      <option value="General Technical Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/60 mb-2 uppercase">
                      MESSAGE TRANSMISSION *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding the role, timeline, requirements, or conversation..."
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:border-[#CCFF00] transition-colors resize-none font-sans text-sm"
                    />
                  </div>

                  {/* Large Neon Lime CTA Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] text-white/40">
                      Zero third-party trackers &bull; Direct dispatch
                    </span>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#CCFF00] hover:bg-[#B5E600] text-black font-bold px-8 py-4 rounded-xl transition-all shadow-[0_0_25px_rgba(204,255,0,0.35)] hover:shadow-[0_0_40px_rgba(204,255,0,0.55)] active:scale-95 text-xs sm:text-sm"
                    >
                      <span>TRANSMIT INQUIRY</span>
                      <Send className="w-4 h-4 text-black" />
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

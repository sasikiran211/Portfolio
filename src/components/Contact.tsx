import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, ArrowUpRight, Copy, Check } from 'lucide-react';
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
    <section id="contact" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-ocean/70 mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ocean tracking-tight">
            Connect & Internship Opportunities
          </h2>
          <p className="mt-3 text-base sm:text-lg text-ocean/80">
            Open to conversations regarding Data Analyst, Data Science, and AI/ML internship opportunities for upcoming terms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-beige p-6 sm:p-8 shadow-card space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-ocean mb-2">
                  Direct Communication
                </h3>
                <p className="text-xs sm:text-sm text-ocean/75 leading-relaxed">
                  Whether you're looking for an analytical mind for your team or would like to discuss my problem-solving track, feel free to reach out.
                </p>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-cream/60 border border-beige/60 space-y-2">
                <div className="flex items-center justify-between text-xs text-ocean/70">
                  <span className="font-semibold uppercase tracking-wider">Email Address</span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center space-x-1 text-ocean hover:text-ocean-light font-medium transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${profileData.contactEmail}`}
                  className="font-mono text-sm sm:text-base font-semibold text-ocean hover:underline block break-all"
                >
                  {profileData.contactEmail}
                </a>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-ocean/70 block">
                  Professional Channels
                </span>

                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white hover:bg-beige/25 border border-beige text-ocean transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-cream text-ocean group-hover:bg-ocean group-hover:text-cream transition-colors">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-bold block">LinkedIn Profile</span>
                      <span className="text-xs text-ocean/70 font-mono">/in/SasikiranKakumani</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ocean/60 group-hover:text-ocean" />
                </a>

                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white hover:bg-beige/25 border border-beige text-ocean transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-cream text-ocean group-hover:bg-ocean group-hover:text-cream transition-colors">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-bold block">GitHub Repositories</span>
                      <span className="text-xs text-ocean/70 font-mono">@sasikiran211</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ocean/60 group-hover:text-ocean" />
                </a>
              </div>

              {/* Location Note */}
              <div className="pt-2 border-t border-beige/40 text-xs text-ocean/70">
                <span>Location: <strong>{profileData.location}</strong> (Open to Remote & Onsite Opportunities)</span>
              </div>
            </div>
          </div>

          {/* Recruiter Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-beige p-6 sm:p-8 shadow-card">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-ocean">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-ocean/70 mt-1">
                  Fill in your details below. This will prepare a direct email or dispatch your message securely.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-cream/50 rounded-2xl border border-beige/60 space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-ocean text-cream flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-ocean">
                    Thank You for Connecting!
                  </h4>
                  <p className="text-xs sm:text-sm text-ocean/80 max-w-md mx-auto">
                    Your inquiry has been compiled. If your mail client did not automatically open, feel free to directly write to <strong>{profileData.contactEmail}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl bg-ocean text-cream text-xs font-semibold hover:bg-ocean-light transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ocean/70 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe / Recruiter"
                        className="w-full px-4 py-2.5 rounded-xl bg-cream/30 border border-beige text-ocean text-sm focus:outline-none focus:ring-2 focus:ring-ocean/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ocean/70 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-cream/30 border border-beige text-ocean text-sm focus:outline-none focus:ring-2 focus:ring-ocean/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ocean/70 mb-1.5">
                      Internship Opportunity / Inquiry Type
                    </label>
                    <select
                      value={formData.roleInterest}
                      onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream/30 border border-beige text-ocean text-sm focus:outline-none focus:ring-2 focus:ring-ocean/40 transition-colors"
                    >
                      <option value="Data Analyst Internship">Data Analyst Internship</option>
                      <option value="Data Science Internship">Data Science Internship</option>
                      <option value="AI / ML Internship">AI / ML Internship</option>
                      <option value="Software / Technical Internship">Software / Technical Internship</option>
                      <option value="General Technical Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ocean/70 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding the role, requirements, or conversation topic..."
                      className="w-full px-4 py-2.5 rounded-xl bg-cream/30 border border-beige text-ocean text-sm focus:outline-none focus:ring-2 focus:ring-ocean/40 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-ocean/60">
                      Direct submission &bull; No third-party trackers
                    </span>

                    <button
                      type="submit"
                      className="inline-flex items-center space-x-2 bg-ocean hover:bg-ocean-light text-cream font-medium px-6 py-3 rounded-xl transition-luxury shadow-md active:scale-95 text-xs sm:text-sm"
                    >
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4" />
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

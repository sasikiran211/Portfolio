import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, Terminal, AlertCircle, Loader2, ExternalLink } from 'lucide-react';
import { profileData } from '../data/profileData';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // anti-bot spam protection
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showMailtoFallback, setShowMailtoFallback] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${profileData.contactEmail}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setShowMailtoFallback(false);

    // Client-side validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage('Please enter your full name (at least 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 2) {
      setErrorMessage('Please enter a subject line.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage('Please write a message with at least 10 characters.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          honeypot: formData.honeypot,
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setStatus('success');
        setSuccessMessage(data.message || 'Thank you! Your message has been sent successfully. I will respond to your email promptly.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus('error');
        if (data?.fallback) {
          setErrorMessage(data.error || data.message || 'Server email service is currently in fallback mode.');
          setShowMailtoFallback(true);
        } else {
          setErrorMessage(data?.error || 'Unable to deliver message at this moment. Please try again or reach out directly via email.');
          setShowMailtoFallback(true);
        }
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network connection to serverless email function failed. You can send directly using your email client below.');
      setShowMailtoFallback(true);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-white dark:bg-[#080808] border-t border-neutral-200/80 dark:border-white/5">
      
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-heading font-semibold text-[#1C39BB] dark:text-blue-400 tracking-wider mb-2 uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>Inquiries & Opportunities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Contact & Internship Inquiries
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
            Actively seeking technical internship opportunities in Data Analytics, Data Science, and Machine Learning engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-50/70 dark:bg-[#0C0C0C] rounded-3xl border border-neutral-200 dark:border-white/10 p-6 sm:p-8 shadow-sm space-y-6">
              
              <div>
                <h3 className="font-heading text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                  Direct Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
                  Feel free to reach out directly regarding technical internship opportunities, project collaborations, or coding metrics.
                </p>
              </div>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-white dark:bg-black/60 border border-neutral-200 dark:border-white/10 space-y-1.5 shadow-sm">
                <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                  <span>Direct Email</span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center space-x-1 text-[#1C39BB] dark:text-blue-400 font-heading font-semibold hover:underline"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${profileData.contactEmail}`}
                  className="text-sm sm:text-base font-heading font-bold text-neutral-900 dark:text-white hover:text-[#1C39BB] dark:hover:text-blue-400 transition-colors block break-all"
                >
                  {profileData.contactEmail}
                </a>
              </div>

              {/* Academic & Geographic Location */}
              <div className="space-y-3 pt-2 text-xs font-sans">
                <div className="flex items-start space-x-3 text-neutral-700 dark:text-neutral-300">
                  <div className="w-2 h-2 rounded-full bg-[#1C39BB] dark:bg-blue-400 mt-1.5 flex-shrink-0" />
                  <div>
                    <strong className="text-neutral-900 dark:text-white block font-heading">Institution:</strong>
                    <span>Vasireddy Venkatadri Institute of Technology (VVITU), Guntur, Andhra Pradesh, India</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-neutral-700 dark:text-neutral-300">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  <div>
                    <strong className="text-neutral-900 dark:text-white block font-heading">Availability:</strong>
                    <span>Open to Technical Internships &bull; Remote or Onsite</span>
                  </div>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="pt-4 border-t border-neutral-200 dark:border-white/10 space-y-2">
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                  Verified Online Profiles
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <a
                    href={profileData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2.5 p-3 rounded-xl bg-white dark:bg-white/[0.03] hover:bg-neutral-100 dark:hover:bg-white/[0.08] text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-white/10 transition-colors shadow-sm"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#1C39BB] dark:text-blue-400" />
                    <span className="font-heading font-semibold">LinkedIn Profile</span>
                  </a>

                  <a
                    href={profileData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2.5 p-3 rounded-xl bg-white dark:bg-white/[0.03] hover:bg-neutral-100 dark:hover:bg-white/[0.08] text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-white/10 transition-colors shadow-sm"
                  >
                    <GithubIcon className="w-4 h-4 text-neutral-900 dark:text-white" />
                    <span className="font-heading font-semibold">GitHub Profile</span>
                  </a>

                  <a
                    href={profileData.socialLinks.takeuforward}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2.5 p-3 rounded-xl bg-white dark:bg-white/[0.03] hover:bg-neutral-100 dark:hover:bg-white/[0.08] text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-white/10 transition-colors shadow-sm"
                  >
                    <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-heading font-semibold">Take U Forward</span>
                  </a>

                  <a
                    href={profileData.socialLinks.codechef}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2.5 p-3 rounded-xl bg-white dark:bg-white/[0.03] hover:bg-neutral-100 dark:hover:bg-white/[0.08] text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-white/10 transition-colors shadow-sm"
                  >
                    <div className="w-4 h-4 rounded-full bg-amber-600 text-[10px] text-white flex items-center justify-center font-bold">C</div>
                    <span className="font-heading font-semibold">CodeChef</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Recruiter Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#0C0C0C] rounded-3xl border border-neutral-200 dark:border-white/10 p-6 sm:p-10 shadow-sm">
              <h3 className="font-heading text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-sans mb-6">
                Fill in the details below. Notifications are securely processed via automated serverless email dispatch.
              </p>

              {/* Success Notification */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm flex items-start space-x-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-heading font-bold text-emerald-900 dark:text-emerald-200">
                      Message Delivered Successfully!
                    </strong>
                    <span>{successMessage}</span>
                  </div>
                </div>
              )}

              {/* Error Notification with Graceful Mailto Fallback */}
              {status === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-200 text-xs sm:text-sm space-y-3 animate-fadeIn">
                  <div className="flex items-start space-x-2.5">
                    <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-heading font-bold">Notice</strong>
                      <span>{errorMessage}</span>
                    </div>
                  </div>

                  {showMailtoFallback && (
                    <div className="pt-2 border-t border-amber-200/60 dark:border-amber-800/40 flex items-center justify-between gap-3">
                      <span className="text-[11px] text-amber-800 dark:text-amber-300">
                        Prefer opening your standard email app directly?
                      </span>
                      <button
                        type="button"
                        onClick={handleOpenMailto}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-amber-600 text-white font-heading font-semibold text-xs hover:bg-amber-700 transition-colors shadow-sm"
                      >
                        <span>Open in Email App</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                
                {/* Honeypot field (hidden from real users, catches automated bots) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Field 1: Full Name */}
                  <div className="space-y-1.5">
                    <label className="font-heading font-semibold text-neutral-700 dark:text-neutral-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      disabled={status === 'loading'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#1C39BB] focus:ring-1 focus:ring-[#1C39BB] transition-colors disabled:opacity-60"
                    />
                  </div>

                  {/* Field 2: Email Address */}
                  <div className="space-y-1.5">
                    <label className="font-heading font-semibold text-neutral-700 dark:text-neutral-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      disabled={status === 'loading'}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#1C39BB] focus:ring-1 focus:ring-[#1C39BB] transition-colors disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Field 3: Subject */}
                <div className="space-y-1.5">
                  <label className="font-heading font-semibold text-neutral-700 dark:text-neutral-300">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    disabled={status === 'loading'}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Data Analyst Internship Opportunity / Technical Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#1C39BB] focus:ring-1 focus:ring-[#1C39BB] transition-colors disabled:opacity-60"
                  />
                </div>

                {/* Field 4: Message */}
                <div className="space-y-1.5">
                  <label className="font-heading font-semibold text-neutral-700 dark:text-neutral-300">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    disabled={status === 'loading'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about the internship role, timeline, project scope, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#1C39BB] focus:ring-1 focus:ring-[#1C39BB] transition-colors resize-none disabled:opacity-60"
                  />
                </div>

                {/* Submit Button with Loading Indicator */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#1C39BB] hover:bg-[#152c99] text-white font-heading font-semibold text-sm transition-all shadow-md active:scale-[0.99] flex items-center justify-center space-x-2 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

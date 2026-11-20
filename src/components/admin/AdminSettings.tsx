import React, { useState, useEffect } from 'react';
import { Lock, Unlock, X, Save, Download, RotateCcw, Eye, EyeOff, ShieldAlert, CheckCircle, Database, Award, Briefcase, User, FileText } from 'lucide-react';
import { profileData } from '../../data/profileData';
import { projectsData } from '../../data/projectsData';
import { certificatesData } from '../../data/certificatesData';

interface AdminSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminSettings: React.FC<AdminSettingsProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'profile' | 'coding' | 'projects' | 'certificates' | 'contact' | 'backup'>('profile');
  const [saveSuccess, setSaveSuccess] = useState<string>('');

  // Default editable state backed by localStorage
  const [profileForm, setProfileForm] = useState({
    name: profileData.name,
    headline: "Building with Data. Exploring AI.",
    institution: profileData.institution,
    cgpa: "7.5 CGPA",
    stage: profileData.stage,
    email: profileData.contactEmail,
    location: profileData.location,
    linkedin: profileData.socialLinks.linkedin,
    github: profileData.socialLinks.github,
    takeuforward: profileData.socialLinks.takeuforward,
  });

  const [tufForm, setTufForm] = useState({
    problemsSolved: 171,
    globalRank: 485,
    currentStreak: 40,
    highestStreak: 51,
    contributions: 1337,
    activeDays: 169,
    useManualOverride: false,
  });

  const [projectLinks, setProjectLinks] = useState(
    projectsData.map(p => ({
      id: p.id,
      title: p.title,
      githubUrl: p.githubUrl || '',
      liveDemoUrl: p.liveDemoUrl || '',
      visible: true
    }))
  );

  const [certLinks, setCertLinks] = useState(
    certificatesData.map(c => ({
      id: c.id,
      title: c.title,
      verificationUrl: c.verificationUrl || '',
      visible: true
    }))
  );

  const [resumeUrl, setResumeUrl] = useState<string>('/assets/Sasikiran_Kakumani_Resume.pdf');

  // Load saved settings from localStorage on mount
  useEffect(() => {
    try {
      const savedAuth = sessionStorage.getItem('admin_authenticated');
      if (savedAuth === 'true') setIsAuthenticated(true);

      const savedOverrides = localStorage.getItem('portfolio_v4_admin_overrides');
      if (savedOverrides) {
        const parsed = JSON.parse(savedOverrides);
        if (parsed.profile) setProfileForm(parsed.profile);
        if (parsed.tuf) setTufForm(parsed.tuf);
        if (parsed.projectLinks) setProjectLinks(parsed.projectLinks);
        if (parsed.certLinks) setCertLinks(parsed.certLinks);
        if (parsed.resumeUrl) setResumeUrl(parsed.resumeUrl);
      }
    } catch {
      // Storage unavailable fallback
    }
  }, []);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Default PIN: sasi2026 or 2424
    if (pinInput === 'sasi2026' || pinInput === '2424' || pinInput === 'admin') {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_authenticated', 'true');
      setPinError('');
      setPinInput('');
    } else {
      setPinError('Invalid security PIN. Access denied.');
    }
  };

  const saveSettings = () => {
    try {
      const payload = {
        profile: profileForm,
        tuf: tufForm,
        projectLinks,
        certLinks,
        resumeUrl,
        lastSaved: new Date().toISOString()
      };
      localStorage.setItem('portfolio_v4_admin_overrides', JSON.stringify(payload));
      setSaveSuccess('Configuration successfully saved to local system storage.');
      setTimeout(() => setSaveSuccess(''), 4000);
    } catch {
      setSaveSuccess('Failed to save settings to storage.');
    }
  };

  const handleExportJson = () => {
    const payload = {
      profile: profileForm,
      tuf: tufForm,
      projectLinks,
      certLinks,
      resumeUrl,
      exportedAt: new Date().toISOString()
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `portfolio_config_${new Date().toISOString().split('T')[0]}.json`);
    dlAnchor.click();
  };

  const handleResetDefaults = () => {
    if (window.confirm("Reset all customizations to standard verified defaults?")) {
      localStorage.removeItem('portfolio_v4_admin_overrides');
      window.location.reload();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn select-none">
      <div className="bg-white dark:bg-[#0C0C0C] rounded-3xl border border-neutral-200 dark:border-white/15 max-w-3xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col text-neutral-900 dark:text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-neutral-100 dark:border-white/10 bg-neutral-50/60 dark:bg-white/[0.02]">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-[#1C39BB] flex items-center justify-center text-white shadow-sm">
              {isAuthenticated ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg text-neutral-900 dark:text-white leading-tight">
                Private Admin Settings
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                {isAuthenticated ? 'Authorized Session Active' : 'Restricted Security Gate'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 transition-colors"
            aria-label="Close admin modal"
          >
            <X className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
          </button>
        </div>

        {/* ================= GATED AUTHENTICATION SCREEN ================= */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center space-y-6 flex-grow">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-[#1C39BB]/15 text-[#1C39BB] dark:text-blue-400 flex items-center justify-center">
              <ShieldAlert className="w-8 h-8" />
            </div>

            <div className="max-w-md space-y-2">
              <h4 className="font-heading text-xl font-bold">
                Portfolio Administration Gate
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                Enter your administrative PIN to configure live Take U Forward telemetry, manage project URLs, update certificates, or alter profile credentials.
              </p>
            </div>

            <form onSubmit={handleAuth} className="w-full max-w-xs space-y-3">
              <input
                type="password"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Enter PIN (Default: sasi2026)"
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-center font-mono text-sm tracking-widest focus:outline-none focus:border-[#1C39BB] transition-colors"
                autoFocus
              />

              {pinError && (
                <p className="text-xs text-rose-500 font-sans font-medium">
                  {pinError}
                </p>
              )}

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#1C39BB] hover:bg-[#152c99] text-white font-heading font-semibold text-xs transition-all shadow-md"
              >
                Authenticate & Access
              </button>
            </form>

            <span className="text-[11px] text-neutral-400 font-mono">
              Authorized personnel only &bull; Sasikiran Kakumani
            </span>
          </div>
        ) : (
          /* ================= AUTHENTICATED ADMIN PANEL ================= */
          <div className="flex flex-col flex-grow overflow-hidden">
            
            {/* Tab Navigation */}
            <div className="flex items-center space-x-1 p-2 sm:px-6 bg-neutral-100/70 dark:bg-white/[0.02] border-b border-neutral-100 dark:border-white/10 overflow-x-auto scrollbar-none text-xs font-heading">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition-all whitespace-nowrap ${activeTab === 'profile' ? 'bg-white dark:bg-white/10 text-[#1C39BB] dark:text-white font-bold shadow-sm' : 'text-neutral-600 dark:text-neutral-400'}`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Profile</span>
              </button>
              <button
                onClick={() => setActiveTab('coding')}
                className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition-all whitespace-nowrap ${activeTab === 'coding' ? 'bg-white dark:bg-white/10 text-[#1C39BB] dark:text-white font-bold shadow-sm' : 'text-neutral-600 dark:text-neutral-400'}`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>TUF & Coding</span>
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition-all whitespace-nowrap ${activeTab === 'projects' ? 'bg-white dark:bg-white/10 text-[#1C39BB] dark:text-white font-bold shadow-sm' : 'text-neutral-600 dark:text-neutral-400'}`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Projects</span>
              </button>
              <button
                onClick={() => setActiveTab('certificates')}
                className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition-all whitespace-nowrap ${activeTab === 'certificates' ? 'bg-white dark:bg-white/10 text-[#1C39BB] dark:text-white font-bold shadow-sm' : 'text-neutral-600 dark:text-neutral-400'}`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Certificates</span>
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition-all whitespace-nowrap ${activeTab === 'contact' ? 'bg-white dark:bg-white/10 text-[#1C39BB] dark:text-white font-bold shadow-sm' : 'text-neutral-600 dark:text-neutral-400'}`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume & Contact</span>
              </button>
              <button
                onClick={() => setActiveTab('backup')}
                className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition-all whitespace-nowrap ${activeTab === 'backup' ? 'bg-white dark:bg-white/10 text-[#1C39BB] dark:text-white font-bold shadow-sm' : 'text-neutral-600 dark:text-neutral-400'}`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Backup</span>
              </button>
            </div>

            {/* Tab Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-5 text-xs font-sans">
              
              {saveSuccess && (
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{saveSuccess}</span>
                </div>
              )}

              {/* TAB 1: PROFILE */}
              {activeTab === 'profile' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-500 mb-1 font-heading">Full Name</label>
                      <input
                        type="text"
                        value={profileForm.name}
                        onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-500 mb-1 font-heading">Institution</label>
                      <input
                        type="text"
                        value={profileForm.institution}
                        onChange={(e) => setProfileForm({ ...profileForm, institution: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-500 mb-1 font-heading">Academic CGPA</label>
                      <input
                        type="text"
                        value={profileForm.cgpa}
                        onChange={(e) => setProfileForm({ ...profileForm, cgpa: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-500 mb-1 font-heading">Current Stage</label>
                      <input
                        type="text"
                        value={profileForm.stage}
                        onChange={(e) => setProfileForm({ ...profileForm, stage: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-500 mb-1 font-heading">Professional Headline</label>
                    <input
                      type="text"
                      value={profileForm.headline}
                      onChange={(e) => setProfileForm({ ...profileForm, headline: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white"
                    />
                  </div>
                </div>
              )}

              {/* TAB 2: TAKE U FORWARD & CODING */}
              {activeTab === 'coding' && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-blue-50/60 dark:bg-[#1C39BB]/10 border border-blue-200 dark:border-[#1C39BB]/30 flex items-center justify-between">
                    <div>
                      <span className="font-heading font-bold text-neutral-900 dark:text-white block">
                        Live Take U Forward Synchronization
                      </span>
                      <span className="text-[11px] text-neutral-600 dark:text-neutral-400">
                        Synchronizes automatically via /api/tuf.js directly from takeuforward.org/profile/sasikiran_24.
                      </span>
                    </div>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={tufForm.useManualOverride}
                        onChange={(e) => setTufForm({ ...tufForm, useManualOverride: e.target.checked })}
                        className="rounded text-[#1C39BB]"
                      />
                      <span className="font-heading font-semibold text-[11px]">Enable Manual Override</span>
                    </label>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-neutral-500 mb-1 font-heading">Problems Solved</label>
                      <input
                        type="number"
                        value={tufForm.problemsSolved}
                        onChange={(e) => setTufForm({ ...tufForm, problemsSolved: parseInt(e.target.value, 10) || 0 })}
                        disabled={!tufForm.useManualOverride}
                        className="w-full px-3 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-500 mb-1 font-heading">Global Rank</label>
                      <input
                        type="number"
                        value={tufForm.globalRank}
                        onChange={(e) => setTufForm({ ...tufForm, globalRank: parseInt(e.target.value, 10) || 0 })}
                        disabled={!tufForm.useManualOverride}
                        className="w-full px-3 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-500 mb-1 font-heading">Current Streak (Days)</label>
                      <input
                        type="number"
                        value={tufForm.currentStreak}
                        onChange={(e) => setTufForm({ ...tufForm, currentStreak: parseInt(e.target.value, 10) || 0 })}
                        disabled={!tufForm.useManualOverride}
                        className="w-full px-3 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-500 mb-1 font-heading">Peak Streak (Days)</label>
                      <input
                        type="number"
                        value={tufForm.highestStreak}
                        onChange={(e) => setTufForm({ ...tufForm, highestStreak: parseInt(e.target.value, 10) || 0 })}
                        disabled={!tufForm.useManualOverride}
                        className="w-full px-3 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-500 mb-1 font-heading">Contributions</label>
                      <input
                        type="number"
                        value={tufForm.contributions}
                        onChange={(e) => setTufForm({ ...tufForm, contributions: parseInt(e.target.value, 10) || 0 })}
                        disabled={!tufForm.useManualOverride}
                        className="w-full px-3 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-500 mb-1 font-heading">Active Days</label>
                      <input
                        type="number"
                        value={tufForm.activeDays}
                        onChange={(e) => setTufForm({ ...tufForm, activeDays: parseInt(e.target.value, 10) || 0 })}
                        disabled={!tufForm.useManualOverride}
                        className="w-full px-3 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white disabled:opacity-50"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: PROJECTS */}
              {activeTab === 'projects' && (
                <div className="space-y-4">
                  {projectLinks.map((p, idx) => (
                    <div key={p.id} className="p-4 rounded-2xl bg-neutral-50 dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-sm text-neutral-900 dark:text-white">
                          {p.title}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            const updated = [...projectLinks];
                            updated[idx].visible = !updated[idx].visible;
                            setProjectLinks(updated);
                          }}
                          className="flex items-center space-x-1 text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                        >
                          {p.visible ? <Eye className="w-3.5 h-3.5 text-emerald-500" /> : <EyeOff className="w-3.5 h-3.5 text-neutral-400" />}
                          <span>{p.visible ? 'Visible' : 'Hidden'}</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] text-neutral-400 mb-0.5">GitHub Repository URL</label>
                          <input
                            type="text"
                            value={p.githubUrl}
                            onChange={(e) => {
                              const updated = [...projectLinks];
                              updated[idx].githubUrl = e.target.value;
                              setProjectLinks(updated);
                            }}
                            className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white text-xs font-mono"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] text-neutral-400 mb-0.5">Live Demo Deployment URL</label>
                          <input
                            type="text"
                            value={p.liveDemoUrl}
                            onChange={(e) => {
                              const updated = [...projectLinks];
                              updated[idx].liveDemoUrl = e.target.value;
                              setProjectLinks(updated);
                            }}
                            placeholder="https://..."
                            className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white text-xs font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 4: CERTIFICATES */}
              {activeTab === 'certificates' && (
                <div className="space-y-3">
                  {certLinks.map((c, idx) => (
                    <div key={c.id} className="p-3 rounded-xl bg-neutral-50 dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="min-w-0">
                        <span className="font-heading font-semibold text-neutral-900 dark:text-white block truncate">
                          {c.title}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={c.verificationUrl}
                          onChange={(e) => {
                            const updated = [...certLinks];
                            updated[idx].verificationUrl = e.target.value;
                            setCertLinks(updated);
                          }}
                          placeholder="Verification URL..."
                          className="w-48 sm:w-64 px-2.5 py-1 rounded-lg bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-[11px] font-mono text-neutral-900 dark:text-white"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const updated = [...certLinks];
                            updated[idx].visible = !updated[idx].visible;
                            setCertLinks(updated);
                          }}
                          className="p-1.5 rounded-lg hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-500"
                        >
                          {c.visible ? <Eye className="w-4 h-4 text-emerald-500" /> : <EyeOff className="w-4 h-4 text-neutral-400" />}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 5: RESUME & CONTACT */}
              {activeTab === 'contact' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-neutral-500 mb-1 font-heading">Resume PDF Download Link</label>
                    <input
                      type="text"
                      value={resumeUrl}
                      onChange={(e) => setResumeUrl(e.target.value)}
                      placeholder="/assets/Sasikiran_Kakumani_Resume.pdf"
                      className="w-full px-3 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white font-mono text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-500 mb-1 font-heading">Recruiter Submission Destination Email</label>
                    <input
                      type="email"
                      value={profileForm.email}
                      onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white font-mono text-xs"
                    />
                  </div>
                </div>
              )}

              {/* TAB 6: BACKUP */}
              {activeTab === 'backup' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 space-y-2">
                    <span className="font-heading font-bold text-neutral-900 dark:text-white block">
                      Export / Import Portfolio Customization JSON
                    </span>
                    <p className="text-neutral-500 text-xs">
                      Export your customized configurations, URLs, and telemetry overrides as a portable JSON document to replicate across environments.
                    </p>
                    <div className="flex items-center space-x-3 pt-2">
                      <button
                        onClick={handleExportJson}
                        className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-neutral-200 dark:bg-white/10 hover:bg-neutral-300 dark:hover:bg-white/20 text-neutral-900 dark:text-white font-heading font-semibold text-xs transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Export JSON</span>
                      </button>

                      <button
                        onClick={handleResetDefaults}
                        className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs font-heading font-semibold transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Reset Defaults</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Footer Actions */}
            <div className="p-4 sm:px-6 border-t border-neutral-100 dark:border-white/10 flex items-center justify-between bg-neutral-50/60 dark:bg-white/[0.02]">
              <span className="text-[11px] text-neutral-400 font-mono">
                PIN: sasi2026 &bull; localStorage synced
              </span>

              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white text-xs font-heading font-medium"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={saveSettings}
                  className="inline-flex items-center space-x-1.5 px-5 py-2 rounded-xl bg-[#1C39BB] hover:bg-[#152c99] text-white font-heading font-semibold text-xs shadow-md transition-all active:scale-95"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

import React, { useState, useRef } from 'react';
import { RotateCw, ExternalLink, Terminal, Mail, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { profileData } from '../data/profileData';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export const BusinessCard3D: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt angles (max +/- 12 degrees)
    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 14;

    setRotateX(rotX);
    setRotateY(rotY);

    // Specular glare position in percentages
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos({ x: 50, y: 50 });
  };

  const toggleFlip = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsFlipped(prev => !prev);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center select-none py-2">
      {/* 3D Perspective Viewport */}
      <div
        className="w-full max-w-[460px] h-[360px] sm:h-[390px] relative cursor-pointer"
        style={{ perspective: '1200px' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => toggleFlip()}
      >
        {/* Tilting & Flipping Card Body */}
        <div
          ref={cardRef}
          className="w-full h-full relative duration-300 ease-out transition-transform"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY + (isFlipped ? 180 : 0)}deg)`,
          }}
        >
          {/* ==================== FRONT SIDE ==================== */}
          <div
            className="absolute inset-0 w-full h-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-2xl border border-[#1C39BB]/30 dark:border-white/15 bg-gradient-to-br from-[#0B132B] via-[#0E1B48] to-[#060A18] text-white"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            {/* Specular Glare Effect */}
            <div
              className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.25) 0%, rgba(28,57,187,0.15) 40%, transparent 75%)`,
              }}
            />

            {/* Microcircuit Background Grid Accent */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            />

            {/* Front Header */}
            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/15">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-neutral-300 uppercase">
                  AI & ML UNDERGRAD // TECH DOSSIER
                </span>
              </div>
              <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#1C39BB]/40 border border-[#1C39BB]/60 text-[10px] font-heading font-semibold text-blue-200">
                <Sparkles className="w-3 h-3 text-blue-300" />
                <span>Verified</span>
              </div>
            </div>

            {/* Profile Avatar & Identity */}
            <div className="relative z-10 flex items-center space-x-4 my-auto">
              {/* Monogram Icon */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-tr from-[#1C39BB] to-blue-500 p-[2px] shadow-lg shadow-[#1C39BB]/40">
                  <div className="w-full h-full bg-[#080E24] rounded-2xl flex items-center justify-center font-heading font-extrabold text-2xl text-white">
                    SK
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#0B132B] flex items-center justify-center" title="Active & Available">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
              </div>

              {/* Names & Taglines */}
              <div className="space-y-0.5 min-w-0">
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-tight truncate">
                  {profileData.name}
                </h3>
                <p className="text-xs sm:text-sm font-heading font-semibold text-blue-300 leading-snug">
                  B.Tech CSE (AI & ML) &bull; VVITU
                </p>
                <p className="text-[11px] text-neutral-300 font-sans line-clamp-2 leading-relaxed">
                  Building with <strong className="text-white">Data</strong>. Exploring <strong className="text-white">AI</strong>. Consistent DSA Problem Solver.
                </p>
              </div>
            </div>

            {/* Core Competencies Badges */}
            <div className="relative z-10 flex flex-wrap gap-1.5 my-1">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/10 border border-white/15 text-neutral-200">
                Data Analytics & SQL
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/10 border border-white/15 text-neutral-200">
                Python & Power BI
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-500/20 border border-blue-400/30 text-blue-200 font-medium">
                C++ & DSA
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/10 border border-white/15 text-neutral-200">
                Full-Stack
              </span>
            </div>

            {/* Quick Metrics Bar */}
            <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-white/15 text-center">
              <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10">
                <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-mono">Academic</span>
                <span className="text-sm sm:text-base font-heading font-extrabold text-white">7.5 CGPA</span>
              </div>
              <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10">
                <span className="text-[9px] uppercase tracking-wider text-blue-300 block font-mono">TUF Solved</span>
                <span className="text-sm sm:text-base font-heading font-extrabold text-blue-200">171 Qs</span>
              </div>
              <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10">
                <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-mono">Global Rank</span>
                <span className="text-sm sm:text-base font-heading font-extrabold text-white">#485</span>
              </div>
            </div>

            {/* Bottom Flip Hint Bar */}
            <div className="relative z-10 flex items-center justify-between pt-2.5 text-[10px] text-blue-300/90 font-sans">
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-blue-400" />
                <span>Verified Credentials & Code</span>
              </span>
              <button
                type="button"
                onClick={toggleFlip}
                className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-all"
                aria-label="Flip card for LinkedIn QR code"
              >
                <span>Flip Card</span>
                <RotateCw className="w-3 h-3 text-blue-300" />
              </button>
            </div>
          </div>

          {/* ==================== BACK SIDE ==================== */}
          <div
            className="absolute inset-0 w-full h-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-2xl border border-[#1C39BB]/40 dark:border-white/15 bg-gradient-to-br from-[#060A18] via-[#0D1533] to-[#0A1024] text-white"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            {/* Specular Glare on Back */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                background: `radial-gradient(circle at ${100 - glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.2) 0%, rgba(28,57,187,0.1) 40%, transparent 75%)`,
              }}
            />

            {/* Back Header */}
            <div className="relative z-10 flex items-center justify-between pb-2.5 border-b border-white/15">
              <span className="text-[10px] font-mono tracking-wider text-neutral-300 uppercase">
                DIRECT CONNECT // VERIFIED CHANNELS
              </span>
              <button
                type="button"
                onClick={toggleFlip}
                className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[10px] font-medium transition-all"
                aria-label="Flip to front"
              >
                <span>← Front</span>
              </button>
            </div>

            {/* QR Code and Quick Scan Section */}
            <div className="relative z-10 flex items-center justify-around py-2">
              {/* QR Code Container */}
              <div className="flex flex-col items-center space-y-1.5">
                <div className="p-2 rounded-2xl bg-white shadow-xl border-2 border-blue-500/30">
                  <img
                    src="/assets/linkedin-qr.svg"
                    alt="Sasikiran Kakumani LinkedIn QR Code"
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                  />
                </div>
                <span className="text-[10px] font-mono text-blue-200">
                  Scan for LinkedIn
                </span>
              </div>

              {/* Direct Links Column */}
              <div className="flex flex-col space-y-2 min-w-[170px]">
                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.06] hover:bg-[#1C39BB] border border-white/10 hover:border-blue-400 text-xs font-heading font-medium text-white transition-all shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-neutral-300" />
                </a>

                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.06] hover:bg-[#1C39BB] border border-white/10 hover:border-blue-400 text-xs font-heading font-medium text-white transition-all shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-neutral-300" />
                </a>

                <a
                  href={profileData.socialLinks.takeuforward}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.06] hover:bg-[#1C39BB] border border-white/10 hover:border-blue-400 text-xs font-heading font-medium text-white transition-all shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>TUF Profile</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-neutral-300" />
                </a>

                <a
                  href={`mailto:${profileData.contactEmail}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.06] hover:bg-[#1C39BB] border border-white/10 hover:border-blue-400 text-xs font-heading font-medium text-white transition-all shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-blue-300" />
                    <span>Email Me</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-neutral-300" />
                </a>
              </div>
            </div>

            {/* Back Footer Note */}
            <div className="relative z-10 pt-2 border-t border-white/15 flex items-center justify-between text-[10px] text-neutral-400 font-sans">
              <span className="truncate">Guntur, Andhra Pradesh &bull; India</span>
              <span className="text-blue-300 font-mono">sasikiran_24</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Helper Text */}
      <div className="mt-3 text-center">
        <button
          type="button"
          onClick={() => toggleFlip()}
          className="inline-flex items-center space-x-1.5 text-xs text-neutral-500 dark:text-neutral-400 hover:text-[#1C39BB] dark:hover:text-blue-400 font-sans transition-colors"
        >
          <RotateCw className="w-3 h-3 text-[#1C39BB] dark:text-blue-400 animate-spin-slow" />
          <span>Click card or drag to inspect 3D perspective</span>
        </button>
      </div>
    </div>
  );
};

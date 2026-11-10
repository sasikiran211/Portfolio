import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'skills', 'projects', 'achievements', 'certificates', 'education', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'achievements', label: 'ACHIEVEMENTS' },
    { id: 'certificates', label: 'CERTIFICATES' },
    { id: 'education', label: 'TIMELINE' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div
        className={`max-w-[1520px] mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0C0C0C]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.8)] py-3 px-6'
            : 'bg-[#0C0C0C]/60 backdrop-blur-md border border-white/5 py-4 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Monogram & Technical Status */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="group flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-black border border-white/20 flex items-center justify-center font-mono font-bold text-xs text-[#CCFF00] group-hover:border-[#CCFF00] group-hover:shadow-[0_0_15px_rgba(204,255,0,0.4)] transition-all">
              SK
            </div>
            <div className="hidden sm:block">
              <span className="font-sans text-sm font-bold tracking-tight text-[#EBEBEB] group-hover:text-white transition-colors block leading-tight">
                SASIKIRAN KAKUMANI
              </span>
              <span className="text-[10px] text-white/40 font-mono tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-beacon" />
                <span>DATA // AI PORTFOLIO</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Glass Pill) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-black/40 rounded-full px-3 py-1.5 border border-white/5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all relative ${
                    isActive
                      ? 'text-black font-bold bg-[#CCFF00] shadow-[0_0_15px_rgba(204,255,0,0.35)]'
                      : 'text-[#EBEBEB]/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Terminal / Live System Status Pill */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono text-[#EBEBEB]/70">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-beacon" />
              <span>SYS_READY // VVITU</span>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="inline-flex items-center space-x-1 px-4 py-1.5 rounded-full bg-[#CCFF00] text-black text-xs font-mono font-bold hover:bg-[#B5E600] hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] transition-all active:scale-95"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-[#EBEBEB] hover:text-[#CCFF00] hover:bg-white/5 transition-colors border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#CCFF00]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-[1520px] mx-auto rounded-3xl bg-[#0C0C0C]/95 backdrop-blur-2xl border border-white/15 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] animate-fadeIn">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono text-white/50">
            <span>[NAVIGATION_MATRIX]</span>
            <span className="flex items-center gap-1.5 text-[#CCFF00]">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-beacon" />
              ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-3 rounded-xl text-xs font-mono tracking-wider text-left transition-all ${
                    isActive
                      ? 'bg-[#CCFF00] text-black font-bold shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                      : 'text-[#EBEBEB]/80 hover:bg-white/5 hover:text-white border border-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="w-full block text-center py-3 px-4 rounded-xl bg-[#CCFF00] text-black font-mono font-bold text-xs hover:bg-[#B5E600]"
            >
              INITIATE CONTACT // OPEN TO INTERNSHIPS
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

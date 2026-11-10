import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'hero',
        'about',
        'skills',
        'projects',
        'achievements',
        'certificates',
        'timeline',
        'resume',
        'contact',
      ];
      const scrollPosition = window.scrollY + 120;

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
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={`max-w-[1520px] mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-[#080808]/90 backdrop-blur-xl border border-neutral-200/80 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.8)] py-2.5 px-4 sm:px-6'
            : 'bg-white/70 dark:bg-[#080808]/60 backdrop-blur-md border border-neutral-200/50 dark:border-white/5 py-3.5 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Monogram & Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="group flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-[#1C39BB] flex items-center justify-center font-heading font-extrabold text-xs text-white shadow-sm group-hover:scale-105 transition-transform">
              SK
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-sm font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-[#1C39BB] dark:group-hover:text-blue-400 transition-colors block leading-tight">
                Sasikiran Kakumani
              </span>
              <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-sans tracking-tight flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>B.Tech CSE (AI & ML) &bull; VVITU</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-neutral-100/80 dark:bg-white/[0.04] rounded-full p-1 border border-neutral-200/60 dark:border-white/5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-medium tracking-wide transition-all ${
                    isActive
                      ? 'bg-[#1C39BB] text-white shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-white/70 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Controls: Theme Switcher & Contact Button */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-200 hover:text-[#1C39BB] dark:hover:text-blue-400 hover:border-[#1C39BB]/40 transition-all focus:outline-none focus:ring-2 focus:ring-[#1C39BB]/30"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-[#1C39BB] transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-[#1C39BB] text-white text-xs font-heading font-semibold hover:bg-[#152c99] transition-all shadow-sm active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-full lg:hidden text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors border border-neutral-200 dark:border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#1C39BB]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-[1520px] mx-auto rounded-3xl bg-white/95 dark:bg-[#080808]/95 backdrop-blur-2xl border border-neutral-200 dark:border-white/10 p-5 shadow-2xl animate-fadeIn">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200/80 dark:border-white/10 text-xs font-sans text-neutral-500 dark:text-neutral-400">
            <span>Navigation Menu</span>
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-[11px] font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to Internships
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-heading font-medium tracking-wide text-left transition-all ${
                    isActive
                      ? 'bg-[#1C39BB] text-white font-semibold shadow-sm'
                      : 'text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/5 border border-neutral-200/50 dark:border-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-200/80 dark:border-white/10 flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="flex-1 text-center py-2.5 px-4 rounded-xl bg-[#1C39BB] text-white font-heading font-semibold text-xs hover:bg-[#152c99]"
            >
              Contact & Inquiry
            </a>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2.5 rounded-xl bg-neutral-100 dark:bg-white/[0.08] text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-white/10"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#1C39BB]" />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

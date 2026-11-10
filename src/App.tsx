import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CodingStats } from './components/CodingStats';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <CustomCursor />
      <div className="min-h-screen bg-neutral-100 dark:bg-[#040404] text-neutral-900 dark:text-[#EBEBEB] selection:bg-[#1C39BB] selection:text-white py-0 sm:py-6 lg:py-8 px-0 sm:px-4 lg:px-6 flex justify-center items-center transition-colors duration-200">
        
        {/* Main Floating Shell Container */}
        <div className="w-full max-w-[1600px] bg-white dark:bg-[#080808] rounded-none sm:rounded-[2rem] lg:rounded-[2.5rem] border-0 sm:border border-neutral-200/80 dark:border-white/10 shadow-xl dark:shadow-[0_30px_100px_rgba(0,0,0,0.95)] overflow-hidden relative flex flex-col">
          
          {/* Subtle Top Persian Blue Ambient Glow */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#1C39BB]/40 to-transparent pointer-events-none z-20" />

          {/* Sticky Navigation with Theme Switcher */}
          <Navbar />

          {/* 8 Core Layout Sections in Exact Order */}
          <main className="flex-grow relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <CodingStats />
            <Certifications />
            <Education />
            <Resume />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

        </div>

      </div>
    </ThemeProvider>
  );
};

export default App;

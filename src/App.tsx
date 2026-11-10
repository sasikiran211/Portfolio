import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CodingStats } from './components/CodingStats';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-[#EBEBEB] selection:bg-[#CCFF00] selection:text-black py-0 sm:py-6 lg:py-10 px-0 sm:px-4 lg:px-8 flex justify-center items-center">
      
      {/* Premium Floating Shell Architecture */}
      <div className="w-full max-w-[1600px] bg-[#0C0C0C] rounded-none sm:rounded-[2rem] lg:rounded-[2.5rem] border-0 sm:border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.95)] overflow-hidden relative flex flex-col">
        
        {/* Subtle 60px Technical Grid Background */}
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#CCFF00]/40 to-transparent pointer-events-none z-20" />

        {/* Sticky Glassmorphic Navigation */}
        <Navbar />

        {/* Core Layout Content */}
        <main className="flex-grow relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <CodingStats />
          <Certifications />
          <Education />
          <Contact />
        </main>

        {/* Technical Obsidian Footer */}
        <Footer />

      </div>

    </div>
  );
};

export default App;

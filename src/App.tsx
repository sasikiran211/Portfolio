import React from 'react';
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

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream text-ocean selection:bg-beige selection:text-ocean flex flex-col font-sans">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-grow">
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

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
};

export default App;

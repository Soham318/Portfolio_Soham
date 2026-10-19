import { useState, useMemo, useCallback } from 'react';
import { Navbar } from './components/layout/Navbar';
import { NAV_LINKS } from './data/navLinks';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { BackToTop } from './components/layout/BackToTop';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/common/CustomCursor';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Timeline } from './components/sections/Timeline';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useScrollProgress } from './hooks/useScrollProgress';
import './App.css';
import './components/layout/layout.css';
import './components/common/common.css';
import './components/sections/sections.css';

export default function App() {
  const sectionIds = useMemo(() => NAV_LINKS.map((link) => link.id), []);
  const activeSection = useScrollSpy(sectionIds, 'home');
  const { isScrolledPast } = useScrollProgress(80);
  const [activeTechFilter, setActiveTechFilter] = useState(null);

  const handleSelectSkillForProjects = useCallback((skillName) => {
    setActiveTechFilter(skillName);
  }, []);

  const handleClearTechFilter = useCallback(() => {
    setActiveTechFilter(null);
  }, []);

  return (
    <div className="app-layout">
      {/* 1. Interactive Desktop Custom Cursor (auto-disabled on touch & reduced-motion) */}
      <CustomCursor />

      {/* 2. Accessibility: Skip to Main Content Link (WCAG 2.4.1) */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* 3. System Status: Reading Depth Progress Indicator */}
      <ScrollProgress />

      {/* 4. Persistent Navigation Shell with 4-Theme Picker */}
      <Navbar activeSection={activeSection} isScrolled={isScrolledPast} />

      {/* 5. Main Content */}
      <main id="main-content" className="main-content" tabIndex={-1}>
        
        {/* --- SECTION 1: HERO --- */}
        <Hero />

        {/* --- SECTION 2: EDITORIAL PROFILE (ABOUT) --- */}
        <About />

        {/* --- SECTION 3: ANIMATED EDUCATION & LEARNING TIMELINE --- */}
        <Timeline />

        {/* --- SECTION 4: CONSOLIDATED TECHNICAL SKILLS --- */}
        <Skills onSelectSkillForProjects={handleSelectSkillForProjects} />

        {/* --- SECTION 5: PROJECTS SHOWCASE --- */}
        <Projects
          activeTechFilter={activeTechFilter}
          onClearTechFilter={handleClearTechFilter}
        />

        {/* --- SECTION 6: NEON CONTACT FORM & DIRECT CHANNELS --- */}
        <Contact />

      </main>

      {/* 6. Persistent Footer */}
      <Footer />

      {/* 7. User Control: Back to Top */}
      <BackToTop />
    </div>
  );
}

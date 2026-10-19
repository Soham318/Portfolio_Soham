import { useMemo } from 'react';
import { Navbar } from './components/layout/Navbar';
import { NAV_LINKS } from './data/navLinks';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { BackToTop } from './components/layout/BackToTop';
import { Footer } from './components/layout/Footer';
import { Button } from './components/common/Button';
import { GithubIcon } from './components/common/GithubIcon';
import { SectionHeading } from './components/common/SectionHeading';
import {
  OpportunityHubVisual,
  TransportationRoutingVisual,
  PortfolioVisual
} from './components/common/ProjectVisuals';
import { TiltCard } from './components/common/TiltCard';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useScrollProgress } from './hooks/useScrollProgress';
import { profileData } from './data/profileData';
import { ArrowUpRight, ArrowDown, AlertCircle, Users, CheckCircle2, Clock } from 'lucide-react';
import './App.css';
import './components/layout/layout.css';
import './components/common/common.css';
import './components/sections/sections.css';

export default function App() {
  const sectionIds = useMemo(() => NAV_LINKS.map((link) => link.id), []);
  const activeSection = useScrollSpy(sectionIds, 'home');
  const { isScrolledPast } = useScrollProgress(80);

  return (
    <div className="app-layout">
      {/* 1. Accessibility: Skip to Main Content Link (WCAG 2.4.1) */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* 2. System Status: Reading Depth Progress Indicator */}
      <ScrollProgress />

      {/* 3. Persistent Navigation Shell with Theme Switcher */}
      <Navbar activeSection={activeSection} isScrolled={isScrolledPast} />

      {/* 4. Main Content */}
      <main id="main-content" className="main-content" tabIndex={-1}>
        
        {/* --- SECTION 1: HERO --- */}
        <Hero />

        {/* --- SECTION 2: ABOUT ME --- */}
        <About />

        {/* --- SECTION 3: EDUCATION --- */}
        <Education />

        {/* --- SECTION 4: TECHNICAL SKILLS --- */}
        <Skills />

        {/* --- SECTION 5: PROJECTS --- */}
        <section id="projects" className="section-wrapper" aria-labelledby="projects-title">
          <div className="container">
            <SectionHeading
              id="projects-title"
              eyebrow="04 // PORTFOLIO"
              title="Featured Projects"
              subtitle="Software engineering projects, collaborative systems, and active technical implementations."
            />
            <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
              {profileData.projects.map((proj) => (
                <TiltCard key={proj.id} className="scaffold-card" style={{ display: 'flex', flexDirection: 'column' }}>
                  {/* Project-Specific Visual Representation */}
                  {proj.id === 'opportunity-hub' && <OpportunityHubVisual />}
                  {proj.id === 'ot-project' && <TransportationRoutingVisual />}
                  {proj.id === 'portfolio-project' && <PortfolioVisual />}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span className="scaffold-tag" style={{ color: 'var(--accent-blue)' }}>{proj.category}</span>
                    <span className="scaffold-tag" style={{ color: proj.isCollaborative ? 'var(--accent-teal)' : 'var(--text-accent)' }}>
                      {proj.status}
                    </span>
                  </div>

                  <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: '0.5rem' }}>{proj.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                    {proj.summary}
                  </p>

                  {/* Clearly Labeled Implemented Features */}
                  {proj.featuresImplemented && (
                    <div style={{ marginBottom: '1rem', fontSize: 'var(--text-xs)' }}>
                      <strong style={{ color: 'var(--text-primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <CheckCircle2 size={13} style={{ color: 'var(--color-success)' }} aria-hidden="true" />
                        Implemented Features:
                      </strong>
                      <ul style={{ paddingLeft: '1.25rem', marginTop: '0.25rem', color: 'var(--text-secondary)' }}>
                        {proj.featuresImplemented.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Clearly Labeled Planned / In-Progress Features */}
                  {proj.plannedFeatures && (
                    <div style={{ marginBottom: '1rem', fontSize: 'var(--text-xs)', background: 'var(--bg-surface-elevated)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
                      <span style={{ color: 'var(--accent-blue)', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 'var(--weight-semibold)' }}>
                        <Clock size={12} aria-hidden="true" />
                        Planned Feature (In Progress):
                      </span>
                      <p style={{ margin: 0, marginTop: '2px', color: 'var(--text-secondary)' }}>
                        {proj.plannedFeatures[0]}
                      </p>
                    </div>
                  )}

                  {/* Collaborative Project Demarcation */}
                  {proj.collaborationNotice && (
                    <div style={{ marginBottom: '1rem', fontSize: 'var(--text-xs)', background: 'var(--bg-surface-elevated)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
                      <span style={{ color: 'var(--accent-teal)', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 'var(--weight-semibold)' }}>
                        <Users size={12} aria-hidden="true" />
                        {proj.collaborationNotice}
                      </span>
                      <p style={{ margin: 0, marginTop: '2px', fontStyle: 'italic', color: 'var(--text-muted)' }}>
                        Specific module contributions: Currently being documented.
                      </p>
                    </div>
                  )}

                  {proj.note && (
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '1rem' }}>
                      {proj.note}
                    </p>
                  )}

                  <div className="scaffold-tag-list" style={{ marginTop: 'auto', marginBottom: '1.25rem' }}>
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="scaffold-tag">{tech}</span>
                    ))}
                  </div>

                  {proj.repoUrl && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <a
                        href={proj.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline btn-sm"
                        style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                      >
                        <GithubIcon size={14} />
                        <span>View Repository</span>
                        <ArrowUpRight size={12} aria-hidden="true" />
                      </a>
                    </div>
                  )}
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 6: ACADEMIC & COLLABORATIVE EXPERIENCE --- */}
        <section id="experience" className="section-wrapper" aria-labelledby="experience-title">
          <div className="container">
            <SectionHeading
              id="experience-title"
              eyebrow="05 // EXPERIENCE"
              title="Academic & Collaborative Experience"
              subtitle="Coursework projects and collaborative software modeling at VJTI."
            />
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {profileData.experience.map((exp) => (
                <div key={exp.id} className="scaffold-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: 'var(--text-lg)' }}>{exp.role}</h3>
                    <span className="scaffold-tag">{exp.type}</span>
                  </div>
                  <p style={{ color: 'var(--accent-violet)', fontWeight: 'var(--weight-medium)', marginBottom: '0.5rem' }}>
                    {exp.organization}
                  </p>
                  <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} style={{ marginBottom: '0.25rem' }}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 7: RESUME --- */}
        <section id="resume" className="section-wrapper" aria-labelledby="resume-title">
          <div className="container">
            <SectionHeading
              id="resume-title"
              eyebrow="06 // CURRICULUM VITAE"
              title="Resume & Professional Summary"
              subtitle="Summary of verified academic and technical qualifications."
            />
            <div className="scaffold-card" style={{ maxWidth: '800px' }}>
              <div className="placeholder-notice" style={{ width: '100%', marginBottom: '1.25rem' }}>
                <AlertCircle size={16} aria-hidden="true" />
                <span>Resume document is currently being updated with verified VJTI coursework and project details.</span>
              </div>

              <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: '0.75rem' }}>Verified Profile Summary</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: '1.75rem' }}>
                {profileData.resume.summaryHighlights.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                ))}
              </ul>

              {/* Working, authentic actions instead of a disabled or broken button */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="#projects" variant="primary" icon={ArrowDown} iconPosition="right">
                  Explore Verified Projects
                </Button>
                <Button
                  href="https://github.com/Soham318"
                  target="_blank"
                  rel="noreferrer"
                  variant="outline"
                  icon={GithubIcon}
                >
                  Visit GitHub Profile
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 8: CONTACT --- */}
        <section id="contact" className="section-wrapper" aria-labelledby="contact-title">
          <div className="container">
            <SectionHeading
              id="contact-title"
              eyebrow="07 // GET IN TOUCH"
              title="Contact & Connections"
              subtitle="Confirmed channels for software engineering internships and academic inquiries."
            />
            <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <div className="scaffold-card">
                <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: '1rem' }}>Confirmed Profile Channels</h3>
                
                <p style={{ fontSize: 'var(--text-sm)', marginBottom: '0.75rem' }}>
                  <strong>GitHub:</strong>{' '}
                  <a
                    href={profileData.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: 'var(--accent-blue)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    <span>github.com/Soham318</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </p>

                <p style={{ fontSize: 'var(--text-sm)', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                  <strong>Objective:</strong> {profileData.contact.availability}
                </p>

                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)' }}>
                  Direct communication can be initiated via GitHub profile and repository discussions. Direct email and professional networking channels will be published once verified.
                </p>
              </div>

              <div className="scaffold-card">
                <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: '0.75rem' }}>Future Contact Channels</h3>
                <p style={{ fontSize: 'var(--text-sm)', marginBottom: '1rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                  An accessible interactive contact form and verified email endpoint are planned for Phase 5 upon address verification. No unverified mail handlers are active at this stage.
                </p>
                <div className="scaffold-tag-list">
                  <span className="scaffold-tag">Planned: Verified Form</span>
                  <span className="scaffold-tag">Planned: Direct Email Channel</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 5. Persistent Footer */}
      <Footer />

      {/* 6. User Control: Back to Top */}
      <BackToTop />
    </div>
  );
}

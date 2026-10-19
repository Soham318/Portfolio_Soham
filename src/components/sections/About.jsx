import { Laptop, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { profileData } from '../../data/profileData';
import aboutWorkspaceImg from '../../assets/images/about_workspace.jpg';

/**
 * About Section
 * Professional overview displaying verified VJTI academic profile, technical focus,
 * and an authentic developer workstation visual supporting element.
 */
export function About() {
  const { personal, education } = profileData;

  return (
    <section id="about" className="section-wrapper" aria-labelledby="about-heading">
      <div className="container">
        <SectionHeading
          id="about-heading"
          eyebrow="01 // BACKGROUND"
          title="About Me"
          subtitle="Academic orientation, engineering interests, and career objective."
        />

        <div className="about-grid">
          {/* Left Column: Narrative Card & Supporting Workspace Visual */}
          <div className="about-left-col">
            <div className="about-main-card">
              <p className="about-paragraph">{personal.bio}</p>
              <p className="about-paragraph">
                Currently focused on building full-stack web applications and backend services with technologies
                such as Node.js, Express, MongoDB, and SQLite, while exploring machine learning frameworks and
                advancing my frontend skills with React.
              </p>
            </div>

            {/* Supporting Developer Environment Visual Card */}
            <div className="about-workspace-card">
              <div className="about-workspace-image-wrapper">
                <img
                  src={aboutWorkspaceImg}
                  alt="Software development workstation setup with dual coding monitors and ambient violet lighting"
                  className="about-workspace-img"
                  loading="lazy"
                  decoding="async"
                  width="1000"
                  height="563"
                />
                <div className="about-workspace-overlay" aria-hidden="true" />
                <div className="about-workspace-caption">
                  <Laptop size={13} aria-hidden="true" />
                  <span>Development Environment • Terminal & Code Workflows</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Snapshot Card & Engineering Pillars */}
          <div className="about-right-col">
            <div className="about-side-card">
              <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                Profile Snapshot
              </h3>

              <ul className="about-info-list">
                <li className="about-info-item">
                  <span className="about-info-label">Degree</span>
                  <span className="about-info-value">{education.degree}</span>
                </li>
                <li className="about-info-item">
                  <span className="about-info-label">Institution</span>
                  <span className="about-info-value">{education.institution}</span>
                </li>
                <li className="about-info-item">
                  <span className="about-info-label">Primary Goal</span>
                  <span className="about-info-value">{personal.goal}</span>
                </li>
                <li className="about-info-item">
                  <span className="about-info-label">Verified Profile</span>
                  <a
                    href="https://github.com/Soham318"
                    target="_blank"
                    rel="noreferrer"
                    className="about-info-value"
                    style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}
                  >
                    github.com/Soham318
                  </a>
                </li>
              </ul>
            </div>

            {/* Supporting Focus Highlight */}
            <div className="about-focus-card">
              <div className="about-focus-header">
                <Sparkles size={16} style={{ color: 'var(--accent-teal)' }} aria-hidden="true" />
                <h4 style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)', margin: 0 }}>
                  Academic & Technical Discipline
                </h4>
              </div>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0, lineHeight: 'var(--leading-relaxed)' }}>
                Applying computer science theory—from data structures and algorithm analysis to database normalization and operating systems fundamentals—into functional, maintainable code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

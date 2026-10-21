import { Laptop, Sparkles, GraduationCap, Award, Code2, Users } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { profileData } from '../../data/profileData';
import aboutWorkspaceImg from '../../assets/images/about_workspace.jpg';

/**
 * About Section
 * Editorial profile presenting Soham's engineering background, VJTI coursework,
 * problem-solving philosophy, and verified developer environment.
 */
export function About() {
  const { personal } = profileData;

  return (
    <section id="about" className="section-wrapper" aria-labelledby="about-heading">
      <div className="container">
        <SectionHeading
          id="about-heading"
          eyebrow="01 // EDITORIAL PROFILE"
          title="Curiosity Grounded in Engineering Fundamentals"
          subtitle="Transforming conceptual logic into reliable software through rigorous problem-solving, clean architecture, and continuous learning."
        />

        <div className="about-editorial-grid">
          {/* Left Column: Editorial Narrative & Blockquote */}
          <div className="about-narrative-col">
            {/* Editorial Blockquote (Inspired by Reference Screenshot 2) */}
            <blockquote className="editorial-quote-box reveal-on-scroll">
              <span className="quote-mark" aria-hidden="true">&ldquo;</span>
              <p className="quote-text">{personal.editorialQuote}</p>
            </blockquote>

            <div className="about-narrative-card reveal-on-scroll reveal-stagger-1">
              <p className="about-paragraph">
                I am <strong>Soham Umesh Chavan</strong>, a Computer Engineering undergraduate at{' '}
                <strong>Veermata Jijabai Technological Institute (VJTI)</strong>, Mumbai. I enjoy building
                practical software, exploring <strong>full-stack web architectures</strong>, and studying
                algorithms to understand how computational models solve real-world logistical and operational challenges.
              </p>
              <p className="about-paragraph">
                From developing <strong>OpportunityHub</strong>—a full-stack contest aggregation platform built on the MERN stack—to
                collaborating on <strong>operations research transportation routing algorithms</strong> using Python, I prioritize
                genuine code quality, maintainable patterns, and clear separation of concerns.
              </p>
              <p className="about-paragraph">
                Beyond independent development, I participated in the <strong>Agastya Foundation mentorship program</strong>{' '}
                associated with the <strong>JPMorgan Chase</strong> initiative, and actively sharpen my algorithmic thinking
                with over <strong>350+ problems solved</strong> across LeetCode and GeeksforGeeks.
              </p>
            </div>

            {/* Developer Workstation Setup Visual */}
            <div className="about-workspace-card reveal-on-scroll reveal-stagger-2">
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
                  <span>Development Environment • Terminal, Git & VS Code Workflows</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Snapshot Metric Cards */}
          <div className="about-metrics-col">
            {/* Degree Card */}
            <div className="snapshot-stat-card reveal-on-scroll">
              <div className="snapshot-stat-top">
                <GraduationCap size={16} className="snapshot-stat-icon" aria-hidden="true" />
                <span className="scaffold-tag">Degree & VJTI</span>
              </div>
              <h3 className="snapshot-stat-value">B.Tech Comp Eng</h3>
              <p className="snapshot-stat-desc">VJTI Mumbai • Minor in Cybersecurity</p>
            </div>

            {/* Academic Rank Card */}
            <div className="snapshot-stat-card reveal-on-scroll reveal-stagger-1">
              <div className="snapshot-stat-top">
                <Award size={16} className="snapshot-stat-icon" aria-hidden="true" />
                <span className="scaffold-tag">State Rank</span>
              </div>
              <h3 className="snapshot-stat-value">Rank 450</h3>
              <p className="snapshot-stat-desc">MHT-CET: 99.80 %ile • JEE Main: 98.50 %ile</p>
            </div>

            {/* CP Solved Card */}
            <div className="snapshot-stat-card reveal-on-scroll reveal-stagger-2">
              <div className="snapshot-stat-top">
                <Code2 size={16} className="snapshot-stat-icon" aria-hidden="true" />
                <span className="scaffold-tag">DSA Solving</span>
              </div>
              <h3 className="snapshot-stat-value">350+ Solved</h3>
              <p className="snapshot-stat-desc">LeetCode & GeeksforGeeks practice</p>
            </div>

            {/* Mentorship Card */}
            <div className="snapshot-stat-card reveal-on-scroll reveal-stagger-3">
              <div className="snapshot-stat-top">
                <Users size={16} className="snapshot-stat-icon" aria-hidden="true" />
                <span className="scaffold-tag">Mentorship</span>
              </div>
              <h3 className="snapshot-stat-value">Agastya Program</h3>
              <p className="snapshot-stat-desc">Associated with JPMorgan CSR Initiative</p>
            </div>

            {/* Core CS Discipline */}
            <div className="about-focus-card reveal-on-scroll reveal-stagger-4">
              <div className="about-focus-header">
                <Sparkles size={16} style={{ color: 'var(--accent-teal)' }} aria-hidden="true" />
                <h4 style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)', margin: 0 }}>
                  Engineering Rigor
                </h4>
              </div>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0, lineHeight: 'var(--leading-relaxed)' }}>
                Grounding practical software implementations in foundational computer engineering principles:
                data structure optimization, algorithm complexity analysis, database normalization, and robust API contracts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

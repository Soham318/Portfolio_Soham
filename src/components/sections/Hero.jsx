import { useState, useCallback } from 'react';
import { ArrowDown, Code2, Award, Terminal, ArrowUpRight, GraduationCap, ShieldCheck, ExternalLink } from 'lucide-react';
import { Button } from '../common/Button';
import { GithubIcon } from '../common/GithubIcon';
import { profileData } from '../../data/profileData';
import heroAuroraImg from '../../assets/images/hero_aurora_wave.jpg';

/**
 * Hero Section
 * Primary introduction for recruiters and engineering evaluators.
 * Upgraded with large editorial typography, VJTI Computer Engineering & Cybersecurity Minor,
 * ambient Midnight Aurora lighting, and direct LinkedIn and GitHub links.
 */
export function Hero() {
  const { personal, education } = profileData;
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  // Responsive desktop cursor spotlight tracking
  const handlePointerMove = useCallback((e) => {
    if (e.pointerType === 'touch') return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setSpotlight({
      x: x.toFixed(1),
      y: y.toFixed(1),
      opacity: 1
    });
  }, []);

  const handlePointerLeave = useCallback(() => {
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <section
      id="home"
      className="hero-section"
      aria-labelledby="hero-name"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        '--hero-spotlight-x': `${spotlight.x}%`,
        '--hero-spotlight-y': `${spotlight.y}%`,
        '--hero-spotlight-opacity': spotlight.opacity
      }}
    >
      {/* 1. Luminous Aurora Background Wave Image Layer */}
      <div className="hero-aurora-image-wrap" aria-hidden="true">
        <img
          src={heroAuroraImg}
          alt=""
          className="hero-aurora-image"
          loading="eager"
          decoding="async"
          width="1600"
          height="900"
        />
        <div className="hero-aurora-overlay" />
      </div>

      {/* 2. Atmospheric Aurora Ambient Gradient Mesh */}
      <div className="hero-aurora-backdrop" aria-hidden="true" />

      {/* 3. Fine Engineering Grid Texture */}
      <div className="hero-grid-texture" aria-hidden="true" />

      {/* 4. Interactive Desktop Cursor Spotlight */}
      <div className="hero-cursor-spotlight" aria-hidden="true" />

      <div className="container">
        {/* Editorial Sub-Header Banner */}
        <div className="hero-editorial-topbar" aria-hidden="true">
          <span className="editorial-pill">ENGINEER • BUILDER</span>
          <span className="editorial-separator" />
          <span className="editorial-pill">BASED IN INDIA</span>
        </div>

        <div className="hero-grid">
          {/* Left Column: Headline and Call to Actions */}
          <div className="hero-content">
            {/* Recruiter Status Pill */}
            <div className="status-pill">
              <span className="status-dot" aria-hidden="true"></span>
              <span>VJTI Undergraduate • Seeking Software Engineering Internships</span>
            </div>

            <p className="hero-greeting">Portfolio & Technical Showcase</p>

            <h1 id="hero-name" className="hero-title">
              Hi, I'm <span className="hero-title-gradient">{personal.name}</span>
            </h1>

            <p className="hero-subtitle">
              {personal.headline}
            </p>

            <p className="hero-description">
              {personal.bio}
            </p>

            {/* Action Buttons: Explore Projects, LinkedIn Profile & GitHub */}
            <div className="hero-actions">
              <Button href="#projects" variant="primary" icon={ArrowDown} iconPosition="right">
                Explore Projects
              </Button>
              <Button
                href="https://www.linkedin.com/in/soham-chavan-1a8339348/"
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                icon={ExternalLink}
              >
                LinkedIn Profile
              </Button>
              <Button
                href="https://github.com/Soham318"
                target="_blank"
                rel="noreferrer"
                variant="outline"
                icon={GithubIcon}
              >
                GitHub Codebases
              </Button>
            </div>

            {/* Verified Academic & Competitive Metrics */}
            <div className="hero-metrics">
              <div className="hero-metric-item">
                <span className="hero-metric-value">VJTI</span>
                <span className="hero-metric-label">B.Tech Comp Eng (Minor: Cybersecurity)</span>
              </div>
              <div className="hero-metric-item">
                <span className="hero-metric-value">Rank 450</span>
                <span className="hero-metric-label">MHT-CET (99.80 %ile)</span>
              </div>
              <div className="hero-metric-item">
                <span className="hero-metric-value">350+</span>
                <span className="hero-metric-label">DSA Solved (LeetCode & GFG)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Editorial Identity Card */}
          <div className="hero-visual-container">
            <div className="editorial-profile-frame">
              {/* Neon corner bracket accents */}
              <div className="corner-bracket corner-tl" aria-hidden="true" />
              <div className="corner-bracket corner-tr" aria-hidden="true" />
              <div className="corner-bracket corner-bl" aria-hidden="true" />
              <div className="corner-bracket corner-br" aria-hidden="true" />

              <div className="editorial-avatar-monogram" aria-hidden="true">
                <span className="monogram-glow" />
                <span className="monogram-initials">{personal.avatarPlaceholder.initials}</span>
              </div>

              <div className="editorial-card-body">
                <div className="editorial-identity-header">
                  <div>
                    <h2 className="editorial-name">{personal.name}</h2>
                    <p className="editorial-degree">VJTI Mumbai • Computer Engineering</p>
                  </div>
                  <span className="editorial-verified-badge">
                    <span className="verified-pulse" aria-hidden="true" />
                    <span>Verified</span>
                  </span>
                </div>

                <div className="editorial-stats-list">
                  <div className="editorial-stat-item">
                    <span className="stat-label">
                      <GraduationCap size={13} aria-hidden="true" />
                      <span>Program</span>
                    </span>
                    <span className="stat-val">{education.current.shortName}</span>
                  </div>

                  <div className="editorial-stat-item">
                    <span className="stat-label">
                      <ShieldCheck size={13} aria-hidden="true" />
                      <span>Academic Minor</span>
                    </span>
                    <span className="stat-val" style={{ color: 'var(--accent-teal)' }}>Cybersecurity</span>
                  </div>

                  <div className="editorial-stat-item">
                    <span className="stat-label">
                      <Award size={13} aria-hidden="true" />
                      <span>CET Merit</span>
                    </span>
                    <span className="stat-val">99.80 %ile (Rank 450)</span>
                  </div>

                  <div className="editorial-stat-item">
                    <span className="stat-label">
                      <Code2 size={13} aria-hidden="true" />
                      <span>DSA Problems</span>
                    </span>
                    <span className="stat-val">350+ Solved</span>
                  </div>

                  <div className="editorial-stat-item">
                    <span className="stat-label">
                      <ExternalLink size={13} aria-hidden="true" />
                      <span>LinkedIn</span>
                    </span>
                    <a
                      href="https://www.linkedin.com/in/soham-chavan-1a8339348/"
                      target="_blank"
                      rel="noreferrer"
                      className="stat-val stat-link"
                    >
                      <span>soham-chavan</span>
                      <ArrowUpRight size={11} aria-hidden="true" />
                    </a>
                  </div>

                  <div className="editorial-stat-item">
                    <span className="stat-label">
                      <Terminal size={13} aria-hidden="true" />
                      <span>GitHub</span>
                    </span>
                    <a
                      href="https://github.com/Soham318"
                      target="_blank"
                      rel="noreferrer"
                      className="stat-val stat-link"
                    >
                      <span>@Soham318</span>
                      <ArrowUpRight size={11} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

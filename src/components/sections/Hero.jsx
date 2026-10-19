import { useState, useCallback } from 'react';
import { ArrowDown, FileText, Send, GraduationCap, Code } from 'lucide-react';
import { Button } from '../common/Button';
import { GithubIcon } from '../common/GithubIcon';
import { profileData } from '../../data/profileData';
import heroAuroraImg from '../../assets/images/hero_aurora_wave.jpg';

/**
 * Hero Section
 * Primary introduction for recruiters, internship coordinators, and technical peers.
 * Enhanced with luminous fluid aurora wave artwork, engineering grid overlay,
 * and responsive cursor spotlight lighting.
 */
export function Hero() {
  const { personal } = profileData;
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
        <div className="hero-grid">
          {/* Left Column: Headline and Call to Actions */}
          <div className="hero-content">
            {/* Recruiter Status Pill */}
            <div className="status-pill">
              <span className="status-dot" aria-hidden="true"></span>
              <span>VJTI Undergraduate • Seeking Internships & Opportunities</span>
            </div>

            <p className="hero-greeting">Welcome to my profile</p>

            <h1 id="hero-name" className="hero-title">
              Hi, I'm <span className="hero-title-gradient">{personal.name}</span>
            </h1>

            <p className="hero-subtitle">
              {personal.headline}
            </p>

            <p className="hero-description">
              {personal.bio}
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <Button href="#projects" variant="primary" icon={ArrowDown} iconPosition="right">
                Explore Projects
              </Button>
              <Button href="#resume" variant="secondary" icon={FileText}>
                Resume Status
              </Button>
              <Button href="#contact" variant="outline" icon={Send}>
                Contact & GitHub
              </Button>
            </div>

            {/* Quick Overview Highlights */}
            <div className="hero-metrics">
              <div className="hero-metric-item">
                <span className="hero-metric-value">VJTI</span>
                <span className="hero-metric-label">Institution</span>
              </div>
              <div className="hero-metric-item">
                <span className="hero-metric-value">B.Tech</span>
                <span className="hero-metric-label">Computer Engineering</span>
              </div>
              <div className="hero-metric-item">
                <span className="hero-metric-value">Backend & Web</span>
                <span className="hero-metric-label">Primary Interest</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Profile Card */}
          <div className="hero-visual-container">
            <div className="hero-avatar-card">
              <div className="hero-avatar-header">
                <div className="hero-avatar-icon" aria-hidden="true">
                  {personal.avatarPlaceholder.initials}
                </div>
                <div className="hero-avatar-meta">
                  <span className="hero-avatar-name">{personal.name}</span>
                  <span className="hero-avatar-role">Undergraduate Engineer</span>
                </div>
              </div>

              <div className="hero-card-snippets">
                <div className="hero-snippet-row">
                  <span className="hero-snippet-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <GraduationCap size={14} aria-hidden="true" />
                    <span>College</span>
                  </span>
                  <span className="hero-snippet-value">VJTI</span>
                </div>
                <div className="hero-snippet-row">
                  <span className="hero-snippet-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <Code size={14} aria-hidden="true" />
                    <span>Discipline</span>
                  </span>
                  <span className="hero-snippet-value">Computer Eng.</span>
                </div>
                <div className="hero-snippet-row">
                  <span className="hero-snippet-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <GithubIcon size={14} />
                    <span>GitHub</span>
                  </span>
                  <a
                    href="https://github.com/Soham318"
                    target="_blank"
                    rel="noreferrer"
                    className="hero-snippet-value"
                    style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}
                  >
                    @Soham318
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

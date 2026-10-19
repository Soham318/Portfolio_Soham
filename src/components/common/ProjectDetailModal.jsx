import { useEffect, useRef } from 'react';
import { X, CheckCircle2, Clock, AlertTriangle, Layers, Cpu, Compass, ArrowUpRight, ShieldCheck, Terminal } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { BrowserMockup } from './ProjectVisuals';

/**
 * ProjectDetailModal
 * Accessible, keyboard-trapped modal dialog for inspecting in-depth project case studies.
 * Adheres to WCAG 2.1 Dialog standards (focus trap, Escape key, aria-modal, focus restoration).
 */
export function ProjectDetailModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null);
  const previouslyFocusedElementRef = useRef(null);

  // Store previously focused element and restore on close
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElementRef.current = document.activeElement;
      document.body.style.overflow = 'hidden';

      // Focus first focusable element inside modal
      const focusable = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable && focusable.length > 0) {
        focusable[0].focus();
      }
    } else {
      document.body.style.overflow = '';
      if (previouslyFocusedElementRef.current && typeof previouslyFocusedElementRef.current.focus === 'function') {
        previouslyFocusedElementRef.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC and Tab trapping
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const isPlanned = project.statusType === 'planned';

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        ref={modalRef}
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-summary"
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-meta">
            <span className="scaffold-tag" style={{ color: 'var(--accent-blue)' }}>
              {project.category}
            </span>
            <span
              className={`scaffold-tag ${isPlanned ? 'status-planned-tag' : 'status-live-tag'}`}
            >
              {project.status}
            </span>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project specifications dialog"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body">
          <h2 id="project-modal-title" className="modal-title">
            {project.title}
          </h2>

          <p id="project-modal-summary" className="modal-summary">
            {project.summary}
          </p>

          {/* Browser Mockup Visual Preview */}
          <div className="modal-mockup-wrapper">
            <BrowserMockup projectId={project.id} />
          </div>

          {/* Metrics Bar */}
          {project.metrics && (
            <div className="modal-metrics-grid">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="modal-metric-card">
                  <span className="modal-metric-label">{metric.label}</span>
                  <span className="modal-metric-value">{metric.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Planned vs Implemented Demarcation Alert */}
          {isPlanned ? (
            <div className="modal-notice-banner modal-notice-planned">
              <Clock size={16} aria-hidden="true" />
              <div>
                <strong>Planned Project Concept:</strong> This entry represents an architectural specification and design prototype. No production codebase, live URL, or performance metrics are claimed.
              </div>
            </div>
          ) : (
            <div className="modal-notice-banner modal-notice-verified">
              <ShieldCheck size={16} aria-hidden="true" />
              <div>
                <strong>Verified Codebase:</strong> This project features an authentic repository and genuine verified implementation details.
              </div>
            </div>
          )}

          {/* Problem & Solution */}
          {project.caseStudy && (
            <div className="modal-section-group">
              <div className="modal-case-block">
                <h3 className="modal-block-heading">
                  <AlertTriangle size={15} style={{ color: 'var(--color-warning)' }} aria-hidden="true" />
                  <span>The Problem</span>
                </h3>
                <p className="modal-block-text">{project.caseStudy.problem}</p>
              </div>

              <div className="modal-case-block">
                <h3 className="modal-block-heading">
                  <Compass size={15} style={{ color: 'var(--accent-teal)' }} aria-hidden="true" />
                  <span>The Solution</span>
                </h3>
                <p className="modal-block-text">{project.caseStudy.solution}</p>
              </div>

              <div className="modal-case-block">
                <h3 className="modal-block-heading">
                  <Cpu size={15} style={{ color: 'var(--accent-violet)' }} aria-hidden="true" />
                  <span>Architecture & System Design</span>
                </h3>
                <p className="modal-block-text">{project.caseStudy.architecture}</p>
              </div>
            </div>
          )}

          {/* Implemented Features List */}
          {project.featuresImplemented && project.featuresImplemented.length > 0 && (
            <div className="modal-feature-section">
              <h3 className="modal-block-heading">
                <CheckCircle2 size={15} style={{ color: 'var(--color-success)' }} aria-hidden="true" />
                <span>Verified Implemented Features</span>
              </h3>
              <ul className="modal-feature-list">
                {project.featuresImplemented.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Planned Features List */}
          {project.plannedFeatures && project.plannedFeatures.length > 0 && (
            <div className="modal-feature-section">
              <h3 className="modal-block-heading">
                <Clock size={15} style={{ color: 'var(--accent-blue)' }} aria-hidden="true" />
                <span>Planned Features & Roadmap</span>
              </h3>
              <ul className="modal-feature-list modal-feature-planned">
                {project.plannedFeatures.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges & Testing */}
          {project.caseStudy && (
            <div className="modal-section-group">
              <div className="modal-case-block">
                <h3 className="modal-block-heading">
                  <Layers size={15} style={{ color: 'var(--text-accent)' }} aria-hidden="true" />
                  <span>Engineering Challenges</span>
                </h3>
                <p className="modal-block-text">{project.caseStudy.challenges}</p>
              </div>

              <div className="modal-case-block">
                <h3 className="modal-block-heading">
                  <Terminal size={15} style={{ color: 'var(--accent-blue)' }} aria-hidden="true" />
                  <span>Testing & Quality Strategy</span>
                </h3>
                <p className="modal-block-text">{project.caseStudy.testing}</p>
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div className="modal-tech-section">
            <h4 className="modal-tech-title">Technologies & Stack</h4>
            <div className="scaffold-tag-list">
              {project.techStack.map((tech) => (
                <span key={tech} className="scaffold-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <GithubIcon size={14} />
              <span>View Verified Repository</span>
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          ) : (
            <span className="modal-no-code-notice">
              Concept Phase • Architectural Blueprint
            </span>
          )}

          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={onClose}
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}

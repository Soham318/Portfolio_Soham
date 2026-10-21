import { useState, useId } from 'react';
import { Send, CheckCircle2, Loader2, Mail, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../common/GithubIcon';
import { SectionHeading } from '../common/SectionHeading';
import { profileData } from '../../data/profileData';

const SERVICE_OPTIONS = [
  'Software Development Internship',
  'Full-Stack Web Development',
  'Project Collaboration',
  'Technical Discussion',
  'Other'
];

/**
 * Neon Contact Section
 * Features the signature neon cyan border accents, geometric tab, character counter,
 * accessible field validation, spam honeypot, and frontend-only form submission.
 */
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: SERVICE_OPTIONS[0],
    message: '',
    honeypot: '' // Spam protection trap
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [statusMessage, setStatusMessage] = useState('');
  const baseId = useId();

  const validate = () => {
    const errs = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedService = formData.service.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      errs.name = 'Please enter your name.';
    }

    if (!trimmedEmail) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!trimmedService || !SERVICE_OPTIONS.includes(trimmedService)) {
      errs.service = 'Please select a service.';
    }

    if (!trimmedMessage) {
      errs.message = 'Please enter your message.';
    } else if (trimmedMessage.length > 2000) {
      errs.message = 'Message must be under 2000 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 2000) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (status === 'success') {
      setStatus('idle');
      setStatusMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      setStatus('idle');
      setStatusMessage('');
      return;
    }

    // Basic spam botcheck: if honeypot is filled, discard silently
    if (formData.honeypot) return;

    // Frontend-only submission confirmation
    setStatus('success');
    setStatusMessage(
      "Thanks for reaching out! Your message has been submitted successfully. I'll get back to you soon."
    );
    setFormData({
      name: '',
      email: '',
      service: SERVICE_OPTIONS[0],
      message: '',
      honeypot: ''
    });
    setErrors({});
  };

  return (
    <section id="contact" className="section-wrapper" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          eyebrow="05 // INITIATE CONTACT"
          title="Let's Build Something Exceptional"
          subtitle="Open for software engineering internships, backend development roles, and technical project collaborations."
        />

        <div className="contact-section-layout">
          {/* Neon Styled Contact Form (Inspired by User's Supplied Screenshot) */}
          <div className="neon-contact-card reveal-on-scroll">
            {/* Upper Left Neon Block Accent */}
            <div className="neon-corner-tab" aria-hidden="true" />
            <div className="neon-corner-tick" aria-hidden="true" />

            <div className="neon-form-header">
              <span className="neon-status-dot" aria-hidden="true" />
              <h3 className="neon-form-title">SEND A MESSAGE</h3>
            </div>

            <form onSubmit={handleSubmit} noValidate className="neon-form">
              {/* Spam Honeypot Field (Hidden from real users) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {/* Two-Column Row for Desktop: Name and Email */}
              <div className="neon-form-row">
                {/* Name Field */}
                <div className="neon-field-group">
                  <label htmlFor={`${baseId}-name`} className="neon-label">
                    YOUR NAME <span className="neon-required" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id={`${baseId}-name`}
                    name="name"
                    className={`neon-input ${errors.name ? 'neon-input-error' : ''}`}
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? `${baseId}-name-err` : undefined}
                  />
                  {errors.name && (
                    <span id={`${baseId}-name-err`} className="neon-error-msg" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Field */}
                <div className="neon-field-group">
                  <label htmlFor={`${baseId}-email`} className="neon-label">
                    YOUR EMAIL <span className="neon-required" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id={`${baseId}-email`}
                    name="email"
                    className={`neon-input ${errors.email ? 'neon-input-error' : ''}`}
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? `${baseId}-email-err` : undefined}
                  />
                  {errors.email && (
                    <span id={`${baseId}-email-err`} className="neon-error-msg" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Service Needed Dropdown */}
              <div className="neon-field-group">
                <label htmlFor={`${baseId}-service`} className="neon-label">
                  SERVICE NEEDED
                </label>
                <div className="neon-select-wrap">
                  <select
                    id={`${baseId}-service`}
                    name="service"
                    className={`neon-select ${errors.service ? 'neon-input-error' : ''}`}
                    value={formData.service}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={errors.service ? `${baseId}-service-err` : undefined}
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.service && (
                  <span id={`${baseId}-service-err`} className="neon-error-msg" role="alert">
                    {errors.service}
                  </span>
                )}
              </div>

              {/* Message Field with Character Counter */}
              <div className="neon-field-group">
                <div className="neon-label-row">
                  <label htmlFor={`${baseId}-message`} className="neon-label">
                    YOUR MESSAGE <span className="neon-required" aria-hidden="true">*</span>
                  </label>
                  <span className="neon-char-counter" aria-live="polite">
                    {formData.message.length} / 2000
                  </span>
                </div>
                <textarea
                  id={`${baseId}-message`}
                  name="message"
                  rows={5}
                  maxLength={2000}
                  className={`neon-textarea ${errors.message ? 'neon-input-error' : ''}`}
                  placeholder="Write your message here"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? `${baseId}-msg-err` : undefined}
                />
                {errors.message && (
                  <span id={`${baseId}-msg-err`} className="neon-error-msg" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Feedback Alert Status */}
              <div aria-live="polite" aria-atomic="true" className="neon-feedback-region">
                {status === 'success' && (
                  <div className="neon-alert neon-alert-success" role="status">
                    <CheckCircle2 size={18} className="neon-alert-icon" aria-hidden="true" />
                    <span className="neon-alert-text">{statusMessage}</span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="neon-form-actions">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="neon-submit-btn"
                  aria-label="Submit contact message"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={16} className="neon-spin" aria-hidden="true" />
                      <span>SUBMITTING...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT</span>
                      <Send size={15} aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Side Contact & Verified Channels Card */}
          <div className="contact-info-panel">
            <div className="contact-info-card reveal-on-scroll reveal-stagger-1">
              <span className="scaffold-tag" style={{ color: 'var(--accent-blue)', marginBottom: '1rem' }}>
                Verified Channels
              </span>

              <h4 className="contact-info-title">Direct Connection</h4>
              <p className="contact-info-desc">
                Feel free to connect directly on LinkedIn or inspect verified repositories on GitHub.
              </p>

              <div className="contact-channel-list">
                <a
                  href={profileData.socialLinks.find((s) => s.id === 'linkedin')?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-channel-link"
                >
                  <div className="channel-icon-pill">
                    <ExternalLink size={15} aria-hidden="true" />
                  </div>
                  <div>
                    <strong className="channel-title">LinkedIn (Primary Profile)</strong>
                    <span className="channel-subtitle">soham-chavan-1a8339348</span>
                  </div>
                </a>

                <a
                  href={profileData.socialLinks.find((s) => s.id === 'github')?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-channel-link"
                >
                  <div className="channel-icon-pill">
                    <GithubIcon size={15} />
                  </div>
                  <div>
                    <strong className="channel-title">GitHub Codebases</strong>
                    <span className="channel-subtitle">github.com/Soham318</span>
                  </div>
                </a>

                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="contact-channel-link"
                >
                  <div className="channel-icon-pill">
                    <Mail size={15} aria-hidden="true" />
                  </div>
                  <div>
                    <strong className="channel-title">Direct Email</strong>
                    <span className="channel-subtitle">{profileData.contact.email}</span>
                  </div>
                </a>
              </div>

              <div className="contact-location-pill">
                <span className="status-dot" aria-hidden="true" />
                <span>VJTI Mumbai, India • Available for Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

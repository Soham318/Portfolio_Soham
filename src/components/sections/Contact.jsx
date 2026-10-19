import { useState, useId } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, ExternalLink } from 'lucide-react';
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
 * field validation, spam honeypot, and secure environment-variable email delivery
 * to csoham8042@gmail.com.
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
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error | unconfigured
  const [statusMessage, setStatusMessage] = useState('');
  const baseId = useId();

  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.length > 2000) {
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Basic spam botcheck: if honeypot is filled, discard silently
    if (formData.honeypot) return;

    // Check if real email service credentials are configured
    if (!web3FormsKey && !formspreeEndpoint) {
      setStatus('unconfigured');
      setStatusMessage(
        'Email service environment variable (VITE_WEB3FORMS_ACCESS_KEY or VITE_FORMSPREE_ENDPOINT) is not yet configured. You can send your message directly via your email client to csoham8042@gmail.com below.'
      );
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      let response;
      if (web3FormsKey) {
        response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `Portfolio Inquiry: ${formData.service} from ${formData.name}`,
            name: formData.name,
            email: formData.email,
            service: formData.service,
            message: formData.message,
            to: 'csoham8042@gmail.com'
          })
        });
      } else {
        response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            service: formData.service,
            message: formData.message,
            _to: 'csoham8042@gmail.com'
          })
        });
      }

      const data = await response.json();

      if (response.ok && (data.success || data.ok)) {
        setStatus('success');
        setStatusMessage('Your message has been sent successfully to csoham8042@gmail.com! I will respond promptly.');
        setFormData({
          name: '',
          email: '',
          service: SERVICE_OPTIONS[0],
          message: '',
          honeypot: ''
        });
      } else {
        throw new Error(data.message || 'Delivery request was rejected by the mail service.');
      }
    } catch (err) {
      setStatus('error');
      setStatusMessage(
        err.message || 'Failed to dispatch message. Your entered message has been preserved; you can retry or email directly.'
      );
    }
  };

  // Generate fallback mailto link preserving user's typed message
  const mailtoLink = `mailto:csoham8042@gmail.com?subject=${encodeURIComponent(
    `[Portfolio Inquiry] ${formData.service} - ${formData.name || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
  )}`;

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
          <div className="neon-contact-card">
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
                    className="neon-select"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
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
              {status === 'success' && (
                <div className="neon-alert neon-alert-success" role="status">
                  <CheckCircle2 size={16} aria-hidden="true" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="neon-alert neon-alert-error" role="alert">
                  <AlertCircle size={16} aria-hidden="true" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'unconfigured' && (
                <div className="neon-alert neon-alert-warning" role="status">
                  <AlertCircle size={16} aria-hidden="true" />
                  <div>
                    <p style={{ margin: 0, marginBottom: '0.5rem' }}>{statusMessage}</p>
                    <a
                      href={mailtoLink}
                      className="btn btn-primary btn-sm"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      <Mail size={14} aria-hidden="true" />
                      <span>Open Pre-filled Email to csoham8042@gmail.com</span>
                    </a>
                  </div>
                </div>
              )}

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
                      <span>SENDING...</span>
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
            <div className="contact-info-card">
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

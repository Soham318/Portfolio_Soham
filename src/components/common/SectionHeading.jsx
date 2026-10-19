/**
 * SectionHeading
 * Standardized section header with consistent typographic hierarchy and eyebrow tag.
 * Fulfills HCI Principle 11: Clear Visual Hierarchy & Principle 1: Consistency.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  id,
  className = ''
}) {
  return (
    <div className={`section-heading-container ${align} ${className}`}>
      {eyebrow && (
        <span className="section-eyebrow">
          {eyebrow}
        </span>
      )}
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {subtitle && (
        <p className="section-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
}

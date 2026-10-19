import { GraduationCap, BookOpen } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { profileData } from '../../data/profileData';

/**
 * Education Section
 * Displays confirmed VJTI education and relevant computer engineering coursework.
 * Omits unconfirmed dates, marks, and prior schooling.
 */
export function Education() {
  const { education } = profileData;

  return (
    <section id="education" className="section-wrapper" aria-labelledby="education-heading">
      <div className="container">
        <SectionHeading
          id="education-heading"
          eyebrow="02 // ACADEMICS"
          title="Education"
          subtitle="Undergraduate engineering program and foundational computer science coursework."
        />

        <div className="education-timeline">
          <article className="education-card">
            <div className="education-header">
              <div>
                <h3 className="education-degree">{education.degree}</h3>
                <p className="education-institution">{education.institution}</p>
              </div>
              <span className="education-duration-badge">
                <GraduationCap size={14} style={{ marginRight: '6px' }} aria-hidden="true" />
                Undergraduate Program
              </span>
            </div>

            {education.coursework && education.coursework.length > 0 && (
              <div style={{ marginTop: '1.25rem' }}>
                <h4 className="education-courses-heading" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <BookOpen size={14} aria-hidden="true" />
                  <span>Key Engineering Coursework</span>
                </h4>
                <div className="education-chips" style={{ marginTop: '0.75rem' }}>
                  {education.coursework.map((course) => (
                    <span key={course} className="education-chip">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}

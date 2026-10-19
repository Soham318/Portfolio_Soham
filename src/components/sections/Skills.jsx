import { useState, useId } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { profileData } from '../../data/profileData';

/**
 * Skills Section
 * Displays confirmed technical competencies across Languages, Backend, Databases,
 * Machine Learning, and Frontend without invented proficiency levels.
 */
export function Skills() {
  const { categories } = profileData.skills;
  const [activeTab, setActiveTab] = useState('all');
  const baseId = useId();

  // Filter skills based on selected category tab
  const displayedCategories = activeTab === 'all'
    ? categories
    : categories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="section-wrapper" aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeading
          id="skills-heading"
          eyebrow="03 // COMPETENCIES"
          title="Technical Skills"
          subtitle="Confirmed programming languages, backend frameworks, database systems, and developer tools."
        />

        {/* Category Filter Tabs */}
        <div className="skills-category-tabs" role="tablist" aria-label="Skills Category Filter">
          <button
            type="button"
            id={`${baseId}-tab-all`}
            role="tab"
            aria-selected={activeTab === 'all'}
            aria-controls={`${baseId}-panel-all`}
            className={`skills-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Skills
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              id={`${baseId}-tab-${cat.id}`}
              role="tab"
              aria-selected={activeTab === cat.id}
              aria-controls={`${baseId}-panel-${cat.id}`}
              className={`skills-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div
          id={`${baseId}-panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${activeTab}`}
          tabIndex={0}
        >
          {displayedCategories.map((cat) => (
            <div key={cat.id} style={{ marginBottom: '2.5rem' }}>
              {activeTab === 'all' && (
                <div style={{ marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {cat.title}
                  </h3>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                    {cat.description}
                  </p>
                </div>
              )}

              <div className="skills-grid">
                {cat.items.map((skillName) => (
                  <div key={skillName} className="skill-card">
                    <div className="skill-card-top" style={{ marginBottom: 0 }}>
                      <span className="skill-name">{skillName}</span>
                      <span className="scaffold-tag" style={{ fontSize: '0.7rem' }}>
                        {cat.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

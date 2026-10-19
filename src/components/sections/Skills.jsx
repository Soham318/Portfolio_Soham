import { useState, useId, useMemo } from 'react';
import { Search, X, Layers, ArrowDown } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { profileData } from '../../data/profileData';

/**
 * Consolidated Skills & Technologies Section
 * Exactly one public skills section. Features responsive category tabs,
 * instant live search, and verified project mapping without arbitrary percentages.
 */
export function Skills({ onSelectSkillForProjects }) {
  const { categories } = profileData.skills;
  const { projects } = profileData;
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const baseId = useId();

  // Filter skills by category and search query
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return categories
      .map((cat) => {
        // Match category tab
        if (activeTab !== 'all' && cat.id !== activeTab) {
          return null;
        }

        // Filter items matching query
        const matchingItems = cat.items.filter((item) => {
          if (!query) return true;
          return (
            item.toLowerCase().includes(query) ||
            cat.title.toLowerCase().includes(query)
          );
        });

        if (matchingItems.length === 0) return null;

        return {
          ...cat,
          items: matchingItems
        };
      })
      .filter(Boolean);
  }, [categories, activeTab, searchQuery]);

  // Find projects using the selected skill
  const matchingProjects = useMemo(() => {
    if (!selectedSkill) return [];
    return projects.filter((p) =>
      p.techStack.some(
        (t) => t.toLowerCase() === selectedSkill.toLowerCase()
      )
    );
  }, [selectedSkill, projects]);

  const handleSkillClick = (skillName) => {
    if (selectedSkill === skillName) {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(skillName);
    }
  };

  const totalFilteredSkills = filteredCategories.reduce(
    (acc, cat) => acc + cat.items.length,
    0
  );

  return (
    <section id="skills" className="section-wrapper" aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeading
          id="skills-heading"
          eyebrow="04 // COMPETENCIES"
          title="Skills & Technologies"
          subtitle="Consolidated technical toolset across programming languages, backend frameworks, databases, and developer environments."
        />

        {/* Search and Category Control Bar */}
        <div className="skills-toolbar">
          {/* Working Live Search Field */}
          <div className="skills-search-box">
            <Search size={16} className="skills-search-icon" aria-hidden="true" />
            <input
              type="text"
              className="skills-search-input"
              placeholder="Search technologies (e.g. React, Python, MongoDB)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search skills and technologies"
            />
            {searchQuery && (
              <button
                type="button"
                className="skills-search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear skill search query"
              >
                <X size={14} aria-hidden="true" />
              </button>
            )}
          </div>

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
              All
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
        </div>

        {/* Selected Skill Project Link Notice Banner */}
        {selectedSkill && (
          <div className="skill-project-link-banner">
            <div className="skill-banner-text">
              <Layers size={16} style={{ color: 'var(--accent-teal)' }} aria-hidden="true" />
              <span>
                <strong>{selectedSkill}:</strong>{' '}
                {matchingProjects.length > 0
                  ? `Used / planned in ${matchingProjects.length} project${matchingProjects.length > 1 ? 's' : ''}: `
                  : 'Used in coursework and technical problem solving.'}
                {matchingProjects.map((p) => p.title).join(', ')}
              </span>
            </div>

            <div className="skill-banner-actions">
              {matchingProjects.length > 0 && (
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => {
                    if (onSelectSkillForProjects) {
                      onSelectSkillForProjects(selectedSkill);
                    }
                    const elem = document.getElementById('projects');
                    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <span>Filter Projects</span>
                  <ArrowDown size={13} aria-hidden="true" />
                </button>
              )}
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setSelectedSkill(null)}
              >
                Clear
              </button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {totalFilteredSkills === 0 ? (
          <div className="skills-empty-state">
            <p>No technologies found matching &ldquo;{searchQuery}&rdquo;.</p>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              style={{ marginTop: '0.75rem' }}
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          /* Skills Cards Grid */
          <div
            id={`${baseId}-panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${activeTab}`}
            tabIndex={0}
            className="skills-content-container"
          >
            {filteredCategories.map((cat) => (
              <div key={cat.id} className="skills-category-group">
                <div className="skills-category-header">
                  <h3 className="skills-category-title">{cat.title}</h3>
                  <p className="skills-category-desc">{cat.description}</p>
                </div>

                <div className="skills-chips-grid">
                  {cat.items.map((skillName) => {
                    const isSelected = selectedSkill === skillName;
                    const hasProjects = projects.some((p) =>
                      p.techStack.some((t) => t.toLowerCase() === skillName.toLowerCase())
                    );

                    return (
                      <button
                        type="button"
                        key={skillName}
                        onClick={() => handleSkillClick(skillName)}
                        className={`skill-chip ${isSelected ? 'selected' : ''}`}
                        title={hasProjects ? `Click to see projects using ${skillName}` : skillName}
                        aria-pressed={isSelected}
                      >
                        <span className="skill-chip-name">{skillName}</span>
                        {hasProjects && (
                          <span className="skill-chip-project-dot" title="Project linked" aria-hidden="true" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import { useState, useId, useMemo } from 'react';
import { Search, X, Layers, ArrowDown } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { TechIcon } from '../common/TechIcon';
import { profileData } from '../../data/profileData';

/**
 * Redesigned Skills & Technologies Section
 * Polished technology tiles with authentic vector logos, responsive grid
 * (2-col mobile, 3-col tablet, 4/5-col desktop), instant live search,
 * category tabs, subtle animations, and keyboard accessibility.
 */
export function Skills({ onSelectSkillForProjects }) {
  const { categories } = profileData.skills;
  const { projects } = profileData;
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const baseId = useId();

  // Flattened master list of all 28 verified skills with their category info
  const allSkills = useMemo(() => {
    const list = [];
    categories.forEach((cat) => {
      cat.items.forEach((item) => {
        list.push({
          name: item,
          categoryId: cat.id,
          categoryTitle: cat.title
        });
      });
    });
    return list;
  }, [categories]);

  // Filter skills by active category tab and search query
  const filteredSkills = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return allSkills.filter((skill) => {
      if (activeTab !== 'all' && skill.categoryId !== activeTab) {
        return false;
      }
      if (!q) return true;
      return (
        skill.name.toLowerCase().includes(q) ||
        skill.categoryTitle.toLowerCase().includes(q)
      );
    });
  }, [allSkills, activeTab, searchQuery]);

  // Find portfolio projects associated with the selected skill
  const matchingProjects = useMemo(() => {
    if (!selectedSkill) return [];
    return projects.filter((p) =>
      p.techStack.some((t) => t.toLowerCase() === selectedSkill.toLowerCase())
    );
  }, [selectedSkill, projects]);

  const handleSkillClick = (skillName) => {
    setSelectedSkill((prev) => (prev === skillName ? null : skillName));
  };

  return (
    <section id="skills" className="section-wrapper" aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeading
          id="skills-heading"
          eyebrow="04 // COMPETENCIES"
          title="Skills & Technologies"
          subtitle="Consolidated technical toolset across programming languages, backend frameworks, databases, machine learning, and developer environments."
        />

        {/* Search and Category Control Bar */}
        <div className="skills-toolbar reveal-on-scroll">
          {/* Live Search Field */}
          <div className="skills-search-box">
            <Search size={16} className="skills-search-icon" aria-hidden="true" />
            <input
              type="text"
              className="skills-search-input"
              placeholder="Search technologies (e.g. React, Python, MongoDB, Vite)..."
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
              aria-controls={`${baseId}-panel`}
              className={`skills-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All ({allSkills.length})
            </button>

            {categories.map((cat) => {
              const count = cat.items.length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  id={`${baseId}-tab-${cat.id}`}
                  role="tab"
                  aria-selected={activeTab === cat.id}
                  aria-controls={`${baseId}-panel`}
                  className={`skills-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(cat.id)}
                >
                  {cat.title} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Skill Project Link Notice Banner */}
        {selectedSkill && (
          <div className="skill-project-link-banner" role="region" aria-live="polite">
            <div className="skill-banner-text">
              <Layers size={16} style={{ color: 'var(--accent-teal)' }} aria-hidden="true" />
              <span>
                <strong>{selectedSkill}:</strong>{' '}
                {matchingProjects.length > 0
                  ? `Demonstrated in ${matchingProjects.length} project${matchingProjects.length > 1 ? 's' : ''}: `
                  : 'Used in academic coursework and competitive problem solving.'}
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
        {filteredSkills.length === 0 ? (
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
          /* Redesigned Technology Tiles Grid */
          <div
            id={`${baseId}-panel`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${activeTab}`}
            tabIndex={0}
            className="skills-tiles-grid reveal-on-scroll"
          >
            {filteredSkills.map((skill, index) => {
              const isSelected = selectedSkill === skill.name;
              const hasProjects = projects.some((p) =>
                p.techStack.some((t) => t.toLowerCase() === skill.name.toLowerCase())
              );

              return (
                <div
                  key={skill.name}
                  role="button"
                  tabIndex={0}
                  style={{ '--tile-stagger': index % 10 }}
                  onClick={() => handleSkillClick(skill.name)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSkillClick(skill.name);
                    }
                  }}
                  className={`tech-tile ${isSelected ? 'selected' : ''}`}
                  aria-pressed={isSelected}
                  title={hasProjects ? `Click to see projects using ${skill.name}` : skill.name}
                >
                  {/* Technology Icon Container */}
                  <div className="tech-tile-icon-box" aria-hidden="true">
                    <TechIcon name={skill.name} size={32} />
                  </div>

                  {/* Tile Typography & Category Tag */}
                  <div className="tech-tile-info">
                    <span className="tech-tile-name">{skill.name}</span>
                    <span className="tech-tile-category">{skill.categoryTitle}</span>
                  </div>

                  {/* Linked Project Dot / Badge */}
                  {hasProjects && (
                    <div className="tech-tile-badge" title="Linked to portfolio project" aria-hidden="true">
                      <span className="tech-tile-dot" />
                      <span className="tech-tile-badge-label">Project</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

import { useState, useMemo, useId } from 'react';
import { Search, X, CheckCircle2, Clock, Users, BookOpen, ArrowUpRight, Filter } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { BrowserMockup } from '../common/ProjectVisuals';
import { GithubIcon } from '../common/GithubIcon';
import { ProjectDetailModal } from '../common/ProjectDetailModal';
import { profileData } from '../../data/profileData';

const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack Web' },
  { id: 'algorithms', label: 'Algorithms & OR' },
  { id: 'frontend', label: 'Frontend Systems' },
  { id: 'concepts', label: 'Planned Concepts' }
];

/**
 * Projects Section
 * Curated showcase of software engineering platforms, academic optimization models,
 * and planned architecture concepts with browser mockup previews, category filters,
 * live search, and accessible case study modal dialogs.
 */
export function Projects({ activeTechFilter, onClearTechFilter }) {
  const { projects } = profileData;
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const baseId = useId();

  // Filter projects by category, search query, and external tech filter
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // 1. Category Filter
      if (activeCategory !== 'all') {
        if (activeCategory === 'concepts') {
          if (project.statusType !== 'planned') return false;
        } else if (project.categoryKey !== activeCategory) {
          return false;
        }
      }

      // 2. Tech Filter (from Skills section or tag clicks)
      if (activeTechFilter) {
        const matchesTech = project.techStack.some(
          (tech) => tech.toLowerCase() === activeTechFilter.toLowerCase()
        );
        if (!matchesTech) return false;
      }

      // 3. Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = project.title.toLowerCase().includes(q);
        const matchesSummary = project.summary.toLowerCase().includes(q);
        const matchesCategory = project.category.toLowerCase().includes(q);
        const matchesTech = project.techStack.some((tech) =>
          tech.toLowerCase().includes(q)
        );
        return matchesTitle || matchesSummary || matchesCategory || matchesTech;
      }

      return true;
    });
  }, [projects, activeCategory, activeTechFilter, searchQuery]);

  return (
    <section id="projects" className="section-wrapper" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="05 // SHOWCASE"
          title="Featured Projects"
          subtitle="Curated full-stack platforms, operations research algorithms, and structured architecture concepts."
        />

        {/* Filter Toolbar: Search, Active Tech Pill, Category Tabs */}
        <div className="projects-toolbar reveal-on-scroll">
          <div className="projects-toolbar-top">
            {/* Live Search Field */}
            <div className="skills-search-box" style={{ maxWidth: '420px', flex: '1 1 280px' }}>
              <Search size={16} className="skills-search-icon" aria-hidden="true" />
              <input
                type="text"
                className="skills-search-input"
                placeholder="Search projects by name, keyword, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search projects by name or technology"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="skills-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear project search query"
                >
                  <X size={14} aria-hidden="true" />
                </button>
              )}
            </div>

            {/* Active External Tech Filter Pill */}
            {activeTechFilter && (
              <div className="active-filter-badge">
                <Filter size={13} aria-hidden="true" />
                <span>Tech: <strong>{activeTechFilter}</strong></span>
                <button
                  type="button"
                  className="active-filter-clear"
                  onClick={onClearTechFilter}
                  aria-label={`Clear ${activeTechFilter} filter`}
                >
                  <X size={13} aria-hidden="true" />
                </button>
              </div>
            )}
          </div>

          {/* Category Tabs */}
          <div className="skills-category-tabs" role="tablist" aria-label="Project Category Filter">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                id={`${baseId}-proj-tab-${cat.id}`}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`skills-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Empty Search / Filter State */}
        {filteredProjects.length === 0 ? (
          <div className="skills-empty-state">
            <p>No projects match your current filter criteria.</p>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                if (onClearTechFilter) onClearTechFilter();
              }}
              style={{ marginTop: '0.75rem' }}
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          /* Staggered Editorial Project Cards Grid */
          <div className="projects-showcase-list">
            {filteredProjects.map((proj, index) => {
              const isPlanned = proj.statusType === 'planned';
              const isReversed = index % 2 === 1;

              return (
                <article
                  key={proj.id}
                  className={`project-editorial-card reveal-on-scroll ${isReversed ? 'layout-reversed' : ''}`}
                >
                  {/* Visual Column: Browser Mockup Frame */}
                  <div className="project-card-media-col">
                    <button
                      type="button"
                      className="project-mockup-trigger"
                      onClick={() => setSelectedProject(proj)}
                      aria-label={`Open detailed specifications for ${proj.title}`}
                    >
                      <BrowserMockup projectId={proj.id} />
                      <div className="project-mockup-overlay-hint" aria-hidden="true">
                        <BookOpen size={16} />
                        <span>Inspect Case Study</span>
                      </div>
                    </button>
                  </div>

                  {/* Narrative Column: Project Details & Actions */}
                  <div className="project-card-info-col">
                    <div className="project-card-header">
                      <span className="project-index-tag">
                        PROJECT {String(index + 1).padStart(2, '0')} • {proj.category}
                      </span>
                      <span
                        className={`scaffold-tag ${isPlanned ? 'status-planned-tag' : 'status-live-tag'}`}
                      >
                        {proj.status}
                      </span>
                    </div>

                    <h3 className="project-title">{proj.title}</h3>

                    <p className="project-summary">{proj.summary}</p>

                    {/* Key Metrics Columns */}
                    {proj.metrics && (
                      <div className="project-metrics-row">
                        {proj.metrics.map((m, idx) => (
                          <div key={idx} className="project-metric-pill">
                            <span className="metric-pill-label">{m.label}</span>
                            <span className="metric-pill-value">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Implemented Features Preview */}
                    {proj.featuresImplemented && proj.featuresImplemented.length > 0 && (
                      <div className="project-feature-snippet">
                        <span className="feature-snippet-title">
                          <CheckCircle2 size={13} style={{ color: 'var(--color-success)' }} aria-hidden="true" />
                          <span>Implemented Features:</span>
                        </span>
                        <ul className="feature-snippet-list">
                          {proj.featuresImplemented.slice(0, 2).map((feat, i) => (
                            <li key={i}>{feat}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Planned Features Preview */}
                    {proj.plannedFeatures && proj.plannedFeatures.length > 0 && (
                      <div className="project-feature-snippet planned-snippet">
                        <span className="feature-snippet-title" style={{ color: 'var(--accent-blue)' }}>
                          <Clock size={13} aria-hidden="true" />
                          <span>{isPlanned ? 'Planned Features:' : 'Planned Roadmap:'}</span>
                        </span>
                        <ul className="feature-snippet-list">
                          {proj.plannedFeatures.slice(0, 2).map((feat, i) => (
                            <li key={i}>{feat}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Collaborative Project Notice */}
                    {proj.collaborationNotice && (
                      <div className="project-collab-notice">
                        <Users size={13} style={{ color: 'var(--accent-teal)' }} aria-hidden="true" />
                        <span>{proj.collaborationNotice}</span>
                      </div>
                    )}

                    {/* Tech Stack Chips */}
                    <div className="scaffold-tag-list" style={{ marginTop: 'auto', marginBottom: '1.25rem' }}>
                      {proj.techStack.map((tech) => (
                        <span key={tech} className="scaffold-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Working Actions */}
                    <div className="project-card-actions">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => setSelectedProject(proj)}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                      >
                        <BookOpen size={14} aria-hidden="true" />
                        <span>Project Details</span>
                      </button>

                      {proj.repoUrl && (
                        <a
                          href={proj.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-outline btn-sm"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                        >
                          <GithubIcon size={14} />
                          <span>Codebase</span>
                          <ArrowUpRight size={12} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Accessible In-Depth Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

import oppHubImg from '../../assets/images/opportunityhub.jpg';
import transRoutingImg from '../../assets/images/transportation_routing.jpg';
import portfolioImg from '../../assets/images/portfolio_showcase.jpg';

/**
 * Project visual definitions with verified contextual labeling.
 * Provides rich, high-resolution imagery without fake production screenshots.
 */
const PROJECT_VISUAL_MAP = {
  'opportunity-hub': {
    src: oppHubImg,
    alt: 'OpportunityHub dashboard interface concept showing hackathon discovery listings, filter categories, and deadline calendar',
    badge: 'Platform Concept'
  },
  'ot-project': {
    src: transRoutingImg,
    alt: 'Operations research transportation routing visualization showing network graph, logistics hubs, and Dijkstra shortest path optimization',
    badge: 'Graph Optimization Model'
  },
  'portfolio-project': {
    src: portfolioImg,
    alt: 'Interactive personal portfolio layout and UI component library architecture showcase',
    badge: 'Design System Showcase'
  }
};

/**
 * ProjectThumbnail
 * Renders a high-resolution, responsive, lazy-loaded image thumbnail
 * with reserved aspect-ratio and conceptual status badge.
 */
export function ProjectThumbnail({ projectId }) {
  const visual = PROJECT_VISUAL_MAP[projectId];
  if (!visual) return null;

  return (
    <div className="project-thumbnail-wrapper">
      <img
        src={visual.src}
        alt={visual.alt}
        className="project-thumbnail-img"
        loading="lazy"
        decoding="async"
        width="900"
        height="506"
      />
      <div className="project-thumbnail-overlay" aria-hidden="true" />
      <span className="project-thumbnail-badge" aria-hidden="true">
        {visual.badge}
      </span>
    </div>
  );
}

/* Backward-compatible named exports */
export function OpportunityHubVisual() {
  return <ProjectThumbnail projectId="opportunity-hub" />;
}

export function TransportationRoutingVisual() {
  return <ProjectThumbnail projectId="ot-project" />;
}

export function PortfolioVisual() {
  return <ProjectThumbnail projectId="portfolio-project" />;
}

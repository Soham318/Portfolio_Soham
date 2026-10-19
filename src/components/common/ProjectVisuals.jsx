import oppHubImg from '../../assets/images/opportunityhub.jpg';
import transRoutingImg from '../../assets/images/transportation_routing.jpg';
import portfolioImg from '../../assets/images/portfolio_showcase.jpg';
import youtubeImg from '../../assets/images/youtube_thumbnail_concept.jpg';
import restaurantImg from '../../assets/images/restaurant_system_concept.jpg';
import resumeImg from '../../assets/images/ai_resume_builder_concept.jpg';

/**
 * Project visual definitions with verified contextual labeling.
 * Provides rich, high-resolution imagery with authentic browser mock frames.
 */
const PROJECT_VISUAL_MAP = {
  'opportunity-hub': {
    src: oppHubImg,
    alt: 'OpportunityHub dashboard interface showing hackathon discovery listings, filter categories, and deadline calendar',
    badge: 'MERN Stack',
    browserUrl: 'opportunity-hub.vercel.app',
    isLiveOrConcept: 'Active Project'
  },
  'ot-project': {
    src: transRoutingImg,
    alt: 'Operations research transportation routing visualization showing network graph, logistics hubs, and shortest path optimization',
    badge: 'Python OR',
    browserUrl: 'routing-model.vjti.internal',
    isLiveOrConcept: 'Academic Model'
  },
  'portfolio-project': {
    src: portfolioImg,
    alt: 'Interactive personal portfolio layout and UI component library architecture showcase',
    badge: 'React + Vite',
    browserUrl: 'sohamchavan.dev',
    isLiveOrConcept: 'Active Portfolio'
  },
  'youtube-thumbnail': {
    src: youtubeImg,
    alt: 'YouTube Thumbnail Generator workspace mockup showing canvas typography overlays, template layouts, and export settings',
    badge: 'Planned Concept',
    browserUrl: 'thumbnail-studio.concept',
    isLiveOrConcept: 'Architecture Concept'
  },
  'restaurant-system': {
    src: restaurantImg,
    alt: 'Restaurant Management System dashboard showing floor table grid, active KOT queue, and quick billing summary',
    badge: 'Planned Concept',
    browserUrl: 'bistroflow-pos.concept',
    isLiveOrConcept: 'Architecture Concept'
  },
  'resume-builder': {
    src: resumeImg,
    alt: 'AI Resume Builder dashboard showing structured experience form and live formatted ATS resume preview',
    badge: 'Planned Concept',
    browserUrl: 'resumate-ai.concept',
    isLiveOrConcept: 'Architecture Concept'
  }
};

/**
 * BrowserMockup Frame
 * Renders an editorial browser window frame with macOS window buttons,
 * URL address bar, technology badge, and responsive aspect-ratio image preview.
 */
export function BrowserMockup({ projectId, className = '' }) {
  const visual = PROJECT_VISUAL_MAP[projectId];
  if (!visual) return null;

  return (
    <div className={`browser-mockup-frame ${className}`}>
      {/* Top Browser Window Controls Bar */}
      <div className="browser-mockup-header" aria-hidden="true">
        <div className="browser-mockup-dots">
          <span className="dot dot-close" />
          <span className="dot dot-minimize" />
          <span className="dot dot-maximize" />
        </div>
        <div className="browser-mockup-address">
          <span className="browser-mockup-domain">{visual.browserUrl}</span>
        </div>
        <div className="browser-mockup-badge">
          <span>{visual.badge}</span>
        </div>
      </div>

      {/* Viewport Image Area */}
      <div className="browser-mockup-viewport">
        <img
          src={visual.src}
          alt={visual.alt}
          className="browser-mockup-img"
          loading="lazy"
          decoding="async"
          width="900"
          height="506"
        />
        <div className="browser-mockup-glow" aria-hidden="true" />
        <span className="browser-mockup-status-tag" aria-hidden="true">
          {visual.isLiveOrConcept}
        </span>
      </div>
    </div>
  );
}

/**
 * Backward-compatible ProjectThumbnail
 */
export function ProjectThumbnail({ projectId }) {
  return <BrowserMockup projectId={projectId} />;
}

/* Backward-compatible named exports */
export function OpportunityHubVisual() {
  return <BrowserMockup projectId="opportunity-hub" />;
}

export function TransportationRoutingVisual() {
  return <BrowserMockup projectId="ot-project" />;
}

export function PortfolioVisual() {
  return <BrowserMockup projectId="portfolio-project" />;
}

export function YouTubeThumbnailVisual() {
  return <BrowserMockup projectId="youtube-thumbnail" />;
}

export function RestaurantSystemVisual() {
  return <BrowserMockup projectId="restaurant-system" />;
}

export function AIResumeBuilderVisual() {
  return <BrowserMockup projectId="resume-builder" />;
}

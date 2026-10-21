import { useEffect, useRef, useState, useCallback } from 'react';
import { GraduationCap, Award, BookOpen, Code2, Server, Compass, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { profileData } from '../../data/profileData';

const MILESTONE_ICONS = {
  'milestone-1': BookOpen,
  'milestone-2': GraduationCap,
  'milestone-3': Award,
  'milestone-4': Server,
  'milestone-5': Code2
};

/**
 * Animated Education & Learning Timeline
 * Inspired by modern developer portfolios:
 * - Scroll-driven bidirectional progressive line filling and reverse retreat
 * - Sticky/floating year indicator tracking active milestone (2013–2022 -> 2026)
 * - Distinct visual styling for formal education vs self-directed technical learning
 * - Fluid staggered directional card reveals
 */
export function Timeline() {
  const { timelineMilestones } = profileData;
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const nodeRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [progressHeight, setProgressHeight] = useState(0);
  const [revealedNodes, setRevealedNodes] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return new Set(timelineMilestones.map((_, i) => i));
    }
    return new Set([0]);
  });

  const scrollToMilestone = useCallback((index) => {
    const node = nodeRefs.current[index];
    if (node) {
      node.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      return;
    }

    // Scroll calculation for bidirectional progress and active milestone update
    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const viewportHeight = window.innerHeight;
      const triggerY = viewportHeight * 0.45; // Activation focal line

      // 1. Calculate active milestone based on node positions relative to trigger line
      let currentActive = 0;
      nodeRefs.current.forEach((nodeEl, idx) => {
        if (!nodeEl) return;
        const rect = nodeEl.getBoundingClientRect();
        // Check if node pin top has crossed the focal trigger line
        if (rect.top + 30 <= triggerY) {
          currentActive = idx;
        }
      });
      setActiveIndex(currentActive);

      // 2. Mark revealed nodes as user scrolls down
      setRevealedNodes((prev) => {
        let changed = false;
        const next = new Set(prev);
        nodeRefs.current.forEach((nodeEl, idx) => {
          if (!nodeEl) return;
          const rect = nodeEl.getBoundingClientRect();
          if (rect.top <= viewportHeight * 0.88) {
            if (!next.has(idx)) {
              next.add(idx);
              changed = true;
            }
          }
        });
        return changed ? next : prev;
      });

      // 3. Bidirectional track fill calculation (Pin 0 center to Pin 4 center)
      const firstNode = nodeRefs.current[0];
      const lastNode = nodeRefs.current[nodeRefs.current.length - 1];

      if (firstNode && lastNode) {
        const firstRect = firstNode.getBoundingClientRect();
        const lastRect = lastNode.getBoundingClientRect();
        const startY = firstRect.top + 30;
        const endY = lastRect.top + 30;
        const totalDistance = endY - startY;

        if (totalDistance > 0) {
          const currentDistance = triggerY - startY;
          const pct = Math.min(100, Math.max(0, (currentDistance / totalDistance) * 100));
          setProgressHeight(pct);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [timelineMilestones]);

  const activeMilestone = timelineMilestones[activeIndex] || timelineMilestones[0];

  return (
    <section id="timeline" className="section-wrapper timeline-section" aria-labelledby="timeline-title" ref={sectionRef}>
      <div className="container">
        <SectionHeading
          id="timeline-title"
          eyebrow="02 // EDUCATION & TIMELINE"
          title="Education & Learning Journey"
          subtitle="Academic trajectory at VJTI with Cybersecurity minor, foundational schooling, entrance exam achievements, and core software milestones."
        />

        <div className="timeline-interactive-container">
          {/* Sticky Year Indicator Rail (Desktop beside timeline, mobile sticky header) */}
          <aside className="timeline-year-rail" aria-label="Timeline Active Year Indicator">
            <div className="sticky-year-card">
              <div className="year-card-header">
                <span className="year-card-eyebrow">
                  <Compass size={13} aria-hidden="true" />
                  <span>ACTIVE MILESTONE</span>
                </span>
                <span className="year-card-counter">
                  0{activeIndex + 1} / 0{timelineMilestones.length}
                </span>
              </div>

              {/* Prominent Animated Year / Year Range Display */}
              <div className="year-display-box" aria-live="polite">
                <div key={activeMilestone.year} className="year-number-animated">
                  {activeMilestone.year}
                </div>
              </div>

              {/* Milestone Summary & Category */}
              <div className="year-card-body">
                <span
                  className={`scaffold-tag ${
                    activeMilestone.type === 'education' ? 'tag-education' : 'tag-learning'
                  }`}
                >
                  {activeMilestone.type === 'education' ? 'Formal Education' : 'Self-Directed Learning'}
                </span>

                <h4 className="year-card-title">{activeMilestone.title}</h4>
                <p className="year-card-inst">{activeMilestone.institution}</p>
                <div className="year-card-badge">{activeMilestone.score}</div>
              </div>

              {/* Quick Jump Milestone Dots */}
              <div className="year-milestone-dots" role="tablist" aria-label="Jump to timeline milestone">
                {timelineMilestones.map((m, idx) => {
                  const isActive = idx === activeIndex;
                  const isPast = idx <= activeIndex;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Jump to ${m.year}: ${m.title}`}
                      className={`milestone-dot-btn ${isActive ? 'is-active' : ''} ${isPast ? 'is-past' : ''}`}
                      onClick={() => scrollToMilestone(idx)}
                    >
                      <span className="dot-circle" />
                      <span className="dot-year-label">{m.year}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Timeline Center Tree */}
          <div className="learning-timeline-wrapper" ref={trackRef}>
            {/* Background Track Line */}
            <div className="timeline-track-bg" aria-hidden="true" />

            {/* Animated Progressive Filling Line */}
            <div
              className="timeline-track-fill"
              style={{ height: `${progressHeight}%` }}
              aria-hidden="true"
            />

            {/* Milestone Nodes */}
            <div className="timeline-nodes-list">
              {timelineMilestones.map((item, index) => {
                const IconComponent = MILESTONE_ICONS[item.id] || Code2;
                const isEven = index % 2 === 0;
                const isRevealed = revealedNodes.has(index);
                const isActiveMarker = index <= activeIndex;
                const isCurrentActive = index === activeIndex;
                const isFormalEducation = item.type === 'education';

                return (
                  <div
                    key={item.id}
                    ref={(el) => (nodeRefs.current[index] = el)}
                    data-index={index}
                    className={`timeline-tree-node ${isEven ? 'node-left' : 'node-right'} ${
                      isRevealed ? 'is-revealed' : ''
                    } ${isCurrentActive ? 'node-current' : ''}`}
                  >
                    {/* Pin Node with Marker and Ring */}
                    <div
                      className={`timeline-node-pin ${isActiveMarker ? 'active' : ''} ${
                        isFormalEducation ? 'pin-education' : 'pin-learning'
                      }`}
                      aria-hidden="true"
                    >
                      <IconComponent size={15} />
                      <span className="pin-pulse" />
                    </div>

                    {/* Milestone Content Card */}
                    <article
                      className={`timeline-node-card ${isFormalEducation ? 'card-education' : 'card-learning'} ${
                        isCurrentActive ? 'card-current' : ''
                      }`}
                    >
                      <div className="timeline-node-header">
                        <span
                          className={`scaffold-tag ${
                            isFormalEducation ? 'tag-education' : 'tag-learning'
                          }`}
                        >
                          {item.badge}
                        </span>
                        <span className="timeline-year-pill">{item.year}</span>
                      </div>

                      <h3 className="timeline-node-title">{item.title}</h3>
                      <p className="timeline-node-org">{item.institution}</p>
                      <p className="timeline-node-desc">{item.description}</p>

                      <div className="timeline-node-footer">
                        <span className="timeline-score-pill">
                          <CheckCircle2 size={12} aria-hidden="true" />
                          <span>{item.score}</span>
                        </span>
                        <span className="timeline-type-label">
                          {isFormalEducation ? 'Formal Education' : 'Self-Directed Learning'}
                        </span>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, BookOpen, Code2, Server, Database, Layers, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { profileData } from '../../data/profileData';

const MILESTONE_ICONS = {
  'milestone-1': BookOpen,
  'milestone-2': GraduationCap,
  'milestone-3': Award,
  'milestone-4': GraduationCap,
  'milestone-5': Code2,
  'milestone-6': Server,
  'milestone-7': Database,
  'milestone-8': Layers
};

/**
 * Animated Education & Learning Timeline
 * Progressive line drawing animation as user scrolls down,
 * IntersectionObserver-based milestone reveals, active node illumination,
 * and responsive mobile layout.
 */
export function Timeline() {
  const { timelineMilestones } = profileData;
  const containerRef = useRef(null);
  const [activeIndices, setActiveIndices] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return new Set(timelineMilestones.map((_, i) => i));
    }
    return new Set([0]);
  });
  const [progressHeight, setProgressHeight] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return 100;
    }
    return 0;
  });

  useEffect(() => {
    // Check reduced motion
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const nodeElements = containerRef.current?.querySelectorAll('.timeline-tree-node');
    if (!nodeElements || nodeElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setActiveIndices((prev) => {
              const updated = new Set(prev);
              updated.add(index);
              return updated;
            });
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -15% 0px'
      }
    );

    nodeElements.forEach((el) => observer.observe(el));

    // Calculate dynamic line progress height based on active elements
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Start calculating when container enters upper half of viewport
      const totalHeight = rect.height;
      const visibleScrolled = Math.max(0, viewportHeight * 0.65 - rect.top);
      const percentage = Math.min(100, Math.max(0, (visibleScrolled / totalHeight) * 100));

      setProgressHeight(percentage);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [timelineMilestones]);

  return (
    <section id="timeline" className="section-wrapper" aria-labelledby="timeline-title">
      <div className="container" ref={containerRef}>
        <SectionHeading
          id="timeline-title"
          eyebrow="02 // EDUCATION & TIMELINE"
          title="Education & Learning Journey"
          subtitle="Academic trajectory at VJTI with Cybersecurity minor, foundational schooling, entrance exam achievements, and core software milestones."
        />

        <div className="learning-timeline-wrapper">
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
              const IconComponent = MILESTONE_ICONS[item.id] || Sparkles;
              const isEven = index % 2 === 0;
              const isActive = activeIndices.has(index);

              return (
                <div
                  key={item.id}
                  data-index={index}
                  className={`timeline-tree-node ${isEven ? 'node-left' : 'node-right'} ${isActive ? 'is-visible' : ''}`}
                >
                  {/* Pin Node with Marker and Ring */}
                  <div className={`timeline-node-pin ${isActive ? 'active' : ''}`} aria-hidden="true">
                    <IconComponent size={15} />
                    <span className="pin-pulse" />
                  </div>

                  {/* Milestone Content Card */}
                  <article className="timeline-node-card">
                    <div className="timeline-node-header">
                      <span className="scaffold-tag" style={{ color: 'var(--accent-blue)' }}>
                        {item.badge}
                      </span>
                      <span className="timeline-score-pill">{item.score}</span>
                    </div>

                    <h3 className="timeline-node-title">{item.title}</h3>
                    <p className="timeline-node-org">{item.institution}</p>
                    <p className="timeline-node-desc">{item.description}</p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';

/**
 * useScrollSpy
 * Observes section elements on the page and returns the id of the currently active section.
 * Uses IntersectionObserver for smooth performance without scroll event throttling issues.
 * 
 * @param {string[]} sectionIds - List of DOM element IDs to observe
 * @param {string} defaultSection - Fallback active section ID
 * @returns {string} activeSection - Current active section ID
 */
export function useScrollSpy(sectionIds, defaultSection = 'home') {
  const [activeSection, setActiveSection] = useState(defaultSection);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const observers = [];
    const visibleMap = new Map();

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        visibleMap.set(entry.target.id, entry.isIntersecting);
      });

      // Find the first intersecting section according to the ordered list
      for (const id of sectionIds) {
        if (visibleMap.get(id)) {
          setActiveSection(id);
          break;
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      // Target the viewport area between 20% from the top and 40% from the bottom
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.1
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observers.push(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}

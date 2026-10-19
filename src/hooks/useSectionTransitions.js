import { useEffect } from 'react';

/**
 * useSectionTransitions
 * Manages restrained bottom-to-top entrance reveals for anchor-linked sections.
 * 
 * Key Principles:
 * - Does not fake full page transitions on every scroll.
 * - Animates incoming sections from 24px below with a 500ms ease-out curve.
 * - Staggers headings, toolbars, and cards.
 * - Once a section is revealed, unobserves it so scrolling back-and-forth does not refire animations.
 * - Respects prefers-reduced-motion by revealing all content instantly with zero translateY.
 * - Seamlessly supports direct URL loading, refreshes, and browser back/forward history.
 */
export function useSectionTransitions() {
  useEffect(() => {
    // 1. Reduced motion check
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const sections = Array.from(document.querySelectorAll('.section-wrapper, .hero-section'));

    if (prefersReduced) {
      sections.forEach((sec) => sec.classList.add('is-revealed'));
      return;
    }

    // 2. Identify initial target from URL hash
    const initialHash = window.location.hash.replace('#', '');

    // 3. Create IntersectionObserver for single-shot entry reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target); // Single-shot: prevent repeated firing on scroll back
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    sections.forEach((sec) => {
      // Hero (#home) or initial URL hash target is revealed immediately
      if (sec.id === 'home' || sec.classList.contains('hero-section') || (initialHash && sec.id === initialHash)) {
        sec.classList.add('is-revealed');
      } else {
        observer.observe(sec);
      }
    });

    // 4. Handle browser back/forward and hash changes
    const handleHashChange = () => {
      const currentHash = window.location.hash.replace('#', '');
      if (currentHash) {
        const target = document.getElementById(currentHash);
        if (target) {
          target.classList.add('is-revealed');
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
}

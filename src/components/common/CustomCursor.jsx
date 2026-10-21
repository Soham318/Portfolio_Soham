import { useEffect, useState, useRef } from 'react';

/**
 * CustomCursor
 * Smooth desktop cursor featuring a glowing center dot and an outer trailing spring ring.
 * Highlights smoothly over links, buttons, chips, and cards.
 * Automatically disabled on touch/coarse pointers and under reduced-motion settings.
 */
export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // Position references for lerp (smooth linear interpolation)
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // 1. Disable immediately on touch/coarse devices
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);

      // Instantly position the center dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    // Detect hover over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target || !(target instanceof Element)) return;

      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, .tech-tile, .skill-chip, .project-mockup-trigger, .scaffold-card, .timeline-node-card, .milestone-dot-btn, .sticky-year-card, .project-editorial-card'
      );

      if (interactive) {
        setIsHovered(true);
        if (target.closest('input, textarea, select')) {
          setIsInput(true);
        } else {
          setIsInput(false);
        }
      } else {
        setIsHovered(false);
        setIsInput(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    // Smooth lerp loop for the trailing outer ring
    const render = () => {
      // Interpolate ring toward mouse position (ease factor 0.18)
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // Touch or reduced-motion devices return null
  if (typeof window !== 'undefined' && window.matchMedia) {
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return null;
    }
  }

  return (
    <div
      className={`custom-cursor-wrapper ${isVisible ? 'visible' : ''} ${isHovered ? 'hovered' : ''} ${isInput ? 'input-hover' : ''} ${isClicked ? 'clicked' : ''}`}
      aria-hidden="true"
    >
      {/* Center glowing dot */}
      <div ref={dotRef} className="cursor-dot" />

      {/* Trailing smooth ring */}
      <div ref={ringRef} className="cursor-ring">
        <div className="cursor-ring-corners" />
      </div>
    </div>
  );
}

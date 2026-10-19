import { useEffect, useState } from 'react';

/**
 * useScrollProgress
 * Returns the scroll progress percentage (0 - 100) and whether scroll position is past threshold.
 * 
 * @param {number} threshold - Scroll Y threshold in px for toggling visibility states
 * @returns {{ progress: number, isScrolledPast: boolean }}
 */
export function useScrollProgress(threshold = 300) {
  const [progress, setProgress] = useState(0);
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          
          const currentProgress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
          setProgress(Math.round(currentProgress));
          setIsScrolledPast(scrollTop > threshold);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call once initially to set starting state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { progress, isScrolledPast };
}

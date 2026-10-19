import { ArrowUp } from 'lucide-react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

/**
 * BackToTop
 * Provides user control to quickly return to the top of the interface.
 * Fulfills HCI Principle 5: User Control and Freedom.
 */
export function BackToTop() {
  const { isScrolledPast } = useScrollProgress(350);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      className={`back-to-top-btn ${isScrolledPast ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top of page"
      title="Back to top"
      tabIndex={isScrolledPast ? 0 : -1}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}

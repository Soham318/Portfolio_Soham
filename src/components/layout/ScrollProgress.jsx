import { useScrollProgress } from '../../hooks/useScrollProgress';

/**
 * ScrollProgress
 * Visual feedback for reading depth across the long-form interactive portfolio.
 * Fulfills HCI Principle 3: Feedback and System Status.
 */
export function ScrollProgress() {
  const { progress } = useScrollProgress();

  return (
    <div
      className="scroll-progress-container"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="scroll-progress-bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

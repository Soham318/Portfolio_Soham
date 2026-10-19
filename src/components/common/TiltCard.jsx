import { useRef, useState, useCallback } from 'react';

/**
 * TiltCard
 * Provides subtle 3D card tilt and cursor-follow spotlight on desktop pointers.
 * Safe for touch screens (early returns), keyboard navigation, and reduced-motion preferences.
 */
export function TiltCard({
  children,
  className = '',
  style = {},
  maxTilt = 5,
  ...props
}) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50, opacity: 0 });

  const handlePointerMove = useCallback((e) => {
    // Exclude touch pointers so touch scrolling is completely unaffected
    if (e.pointerType === 'touch') return;

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = x / rect.width;
    const yPct = y / rect.height;

    // Constrain tilt to gentle angles
    const rotX = ((0.5 - yPct) * maxTilt).toFixed(2);
    const rotY = ((xPct - 0.5) * maxTilt).toFixed(2);

    setTransformStyle(`perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`);
    setSpotlightPos({
      x: (xPct * 100).toFixed(1),
      y: (yPct * 100).toFixed(1),
      opacity: 1
    });
  }, [maxTilt]);

  const handlePointerLeave = useCallback(() => {
    setTransformStyle('');
    setSpotlightPos((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      className={`tilt-card-wrapper ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        ...style,
        transform: transformStyle || undefined,
        '--card-spotlight-x': `${spotlightPos.x}%`,
        '--card-spotlight-y': `${spotlightPos.y}%`,
        '--card-spotlight-opacity': spotlightPos.opacity
      }}
      {...props}
    >
      <div className="card-ambient-spotlight" aria-hidden="true" />
      {children}
    </div>
  );
}

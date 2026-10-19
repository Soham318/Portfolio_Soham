/**
 * TechIcon
 * Recognizable, crisp vector SVG logos for all 28 verified technologies
 * across Languages, Frontend, Backend & APIs, Databases, AI & ML, and Tools.
 */

export function TechIcon({ name, size = 28, className = '' }) {
  const norm = (name || '').toLowerCase().trim();

  // 1. Languages
  if (norm === 'c') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <path fill="#00599C" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7s-2.3.3-3.1.7L12.6 30.7c-1.7 1-2.6 2.8-2.6 4.8v57c0 2 1 3.8 2.6 4.8l48.3 27.9c.8.5 1.9.7 3.1.7s2.3-.3 3.1-.7l48.3-27.9c1.7-1 2.6-2.8 2.6-4.8v-57c0-2-1-3.8-2.6-4.8z" />
        <path fill="#FFF" d="M64 24.2c-22 0-39.8 17.8-39.8 39.8S42 103.8 64 103.8c15.1 0 28.2-8.4 34.9-20.7l-15.6-9c-4 7.4-11.8 12.4-20.8 12.4-12.9 0-23.4-10.5-23.4-23.4S49.6 40.7 62.5 40.7c9 0 16.8 5 20.8 12.4l15.6-9C92.2 32.6 79.1 24.2 64 24.2z" />
      </svg>
    );
  }

  if (norm === 'c++') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <path fill="#00599C" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7s-2.3.3-3.1.7L12.6 30.7c-1.7 1-2.6 2.8-2.6 4.8v57c0 2 1 3.8 2.6 4.8l48.3 27.9c.8.5 1.9.7 3.1.7s2.3-.3 3.1-.7l48.3-27.9c1.7-1 2.6-2.8 2.6-4.8v-57c0-2-1-3.8-2.6-4.8z" />
        <path fill="#FFF" d="M54 36c-15.5 0-28 12.5-28 28s12.5 28 28 28c10.6 0 19.8-5.9 24.5-14.6l-11-6.4c-2.8 5.2-8.3 8.7-14.6 8.7-9.1 0-16.5-7.4-16.5-16.5S43.8 48.7 52.9 48.7c6.3 0 11.8 3.5 14.6 8.7l11-6.4C73.8 41.9 64.6 36 54 36z" />
        <path fill="#00D8FF" d="M84 60h4v-4h4v4h4v4h-4v4h-4v-4h-4v-4zm18 0h4v-4h4v4h4v4h-4v4h-4v-4h-4v-4z" />
      </svg>
    );
  }

  if (norm === 'python') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <path fill="#3776AB" d="M63.6 5.8c-26.6 0-25 11.5-25 11.5l.1 11.9h25.5v3.6H29.1S13 31 13 57.4c0 26.5 14.1 25.6 14.1 25.6h8.4v-11.8s-.5-14.1 13.9-14.1h24s13.3.2 13.3-12.9V20.1s1.9-14.3-23.1-14.3zm-13.6 7.4c2.5 0 4.6 2 4.6 4.6s-2 4.6-4.6 4.6-4.6-2-4.6-4.6 2.1-4.6 4.6-4.6z" />
        <path fill="#FFD438" d="M64.4 122.2c26.6 0 25-11.5 25-11.5l-.1-11.9H63.8v-3.6h35.1s16.1 1.8 16.1-24.6c0-26.5-14.1-25.6-14.1-25.6h-8.4v11.8s.5 14.1-13.9 14.1h-24s-13.3-.2-13.3 12.9v24.1s-1.9 14.4 23.1 14.4zm13.6-7.4c-2.5 0-4.6-2-4.6-4.6s2-4.6 4.6-4.6 4.6 2 4.6 4.6-2.1 4.6-4.6 4.6z" />
      </svg>
    );
  }

  if (norm === 'javascript' || norm === 'js') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <rect width="128" height="128" rx="16" fill="#F7DF1E" />
        <path fill="#000" d="M67.3 100.8c3.2 5.3 7.8 9.2 15.6 9.2 6.5 0 10.7-3.2 10.7-7.7 0-5.3-4.3-7.3-11.4-10.4l-3.9-1.7c-11.4-4.8-19-10.9-19-23.7 0-11.7 9-20.7 23.2-20.7 10.1 0 17.5 3.5 22.7 12.8l-10.9 7c-2.5-4.5-5.3-6.4-11.5-6.4-5.3 0-8.9 3.4-8.9 7.4 0 4.6 3.6 6.5 10.1 9.3l3.9 1.7c13.3 5.7 20.7 11.5 20.7 24.8 0 14.3-11.1 21.6-26.3 21.6-14.7 0-23.8-6.9-28.1-16.1l13.1-6.8zm-39.7 1.4l12.7-7.8c2.8 4.7 5.3 8.7 10.8 8.7 5.6 0 9.2-2.3 9.2-11.2V46.6h15.9v45.2c0 17.4-10.2 25.1-24.8 25.1-13.1 0-20.8-6.9-24.8-14.7z" />
      </svg>
    );
  }

  if (norm === 'sql') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <rect width="128" height="128" rx="16" fill="#1E293B" />
        <ellipse cx="64" cy="32" rx="38" ry="14" fill="#00F0FF" opacity="0.85" />
        <path fill="none" stroke="#00F0FF" strokeWidth="6" d="M26 32v28c0 7.7 17 14 38 14s38-6.3 38-14V32" />
        <path fill="none" stroke="#00F0FF" strokeWidth="6" d="M26 60v28c0 7.7 17 14 38 14s38-6.3 38-14V60" />
        <path fill="#38BDF8" d="M52 108l24-12v12l-24 12z" opacity="0.8" />
      </svg>
    );
  }

  // 2. Frontend
  if (norm === 'html' || norm === 'html5') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <path fill="#E34F26" d="M19.1 112.5L9.6 6h108.8l-9.5 106.5L63.8 122l-44.7-9.5z" />
        <path fill="#EF652A" d="M64 113.8l37.2-7.9 7.8-87.9H64v95.8z" />
        <path fill="#EBEBEB" d="M64 51.5H46.8l-1.2-13.4H64V24.8H31.3l3.6 40.1H64V51.5zm0 35.8l-.2.1-15.8-4.3-1-11.4H33.6l2 22.3 28.4 7.9V87.3z" />
        <path fill="#FFF" d="M63.9 51.5h17.2l-1.6 18.2-15.6 4.2v13.5l28.4-7.9 3.6-41.4H63.9V51.5zm0-26.7v13.3h33.8l1.2-13.3H63.9z" />
      </svg>
    );
  }

  if (norm === 'css' || norm === 'css3') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <path fill="#1572B6" d="M19.1 112.5L9.6 6h108.8l-9.5 106.5L63.8 122l-44.7-9.5z" />
        <path fill="#33A9DC" d="M64 113.8l37.2-7.9 7.8-87.9H64v95.8z" />
        <path fill="#EBEBEB" d="M64 51.7H46.8l-1.2-13.4H64V25H31.3l3.6 40.1H64V51.7zm0 35.7l-.2.1-15.8-4.3-1-11.4H33.6l2 22.3 28.4 7.9V87.4z" />
        <path fill="#FFF" d="M64 51.7h17.2l-1.6 18.2-15.6 4.2v13.5l28.4-7.9 3.6-41.4H64V51.7zm0-26.7v13.3h33.8l1.2-13.3H64z" />
      </svg>
    );
  }

  if (norm === 'react') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <ellipse cx="64" cy="64" rx="14" ry="14" fill="#00F0FF" />
        <ellipse cx="64" cy="64" rx="48" ry="18" fill="none" stroke="#00F0FF" strokeWidth="6" />
        <ellipse cx="64" cy="64" rx="48" ry="18" fill="none" stroke="#00F0FF" strokeWidth="6" transform="rotate(60 64 64)" />
        <ellipse cx="64" cy="64" rx="48" ry="18" fill="none" stroke="#00F0FF" strokeWidth="6" transform="rotate(120 64 64)" />
      </svg>
    );
  }

  // 3. Backend & APIs
  if (norm === 'node.js' || norm === 'node') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <path fill="#339933" d="M64 8.5L14.7 37v57L64 122.5l49.3-28.5v-57L64 8.5zm27.8 72.8c-1.8 3.5-5.3 5.4-9.6 5.4-5.2 0-8.9-3.2-8.9-8.7V53.2h6.5v24.5c0 2.2 1.3 3.4 3.1 3.4 2.1 0 3.8-1.5 4.7-3.9v-24h6.5v32.1h-2.3v-4zm-22.6-9.1c0 8.8-6.1 14.6-15.1 14.6-9 0-15.1-5.8-15.1-14.6 0-8.8 6.1-14.6 15.1-14.6s15.1 5.8 15.1 14.6zm-6.6 0c0-5.4-3.5-9.1-8.5-9.1s-8.5 3.7-8.5 9.1c0 5.4 3.5 9.1 8.5 9.1s8.5-3.7 8.5-9.1z" />
      </svg>
    );
  }

  if (norm === 'express.js' || norm === 'express') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <rect width="128" height="128" rx="20" fill="#111B30" stroke="#00F0FF" strokeWidth="4" />
        <text x="64" y="78" fill="#FFFFFF" fontFamily="sans-serif" fontSize="42" fontWeight="bold" textAnchor="middle">
          ex
        </text>
      </svg>
    );
  }

  if (norm === 'fastapi') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <circle cx="64" cy="64" r="54" fill="#05998B" />
        <path fill="#FFF" d="M68 20L34 70h26l-8 38 42-56H64l8-32z" />
      </svg>
    );
  }

  if (norm === 'rest apis' || norm === 'rest api' || norm === 'rest') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <rect width="128" height="128" rx="16" fill="#0F172A" />
        <circle cx="36" cy="64" r="14" fill="#00F0FF" />
        <circle cx="92" cy="40" r="12" fill="#38BDF8" />
        <circle cx="92" cy="88" r="12" fill="#818CF8" />
        <path fill="none" stroke="#00F0FF" strokeWidth="5" strokeDasharray="4 4" d="M48 58l34-14M48 70l34 14" />
      </svg>
    );
  }

  if (norm === 'jwt authentication' || norm === 'jwt') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <circle cx="64" cy="64" r="54" fill="#1E293B" stroke="#D63AFF" strokeWidth="4" />
        <path fill="#FB015B" d="M64 18a46 46 0 0 0-38 20l18 12a26 26 0 0 1 20-10z" />
        <path fill="#00B9F1" d="M102 38a46 46 0 0 0-38-20v22a26 26 0 0 1 20 10z" />
        <path fill="#D63AFF" d="M102 90a46 46 0 0 0 8-26H88a26 26 0 0 1-6 14z" />
        <circle cx="64" cy="64" r="12" fill="#FFFFFF" />
      </svg>
    );
  }

  if (norm === 'multer') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <rect width="128" height="128" rx="16" fill="#182234" />
        <path fill="#F59E0B" d="M64 24l36 22v42l-36 22-36-22V46z" />
        <path fill="#FCD34D" d="M64 24l36 22-36 20-36-20z" opacity="0.6" />
        <path fill="#FFF" d="M64 48v36M50 62l14-14 14 14" stroke="#FFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // 4. Databases
  if (norm === 'mongodb') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <path fill="#47A248" d="M64 12c-4 18-28 42-28 66 0 24 16 42 28 46 12-4 28-22 28-46 0-24-24-48-28-66z" />
        <path fill="#4DB33D" d="M64 12v112c12-4 28-22 28-46 0-24-24-48-28-66z" />
        <path fill="#3FA037" d="M64 18v104c-1.5 0-3-.5-4.5-1.5C47.2 113.8 36 97.4 36 78c0-22 24-44 28-60z" />
      </svg>
    );
  }

  if (norm === 'sqlite') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <rect width="128" height="128" rx="16" fill="#003B57" />
        <path fill="#00F0FF" d="M96 38c0-8-14-14-32-14S32 30 32 38c0 2.5 1.5 5 4.5 7l27.5 45v-20l-14-14c12-4 30-4 46 2z" />
        <path fill="#FFF" d="M64 28c14 0 24 4 24 8s-10 8-24 8-24-4-24-8 10-8 24-8z" />
      </svg>
    );
  }

  // 5. AI & Machine Learning
  if (norm === 'pytorch') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <path fill="#EE4C2C" d="M64 16a44 44 0 1 0 32 74l-9-9a31 31 0 1 1-23-53V16z" />
        <circle cx="82" cy="38" r="8" fill="#EE4C2C" />
      </svg>
    );
  }

  if (norm === 'scikit-learn' || norm === 'sklearn') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <circle cx="64" cy="64" r="54" fill="#0E1726" stroke="#F89939" strokeWidth="4" />
        <path fill="#3499CD" d="M64 18a46 46 0 0 0-46 46h46V18z" />
        <path fill="#F89939" d="M64 64h46a46 46 0 0 0-46-46v46zm0 0v46a46 46 0 0 0 46-46H64z" />
      </svg>
    );
  }

  if (norm === 'numpy') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <rect width="128" height="128" rx="16" fill="#013243" />
        <path fill="#4DABCF" d="M30 42l34-20 34 20v44l-34 20-34-20V42z" />
        <path fill="#FFF" d="M46 54v24l12-16v16h8V54L54 70V54z" />
      </svg>
    );
  }

  if (norm === 'pandas') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <rect width="128" height="128" rx="16" fill="#150458" />
        <rect x="36" y="32" width="12" height="64" rx="4" fill="#FFD43B" />
        <rect x="58" y="44" width="12" height="52" rx="4" fill="#E70488" />
        <rect x="80" y="24" width="12" height="72" rx="4" fill="#00F0FF" />
      </svg>
    );
  }

  // 6. Developer Tools & Environment
  if (norm === 'git') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <path fill="#F05032" d="M123.5 56.6L71.4 4.5a10.4 10.4 0 0 0-14.7 0L42.5 18.7l18.6 18.6a12.3 12.3 0 0 1 15.6 15.6l17.9 17.9a12.3 12.3 0 1 1-7.4 7.4L70.4 61.4v22.4a12.4 12.4 0 1 1-10.4 0V59.8a12.3 12.3 0 0 1-6.7-16.1L35.2 25.5 4.5 56.2a10.4 10.4 0 0 0 0 14.7l52.1 52.1a10.4 10.4 0 0 0 14.7 0l52.2-52.1c4-4 4-10.4 0-14.3z" />
      </svg>
    );
  }

  if (norm === 'github') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M64 5.3C29.7 5.3 2 33 2 67.3c0 27.4 17.8 50.7 42.4 58.9 3.1.6 4.2-1.3 4.2-3 0-1.5-.1-6.5-.1-11.8-17.2 3.8-20.9-7.3-20.9-7.3-2.8-7.2-6.9-9.1-6.9-9.1-5.6-3.9.4-3.8.4-3.8 6.2.4 9.5 6.4 9.5 6.4 5.5 9.5 14.5 6.8 18 5.2.6-4 2.2-6.8 4-8.3-13.8-1.6-28.2-6.9-28.2-30.7 0-6.8 2.4-12.3 6.4-16.6-.6-1.6-2.8-7.9.6-16.4 0 0 5.2-1.7 17.1 6.4a59.4 59.4 0 0 1 31.1 0c11.9-8.1 17.1-6.4 17.1-6.4 3.4 8.5 1.2 14.8.6 16.4 4 4.3 6.4 9.8 6.4 16.6 0 23.9-14.5 29.1-28.3 30.6 2.3 2 4.3 5.8 4.3 11.7 0 8.5-.1 15.3-.1 17.4 0 1.7 1.1 3.7 4.3 3 24.6-8.2 42.4-31.4 42.4-58.8 0-34.3-27.7-62-62-62z" />
      </svg>
    );
  }

  if (norm === 'vs code' || norm === 'vscode') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <path fill="#007ACC" d="M96.6 122.9l24.9-12.1c4.4-2.1 6.5-6.7 6.5-11.3V28.5c0-4.6-2.1-9.2-6.5-11.3L96.6 5.1c-4.1-2-9-1.2-12.3 2.1L45.4 42.9 23.8 26.5c-3.1-2.4-7.4-2.1-10.2.7L2.4 38.4c-3.2 3.2-3.2 8.4 0 11.6l20.4 19.3L2.4 88.6c-3.2 3.2-3.2 8.4 0 11.6l11.2 11.2c2.8 2.8 7.1 3.1 10.2.7l21.6-16.4 38.9 35.7c3.3 3.3 8.2 4.1 12.3 2.1l-.1-.6zM88 41.5L52.8 69.3 88 97.1V41.5z" />
      </svg>
    );
  }

  if (norm === 'vite') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <path fill="url(#vite-grad)" d="M121 21L66 122c-1.3 2.4-4.7 2.4-6 0L7 21c-1.4-2.6.4-5.8 3.3-5.8h107.4c2.9 0 4.7 3.2 3.3 5.8z" />
        <path fill="#FFD43B" d="M72 12l-34 46h24l-8 38 42-56H70l8-28z" />
        <defs>
          <linearGradient id="vite-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#41D1FF" />
            <stop offset="100%" stopColor="#BD34FE" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (norm === 'linux') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <path fill="#FCC624" d="M64 8c-18 0-30 14-30 32 0 14 6 24 10 32-10 6-22 18-22 34 0 12 18 14 42 14s42-2 42-14c0-16-12-28-22-34 4-8 10-18 10-32 0-18-12-32-30-32z" />
        <circle cx="54" cy="34" r="5" fill="#000" />
        <circle cx="74" cy="34" r="5" fill="#000" />
        <path fill="#E65100" d="M64 42c-6 0-10 6-10 10s4 6 10 6 10-2 10-6-4-10-10-10z" />
      </svg>
    );
  }

  if (norm === 'vercel') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <path fill="currentColor" d="M64 16l56 96H8z" />
      </svg>
    );
  }

  if (norm === 'jupyter notebook' || norm === 'jupyter') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <path fill="#F37626" d="M64 34c-22 0-40 8-40 18s18 18 40 18 40-8 40-18-18-18-40-18zm0 28c-18 0-32-5-32-10s14-10 32-10 32 5 32 10-14 10-32 10z" />
        <circle cx="28" cy="24" r="7" fill="#6E6E6E" />
        <circle cx="100" cy="46" r="6" fill="#6E6E6E" />
        <circle cx="34" cy="88" r="8" fill="#F37626" />
      </svg>
    );
  }

  if (norm === 'google colab' || norm === 'colab') {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className} aria-hidden="true">
        <path fill="#F9AB00" d="M42 40c-13.3 0-24 10.7-24 24s10.7 24 24 24c10.4 0 19.3-6.6 22.6-16H52c-2.4 4.8-7.4 8-13 8-8.3 0-15-6.7-15-15s6.7-15 15-15c5.6 0 10.6 3.2 13 8h12.6c-3.3-9.4-12.2-16-22.6-16z" />
        <path fill="#E8710A" d="M86 40c-10.4 0-19.3 6.6-22.6 16H76c2.4-4.8 7.4-8 13-8 8.3 0 15 6.7 15 15s-6.7 15-15 15c-5.6 0-10.6-3.2-13-8H50.4c3.3 9.4 12.2 16 22.6 16 13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
      </svg>
    );
  }

  // Consistent Fallback Icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

import { useEffect, useState } from 'react';
import '@/styles/LaunchGate.css';

// TODO: remove after launch celebration window closes.
// To re-show the gate (testing or a second celebration): visit the site with #relaunch
// e.g. https://slaai.example/#relaunch — it wipes the stored flag and reloads the gate.
// To wipe manually from devtools: localStorage.removeItem('slaai-launched')

const STORAGE_KEY = 'slaai-launched';
const RESET_HASH = '#relaunch';
const CONFETTI_COLORS = ['#8B1A4A', '#C4943A', '#C4325A']; // crimson, gold, crimson-light
const CONFETTI_COUNT = 500;
const EXIT_MS = 7800;

function readInitialState() {
  if (typeof window === 'undefined') return { launched: false, resetRequested: false };
  const resetRequested = window.location.hash === RESET_HASH;
  if (resetRequested) {
    window.localStorage.removeItem(STORAGE_KEY);
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
    return { launched: false, resetRequested: true };
  }
  return { launched: window.localStorage.getItem(STORAGE_KEY) === '1', resetRequested: false };
}

function buildConfetti() {
  const fallDistance = (typeof window !== 'undefined' ? window.innerHeight : 800) + 200;
  return Array.from({ length: CONFETTI_COUNT }, (_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 320 + Math.random() * 1050; // burst radius in px — large enough to reach screen edges
    const burstX = Math.cos(angle) * speed;
    const burstY = Math.sin(angle) * speed;
    return {
      id: i,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      delay: Math.random() * 500,
      duration: 5200 + Math.random() * 3800,
      burstX,
      burstY,
      endX: burstX + (Math.random() - 0.5) * 360,
      endY: fallDistance,
      rotate: (Math.random() - 0.5) * 1080,
      size: 11 + Math.random() * 14,
      ratio: 0.35 + Math.random() * 0.85,
    };
  });
}

export default function LaunchGate() {
  const [{ launched }, setState] = useState(readInitialState);
  const [phase, setPhase] = useState('idle'); // idle | celebrating | exiting
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    if (phase !== 'celebrating') return;
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const fadeStart = reduced ? 80 : 5400;
    const fade = setTimeout(() => setPhase('exiting'), fadeStart);
    const done = setTimeout(() => {
      window.localStorage.setItem(STORAGE_KEY, '1');
      setState({ launched: true, resetRequested: false });
    }, EXIT_MS);
    return () => {
      clearTimeout(fade);
      clearTimeout(done);
    };
  }, [phase]);

  if (launched) return null;

  const handleLaunch = () => {
    if (phase !== 'idle') return;
    setConfetti(buildConfetti());
    setPhase('celebrating');
  };

  return (
    <div
      className={`launch-gate launch-gate--${phase}`}
      role="dialog"
      aria-modal="true"
      aria-label="Site launch"
    >
      <div className="launch-gate__panel">
        <p className="launch-gate__eyebrow">SLAAI Student Chapter</p>
        <h1 className="launch-gate__title">We're live.</h1>
        <p className="launch-gate__subtitle">
          Tap the button to step inside — and bring a little celebration with you.
        </p>
        <button
          type="button"
          className="launch-gate__button"
          onClick={handleLaunch}
          disabled={phase !== 'idle'}
        >
          {phase === 'idle' ? 'Launch the site' : 'Welcome'}
        </button>
      </div>

      {confetti.length > 0 && (
        <div className="launch-gate__confetti" aria-hidden="true">
          {confetti.map(p => (
            <span
              key={p.id}
              className="launch-gate__piece"
              style={{
                background: p.color,
                width: `${p.size}px`,
                height: `${p.size * p.ratio}px`,
                animationDelay: `${p.delay}ms`,
                animationDuration: `${p.duration}ms`,
                '--burst-x': `${p.burstX}px`,
                '--burst-y': `${p.burstY}px`,
                '--end-x': `${p.endX}px`,
                '--end-y': `${p.endY}px`,
                '--rotate': `${p.rotate}deg`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

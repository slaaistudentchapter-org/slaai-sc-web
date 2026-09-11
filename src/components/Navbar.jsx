import { useEffect, useRef, useState } from 'react';
import slaaiLogo from '@/assets/logo/slaai-v2-transparent.png';
import '@/styles/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <div className="nav-wrapper">
      <nav>
        <a className="nav-logo" href="#hero">
          <img className="nav-logo-mark" src={slaaiLogo} alt="" width="36" height="36" />
          <span>SLAAI Student Chapter</span>
        </a>

        <button
          ref={menuButtonRef}
          className="mobile-menu-btn"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <ul id="primary-navigation" className={`nav-links${menuOpen ? ' menu-open' : ''}`}>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#pillars" onClick={handleLinkClick}>What We Do</a></li>
          <li><a href="#latest" onClick={handleLinkClick}>Latest</a></li>
          <li>
            <a
              href="/mind-verse.html"
              className="mind-verse-teaser-link"
              aria-label="Mind Verse — coming soon"
              onClick={handleLinkClick}
            >
              <span className="mind-verse-label">Mind Verse</span>
              <span className="mind-verse-peek" aria-hidden="true">
                <small>Are you ready?</small>
                <strong>Mind Verse</strong>
                <i>Coming 2026</i>
              </span>
            </a>
          </li>
          <li><a href="#team" onClick={handleLinkClick}>Team</a></li>
          <li><a href="#subcommittee" onClick={handleLinkClick}>Committees</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          <li><a href="https://slaai.lk" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>SLAAI</a></li>
          <li><a href="#join" className="nav-cta" onClick={handleLinkClick}>Join Us</a></li>
        </ul>
      </nav>
    </div>
  );
}

import { useState } from 'react';
import '@/styles/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <div className="nav-wrapper">
      <nav>
        <a className="nav-logo" href="#hero">
          <div className="nav-logo-mark">SC</div>
          <span>SLAAI Student Chapter</span>
        </a>

        <button
          className="mobile-menu-btn"
          aria-label="Toggle Navigation"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <ul className={`nav-links${menuOpen ? ' menu-open' : ''}`}>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#pillars" onClick={handleLinkClick}>What We Do</a></li>
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

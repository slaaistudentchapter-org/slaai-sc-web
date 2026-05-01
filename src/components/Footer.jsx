import '@/styles/Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">
          SLAAI<span>Student Chapter</span>
        </div>
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#subcommittee">Committees</a></li>
          <li>
            <a href="https://slaai.lk" target="_blank" rel="noopener noreferrer">
              slaai.lk
            </a>
          </li>
        </ul>
        <div className="footer-note">
          © 2026 SLAAI Student Chapter. The student arm of the Sri Lanka Association for Artificial Intelligence.
        </div>
      </div>
    </footer>
  );
}

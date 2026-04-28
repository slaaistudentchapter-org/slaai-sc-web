import { useReveal } from '@/hooks/useReveal';
import '@/styles/Hero.css';

export default function Hero() {
  const ref = useReveal();

  return (
    <section id="hero" ref={ref}>
      <div className="hero-glow"></div>

      <div className="hero-badge reveal" style={{ transitionDelay: '0.1s' }}>
        <div className="hero-badge-dot"></div>
        <span>SLAAI Student Chapter &middot; 2026/2027</span>
      </div>

      <h1 className="reveal" style={{ transitionDelay: '0.2s' }}>
        Shaping the<br /><em>Future</em> of AI
      </h1>

      <p className="hero-tagline reveal" style={{ transitionDelay: '0.3s' }}>
        The student arm of the Sri Lanka Association for Artificial Intelligence — building the next generation of AI researchers, innovators, and leaders.
      </p>

      <div className="hero-actions reveal" style={{ transitionDelay: '0.4s' }}>
        <a href="#about" className="btn-primary">Discover More</a>
        <a href="#team" className="btn-outline">Meet the Team</a>
      </div>

      <div className="hero-bento reveal" style={{ transitionDelay: '0.5s' }}>
        <div className="hero-bento-left">
          <div className="hero-bento-tag">Established under SLAAI</div>
          <h2>Artificial Intelligence for Sri Lanka</h2>
          <p>Connecting students across Sri Lanka with the world of Artificial Intelligence — through research, events, industry partnerships, and community.</p>
        </div>
        <div className="hero-bento-right">
          <div className="bento-stat">
            <div className="stat-num">5</div>
            <div className="stat-label">Exec Members</div>
          </div>
          <div className="bento-stat">
            <div className="stat-num">5</div>
            <div className="stat-label">Subcommittees</div>
          </div>
          <div className="bento-stat">
            <div className="stat-num">10</div>
            <div className="stat-label">Sub Chairs</div>
          </div>
        </div>
      </div>
    </section>
  );
}

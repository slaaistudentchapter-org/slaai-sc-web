import '@/styles/Hero.css';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-glow"></div>

      <div className="hero-badge reveal" style={{ transitionDelay: '0.1s' }}>
        <div className="hero-badge-dot"></div>
        <span>SLAAI Student Chapter &middot; 2026/2027</span>
      </div>

      <h1 className="reveal" style={{ transitionDelay: '0.2s' }}>
        Learn, Build &amp;<br /><em>Collaborate</em> in AI
      </h1>

      <p className="hero-tagline reveal" style={{ transitionDelay: '0.3s' }}>
        Connecting Sri Lankan students with practical workshops, research opportunities, and professional networks in artificial intelligence.
      </p>

      <div className="hero-actions reveal" style={{ transitionDelay: '0.4s' }}>
        <a href="#about" className="btn-primary">Discover More</a>
        <a href="#team" className="btn-outline">Meet the Team</a>
      </div>

      <div className="hero-bento reveal" style={{ transitionDelay: '0.5s' }}>
        <div className="hero-bento-left">
          <div className="hero-bento-tag">SLAAI Student Chapter</div>
          <h2>A community for students interested in AI</h2>
          <p>Creating opportunities to learn, exchange ideas, and work with students, educators, researchers, and industry professionals.</p>
        </div>
        <div className="hero-bento-right">
          <div className="bento-focus">
            <span className="focus-index">01</span>
            <h3>School Outreach</h3>
            <p>Introducing practical learning activities to school communities.</p>
          </div>
          <div className="bento-focus">
            <span className="focus-index">02</span>
            <h3>Practical Learning</h3>
            <p>Creating workshops, demonstrations, and technical projects.</p>
          </div>
          <div className="bento-focus">
            <span className="focus-index">03</span>
            <h3>Academia × Industry</h3>
            <p>Building connections with researchers and professionals.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

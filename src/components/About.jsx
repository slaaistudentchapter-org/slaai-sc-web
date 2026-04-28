import './About.css';

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const points = [
  'Bridging the gap between student interest and professional AI practice',
  'Organising workshops, seminars, and hackathons to build real-world skills',
  'Supporting student research and publication in AI domains',
  'Fostering connections between academia and the AI industry',
  'Providing a platform for students to network, collaborate, and lead',
];

export default function About() {
  return (
    <section id="about">
      <div className="section-header reveal">
        <div className="section-label">About Us</div>
        <h2 className="section-title">The student voice of <em>Sri Lankan AI</em></h2>
      </div>

      <div className="about-bento">
        <div className="about-card about-visual-card reveal">
          <div className="about-logo-big">SLAAI</div>
          <div className="about-logo-sub">Student Chapter</div>
          <div className="about-est">Affiliated with SLAAI — Est. 2000</div>
        </div>

        <div className="about-card about-text-card reveal" style={{ transitionDelay: '0.2s' }}>
          <h3>Bridging Ambition &amp; Practice</h3>
          <p>
            The SLAAI Student Chapter is the official student arm of the Sri Lanka Association for Artificial Intelligence (SLAAI) — the national body devoted to advancing AI research, education, and industry in Sri Lanka since 2000.
          </p>
          <p>
            We bring together undergraduate and postgraduate students who are passionate about Artificial Intelligence, creating a space to learn, collaborate, and grow alongside Sri Lanka's leading AI professionals and researchers.
          </p>

          <ul className="about-list">
            {points.map((point, i) => (
              <li key={i}>
                <div className="about-list-icon"><CheckIcon /></div>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

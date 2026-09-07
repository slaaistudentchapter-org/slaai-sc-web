import slaaiLogo from '@/assets/logo/slaai-v2-transparent.png';
import '@/styles/About.css';

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
        <h2 className="section-title">Connecting students interested in <em>artificial intelligence</em></h2>
      </div>

      <div className="about-bento">
        <div className="about-card about-visual-card reveal">
          <img
            className="about-logo-image"
            src={slaaiLogo}
            alt="SLAAI Student Chapter"
            width="380"
            height="380"
          />
          <div className="about-est">SLAAI Student Chapter</div>
        </div>

        <div className="about-card about-text-card reveal" style={{ transitionDelay: '0.2s' }}>
          <h3>Bridging Ambition &amp; Practice</h3>
          <p>
            The SLAAI Student Chapter brings together undergraduate and postgraduate students who are interested in artificial intelligence and related fields.
          </p>
          <p>
            Through workshops, research activities, technical projects, and professional connections, the chapter provides a space for students to learn, collaborate, and contribute.
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

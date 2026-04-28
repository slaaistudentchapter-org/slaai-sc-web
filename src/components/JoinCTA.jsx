import '@/styles/JoinCTA.css';

export default function JoinCTA() {
  return (
    <section id="join" className="join-section">
      <div className="join-box">
        <div className="join-bg-shape"></div>
        <div className="join-content reveal">
          <div className="section-label join-label">Get Involved</div>
          <h2>
            Become part of<br />
            Sri Lanka's AI <em>student community</em>
          </h2>
          <p>
            Whether you're a researcher, a developer, or simply curious about AI — there's a place for you at the SLAAI Student Chapter.
          </p>
          <a
            href="https://slaai.lk/membership/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white"
          >
            Join SLAAI
          </a>
        </div>
      </div>
    </section>
  );
}

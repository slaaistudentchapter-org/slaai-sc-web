import '@/styles/JoinCTA.css';

export default function JoinCTA() {
  return (
    <section id="join" className="join-section">
      <div className="join-box">
        <div className="join-bg-shape"></div>
        <div className="join-content reveal">
          <div className="section-label join-label">Get Involved</div>
          <h2>
            Interested in joining<br />
            the wider <em>SLAAI community?</em>
          </h2>
          <p>
            Visit the SLAAI membership page for current membership categories, eligibility details, and application information.
          </p>
          <a
            href="https://slaai.lk/membership/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white"
          >
            Explore SLAAI Membership
          </a>
        </div>
      </div>
    </section>
  );
}

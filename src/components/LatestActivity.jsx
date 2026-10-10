import '@/styles/LatestActivity.css';

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <path d="M8 3v4m8-4v4M4 10h16M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
  </svg>
);

const VideoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <rect x="3" y="6" width="13" height="12" rx="2" />
    <path d="m16 10 5-3v10l-5-3" />
  </svg>
);

export default function LatestActivity() {
  return (
    <section id="latest" className="latest-activity">
      <div className="section-header reveal">
        <div className="section-label">Latest Activity</div>
        <h2 className="section-title">Getting <em>friendly with electronics</em></h2>
        <p className="latest-intro">
          An introductory electronics session for principals and teachers from selected schools.
        </p>
      </div>

      <article className="activity-card reveal">
        <div className="activity-visual">
          <figure className="event-photo event-photo-main">
            <img
              src="/events/friendly-with-electronics/kit-demonstration.webp"
              alt="Live demonstration of an electronic circuit built on a breadboard"
              width="1400"
              height="963"
            />
          </figure>
          <figure className="event-photo">
            <img
              src="/events/friendly-with-electronics/opening.webp"
              alt="Friendly With Electronics workshop opening presentation"
              width="1800"
              height="1169"
              loading="lazy"
            />
          </figure>
          <figure className="event-photo">
            <img
              src="/events/friendly-with-electronics/circuit-lesson.webp"
              alt="Online lesson explaining an electronic circuit in Sinhala"
              width="1400"
              height="953"
              loading="lazy"
            />
          </figure>
          <span className="activity-status"><i /> Event completed</span>
        </div>

        <div className="activity-content">
          <div className="activity-meta">
            <span><CalendarIcon /> 4 September 2026</span>
            <span><VideoIcon /> Online via Zoom</span>
          </div>

          <h3>“Friendly With Electronics” Workshop &amp; Electronic Kit Introduction</h3>
          <p>
            On 4 September 2026, the SLAAI Student Chapter conducted an online introductory
            electronics session for principals and teachers from selected schools. The programme
            introduced the chapter and provided a practical starting point for electronics
            learning in school communities.
          </p>
          <p>
            The session introduced an Electronic Kit developed by
            <strong> Prof. Asoka Karunananda</strong> and <strong>Prof. Kithsiri Jayananda</strong>{' '}
            and included a practical demonstration of its components and applications.
          </p>

          <div className="activity-highlights" aria-label="Event highlights">
            <div>
              <span>01</span>
              <p>School outreach</p>
            </div>
            <div>
              <span>02</span>
              <p>Live kit demonstration</p>
            </div>
            <div>
              <span>03</span>
              <p>Electronics learning</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

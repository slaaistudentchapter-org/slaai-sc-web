import '@/styles/Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-header reveal">
        <div className="section-label">Connect</div>
        <h2 className="section-title">Get in <em>Touch</em></h2>
        <p style={{ color: 'var(--ink-muted)', marginTop: '1rem', fontSize: '16px' }}>
          Have questions or want to collaborate? Reach out to our team directly.
        </p>
      </div>

      <div className="contact-grid reveal">
        <div className="contact-card">
          <div className="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="contact-info">
            <span className="contact-label">Email Us</span>
            <a href="mailto:info@slaaisc.lk" className="contact-link">info@slaaisc.lk</a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="contact-info">
            <span className="contact-label">Call Us</span>
            <a href="tel:+94721483648" className="contact-link">+94721483648</a>
          </div>
        </div>
      </div>
    </section>
  );
}

import '@/styles/Team.css';

// Row 1: President + VP
const topRow = [
  { initials: 'ST', role: 'President',      name: 'Shivan Tillakaratne', delay: '0s'   },
  { initials: 'ID', role: 'Vice President', name: 'Isuru Didulantha',    delay: '0.1s' },
];

// Row 2: Secretary, Treasurer, Editor
const bottomRow = [
  { initials: 'AS', role: 'Secretary',          name: 'Abinaya Subramaniam',   delay: '0.2s' },
  { initials: 'LP', role: 'Treasurer',           name: 'Lahiru Praveen',         delay: '0.3s' },
  { initials: 'PK', role: 'Editor & Web Master', name: 'Pabasara Karunarathna', delay: '0.4s' },
];

function TeamCard({ initials, role, name, delay }) {
  return (
    <div className="team-card reveal" style={{ transitionDelay: delay }}>
      <div className="team-avatar">
        <span className="avatar-initials">{initials}</span>
      </div>
      <div className="team-role">{role}</div>
      <h3 className="team-name">{name}</h3>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team">
      <div className="section-header reveal">
        <div className="section-label">Executive Committee</div>
        <h2 className="section-title">Leadership <em>2026/2027</em></h2>
        <p style={{ color: 'var(--ink-muted)', marginTop: '1rem', fontSize: '16px' }}>
          The elected executive committee driving the chapter's vision, strategy and day-to-day operations.
        </p>
      </div>

      {/* Row 1 — President & Vice President */}
      <div className="team-row team-row-2">
        {topRow.map(m => <TeamCard key={m.name} {...m} />)}
      </div>

      {/* Row 2 — Secretary, Treasurer, Editor */}
      <div className="team-row team-row-3">
        {bottomRow.map(m => <TeamCard key={m.name} {...m} />)}
      </div>
    </section>
  );
}

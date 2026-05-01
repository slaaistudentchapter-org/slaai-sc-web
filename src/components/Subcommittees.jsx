import '@/styles/Subcommittees.css';

const committees = [
  {
    name: 'Research & Publications',
    members: [
      { initials: 'AR', name: 'Ann Rathnayaka' },
      { initials: 'AS', name: 'Ashani Sansala' },
    ],
    delay: '0s',
  },
  {
    name: 'Industry Relations',
    members: [
      { initials: 'IK', name: 'Ishara Kudagamage' },
      { initials: 'AS', name: 'Aneesah Sabar' },
    ],
    delay: '0.1s',
  },
  {
    name: 'Events & Workshops',
    members: [
      { initials: 'BP', name: 'Bhawanthi Pabasara' },
      { initials: 'GD', name: 'Giman Dissasekara' },
    ],
    delay: '0.2s',
  },
  {
    name: 'Technical Projects',
    members: [
      { initials: 'SE', name: 'Seniru Epasinghe' },
      { initials: 'CT', name: 'Chathuranga Thilakarathna' },
    ],
    delay: '0.3s',
  },
  {
    name: 'Marketing & Communications',
    members: [
      { initials: 'RH', name: 'Rashmitha Hansamal' },
      { initials: 'NT', name: 'Nithila Thawalampitiya' },
    ],
    delay: '0.4s',
  },
];

export default function Subcommittees() {
  return (
    <section id="subcommittee">
      <div className="section-header reveal">
        <div className="section-label">Subcommittee Chairpersons</div>
        <h2 className="section-title">Leading our <em>five domains</em></h2>
        <p style={{ color: 'var(--ink-muted)', marginTop: '1rem', fontSize: '16px' }}>
          Each subcommittee is co-chaired by two dedicated student leaders bringing energy and expertise to their respective domains.
        </p>
      </div>

      <div className="sub-grid">
        {committees.map(({ name, members, delay }) => (
          <div className="sub-card reveal" key={name} style={{ transitionDelay: delay }}>
            <h3>{name}</h3>
            <div className="sub-members">
              {members.map(m => (
                <div className="sub-member" key={m.name}>
                  <div className="sub-member-avatar">{m.initials}</div>
                  <span className="sub-member-name">{m.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

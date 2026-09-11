import '@/styles/MindVerse.css';

export default function MindVerse() {
  return (
    <main className="mind-verse-coming-soon">
      <div className="mv-atmosphere" aria-hidden="true">
        <span className="mv-halo halo-one" />
        <span className="mv-halo halo-two" />
        <span className="mv-orb orb-one" />
        <span className="mv-orb orb-two" />
        <span className="mv-orb orb-three" />
        <span className="mv-spark spark-one" />
        <span className="mv-spark spark-two" />
        <span className="mv-spark spark-three" />
      </div>

      <a className="mv-back" href="/"><span aria-hidden="true">←</span> Back</a>

      <section className="mv-teaser" aria-labelledby="mind-verse-title">
        <p className="mv-question">Are you ready?</p>
        <h1 id="mind-verse-title"><span>Mind</span><em>Verse</em></h1>
        <div className="mv-signal" aria-hidden="true"><span /></div>
        <p className="mv-tagline">Where ideas meet intelligence.</p>
        <div className="mv-coming">
          <span>AI Hackathon</span><i /><span>Coming 2026</span>
        </div>
      </section>

      <p className="mv-whisper">Something intelligent is taking shape.</p>
    </main>
  );
}

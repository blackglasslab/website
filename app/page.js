import Link from 'next/link';

const pillars = [
  {
    title: 'Host–pathogen interactions',
    text: 'We study how pathogens reshape tissue environments and how early host responses determine protection, injury, and recovery.',
  },
  {
    title: 'Innate immune signalling and disease mechanisms',
    text: 'Our work focuses on the signalling pathways that connect infection sensing to inflammatory damage, immune control, and longer-term pathology.',
  },
  {
    title: 'Post-acute infection syndromes',
    text: 'We investigate how acute infectious insults can leave persistent biological consequences and contribute to chronic disease trajectories.',
  },
  {
    title: 'Translational and disease-relevant models',
    text: 'We combine mechanistic experiments with disease-relevant systems to identify findings that are robust, clinically meaningful, and actionable.',
  },
];

const highlights = [
  {
    title: 'Mechanistic biology',
    text: 'Focused experimental work on pathways linking infection, inflammation, and tissue dysfunction.',
  },
  {
    title: 'Disease relevance',
    text: 'Questions are anchored in clinically meaningful problems, especially where acute infection drives longer-term consequences.',
  },
  {
    title: 'Collaborative science',
    text: 'The lab sits at the interface of infection biology, immunology, and translational disease research.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-card">
            <div>
              <span className="eyebrow">Bader Lab</span>
              <h1>Infection, innate immunity, and the mechanisms of long-term disease</h1>
              <p className="lead">
                The Bader Lab investigates how infection drives tissue injury, inflammatory responses, and long-term disease consequences. We combine mechanistic biology with disease-relevant models to understand how innate immune pathways shape host responses in infection and beyond.
              </p>
              <div className="cta-row">
                <Link href="/research" className="button">Explore research</Link>
                <Link href="/join" className="button-secondary">Join the lab</Link>
              </div>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>Research focus</strong>
                <p>Immune sensing, inflammatory tissue injury, and persistent consequences of infection.</p>
              </div>
              <div className="stat">
                <strong>Approach</strong>
                <p>Mechanistic biology paired with translational thinking and disease-relevant experimental systems.</p>
              </div>
              <div className="stat">
                <strong>Base</strong>
                <p>Center for Integrative Infectious Disease Research (CIID), Heidelberg.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-header">
            <p className="kicker">Research themes</p>
            <h2>Core questions shaping the lab’s work</h2>
            <p>
              The lab is interested in how infection leaves a biological imprint — in tissues, in inflammatory networks, and in disease trajectories that persist beyond the acute phase.
            </p>
          </div>
          <div className="research-grid">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="panel">
                <strong>{pillar.title}</strong>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-header">
            <p className="kicker">How we work</p>
            <h2>Focused, mechanism-driven, and clinically aware</h2>
          </div>
          <div className="card-grid">
            {highlights.map((item) => (
              <article key={item.title} className="highlight-card">
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Image from 'next/image';
import { researchAreas } from '../siteData';

export const metadata = {
  title: 'Research | Bader Lab',
};

const howWeWork = [
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

export default function ResearchPage() {
  return (
    <>
      <section>
        <div className="container">
          <div className="section-header">
            <p className="kicker">Research</p>
            <h2>Understanding how infection shapes disease</h2>
            <p>
              The lab investigates how innate immune pathways influence tissue injury, inflammatory decision-making, and longer-term disease outcomes after infection.
            </p>
          </div>

          <div className="panel research-hero-panel">
            <div className="research-graphic-wrap">
              <Image
                src="/research-graphic.jpg"
                alt="Graphical abstract showing the lab's focus on understanding persistent systemic inflammation, neurological symptoms, coagulopathies, pre-clinical drugs, and targeted delivery approaches."
                width={1045}
                height={1280}
                className="research-graphic"
              />
            </div>
            <div className="research-graphic-copy">
              <strong>From mechanisms to intervention</strong>
              <p>
                We aim to understand how infection drives persistent inflammatory and tissue-level changes, and to use that mechanistic insight to identify tractable paths toward treatment.
              </p>
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
            {researchAreas.map((area) => (
              <article key={area.title} className="panel">
                <strong>{area.title}</strong>
                <p>{area.text}</p>
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
            {howWeWork.map((item) => (
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

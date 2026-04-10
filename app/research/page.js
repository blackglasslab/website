import Image from 'next/image';
import { researchAreas } from '../siteData';

export const metadata = {
  title: 'Research | Bader Lab',
};

const howWeWork = [
  {
    title: 'Mechanistic biology',
    text: 'We dissect how viral infections reshape host signalling networks, inflammatory programs, and tissue states over time.',
  },
  {
    title: 'Multidisciplinary platforms',
    text: 'The lab combines infection biology with advanced imaging, multi-omics profiling, and RNA-based therapeutic delivery approaches.',
  },
  {
    title: 'Translational focus',
    text: 'We aim to connect mechanistic insight to diagnostic markers, intervention strategies, and precision therapies for post-viral disease.',
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
              Our research focuses on how viral infections alter host signalling networks and immune responses, driving sustained inflammation and post-viral pathology.
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
              <strong>From viral injury to post-viral disease</strong>
              <p>
                We study how acute infection is converted into a chronic, multi-organ inflammatory state — and how those mechanisms might be interrupted.
              </p>
              <p>
                A major focus is long COVID and related post-infectious syndromes, where persistent fatigue, cognitive impairment, and organ dysfunction point to biology that is still poorly understood and urgently in need of tractable interventions.
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
              We aim to uncover the molecular and cellular mechanisms that underlie post-viral syndromes, linking fundamental biology with clinically meaningful disease trajectories.
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
            <h2>Focused, multidisciplinary, and translational</h2>
            <p>
              To address the complexity of post-viral disease, we bridge virology, immunology, and translational medicine with experimental platforms designed to reveal mechanism and test intervention.
            </p>
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

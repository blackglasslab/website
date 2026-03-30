import { researchAreas } from '../siteData';

export const metadata = {
  title: 'Research | Bader Lab',
};

export default function ResearchPage() {
  return (
    <section>
      <div className="container">
        <div className="section-header">
          <p className="kicker">Research</p>
          <h2>Understanding how infection shapes disease</h2>
          <p>
            The lab investigates how innate immune pathways influence tissue injury, inflammatory decision-making, and longer-term disease outcomes after infection.
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
  );
}

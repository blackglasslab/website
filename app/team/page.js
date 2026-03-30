export const metadata = {
  title: 'Team | Bader Lab',
};

export default function TeamPage() {
  return (
    <section>
      <div className="container">
        <div className="section-header">
          <p className="kicker">Team</p>
          <h2>People</h2>
          <p>
            The Bader Lab is building a focused research environment around infection biology, innate immunity, and long-term disease mechanisms.
          </p>
        </div>
        <div className="team-layout">
          <article className="team-card">
            <p className="kicker">Group leader</p>
            <h3>Stefanie Bader</h3>
            <p>
              Stefanie Bader leads the lab’s work on host responses to infection, inflammatory signalling, and the mechanisms linking acute insults to persistent disease.
            </p>
          </article>
          <article className="team-card">
            <p className="kicker">Research Associate</p>
            <h3>Maureen Bischof</h3>
            <p>
              Maureen Bischof is a Research Associate in the Bader Lab and contributes to the lab’s work in infection biology and disease-relevant experimental systems.
            </p>
          </article>
          <article className="panel">
            <strong>Current focus</strong>
            <p>
              The team is developing a research program at the intersection of infection, tissue biology, and innate immune mechanisms with translational relevance.
            </p>
            <strong>Team growth</strong>
            <p>
              Additional team members, trainees, and collaborators can be added here as the lab expands. See the <a href="/join">Join page</a> for current opportunities and contact details.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

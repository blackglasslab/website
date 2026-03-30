export const metadata = {
  title: 'Join | Bader Lab',
};

export default function JoinPage() {
  return (
    <section>
      <div className="container">
        <div className="section-header">
          <p className="kicker">Join</p>
          <h2>Interested in working with us?</h2>
          <p>
            The lab welcomes interest from motivated students, postdocs, and collaborators excited by infection biology, innate immunity, and disease-relevant mechanistic research. Interested applicants and collaborators are encouraged to contact <a href="mailto:stefanie@baderlab.de">stefanie@baderlab.de</a>.
          </p>
        </div>
        <div className="card-grid">
          <article className="position-card">
            <strong>Students and trainees</strong>
            <p>
              Prospective rotation students, MSc students, and doctoral candidates are encouraged to get in touch with a short introduction and research interests.
            </p>
          </article>
          <article className="position-card">
            <strong>Postdoctoral researchers</strong>
            <p>
              Candidates with strong backgrounds in immunology, infection biology, cell biology, or related quantitative approaches are welcome to enquire. Informatic or computational skills are highly desirable.
            </p>
          </article>
          <article className="position-card">
            <strong>Collaborations</strong>
            <p>
              The lab is keen to connect with collaborators working on host-pathogen biology, inflammatory disease, and translational models of tissue injury.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

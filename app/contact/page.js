export const metadata = {
  title: 'Contact | Bader Lab',
};

export default function ContactPage() {
  return (
    <section>
      <div className="container">
        <div className="section-header">
          <p className="kicker">Contact</p>
          <h2>Get in touch</h2>
          <p>
            For research enquiries, collaboration ideas, or opportunities to join the lab, please use the details below.
          </p>
        </div>
        <div className="contact-layout">
          <article className="contact-card">
            <strong>Bader Lab</strong>
            <p>Center for Integrative Infectious Disease Research (CIID)</p>
            <p>Im Neuenheimer Feld 344</p>
            <p>69120 Heidelberg, Germany</p>
            <p>
              Email:{' '}
              <a href="mailto:stefanie.bader@uni-heidelberg.de">stefanie.bader@uni-heidelberg.de</a>
            </p>
          </article>
          <article className="contact-card">
            <strong>Profiles</strong>
            <ul className="inline-list">
              <li>
                Scholar:{' '}
                <a href="https://scholar.google.com/citations?user=8GHJMewAAAAJ&hl=en" target="_blank" rel="noreferrer">
                  Google Scholar profile
                </a>
              </li>
              <li>
                ORCID:{' '}
                <a href="https://orcid.org/0000-0002-7901-9833" target="_blank" rel="noreferrer">
                  0000-0002-7901-9833
                </a>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

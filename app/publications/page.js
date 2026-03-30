import { publications } from '../siteData';

export const metadata = {
  title: 'Publications | Bader Lab',
};

export default function PublicationsPage() {
  return (
    <section>
      <div className="container">
        <div className="section-header">
          <p className="kicker">Publications</p>
          <h2>Selected work</h2>
          <p>
            Publications are listed in reverse chronological order. Where exact, public citation metadata was readily verifiable, the entries below have been expanded to full citations.
          </p>
        </div>

        <div className="publications-list" role="list">
          {publications.map((publication, index) => (
            <article key={`${publication.year}-${index}`} className="publication-list-item" role="listitem">
              <div className="publication-year">{publication.year}</div>
              <div className="publication-content">
                <p>{publication.citation}</p>
                {publication.doi ? (
                  <a href={publication.doi} target="_blank" rel="noreferrer" className="publication-link">
                    DOI
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { publicationGroups } from '../siteData';

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
            This page is structured for public-facing publications and can be updated with complete citations, links, and preprints as needed.
          </p>
        </div>
        <div className="publications-grid">
          {publicationGroups.map((group) => (
            <article key={group.year} className="publication-card">
              <strong>{group.year}</strong>
              <ul className="inline-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

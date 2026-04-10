import Image from 'next/image';
import Link from 'next/link';

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
            <p className="kicker">Support</p>
            <h2>Funding acknowledgement</h2>
            <p>
              We gratefully acknowledge support from{' '}
              <a href="http://www.chs-stiftung.org/" target="_blank" rel="noreferrer">
                CHS Stiftung
              </a>{' '}
              and the{' '}
              <a href="https://www.nhmrc.gov.au" target="_blank" rel="noreferrer">
                National Health and Medical Research Council (NHMRC)
              </a>
              .
            </p>
          </div>
          <div className="funding-logo-row">
            <a href="http://www.chs-stiftung.org/" target="_blank" rel="noreferrer" className="funding-logo-card">
              <Image
                src="/chs-logo.jpg"
                alt="Chica and Heinz Schaller Foundation logo"
                width={458}
                height={161}
                className="funding-logo"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

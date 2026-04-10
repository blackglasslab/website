import Image from 'next/image';

export const metadata = {
  title: 'Team | Bader Lab',
};

const teamMembers = [
  {
    name: 'Stefanie Bader',
    role: 'Group leader',
    image: '/team/stefanie-bader.jpg',
    bio: 'Stefanie Bader leads the lab’s work on host responses to infection, inflammatory signalling, and the mechanisms linking acute insults to persistent disease.',
  },
  {
    name: 'Maureen Bischof',
    role: 'Research Associate',
    image: '/team/maureen-bischof.jpg',
    bio: 'Maureen Bischof is a Research Associate in the Bader Lab and contributes to the lab’s work in infection biology and disease-relevant experimental systems.',
  },
];

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
        <div className="team-layout team-layout-photos">
          {teamMembers.map((member) => (
            <article className="team-card team-card-photo" key={member.name}>
              <div className="team-photo-wrap">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={520}
                  height={640}
                  className="team-photo"
                />
              </div>
              <p className="kicker">{member.role}</p>
              <h3>{member.name}</h3>
              <p>{member.bio}</p>
            </article>
          ))}
          <article className="panel">
            <strong>Current focus</strong>
            <p>
              The team is developing a research program at the intersection of infection, tissue biology, and innate immune mechanisms with translational relevance.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

export const metadata = {
  title: 'Team | Bader Lab',
};

const teamMembers = [
  {
    name: 'Stefanie Bader',
    role: 'Group leader',
    image: '/team/stefanie-bader.jpg',
    bio: 'Stefanie Bader leads the lab’s research on how viral infections rewire host signalling, drive sustained inflammation, and contribute to post-viral pathology.',
    imagePosition: '50% 32%',
  },
  {
    name: 'Maureen Bischof',
    role: 'Research Associate',
    image: '/team/maureen-bischof.jpg',
    bio: 'Maureen Bischof contributes to the lab’s work in infection biology, experimental systems, and the practical generation of robust disease-relevant data.',
    imagePosition: '50% 24%',
  },
  {
    name: 'Post-doctoral researcher',
    role: 'Starting summer 2026',
    bio: 'Joining the lab to work at the intersection of neurobiology, AI/ML, and post-viral disease mechanisms.',
  },
  {
    name: 'PhD student',
    role: 'Starting summer 2026',
    bio: 'Joining the lab to study cell death and inflammatory pathways in post-infectious disease.',
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
            The Bader Lab is building a focused research environment around infection biology, innate immunity, and post-viral disease mechanisms.
          </p>
        </div>
        <div className="team-layout team-layout-photos">
          {teamMembers.map((member) => (
            <article className={`team-card ${member.image ? 'team-card-bubble' : 'team-card-coming-soon'}`} key={member.name}>
              {member.image ? (
                <div className="team-bubble-row">
                  <div className="team-bubble-wrap">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={220}
                      height={220}
                      className="team-bubble"
                      style={{ objectPosition: member.imagePosition || '50% 50%' }}
                    />
                  </div>
                </div>
              ) : null}
              <p className="kicker">{member.role}</p>
              <h3>{member.name}</h3>
              <p>{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

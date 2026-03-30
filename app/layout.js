import './globals.css';
import Link from 'next/link';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/publications', label: 'Publications' },
  { href: '/team', label: 'Team' },
  { href: '/join', label: 'Join' },
  { href: '/contact', label: 'Contact' },
];

export const metadata = {
  title: 'Bader Lab',
  description: 'Research on infection, innate immunity, and long-term disease.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="container header-inner">
              <Link href="/" className="brand">
                <span className="brand-mark">B</span>
                <span>
                  <strong>Bader Lab</strong>
                  <small>Infection • Immunity • Long-term disease</small>
                </span>
              </Link>
              <nav className="site-nav" aria-label="Primary navigation">
                {navigation.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <footer className="site-footer">
            <div className="container footer-inner">
              <p>© {new Date().getFullYear()} Bader Lab</p>
              <p>Center for Integrative Infectious Disease Research (CIID), Heidelberg</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

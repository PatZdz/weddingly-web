'use client';

import { usePathname } from 'next/navigation';
import en from '../../messages/en.json';
import pl from '../../messages/pl.json';

export default function About() {
  const pathname = usePathname();
  const isEN = pathname.startsWith('/en');
  const t = isEN ? en : pl;

  return (
    <section
      id="about"
      style={{
        marginTop: '4rem',
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: 'var(--border-radius-md)',
      }}
    >
      <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
        {t.aboutUs.title}
      </h2>
      <h3 style={{ marginBottom: '2rem' }}>{t.aboutUs.subtitle}</h3>
      <p>{t.aboutUs.desc}</p>
    </section>
  );
}
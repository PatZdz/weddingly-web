'use client';

import { usePathname } from 'next/navigation';
import en from '../../messages/en.json';
import pl from '../../messages/pl.json';

export default function Hero() {
  const pathname = usePathname();
  const isEN = pathname.startsWith('/en');
  const t = isEN ? en : pl;

  return (
    <section
      id="hero"
      style={{
        backgroundColor: '#fff',
        padding: '3rem',
        borderRadius: 'var(--border-radius-md)',
        marginTop: '2rem',
      }}
    >
      <h1 style={{ color: 'var(--color-primary)' }}>{t.hero.title}</h1>
      <h2>{t.hero.subtitle}</h2>
      <p>{t.hero.introParagraph}</p>
      <button
        style={{
          marginTop: '1rem',
          backgroundColor: 'var(--color-primary)',
          color: '#fff',
          border: 'none',
          borderRadius: 'var(--border-radius-sm)',
          padding: '0.75rem 1.5rem',
          cursor: 'pointer',
        }}
      >
        {t.hero.cta}
      </button>
    </section>
  );
}
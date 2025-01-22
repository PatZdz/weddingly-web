'use client';

import { usePathname } from 'next/navigation';
import en from '../../messages/en.json';
import pl from '../../messages/pl.json';

export default function Contact() {
  const pathname = usePathname();
  const isEN = pathname.startsWith('/en');
  const t = isEN ? en : pl;

  return (
    <section
      id="contact"
      style={{
        marginTop: '4rem',
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: 'var(--border-radius-md)',
      }}
    >
      <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
        {t.contactUs.title}
      </h2>
      <h3 style={{ marginBottom: '1rem' }}>{t.contactUs.subtitle}</h3>
      <p style={{ marginBottom: '1rem' }}>{t.contactUs.formDescription}</p>

      <p>{t.contactUs.email}</p>
      <p>{t.contactUs.phone}</p>
      <p>{t.contactUs.address}</p>

      <button
        style={{
          marginTop: '1.5rem',
          backgroundColor: 'var(--color-primary)',
          color: '#fff',
          border: 'none',
          borderRadius: 'var(--border-radius-sm)',
          padding: '0.75rem 1.5rem',
          cursor: 'pointer',
        }}
      >
        {t.contactUs.cta}
      </button>
    </section>
  );
}
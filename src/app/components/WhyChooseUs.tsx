'use client';

import { usePathname } from 'next/navigation';
import en from '../../messages/en.json';
import pl from '../../messages/pl.json';

export default function WhyChooseUs() {
  const pathname = usePathname();
  const isEN = pathname.startsWith('/en');
  const t = isEN ? en : pl;

  return (
    <section
      id="whychooseu" 
      style={{
        marginTop: '4rem',
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: 'var(--border-radius-md)',
      }}
    >
      <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
        {t.whyChooseUx.title}
      </h2>
      <h3 style={{ marginBottom: '2rem' }}>{t.whyChooseUx.subtitle}</h3>

      <div style={{ marginBottom: '1rem' }}>
        <h4>{t.whyChooseUx.fullServiceTitle}</h4>
        <p>{t.whyChooseUx.fullServiceDesc}</p>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <h4>{t.whyChooseUx.dataDrivenTitle}</h4>
        <p>{t.whyChooseUx.dataDrivenDesc}</p>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <h4>{t.whyChooseUx.cuttingEdgeTitle}</h4>
        <p>{t.whyChooseUx.cuttingEdgeDesc}</p>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <h4>{t.whyChooseUx.microSaasTitle}</h4>
        <p>{t.whyChooseUx.microSaasDesc}</p>
      </div>

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
        {t.whyChooseUx.cta}
      </button>
    </section>
  );
}
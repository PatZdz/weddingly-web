'use client';

import { usePathname } from 'next/navigation';
import en from '../../messages/en.json';
import pl from '../../messages/pl.json';

export default function Process() {
  const pathname = usePathname();
  const isEN = pathname.startsWith('/en');
  const t = isEN ? en : pl;

  return (
    <section
      id="process"
      style={{
        marginTop: '4rem',
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: 'var(--border-radius-md)',
      }}
    >
      <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
        {t.ourProcess.title}
      </h2>
      <h3 style={{ marginBottom: '2rem' }}>{t.ourProcess.subtitle}</h3>

      {/* Krok 1 */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h4>{t.ourProcess.step1Title}</h4>
        <p>{t.ourProcess.step1Desc}</p>
      </div>

      {/* Krok 2 */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h4>{t.ourProcess.step2Title}</h4>
        <p>{t.ourProcess.step2Desc}</p>
      </div>

      {/* Krok 3 */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h4>{t.ourProcess.step3Title}</h4>
        <p>{t.ourProcess.step3Desc}</p>
      </div>

      {/* Krok 4 */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h4>{t.ourProcess.step4Title}</h4>
        <p>{t.ourProcess.step4Desc}</p>
      </div>
    </section>
  );
}
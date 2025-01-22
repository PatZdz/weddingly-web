'use client';

import { usePathname } from 'next/navigation';
import en from '../../messages/en.json';
import pl from '../../messages/pl.json';

export default function OurServices() {
  const pathname = usePathname();
  const isEN = pathname.startsWith('/en');
  const t = isEN ? en : pl;

  return (
    <section
      id="services" 
      style={{
        marginTop: '4rem',
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: 'var(--border-radius-md)',
      }}
    >
      <h2 style={{ color: 'var(--color-primary)' }}>{t.ourServices.title}</h2>
      <h3 style={{ marginBottom: '2rem' }}>{t.ourServices.subtitle}</h3>

      {/* Branding */}
      <div
        style={{
          borderRadius: 'var(--border-radius-sm)',
          backgroundColor: '#f9f9f9',
          padding: '1rem',
          marginBottom: '1rem',
        }}
      >
        <h4>{t.ourServices.brandingTitle}</h4>
        <p style={{ fontStyle: 'italic' }}>{t.ourServices.brandingKeywords}</p>
        <p>{t.ourServices.brandingDesc}</p>
      </div>

      {/* UX/UI */}
      <div
        style={{
          borderRadius: 'var(--border-radius-sm)',
          backgroundColor: '#f9f9f9',
          padding: '1rem',
          marginBottom: '1rem',
        }}
      >
        <h4>{t.ourServices.uxuiTitle}</h4>
        <p style={{ fontStyle: 'italic' }}>{t.ourServices.uxuiKeywords}</p>
        <p>{t.ourServices.uxuiDesc}</p>
      </div>

      {/* WebDev */}
      <div
        style={{
          borderRadius: 'var(--border-radius-sm)',
          backgroundColor: '#f9f9f9',
          padding: '1rem',
          marginBottom: '1rem',
        }}
      >
        <h4>{t.ourServices.webDevTitle}</h4>
        <p style={{ fontStyle: 'italic' }}>{t.ourServices.webDevKeywords}</p>
        <p>{t.ourServices.webDevDesc}</p>
      </div>

      {/* MobileApp */}
      <div
        style={{
          borderRadius: 'var(--border-radius-sm)',
          backgroundColor: '#f9f9f9',
          padding: '1rem',
          marginBottom: '1rem',
        }}
      >
        <h4>{t.ourServices.mobileAppTitle}</h4>
        <p style={{ fontStyle: 'italic' }}>{t.ourServices.mobileAppKeywords}</p>
        <p>{t.ourServices.mobileAppDesc}</p>
      </div>

      {/* eCommerce */}
      <div
        style={{
          borderRadius: 'var(--border-radius-sm)',
          backgroundColor: '#f9f9f9',
          padding: '1rem',
        }}
      >
        <h4>{t.ourServices.ecommerceTitle}</h4>
        <p style={{ fontStyle: 'italic' }}>{t.ourServices.ecommerceKeywords}</p>
        <p>{t.ourServices.ecommerceDesc}</p>
      </div>
    </section>
  );
}
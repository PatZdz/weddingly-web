'use client';

export default function Hero() {
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
      <h1 style={{ color: 'var(--color-primary)' }}>Welcome to Our Wedding</h1>
      <h2>Marzena & Bożydar</h2>
      <p>We're getting married! Join us on our special day.</p>
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
        RSVP Now
      </button>
    </section>
  );
}

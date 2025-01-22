'use client';

export default function About() {
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
        About Us
      </h2>
      <h3 style={{ marginBottom: '2rem' }}>Our Story</h3>
      <p>This is where our story begins...</p>
    </section>
  );
}

'use client';

export default function Contact() {
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
        Contact Us
      </h2>
      <h3 style={{ marginBottom: '1rem' }}>Get in Touch</h3>
      <p style={{ marginBottom: '1rem' }}>Feel free to reach out to us</p>

      <p>Email: contact@example.com</p>
      <p>Phone: +1 234 567 890</p>
      <p>Address: 123 Wedding Street</p>

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
        Contact Now
      </button>
    </section>
  );
}

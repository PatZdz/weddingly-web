'use client';

export default function WhyChooseUs() {
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
        Why Choose Us
      </h2>
      <h3 style={{ marginBottom: '2rem' }}>Your Perfect Wedding Partner</h3>

      <div style={{ marginBottom: '1rem' }}>
        <h4>Full Service</h4>
        <p>We offer comprehensive wedding planning services from start to finish</p>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <h4>Data-Driven Approach</h4>
        <p>We use analytics and trends to make informed decisions for your wedding</p>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <h4>Cutting-Edge Solutions</h4>
        <p>Latest technology and innovative solutions for modern weddings</p>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <h4>Micro SaaS Integration</h4>
        <p>Smart tools and software to streamline your wedding planning process</p>
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
        Contact Us Now
      </button>
    </section>
  );
}

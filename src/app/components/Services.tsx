'use client';

export default function OurServices() {
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
      <h2 style={{ color: 'var(--color-primary)' }}>Our Services</h2>
      <h3 style={{ marginBottom: '2rem' }}>What we can do for you</h3>

      {/* Branding */}
      <div
        style={{
          borderRadius: 'var(--border-radius-sm)',
          backgroundColor: '#f9f9f9',
          padding: '1rem',
          marginBottom: '1rem',
        }}
      >
        <h4>Branding</h4>
        <p style={{ fontStyle: 'italic' }}>Logo Design, Brand Identity, Visual Guidelines</p>
        <p>We create memorable brand identities that resonate with your target audience and stand out in the market.</p>
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
        <h4>UX/UI Design</h4>
        <p style={{ fontStyle: 'italic' }}>User Experience, Interface Design, Prototyping</p>
        <p>We design intuitive and engaging user experiences that make your digital products a joy to use.</p>
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
        <h4>Web Development</h4>
        <p style={{ fontStyle: 'italic' }}>Custom Websites, Web Applications, CMS Integration</p>
        <p>We build modern, responsive websites that perform great and look even better.</p>
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
        <h4>Mobile App Development</h4>
        <p style={{ fontStyle: 'italic' }}>iOS, Android, Cross-platform Solutions</p>
        <p>We develop mobile applications that provide value and enhance user engagement.</p>
      </div>

      {/* eCommerce */}
      <div
        style={{
          borderRadius: 'var(--border-radius-sm)',
          backgroundColor: '#f9f9f9',
          padding: '1rem',
        }}
      >
        <h4>eCommerce Solutions</h4>
        <p style={{ fontStyle: 'italic' }}>Online Stores, Payment Integration, Shopping Cart</p>
        <p>We create seamless shopping experiences that drive conversions and sales.</p>
      </div>
    </section>
  );
}

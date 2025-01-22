'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: 'var(--color-primary)',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
      }}
    >
      {/* Logo */}
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
        <Image
          src="/letsproject_logo.svg"
          alt="LetsProject Logo"
          width={150}
          height={40}
          priority
        />
      </div>

      {/* Navigation links */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="#services" style={{ color: '#fff', textDecoration: 'none' }}>
          Services
        </a>
        <a href="#whychooseus" style={{ color: '#fff', textDecoration: 'none' }}>
          Why Choose Us
        </a>
        <a href="#ourprocess" style={{ color: '#fff', textDecoration: 'none' }}>
          Our Process
        </a>
        <a href="#aboutus" style={{ color: '#fff', textDecoration: 'none' }}>
          About Us
        </a>
        <a href="#contactus" style={{ color: '#fff', textDecoration: 'none' }}>
          Contact Us
        </a>
      </div>

      {/* CTA Button */}
      <Link
        href="#contactus"
        style={{
          backgroundColor: '#fff',
          color: 'var(--color-primary)',
          padding: '0.5rem 1rem',
          borderRadius: 'var(--border-radius-md)',
          textDecoration: 'none',
        }}
      >
        Contact Us
      </Link>
    </nav>
  );
}

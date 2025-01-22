"use client";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

interface NavbarProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isDrawerOpen, setIsDrawerOpen }: NavbarProps) {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setShowNavbar(currentScrollY <= lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#info", text: "O nas" },
    { href: "#data-miejsce", text: "Data i miejsce" },
    { href: "#plan", text: "Plan" },
    { href: "#muzyka", text: "Muzyka" },
    { href: "#kontakt", text: "Kontakt" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsDrawerOpen(false);
  };

  return (
    <header
      className={`fixed w-full py-6 backdrop-blur-md bg-[#F9F4ED]/95 border-b border-[#003E3C]/10 transition-transform duration-300 z-50 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container mx-auto px-12 md:px-24 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl text-[#003E3C] font-medium">
          A & M
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-12 font-serif text-lg">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-[#003E3C] hover:text-[#003E3C]/70 transition-colors font-medium"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link 
            href="/rsvp" 
            className="font-serif text-lg px-6 py-2 bg-[#003E3C] text-white rounded-full hover:bg-[#002E2C] transition-colors"
          >
            RSVP
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-[70]"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          {isDrawerOpen ? (
            <XMarkIcon className="h-6 w-6 text-[#003E3C]" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-[#003E3C]" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-[#F9F4ED] backdrop-blur-md z-[60] transform transition-transform duration-300 ease-in-out lg:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: 'rgba(249, 244, 237, 0.98)' }}
      >
        <div className="flex flex-col h-full px-12 pt-24">
          {/* Menu Items */}
          <nav className="flex-1">
            <ul className="space-y-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="block text-2xl font-serif text-[#003E3C] hover:text-[#003E3C]/70 transition-colors"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* RSVP Button */}
          <div className="py-12">
            <Link 
              href="/rsvp" 
              className="block w-full text-center font-serif text-xl px-6 py-3 bg-[#003E3C] text-white rounded-full hover:bg-[#002E2C] transition-colors"
              onClick={() => setIsDrawerOpen(false)}
            >
              RSVP
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

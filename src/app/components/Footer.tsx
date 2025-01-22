"use client";
import React from "react";
import Link from "next/link";
import { HeartIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-[#003E3C] text-white py-16">
      <div className="container mx-auto px-12 md:px-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Navigation Links */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl mb-6">Nawigacja</h3>
            <ul className="space-y-3">
              <li><Link href="/#welcome" className="hover:opacity-80 transition-opacity">Powitanie</Link></li>
              <li><Link href="/#date-place" className="hover:opacity-80 transition-opacity">Data i miejsce</Link></li>
              <li><Link href="/#schedule" className="hover:opacity-80 transition-opacity">Plan uroczystości</Link></li>
              <li><Link href="/#music" className="hover:opacity-80 transition-opacity">Muzyka</Link></li>
              <li><Link href="/#rsvp" className="hover:opacity-80 transition-opacity">RSVP</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="font-serif text-2xl mb-6">Kontakt</h3>
            <div className="space-y-3">
              <p>Andrzej: +48 123 456 789</p>
              <p>Marzena: +48 987 654 321</p>
              <p>slub@andrzejimarzena.pl</p>
            </div>
          </div>

          {/* Location */}
          <div className="text-center md:text-right">
            <h3 className="font-serif text-2xl mb-6">Lokalizacja</h3>
            <div className="space-y-3">
              <p>Kościół św. Dominika</p>
              <p>ul. Dominikańska 2</p>
              <p>Warszawa</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/20 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HeartIcon className="h-5 w-5" />
            <p className="font-serif text-xl">Andrzej & Marzena</p>
            <HeartIcon className="h-5 w-5" />
          </div>
          <p className="text-sm opacity-80">12.12.2025</p>
        </div>
      </div>
    </footer>
  );
}

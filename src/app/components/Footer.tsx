"use client";
import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F2E8DF] text-black py-16">
      <div className="container mx-auto px-12 md:px-24">
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo Weddingly z linkiem (lewa strona) */}
            <div className="mb-4 md:mb-0">
              <Link href="https://www.weddingly.pl" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/weddingly_logo.svg" // Ścieżka do logo
                  alt="Weddingly Logo"
                  width={120}
                  height={32}
                />
              </Link>
            </div>

            {/* Marianna & Bartosz z datą (środek) */}
            <div className="text-center mb-4 md:mb-0">
              <div className="flex items-center justify-center gap-2">
              <p className="font-serif text-xl">Marianna & Bartosz</p>
              </div>
              {/* Data */}
              <p className="text-sm opacity-80 mt-2">12.12.2025</p>
            </div>

            {/* Contact Info (prawa strona) */}
            <div className="text-center md:text-right">
              <div className="space-y-1">
                <p>Marianna: +48 123 456 789</p>
                <p>Bartosz: +48 987 654 321</p>
                <p>slub@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
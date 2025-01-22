"use client";
import React from "react";
import { CalendarDaysIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function DataMiejsce() {
  return (
    <section className="py-24 bg-[var(--background-color)]">
      <div className="container mx-auto px-12 md:px-24">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Data i miejsce</h2>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center text-center">
            <CalendarDaysIcon className="h-12 w-12 text-[#003E3C] mb-4" />
            <h3 className="text-2xl font-serif mb-2">Data</h3>
            <p className="text-xl text-gray-600">12 grudnia 2025</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <ClockIcon className="h-12 w-12 text-[#003E3C] mb-4" />
            <h3 className="text-2xl font-serif mb-2">Godzina</h3>
            <p className="text-xl text-gray-600">12:00</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <MapPinIcon className="h-12 w-12 text-[#003E3C] mb-4" />
            <h3 className="text-2xl font-serif mb-2">Miejsce</h3>
            <p className="text-xl text-gray-600">Kościół św. Dominika</p>
            <p className="text-xl text-gray-600">ul. Dominikańska 2</p>
            <p className="text-xl text-gray-600">Warszawa</p>
          </div>
        </div>

        {/* Map Container */}
        <div className="w-full rounded-2xl overflow-hidden shadow-xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.7182687028594!2d21.033483876973193!3d52.17581557197289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471932b86c64cf95%3A0x2f2d2dfe3d690720!2sSaint%20Dominic%20church%20in%20Warsaw!5e0!3m2!1sen!2spl!4v1737566623152!5m2!1sen!2spl" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

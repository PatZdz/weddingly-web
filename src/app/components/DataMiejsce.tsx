"use client";
import React from "react";
import { CalendarDaysIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function DataMiejsce() {
  return (
    <section id="data-miejsce" className="py-24 bg-[var(--background-color)]">
      <div className="container mx-auto px-12 md:px-24">
        {/* Section Title */}
        <h2 className="text-5xl md:text-[48px] font-serif text-center mb-12">Data i miejsce</h2>

        {/* Details Grid */}
        <div className="flex justify-center gap-16 mb-12">
          <div className="flex flex-col items-center text-center">
            <CalendarDaysIcon className="h-10 w-10 text-black mb-2" />
            <h3 className="text-xl font-serif mb-1">Data</h3>
            <p className="text-base text-gray-600">10 sierpnia 2025</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <ClockIcon className="h-10 w-10 text-black mb-2" />
            <h3 className="text-xl font-serif mb-1">Godzina</h3>
            <p className="text-base text-gray-600">14:00</p>
          </div>
        </div>

        {/* Map Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-center">Ślub</h3>
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
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-center">Wesele</h3>
            <div className="w-full rounded-2xl overflow-hidden shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14961.202809372866!2d21.703768059307006!3d52.50693371875933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471f1c2ce7cdc2a1%3A0xf357643baaac9c32!2zRm9sd2FyayDFgW9jaMOzdw!5e0!3m2!1sen!2spl!4v1738878412434!5m2!1sen!2spl"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

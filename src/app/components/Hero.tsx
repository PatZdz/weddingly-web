"use client";
import React from "react";
import Image from "next/image";
import { CalendarDaysIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-end justify-center pb-12">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/mb_hero.jpg"
          alt="Wedding background"
          fill
          sizes="100vw"
          quality={100}
          priority
          className="object-cover brightness-75"
        />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto text-center text-white mt-auto">
        <h1 className="text-6xl md:text-7xl font-serif mb-8 tracking-wide drop-shadow-lg">
          Marianna & Bartosz
        </h1>

        {/* Wedding Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-4xl mx-auto bg-white/20 backdrop-blur-md rounded-lg p-5 md:p-7 shadow-lg">
          <div className="flex flex-col items-center space-y-1.5 p-1.5">
            <CalendarDaysIcon className="h-6 w-6 md:h-7 md:w-7 text-white" />
            <div>
              <h3 className="text-sm md:text-base font-semibold mb-1 text-white">Data</h3>
              <p className="text-xs md:text-sm text-white">10 sierpnia 2025</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-1.5 p-1.5">
            <ClockIcon className="h-6 w-6 md:h-7 md:w-7 text-white" />
            <div>
              <h3 className="text-sm md:text-base font-semibold mb-1 text-white">Godzina</h3>
              <p className="text-xs md:text-sm text-white">12:00</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-1.5 p-1.5">
            <MapPinIcon className="h-6 w-6 md:h-7 md:w-7 text-white" />
            <div>
              <h3 className="text-sm md:text-base font-semibold mb-1 text-white">Ślub</h3>
              <p className="text-xs md:text-sm text-white">Kościół św. Dominika</p>
              <p className="text-xs md:text-sm text-white">ul. Dominikańska 2</p>
              <p className="text-xs md:text-sm text-white">Warszawa</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-1.5 p-1.5">
            <MapPinIcon className="h-6 w-6 md:h-7 md:w-7 text-white" />
            <div>
              <h3 className="text-sm md:text-base font-semibold mb-1 text-white">Wesele</h3>
              <p className="text-xs md:text-sm text-white">Folwark Łochów</p>
              <p className="text-xs md:text-sm text-white">ul. Marii Konopnickiej 1</p>
              <p className="text-xs md:text-sm text-white">Łochów</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

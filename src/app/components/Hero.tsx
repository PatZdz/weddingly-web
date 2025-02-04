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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto bg-white/20 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-xl">
          <div className="flex flex-col items-center space-y-2 md:space-y-3 p-2 md:p-3">
            <CalendarDaysIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />
            <div>
              <h3 className="text-base md:text-xl font-semibold mb-2 text-white">Data</h3>
              <p className="text-sm md:text-lg text-white">12 grudnia 2025</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2 md:space-y-3 p-2 md:p-3">
            <ClockIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />
            <div>
              <h3 className="text-base md:text-xl font-semibold mb-2 text-white">Godzina</h3>
              <p className="text-sm md:text-lg text-white">12:00</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2 md:space-y-3 p-2 md:p-3">
            <MapPinIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />
            <div>
              <h3 className="text-base md:text-xl font-semibold mb-2 text-white">Miejsce ślubu</h3>
              <p className="text-sm md:text-lg text-white">Kościół św. Dominika</p>
              <p className="text-sm md:text-lg text-white">ul. Dominikańska 2</p>
              <p className="text-sm md:text-lg text-white">Warszawa</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2 md:space-y-3 p-2 md:p-3">
            <MapPinIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />
            <div>
              <h3 className="text-base md:text-xl font-semibold mb-2 text-white">Miejsce wesela</h3>
              <p className="text-sm md:text-lg text-white">Folwark Łochów</p>
              <p className="text-sm md:text-lg text-white">ul. Marii Konopnickiej 1</p>
              <p className="text-sm md:text-lg text-white">Łochów</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

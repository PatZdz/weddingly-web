"use client";
import React from "react";
import Image from "next/image";
import { CalendarDaysIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[140vh] flex items-end justify-center pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 max-w-[1920px] mx-auto">
        <Image
          src="/images/hero.jpg"
          alt="Wedding background"
          fill
          sizes="(max-width: 1920px) 100vw, 1920px"
          quality={100}
          priority
          className="object-cover brightness-75"
        />
      </div>
      
      {/* Content Container */}
      <div className="container relative z-10 mx-auto text-center text-white mt-auto">
        <h1 className="text-6xl md:text-7xl font-serif mb-8 tracking-wide drop-shadow-lg">
          Andrzej & Marzena
        </h1>
        
        <p className="text-xl md:text-2xl font-light mb-16 max-w-2xl mx-auto drop-shadow-md">
          Z radością zapraszamy Was na uroczystość zaślubin,
          która odbędzie się w gronie najbliższych nam osób.
          Będzie nam niezmiernie miło gościć Was w tym wyjątkowym dla nas dniu.
        </p>

        {/* Wedding Details Grid */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-8 max-w-4xl mx-auto bg-white/20 backdrop-blur-md rounded-2xl p-4 md:p-8 shadow-xl">
          <div className="flex flex-col items-center space-y-2 md:space-y-4 p-2 md:p-4">
            <CalendarDaysIcon className="h-8 w-8 md:h-12 md:w-12 text-white" />
            <div>
              <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2 text-white">Data</h3>
              <p className="text-sm md:text-lg text-white">12.12.2025</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2 md:space-y-4 p-2 md:p-4">
            <MapPinIcon className="h-8 w-8 md:h-12 md:w-12 text-white" />
            <div>
              <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2 text-white">Miejsce</h3>
              <p className="text-sm md:text-lg text-white">ul. Wrzesińska</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2 md:space-y-4 p-2 md:p-4">
            <ClockIcon className="h-8 w-8 md:h-12 md:w-12 text-white" />
            <div>
              <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2 text-white">Godzina</h3>
              <p className="text-sm md:text-lg text-white">12:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

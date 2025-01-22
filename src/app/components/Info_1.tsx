"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Info_1() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-12-12T12:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-[var(--background-color)]">
      <div className="container mx-auto px-12 md:px-24 flex flex-col md:flex-row items-center">
        {/* Left column - image with arch shape */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-16">
          <div className="relative w-full aspect-[3/4] rounded-t-full overflow-hidden">
            <Image
              src="/images/info.jpg"
              alt="Wedding couple"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Right column - text and countdown */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Drodzy goście</h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Mamy zaszczyt zaprosić Was na nasz wyjątkowy dzień! Na naszej stronie znajdziecie wszystkie kluczowe informacje!
          </p>

          {/* Elegant Countdown Timer */}
          <div className="font-serif">
            <div className="text-4xl md:text-5xl text-[#003E3C] mb-4">
              {timeLeft.days} dni {timeLeft.hours}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-xl text-gray-600 italic">
              Do naszego wielkiego dnia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

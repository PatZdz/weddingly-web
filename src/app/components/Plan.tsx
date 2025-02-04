"use client";
import React from "react";

export default function Plan() {
  return (
    <section id="plan" className="py-24 bg-[var(--background-color)]">
      <div className="container mx-auto px-12 md:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Plan uroczystości</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Harmonogram naszego wyjątkowego dnia
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-[#003E3C]/10">
              <div className="text-center md:text-left">
                <span className="text-4xl font-serif text-[var(--icon-color)] block mb-2">12:00</span>
                <span className="text-lg text-gray-500 font-light">Ceremonia</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif mb-4 text-center md:text-left">Ceremonia zaślubin</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Kościół św. Dominika<br />
                  ul. Dominikańska 2, Warszawa
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-[#003E3C]/10">
              <div className="text-center md:text-left">
                <span className="text-4xl font-serif text-[var(--icon-color)] block mb-2">14:00</span>
                <span className="text-lg text-gray-500 font-light">Przyjęcie</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif mb-4 text-center md:text-left">Przyjęcie weselne</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Sala Weselna "Pod Różami"<br />
                  ul. Kwiatowa 15, Warszawa
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-[#003E3C]/10">
              <div className="text-center md:text-left">
                <span className="text-4xl font-serif text-[var(--icon-color)] block mb-2">19:00</span>
                <span className="text-lg text-gray-500 font-light">Zabawa</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif mb-4 text-center md:text-left">Zabawa do białego rana</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Czas na wspólną zabawę przy muzyce i świętowanie do samego rana!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

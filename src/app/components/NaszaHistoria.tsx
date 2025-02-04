"use client";
import React from "react";
import Image from "next/image";

export default function Info_1() {
  return (
    <section className="py-16 bg-[var(--background-color)]">
      <div className="container mx-auto px-12 md:px-24 flex flex-col md:flex-row items-center">
        {/* Left column - text */}
        <div className="w-full md:w-1/2 md:text-left md:mr-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-center md:text-left">Nasza Historia</h2>
          <p className="text-lg md:text-lg text-gray-600 mb-12 leading-relaxed">
            Pewnego dnia, podczas studiów, Bartek i Marianna przypadkowo spotkali się w tej samej grupie na poprawce. Marianna była zestresowana, a Bartek, z uśmiechem na twarzy, starał się ją uspokoić swoimi zabawnymi historiami. Dzięki niemu, weszła na egzamin z uśmiechem i... zdała!
            <br /><br />
            Po egzaminie postanowili pójść na kawę. Ich rozmowa układała się naturalnie, a czas spędzony razem był dla nich przyjemnością. Od tej chwili zaczęli spędzać ze sobą coraz więcej czasu, a ich przyjaźń szybko przerodziła się w coś głębszego.
            <br /><br />
            Dziś, po latach wspólnych przygód, egzaminów i wielu rozmów o życiu, z radością zapraszają Was na swój ślub! Bądźcie z nimi w tym wyjątkowym dniu, w którym uczczą swoją miłość oraz wszystkie chwile, które doprowadziły ich do tego momentu.

          </p>
        </div>

        {/* Right column - image with arch shape */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-full aspect-[3/4] rounded-t-full overflow-hidden">
            <Image
              src="/images/mb_2.jpg"
              alt="Wedding couple"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function Nocleg() {
  return (
    <section id="nocleg" className="py-24 bg-[var(--background-color)]">
      <div className="container mx-auto px-12 md:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Gdzie się zatrzymać?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Informacje o dostępnych miejscach noclegowych w pobliżu Folwarku Łochów.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Hotel Option 1 */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-[#003E3C]/10">
            <h3 className="text-2xl font-serif mb-4">Hotel Victoria</h3>
            <p className="text-gray-600 mb-4">Elegancki hotel położony 5 minut od miejsca wesela. Oferuje komfortowe pokoje i apartamenty.</p>
            <div className="space-y-2 text-gray-600">
              <p>• Odległość: 0.5 km</p>
              <p>• Tel: +48 123 456 789</p>
              <p>• www.hotelvictoria.pl</p>
            </div>
          </div>

          {/* Hotel Option 2 */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-[#003E3C]/10">
            <h3 className="text-2xl font-serif mb-4">Pensjonat Pod Lipą</h3>
            <p className="text-gray-600 mb-4">Przytulny pensjonat w spokojnej okolicy. Idealne miejsce dla osób szukających domowej atmosfery.</p>
            <div className="space-y-2 text-gray-600">
              <p>• Odległość: 1.2 km</p>
              <p>• Tel: +48 987 654 321</p>
              <p>• www.podlipa.pl</p>
            </div>
          </div>

          {/* Hotel Option 3 */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-[#003E3C]/10">
            <h3 className="text-2xl font-serif mb-4">Apartamenty Centrum</h3>
            <p className="text-gray-600 mb-4">Nowoczesne apartamenty z aneksem kuchennym. Doskonałe dla rodzin i dłuższych pobytów.</p>
            <div className="space-y-2 text-gray-600">
              <p>• Odległość: 2.0 km</p>
              <p>• Tel: +48 111 222 333</p>
              <p>• www.apartamentycentrum.pl</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Przy rezerwacji prosimy o informację, że jesteście gośćmi weselnymi - 
            przygotowaliśmy dla Was specjalne zniżki w wymienionych obiektach.
          </p>
        </div>
      </div>
    </section>
  );
}
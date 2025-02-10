"use client";
import React from "react";
import Image from "next/image";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Kontakt() {
  return (
    <section id="kontakt" className="py-24 bg-[var(--background-color)]">
      <div className="container mx-auto px-12 md:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Kontakt</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Jeśli macie jakiekolwiek pytania, jesteśmy do Waszej dyspozycji
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="relative w-full aspect-[3/4] rounded-t-full overflow-hidden">
            <Image
              src="/images/mb_3.jpg"
              alt="Para Młoda kontakt"
              fill
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-1 gap-8">
              {/* Contact Card - Andrzej */}
              <div className="border border-[#003E3C]/20 p-8 rounded-xl">
                <div className="flex items-center space-x-6">
                  <PhoneIcon className="h-8 w-8 text-black flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-serif mb-2">Marianna</h3>
                    <p className="text-lg text-black">+48 123 456 789</p>
                  </div>
                </div>
              </div>

              {/* Contact Card - Marzena */}
              <div className="border border-[#003E3C]/20 p-8 rounded-xl">
                <div className="flex items-center space-x-6">
                  <PhoneIcon className="h-8 w-8 text-black flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-serif mb-2">Bartosz</h3>
                    <p className="text-lg text-black">+48 987 654 321</p>
                  </div>
                </div>
              </div>

              {/* Contact Card - Email */}
              <div className="border border-[#003E3C]/20 p-8 rounded-xl">
                <div className="flex items-center space-x-6">
                  <EnvelopeIcon className="h-8 w-8 text-black flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-serif mb-2">Email</h3>
                    <p className="text-lg text-black">slub@weddingly.pl</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

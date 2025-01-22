"use client";
import React from "react";
import Image from "next/image";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Kontakt() {
  return (
    <section className="py-16 bg-[var(--background-color)]">
      <div className="container mx-auto px-12 md:px-24 flex flex-col md:flex-row items-center">
        {/* Left column - image with arch shape */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-16">
          <div className="relative w-full aspect-[3/4] rounded-t-full overflow-hidden">
            <Image
              src="/images/kontakt.jpg"
              alt="Para Młoda"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Right column - contact info */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-serif mb-12">Kontakt</h2>
          
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <PhoneIcon className="h-8 w-8 text-[#003E3C]" />
              <div>
                <p className="text-xl font-serif mb-1">Andrzej</p>
                <p className="text-2xl text-[#003E3C]">+48 123 456 789</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <PhoneIcon className="h-8 w-8 text-[#003E3C]" />
              <div>
                <p className="text-xl font-serif mb-1">Marzena</p>
                <p className="text-2xl text-[#003E3C]">+48 987 654 321</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <EnvelopeIcon className="h-8 w-8 text-[#003E3C]" />
              <div>
                <p className="text-xl font-serif mb-1">Email</p>
                <p className="text-2xl text-[#003E3C]">slub@andrzejimarzena.pl</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

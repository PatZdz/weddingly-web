"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DataMiejsce from "./components/DataMiejsce";
import RSVP from "./components/RSVP";
import DrodzyGoscie from "./components/DrodzyGoscie";
import Muzyka from "./components/Muzyka";
import Plan from "./components/Plan";
import Kontakt from "./components/Kontakt";
import NaszaHistoria from "./components/NaszaHistoria";
import Nocleg from "./components/Nocleg";
import FAQ from "./components/FAQ";

export default function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Hero />
      <DrodzyGoscie />
      <NaszaHistoria />
      <DataMiejsce />
      <Plan />
      <Muzyka />
      <Nocleg />
      <RSVP />
      <Kontakt />
      <FAQ />
    </>
  );
}
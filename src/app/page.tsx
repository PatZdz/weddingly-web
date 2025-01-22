"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DataMiejsce from "./components/DataMiejsce";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import Info_1 from "./components/Info_1";
import Muzyka from "./components/Muzyka";
import Plan from "./components/Plan";
import Kontakt from "./components/Kontakt";



export default function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Hero />
      <Info_1 />
      <DataMiejsce />
      <Plan />
      <Muzyka />
      <RSVP />
      <Kontakt />
      <Footer />
    </>
  );
}
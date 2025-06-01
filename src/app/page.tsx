"use client";

import Hero from "./components/Hero";
import Servizi from "./components/Servizi";
import Faq from "./components/Faq";
import { Mission } from "./components/Mission";
import Statistics from "./components/Statistics";

export default function Home() {
  return (
    <div>
      <Hero />
      <Mission />
      <Servizi />
      <Statistics />
      <Faq />
    </div>
  );
}

"use client";

import "bootstrap/dist/js/bootstrap.bundle";

import { useEffect } from "react";
import Aos from "aos";

import Hero from "../_components/Hero";
import data from "../data.json";

export default function HomePage() {
  const {
    heroData,
    aboutData,
    experienceData,
    portfolioData,
    serviceData,
    blogData,
    sliderData,
    contactData,
    footerData,
  } = data;

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <main className="wrapper">
      <Hero data={heroData} />
    </main>
  );
}

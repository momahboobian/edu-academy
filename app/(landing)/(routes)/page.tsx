"use client";

import data from "../data.json";
import Hero from "../_components/Hero";
import About from "../_components/About";
import Experience from "../_components/Experience";
import Preloader from "../_components/Preloader";
import CustomCursor from "../_components/CustomCursor";
import Service from "../_components/Services";

export default function HomePage() {
  const {
    heroData,
    aboutData,
    experienceData,
    serviceData,
    portfolioData,
    blogData,
    sliderData,
    contactData,
    footerData,
  } = data;

  return (
    <main className="wrapper">
      <CustomCursor />

      <Hero data={heroData} />
      <About data={aboutData} />
      <Experience data={experienceData} />
      {/* <Service data={serviceData} /> */}
    </main>
  );
}

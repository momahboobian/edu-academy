"use client";

import { useEffect, useState } from "react";

// import "bootstrap/dist/js/bootstrap.bundle";

import data from "../data.json";
import Hero from "../_components/Hero";
import About from "../_components/About";
import Experience from "../_components/Experience";
import CustomCursor from "../_components/CustomCursor";
import Service from "../_components/Services";
import Aos from "aos";

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
      {/* <CustomCursor /> */}

      <Hero data={heroData} />
      <About data={aboutData} />
      <Experience data={experienceData} />
      {/*  <Service data={serviceData} />*/}
    </main>
  );
}

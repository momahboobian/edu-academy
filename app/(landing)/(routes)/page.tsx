"use client";

// import "bootstrap/dist/js/bootstrap.bundle";

// import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle";
// window.bootstrap = bootstrap;

import { useEffect, useState } from "react";
import Aos from "aos";

import data from "../data.json";
import Hero from "../_components/Hero";
import About from "../_components/About";
import Experience from "../_components/Experience";
import Preloader from "../_components/Preloader";
import CustomCursor from "../_components/CostomCursor";
import Service from "../_components/Services";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    Aos.init({ once: true });
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <main className="wrapper">
            <CustomCursor />

            {/*  <Hero data={heroData} />
            <About data={aboutData} />
            <Experience data={experienceData} /> */}
            <Service data={serviceData} />
          </main>
        </>
      )}
    </>
  );
}

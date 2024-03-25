"use client";

// import "bootstrap/dist/js/bootstrap.bundle";

import data from "../data.json";

import CustomCursor from "../_components/CustomCursor";
import Hero from "../_components/Hero";
import About from "../_components/About";
import Experience from "../_components/Experience";
import Portfolio from "../_components/Portfolio";
import Courses from "../_components/CoursesProps";

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
      <Portfolio data={serviceData} />
      <Courses data={portfolioData} />
    </main>
  );
}

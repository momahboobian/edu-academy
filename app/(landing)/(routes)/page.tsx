"use client";

// import "bootstrap/dist/js/bootstrap.bundle";

import data from "../data.json";

import CustomCursor from "../_components/CustomCursor";
import Hero from "../_components/Hero";
import About from "../_components/About";
import Experience from "../_components/Experience";
import Portfolio from "../_components/Portfolio";
import Courses from "../_components/Courses";
import Blog from "../_components/Blog";
import Contact from "../_components/Contact";
import Footer from "../_components/Footer";

export default function HomePage() {
  const {
    heroData,
    aboutData,
    experienceData,
    portfolioData,
    coursesData,
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
      <Portfolio data={portfolioData} />
      <Courses data={coursesData} />
      <Blog data={blogData} />
      <Contact data={contactData} />
      <Footer data={footerData} />
    </main>
  );
}

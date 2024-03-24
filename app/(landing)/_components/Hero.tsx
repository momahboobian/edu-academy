import { useEffect, useState } from "react";

import { motion, useInView, useViewportScroll } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import parser from "html-react-parser";

import { Icon } from "@iconify/react";

interface HeroProps {
  data: {
    title: string;
    subTitle: string;
    ImgLink: string;
    phone: string;
    email: string;
    socialData: SocialData[];
  };
}

interface SocialData {
  icon: string;
  link: string;
}

export default function Hero({ data }: HeroProps) {
  const { title, subTitle, ImgLink, socialData } = data;

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const heroElements = document.querySelector(
        ".hb-me"
      ) as HTMLElement | null;
      if (heroElements) {
        heroElements.style.right = `${scrollValue * -0.25}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className="home-section bg-dark">
      <div className="container mx-auto">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-7 col-xl-7 col-xxl-6">
            <div className="hb-text">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {parser(title)}
              </motion.h1>

              <motion.p
                className="lead"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {parser(subTitle)}
              </motion.p>

              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <ScrollLink to="contact" spy={true} className="px-btn">
                  About ME
                  <Icon icon="bi:arrow-up-right" />
                </ScrollLink>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="hb-me"
        style={{
          backgroundImage: `url(${ImgLink})`,
        }}
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />

      <div className="social-fix">
        <div className="social-links">
          {socialData.map((element, index) => (
            <a
              href={element.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={`fa6-brands:${element.icon}`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

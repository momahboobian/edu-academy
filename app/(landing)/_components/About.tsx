"use client";

import React from "react";
import { Icon } from "@iconify/react";

import SectionHeading from "./SectionHeading";
import Image from "next/image";

interface AboutProps {
  data: {
    aboutLeft: {
      ImgLink: string;
      name: string;
      designation: string;
      resumeCv: string;
    };
    aboutRight: {
      aboutText: string;
      contactInfo: ContactInfo[];
      achievement: Achievement[];
      note: string;
    };
  };
}

interface ContactInfo {
  icon: string;
  data: string;
}

interface Achievement {
  number: string;
  meta: string;
  text: string;
}

export default function About({ data }: AboutProps) {
  const { aboutLeft, aboutRight } = data;
  const { ImgLink, name, designation, resumeCv } = aboutLeft;
  const { aboutText, contactInfo, achievement, note } = aboutRight;

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeading title="WELCOME TO..." subTitle="Nice to meet you!" />
        <div
          className="row gy-4"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
        >
          <div className="col-lg-5">
            <div className="about-left">
              <div className="about-avatar">
                <Image
                  src={ImgLink}
                  alt="Thumb"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={500}
                  height={300}
                />
              </div>
              <h3>{name}</h3>
              <p>{designation}</p>
              <div className="btn-bar">
                <a className="px-btn" href={resumeCv} download>
                  Download CV <Icon icon="bi-download" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 ps-xl-5">
            <div className="about-bio">
              <p>{aboutText}</p>
            </div>
            <div className="about-contact row gx-lg-5">
              {contactInfo.map((element, index) => (
                <div className="col-sm-6" key={index}>
                  <p>
                    <Icon icon={`bi:${element.icon}`} />{" "}
                    <span>{element.data}</span>
                  </p>
                </div>
              ))}
            </div>
            <div className="about-exp">
              <div className="row gy-4">
                {achievement.map((element, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="a-number">
                      <h6>{element.number}</h6>
                      <span>{element.meta}</span>
                    </div>
                    <p className="lead">{element.text}</p>
                  </div>
                ))}
              </div>
              <blockquote>
                <Icon icon="fa6-solid:quote-left" />
                <p>{note}</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

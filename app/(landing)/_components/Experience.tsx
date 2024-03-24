import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";

interface ExperienceProps {
  data: {
    text: string;
    resumeCv: string;
    experience: {
      start: string;
      end: string;
      title: string;
      subtitle: string;
    }[];
  };
}

export default function Experience({ data }: ExperienceProps) {
  const { text, experience, resumeCv } = data;
  return (
    <section className="section experience-section bg-g">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5">
            <div className="section-heading">
              <SectionHeading title="My Experience" subTitle="Experience" />
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {text}
              </motion.p>
              <motion.div
                className="btn-bar"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a href={resumeCv} className="px-btn dark" download>
                  Download my resume <Icon icon="bi-download" />
                </a>
              </motion.div>
            </div>
          </div>
          <div className="col-lg-7 ps-xl-5">
            <ul className="resume-box">
              {experience.map((element, index) => (
                <li
                  key={index}
                  // data-aos="fade-up"
                  // data-aos-duration="800"
                >
                  <div className="r-meta">
                    <span>
                      -{element.start} - {element.end}
                    </span>
                    <label>-{element.subtitle}</label>
                  </div>
                  <h5>{element.title}</h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

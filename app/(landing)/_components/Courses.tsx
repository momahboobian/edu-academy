import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";
import Modal from "./Modal";

interface CoursesProps {
  data: {
    ImgLink: string;
    link: string;
    title: string;
    subTitle: string;
    paragraphList: { text: string }[];
  }[];
}

export default function Courses({ data }: CoursesProps) {
  // Modal
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState<{
    ImgLink: string;
    link: string;
    title: string;
    subTitle: string;
    paragraphList: { text: string }[];
  } | null>(null);

  const getData = (
    imgLink: string,
    link: string,
    title: string,
    subTitle: string,
    paragraphList: { text: string }[]
  ) => {
    setTempData({
      ImgLink: imgLink,
      link: link,
      title: title,
      subTitle: subTitle,
      paragraphList: paragraphList,
    });
    setModal(true);
  };

  const modalClose = () => {
    setModal(false);
  };

  return (
    <section>
      <div id="courses" className="section work-section">
        <div className="container">
          <SectionHeading title="Recent Courses" subTitle="Courses" />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="row gy-5 lightbox-gallery"
          >
            {data.map((element, index) => (
              <div className="col-lg-6" key={index}>
                <div className="work-box">
                  <div
                    className="work-img"
                    onClick={() =>
                      getData(
                        element.ImgLink,
                        element.link,
                        element.title,
                        element.subTitle,
                        element.paragraphList
                      )
                    }
                  >
                    <Image
                      src={element.ImgLink}
                      alt="protfolio image"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="work-text">
                    <h6>{element.subTitle}</h6>
                    <h4>{element.title}</h4>
                    <div className="btn-bar">
                      <a
                        className="gallery-link"
                        onClick={() =>
                          getData(
                            element.ImgLink,
                            element.link,
                            element.title,
                            element.subTitle,
                            element.paragraphList
                          )
                        }
                      >
                        <Icon icon="bi:arrow-up-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {modal === true && tempData !== null && (
        <Modal
          img={tempData.ImgLink}
          link={tempData.link}
          title={tempData.title}
          subTitle={tempData.subTitle}
          paraList={tempData.paragraphList}
          modalClose={modalClose}
        />
      )}
      <section className="section testimonials-section bg-g">
        <div className="container">
          <SectionHeading title="Upcoming Courses" subTitle="More Courses" />
          <div className="testimonials">
            {/* <Carousel data={testimonialInfo} /> */}
            This is course Carousel
          </div>
        </div>
      </section>
    </section>
  );
}

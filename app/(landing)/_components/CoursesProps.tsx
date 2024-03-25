import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";
import Modal from "./Modal";

interface CoursesProps {
  data: {
    ImgLink: string;
    title: string;
    subTitle: string;
    paragraphList: string[];
  }[];
}

export default function Courses({ data }: CoursesProps) {
  // Modal
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (
    imgLink: string,
    title: string,
    subTitle: string,
    paragraphList: string[]
  ) => {
    console.log(imgLink, title, subTitle, paragraphList);
    let tempData = [imgLink, title, subTitle, paragraphList];
    setTempData((element) => [1, ...tempData]);
    setModal(true);
  };

  const modalClose = () => {
    setModal(false);
  };

  return (
    <section>
      <div id="courses" className="section work-section">
        <div className="container">
          <SectionHeading title="Recent Courses" subTitle="My Work" />
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
      {modal === true ? (
        <Modal
          img={tempData[1]}
          title={tempData[2]}
          subTitle={tempData[3]}
          paraList={tempData[4]}
          modalClose={modalClose}
        />
      ) : (
        ""
      )}
    </section>
  );
}

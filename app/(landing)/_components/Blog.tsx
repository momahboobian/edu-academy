import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";
import Modal from "./Modal";

interface BlogProps {
  data: {
    ImgLink: string;
    title: string;
    date: string;
    paragraphList: { text: string }[];
  }[];
}

export default function Blog({ data }: BlogProps) {
  // Modal
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState<{
    ImgLink: string;
    title: string;
    date: string;
    paragraphList: { text: string }[];
  } | null>(null);

  const getData = (
    imgLink: string,
    title: string,
    date: string,
    paragraphList: { text: string }[]
  ) => {
    let tempData = [imgLink, title, date, paragraphList];
    setTempData({
      ImgLink: imgLink,
      title: title,
      date: date,
      paragraphList: paragraphList,
    });
    setModal(true);
  };

  const modalClose = () => {
    setModal(false);
  };

  return (
    <section id="blog">
      <div className="section blog-section bg-dark">
        <div className="container">
          <SectionHeading title="Our Latest Update" subTitle="Our Blogs" />
          <div className="row gy-4">
            {data.map((element, index) => (
              <motion.div
                className="col-lg-3 col-sm-6"
                key={index}
                onClick={() =>
                  getData(
                    element.ImgLink,
                    element.title,
                    element.date,
                    element.paragraphList
                  )
                }
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="blog-post">
                  <div className="blog-post-img">
                    <a className="px_modal">
                      <Image
                        src={element.ImgLink}
                        width={300}
                        height={200}
                        alt="blog-img"
                      />
                    </a>
                  </div>
                  <div className="blog-post-info">
                    <h6>{element.date}</h6>
                    <h2>
                      <a className="px_modal">{element.title}</a>
                    </h2>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {modal === true && tempData !== null && (
        <Modal
          img={tempData.ImgLink}
          title={tempData.title}
          date={tempData.date}
          paraList={tempData.paragraphList}
          modalClose={modalClose}
        />
      )}
    </section>
  );
}

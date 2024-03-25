"use client";

import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

import data from "../data.json";

interface ModalProps {
  img: string;
  link?: string;
  title: string;
  date?: string;
  subTitle?: string;
  paraList: { text: string }[];
  modalClose: () => void;
}

export default function Modal({
  img,
  link,
  title,
  date,
  subTitle,
  paraList,
  modalClose,
}: ModalProps) {
  const modalStyle = {
    backgroundColor: "rgba(0,0,0,.6)",
    backdropFilter: "saturate(180%) blur(8px)",
    display: "block",
  };
  const [videoUrl, setVideoUrl] = useState(link || "");

  const handleImageClick = () => {
    if (link) {
      const youtubeUrl = link;
      setVideoUrl(youtubeUrl);
    }
  };

  const handleCloseModal = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      modalClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        modalClose();
      }
    };

    document.body.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalClose]);

  return (
    <div
      className="modal show fade bd-example-modal-lg"
      style={modalStyle}
      onClick={handleCloseModal}
    >
      <div className="px-modal">
        <button
          className="position-absolute top-0 end-0 text-white border-0 bg-transparent"
          onClick={modalClose}
        >
          <Icon icon="ic:round-close" />
        </button>
        <div className="single-blog-box">
          <div className="" onClick={handleImageClick}>
            {link ? (
              <div
                style={{
                  width: "100%",
                  height: "0",
                  paddingBottom: "56.25%",
                  position: "relative",
                }}
              >
                <ReactPlayer
                  url={videoUrl}
                  controls={true}
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: "0", left: "0" }}
                />
              </div>
            ) : (
              <div style={{ width: "100%", height: "auto" }}>
                <Image
                  src={img}
                  layout="responsive"
                  objectFit="contain"
                  width={300}
                  height={200}
                  alt=""
                />
              </div>
            )}
          </div>

          <div className="single-blog-content">
            {date && <h6>{date}</h6>}

            {subTitle && <h5>{subTitle}</h5>}
            <h2>{title}</h2>
            {paraList &&
              paraList.map((element, index) => (
                <p key={index}>{element.text}</p>
              ))}
            <div className="blog-meta">
              <label>Share</label>
              <ul className="nav social-link">
                {data.socialData.map((element, index) => (
                  <li key={index}>
                    <a href={element.link} className="p-2">
                      <Icon icon={`bi:${element.icon}`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

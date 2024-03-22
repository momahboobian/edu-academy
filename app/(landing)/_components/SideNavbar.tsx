"use client";

import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/js/bootstrap.bundle";

import Header from "./Header";

import data from "../data.json";
import Preloader from "./Preloader";

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    Aos.init({ once: true });

    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap.bundle")
      : null;
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header data={data.headerData} />;
        </>
      )}
    </>
  );
}

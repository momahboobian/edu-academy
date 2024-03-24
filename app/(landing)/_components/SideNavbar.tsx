"use client";

import { useEffect, useState } from "react";
import Header from "./Header";

import data from "../data.json";
import Preloader from "./Preloader";

export default function SideNavbar() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
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

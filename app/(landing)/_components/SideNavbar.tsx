"use client";

import { useEffect, useState } from "react";

import Header from "./Header";
// import Preloader from '../components/Preloader/Preloader';
// import CustomCursor from '../components/CustomCursor/CustomCursor';
import { headerData } from "../data.json";

const Layout: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {/* {isLoading ? (
        <Preloader />
      ) : (
        <>
          <CustomCursor /> */}
      <Header data={headerData} />
      {/* {children}
        </>
      )}  */}
    </>
  );
};

export default Layout;

"use client";

import { useEffect, useState } from "react";
// import Header from '../components/Header/Header';
import { headerData } from "../data.json";
// import Preloader from '../components/Preloader/Preloader';
// import CustomCursor from '../components/CustomCursor/CustomCursor';

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
          <CustomCursor />
          <Header data={headerData} />
          {children}
        </>
      )} */}
      This is side layout
    </>
  );
};

export default Layout;

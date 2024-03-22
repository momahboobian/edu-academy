"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
// import "bootstrap/dist/js/bootstrap.bundle";

const Context = createContext(undefined);

export default function Providers({ children }) {
  const [Bootstrap, setBootstrap] = useState(undefined);

  useEffect(() => {
    if (!Bootstrap) {
      const BS = require("bootstrap/dist/js/bootstrap.bundle");
      setBootstrap(BS);
    }
  }, []);

  return <Context.Provider value={{ Bootstrap }}>{children}</Context.Provider>;
}

export const useBootstrap = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("useBootstrap must be used inside BootstrapProvider");
  }

  return context;
};

import React, { useEffect } from "react";
import loadjs from "loadjs";

const ImportBootstrap: React.FC = () => {
  useEffect(() => {
    loadjs(
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js",
      "bootstrap"
    );
    return () => {
      loadjs.done("bootstrap");
    };
  }, []);

  return null;
};

export default ImportBootstrap;

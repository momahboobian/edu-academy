"use client";

import { useEffect } from "react";

import "bootstrap/dist/js/bootstrap.bundle";

export default function ImportBsJS() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  return null;
}

import { useState, useEffect } from "react";

function getWindowDimension() {
  const { innerHeight: height, innerWidth: width } = window;
  return { height, width };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] =
    useState(getWindowDimension());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimension());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

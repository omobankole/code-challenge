import { useEffect, useState } from "react";

export const useMediaQuery = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    const handleMedia = () => {
      setWidth(window.innerWidth);
    };
    console.log(width);
    window.addEventListener("resize", handleMedia);
    return () => window.removeEventListener("resize", handleMedia);
  }, [width]);
  return width;
};

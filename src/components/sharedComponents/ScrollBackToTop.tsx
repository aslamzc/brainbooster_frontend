"use client";
import { IconCircleChevronsUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const ScrollBackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowButton(scrollY > 500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`theme-transition-6 fixed right-5 z-[20000] translate-y-[100%]  rounded-full bg-bgColorTwo px-1 py-1 text-white shadow-md shadow-secondaryColor  ${
        showButton
          ? "visible bottom-10 translate-y-[3%] lg:bottom-16"
          : "invisible bottom-[-10px]"
      }`}
      onClick={scrollToTop}
    >
      <IconCircleChevronsUp size={36} />
    </button>
  );
};

export default ScrollBackToTop;

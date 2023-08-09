"use client";

import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useScrollYPosition } from "react-use-scroll-position";
console.log(window.scrollY);

const GoTopBox = () => {
  let scrolly = useScrollYPosition();

  const [showBox, setShowBox] = useState("none");
  useEffect(() => {
    // window.scrollY;
    if (scrolly >= 600) {
      setShowBox("flex");
    } else {
      setShowBox("none");
    }
  }, [scrolly]);
  return (
    <>
      <div
        onClick={(e) => {
          window.scroll(0, 0);
        }}
        className={` ${
          showBox !== "none" ? "   right-[14px]" : "  right-[-80px]"
        } cursor-pointer flex  fixed bg-blue-600   justify-center  transition-[.3s] items-center rounded-[4px]  w-[30px] h-[40px] text-white   bottom-[40px] z-[1000] `}
      >
        <KeyboardDoubleArrowRight className=" rotate-[-90deg]" />
      </div>
    </>
  );
};

export default GoTopBox;

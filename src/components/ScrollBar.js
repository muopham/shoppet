import React from "react";
import { BsArrowUpShort } from "react-icons/bs";

const ScrollBar = () => {
  const handleScrollBar = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="fixed right-5 bottom-10 bg-[#6c757d] hover:bg-main">
      <button className="w-8 h-8 text-2xl font-thin" onClick={handleScrollBar}>
        <BsArrowUpShort className="inline-block text-white" />
      </button>
    </div>
  );
};

export default ScrollBar;

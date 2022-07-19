import React, { useState, useEffect } from "react";
import "swiper/css";
import { GrNext, GrPrevious } from "react-icons/gr";
import sliderData from "../data/slideData";
const Slider = () => {
  const [active, setActive] = useState(0);
  const length = sliderData.length;

  const handleNextSlide = () => {
    setActive(active === length - 1 ? 0 : active + 1);
  };
  const handlePrevSlide = () => {
    setActive(active === 0 ? length - 1 : active - 1);
  };

  return (
    <div className="w-full select-none relative group ">
      <div>
        <img src={sliderData[active].img} alt={sliderData[active].title} />
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between text-black  px-2 lg:px-7 invisible group group-hover:visible">
        <GrPrevious
          onClick={handlePrevSlide}
          className="w-5 h-5 lg:w-8 lg:h-8 font-thin p-1 bg-white cursor-pointer hover:bg-main hover:text-white transform transition-all"
        />
        <GrNext
          onClick={handleNextSlide}
          className="w-5 h-5 lg:w-8 lg:h-8 font-thin p-1 bg-white cursor-pointer hover:bg-main hover:text-white transform transition-all"
        />
      </div>
    </div>
  );
};

export default Slider;

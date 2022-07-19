import React from "react";
import commentData from "../data/commentData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Comment = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Pagination, Autoplay]}
      autoplay={true}
      pagination={{ clickable: true, dynamicBullets: true }}
    >
      {commentData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-full flex flex-col lg:flex-row lg:p-16 gap-8 p-5">
            <div className="w-full h-full overflow-hidden m-auto">
              <img
                src={item.avatar}
                alt="banner"
                className="w-20 h-20 lg:w-1/4 lg:h-1/4 rounded-full mx-auto"
              />
              <p className="text-[#383838] text-center mt-5 font-semibold">
                {item.name}
              </p>
            </div>
            <div className="text-center text-sm font-thin lg:text-lg lg:my-auto">
              <p>{item.comment}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Comment;

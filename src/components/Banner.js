import React from "react";
import { Link } from "react-router-dom";
import banner_1 from "../asset/oder-1.jpg";
import banner_2 from "../asset/oder-2.jpg";

const Banner = () => {
  return (
    <div className="my-16 gap-4 w-full flex justify-between">
      <Link to="/catalog">
        <div>
          <img src={banner_1} alt="banner" className="w-full" />
        </div>
      </Link>
      <Link to="/catalog">
        <div className="hidden md:block">
          <img src={banner_2} alt="banner" className="w-full" />
        </div>
      </Link>
    </div>
  );
};

export default Banner;

import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import Fade from "react-reveal/Fade";

const NavMobile = ({ data, handleMenu }) => {
  return (
    <Fade right>
      <nav className="z-[1000] w-full h-auto fixed pt-20 top-0 left-0 bottom-0 right-0 bg-white ">
        <div className="flex flex-col items-center gap-5 transition-transform ">
          <div className="w-full" onClick={handleMenu}>
            <AiOutlineClose
              className="absolute top-6 right-6 hover:text-main cursor-pointer lg:hidden"
              size={21}
            />
          </div>
          {data.map((item, index) => (
            <Link to={item.path} key={index}>
              <span className="uppercase hover:text-main" onClick={handleMenu}>
                {item.display}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </Fade>
  );
};

export default NavMobile;

import React, { useEffect } from "react";
import banner from "../asset/oder-1.jpg";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Comment from "../components/Comment";
import Section from "../components/Section";
const About = () => {
  return (
    <div>
      <Breadcrumb>
        <p className="uppercase text-xl md:text-3xl font-semibold">About Us</p>
        <Link to="/">
          <span className="text-base md:text-xl font-medium hover:text-main">
            Home
          </span>
        </Link>
        <span className="md:text-lg"> - About</span>
      </Breadcrumb>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <img src={banner} alt="logo" />
          </div>
          <div>
            <p className="font-semibold text-lg text-center md:text-left mb-5">
              Về chúng tôi
            </p>
            <p className="font-thin text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              similique numquam nulla harum, blanditiis dolorem ducimus beatae
              facere eos tempore debitis impedit doloribus ex facilis error
              officia? Non, asperiores modi! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Vel similique numquam nulla harum,
              blanditiis dolorem ducimus beatae facere eos tempore debitis
              impedit doloribus ex facilis error officia?
            </p>
            <Link to="/contact">
              <div className="inline-block mt-5 px-8 py-3 rounded-full bg-main text-white hover:bg-black uppercase">
                Contact
              </div>
            </Link>
          </div>
        </div>
      </Section>
      <div className="w-full h-full bg-[#f4f4f4] my-16">
        <Comment />
      </div>
    </div>
  );
};

export default About;

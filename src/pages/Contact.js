import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Section from "../components/Section";
import { GiPhone } from "react-icons/gi";
import { GoMail } from "react-icons/go";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Breadcrumb>
        <p className="uppercase text-xl md:text-3xl font-semibold">
          Contact Us
        </p>
        <Link to="/">
          <span className="text-base md:text-xl font-medium hover:text-main">
            Home
          </span>
        </Link>
        <span className="md:text-lg"> - Contact</span>
      </Breadcrumb>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <p className="mb-5 text-xl font-semibold">Liên hệ</p>
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                className="w-full outline-none px-[15px] py-[10px] bg-gray-50"
                type="text"
                placeholder="Your name..."
              />
              <input
                className="w-full outline-none px-[15px] py-[10px] bg-gray-50"
                type="email"
                placeholder="Email..."
              />
            </div>
            <div className="my-4">
              <input
                className="w-full outline-none px-[15px] py-[10px] bg-gray-50"
                type="text"
                placeholder="Subject..."
              />
            </div>
            <div>
              <textarea
                className="w-full outline-none px-[15px] py-[10px] bg-gray-50"
                cols={30}
                rows={5}
                name="message"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="uppercase my-5 px-10 py-2 text-white bg-main hover:bg-black rounded-full">
              Send
            </button>
          </div>
          <div>
            <p className="mb-5 text-xl font-semibold">Contact us</p>
            <p className="font-thin text-justify">
              Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum. Mirum est notare quam littera gothica, quam
              nunc putamus parum claram anteposuerit litterarum formas human.
            </p>
            <div className="my-5">
              <p className="flex gap-1 mb-2">
                <GiPhone size={22} /> 123.123.123
              </p>
              <p className="flex gap-1">
                <GoMail size={22} /> demo@gmail.com
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;

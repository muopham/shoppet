import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsYoutube, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  const footerAboutLinks = [
    {
      display: "Giới thiệu",
      path: "/about",
    },
    {
      display: "Liên hệ",
      path: "/contact",
    },
    {
      display: "Tuyển dụng",
      path: "/about",
    },
    {
      display: "Tin tức",
      path: "/about",
    },
    {
      display: "Hệ thống cửa hàng",
      path: "/about",
    },
  ];
  const footerCustomerLinks = [
    {
      display: "Chính sách đổi trả",
      path: "/about",
    },
    {
      display: "Chính sách bảo hành",
      path: "/about",
    },
    {
      display: "Chính sách hoàn tiền",
      path: "/about",
    },
  ];
  return (
    <footer className="px-5 py-5 lg:py-20 bg-[#f4f4f4] shadow-sm">
      <div className="container-fluid grid gap-10 grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
        <div>
          <p className="uppercase text-lg font-medium mb-5">Thông tin</p>
          <p className="font-thin mb-3 text-justify">
            Lorem ipsum dolor sit amet, co adipisi elit, sed eiusmod tempor
            incididunt ut labore et dolore
          </p>
          <div className="flex gap-6">
            <BsFacebook className="cursor-pointer hover:text-main" />
            <BsTwitter className="cursor-pointer hover:text-main" />
            <BsYoutube className="cursor-pointer hover:text-main" />
            <BsLinkedin className="cursor-pointer hover:text-main" />
          </div>
        </div>
        <div>
          <p className="uppercase text-lg font-medium mb-5">Liên kết</p>
          {footerAboutLinks.map((item, index) => (
            <Link to={item.path} key={index}>
              <p className="my-2 hover:translate-x-1 hover:text-main transition-all duration-150">
                {item.display}
              </p>
            </Link>
          ))}
        </div>
        <div>
          <p className="uppercase text-lg font-medium mb-5">Trợ giúp</p>
          {footerCustomerLinks.map((item, index) => (
            <Link to={item.path} key={index}>
              <p className="my-2 hover:translate-x-1 hover:text-main transition-all duration-150">
                {item.display}
              </p>
            </Link>
          ))}
        </div>
        <div className="relative">
          <p className="uppercase text-lg font-medium mb-5">Đăng ký</p>
          <p className="font-thin mb-3 text-justify">
            Đăng ký nhận bản tin của chúng tôi và được giảm giá 10% khi mua hàng
            đầu tiên của bạn...
          </p>
          <input
            type="text"
            placeholder="demo@gmail.com"
            className="relative w-full py-2 pl-3 rounded-3xl"
          />
          <button className="bg-main text-white text-xl uppercase px-4 py-[6px] rounded-3xl hover:bg-black absolute right-0 ">
            Send
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

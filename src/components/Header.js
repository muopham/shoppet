import React, { useState, useEffect } from "react";
import logo from "../asset/logo.jpg";
import { Link, useLocation } from "react-router-dom";
import { BsSearch, BsHandbag } from "react-icons/bs";
import { BiUser, BiMenu } from "react-icons/bi";
import NavMobile from "./NavMobile";

import { useSelector } from "react-redux";

const Header = () => {
  const headerNav = [
    {
      display: "Trang chủ",
      path: "/",
    },
    {
      display: "Thú cưng",
      path: "/catalog",
    },
    {
      display: "Blog",
      path: "/blog",
    },
    {
      display: "Liên hệ",
      path: "/contact",
    },
    {
      display: "Giới thiệu",
      path: "/about",
    },
  ];

  const cart = useSelector((state) => state.cart);

  const { pathname } = useLocation();
  const activeNav = headerNav.findIndex((item) => item.path === pathname);

  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 10 ? setScroll(true) : setScroll(false);
    });
  }, []);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className={`px-5 bg-main text-white w-full `}>
        <div className="container-fluid">
          <span className="">Welcome To Shop!</span>
        </div>
      </div>

      <div className={`bg-white w-full  ${scroll ? "sticky" : " "}`}>
        <div className="container-fluid px-5 min-h-[60px] bg-white flex justify-between items-center shadow-sm">
          <div className="w-[80px]">
            <Link to="/">
              <img
                className="w-full overflow-hidden cursor-pointer"
                src={logo}
                alt="logo"
              />
            </Link>
          </div>

          {/* Navbar */}
          <nav className="justify-between text-base hidden lg:block">
            {headerNav.map((item, index) => (
              <div
                key={index}
                className={`inline-block h-full hover:text-main mx-4 ${
                  index === activeNav ? "active" : ""
                }`}
              >
                <Link to={item.path}>
                  <span className="uppercase">{item.display}</span>
                </Link>
              </div>
            ))}
          </nav>
          {/* end Navbar */}

          <div>
            <div className="text-2xl flex justify-between gap-4 lg:gap-6 relative">
              <BsSearch className="hover:text-main cursor-pointer" />
              <BiUser className="hover:text-main cursor-pointer" />
              <Link to="/cart">
                <BsHandbag className="hover:text-main cursor-pointer" />
              </Link>
              <span className="absolute right-[30px] lg:right-[-14px] top-[-8px] text-white text-sm px-2 rounded-full bg-main">
                {cart.length > 0 ? cart.length : 0}
              </span>

              <BiMenu
                className="hover:text-main cursor-pointer lg:hidden"
                onClick={handleMenu}
              />
            </div>
          </div>
        </div>
      </div>
      {/* menu mobile */}
      {menu && <NavMobile data={headerNav} handleMenu={handleMenu} />}
    </>
  );
};

export default Header;

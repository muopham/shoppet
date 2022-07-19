import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsArrowLeftShort } from "react-icons/bs";
import productData from "../data/listProduct";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Breadcrumb from "../components/Breadcrumb";
const Catalog = () => {
  const colors = [
    {
      id: 1,
      name: "Black",
    },
    {
      id: 2,
      name: "Blue",
    },
    {
      id: 3,
      name: "Red",
    },
    {
      id: 4,
      name: "White",
    },
    {
      id: 5,
      name: "Pink",
    },
  ];

  const listProduct = productData.getAllProducts();

  const filterRef = useRef(null);
  const showHideFilter = () =>
    filterRef.current.classList.toggle("active-filter");

  return (
    <div>
      <Breadcrumb>
        <p className="uppercase text-xl md:text-3xl font-semibold">shop</p>
        <Link to="/">
          <span className="text-base md:text-xl font-medium hover:text-main">
            Home
          </span>
        </Link>
        <span className="md:text-lg"> - Thú cưng</span>
      </Breadcrumb>
      <div className="container-fluid mb-8 flex flex-col md:flex-row relative">
        <div
          className="md:hidden absolute -top-5 left-5 px-5 py-2 text-white cursor-pointer bg-main"
          onClick={showHideFilter}
        >
          Bộ lọc
        </div>
        <div
          ref={filterRef}
          className="md:w-1/4 w-1/2 h-full mr-4 px-4 bg-white fixed z-[999] top-0 left-0 -translate-x-full transition-all md:relative md:z-0 md:translate-x-0"
        >
          <div
            className="md:hidden cursor-pointer py-5"
            onClick={showHideFilter}
          >
            <BsArrowLeftShort className="" size={30} />
          </div>
          {/* search */}
          <div className="mb-10 ">
            <div className="mb-6">
              <p className="uppercase text- font-medium">Tìm kiếm</p>
            </div>
            <div className="relative ">
              <input
                type="text"
                className=" px-3 py-3 w-full text-sm border-solid border-2 border-[#f4f4f4] outline-none"
                placeholder="Tìm kiếm..."
              />
              <button className="absolute right-0 bg-[#f4f4f4] p-[17px] top-1/2 -translate-y-1/2 hover:bg-main hover:text-white">
                <BsSearch />
              </button>
            </div>
          </div>
          {/* checkbox */}
          <div className="mb-10">
            <div className="mb-6">
              <p className="uppercase text- font-medium">Màu sắc</p>
            </div>
            <div className="">
              {colors.map((color) => (
                <div key={color.id} className="py-3 flex flex-row">
                  <label
                    htmlFor={`${color.id}`}
                    className="text-base flex flex-row relative hover:text-main cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="checked:border-[#ccc] checked:bg-main w-5 h-5 appearance-none rounded-full border-2 border-solid border-[#ccc] mr-4"
                      id={`${color.id}`}
                    />
                    {color.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* list product */}
        <div className="w-full mt-10 md:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 border-2 border-[#f4f4f4] p-4">
          {listProduct.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      <Pagination />
    </div>
  );
};

export default Catalog;

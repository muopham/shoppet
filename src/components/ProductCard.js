import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import formatNumber from "../utils/formatNumber";
import { VscAdd } from "react-icons/vsc";
import { BsCart2, BsEye } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";

const ProductCard = (props) => {
  const { product } = props;
  const dispath = useDispatch();
  const handleAdd = (product) => {
    let newProduct = {
      title: product.title,
      slug: product.slug,
      avatar: product.avatar,
      price: product.price,
      quantity: 1,
    };
    dispath(add(newProduct));
  };

  return (
    <div className="w-full cursor-pointer group flex flex-col shadow">
      <div className="h-full relative">
        <Link to={`/catalog/${product.slug}`}>
          <div className="relative pt-[100%] overflow-hidden">
            <img
              src={product.avatar}
              alt={product.title}
              className="w-full absolute top-0 left-0 "
            />
          </div>
        </Link>
        <div className="group group-hover:translate-x-[-50%] group-hover:opacity-100 ease-linear duration-300 opacity-0 flex justify-around w-[100px] bg-gray-200 py-2 absolute top-1/2 -translate-y-1/2 left-1/2 z-50 translate-x-full text-xl lg:text-2xl font-thin">
          <VscAdd
            onClick={() => handleAdd(product)}
            className="hover:text-main"
          />
          <Link to="/cart">
            <BsCart2 className="hover:text-main" />
          </Link>
        </div>
      </div>
      <div className="py-5">
        <Link to={`/catalog/${product.slug}`}>
          <div className="flex justify-center hover:text-main">
            <p className="text-lg font-semibold uppercase ">{product.title}</p>
          </div>
        </Link>
        <div className="flex justify-center gap-2 mt-1">
          <p>{formatNumber(product.price)}đ</p>
          <del className="text-gray-400">{formatNumber(100000)}đ</del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

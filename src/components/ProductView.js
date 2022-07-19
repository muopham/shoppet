import React, { useState } from "react";
import Section from "../components/Section";
import formatNumber from "../utils/formatNumber";
import { FaFacebook, FaYoutube, FaTwitter, FaGithub } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const ProductView = (props) => {
  const { product } = props;
  const dispath = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAdd = (product) => {
    let newProduct = {
      title: product.title,
      slug: product.slug,
      avatar: product.avatar,
      price: product.price,
      quantity: quantity,
    };
    dispath(add(newProduct));
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };
  return (
    <Section>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[40%] lg:w-[40%]">
          <div className="mb-3">
            <Swiper
              loop={true}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              grabCursor={true}
            >
              {product.img.map((item, index) => (
                <SwiperSlide key={index} className="custom-swiper">
                  <img className="select-none" src={item} alt="img" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="md:ml-8">
          <div className="mb-4">
            <h2 className="text-2xl">{product.title}</h2>
          </div>
          <div className="mb-4">
            <span className="text-lg font-semibold">
              {formatNumber(product.price)}đ
            </span>
            <del className="text-gray-300 ml-3">{formatNumber(100000)}đ</del>
          </div>
          <div className="mb-3 text-justify font-thin">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          </div>
          <div className="mb-7">
            <p className="italic mb-2">Số lượng:</p>
            <p
              onClick={() => handleMinusQuantity()}
              className="select-none inline-block text-center text-xl w-8 h-8 hover:bg-main hover:text-white border-2 cursor-pointer"
            >
              -
            </p>
            <p className="select-none inline-block text-center text-xl w-20 h-8 border-y-2">
              {quantity}
            </p>
            <p
              onClick={() => handlePlusQuantity()}
              className="select-none inline-block text-center text-xl w-8 h-8 hover:bg-main hover:text-white border-2 cursor-pointer"
            >
              +
            </p>
          </div>
          <div className="mb-5">
            <div
              onClick={() => handleAdd(product)}
              className="inline-block cursor-pointer select-none uppercase font-medium px-4 py-1  bg-main text-white hover:bg-black "
            >
              Add to cart
            </div>
          </div>
          <div className="flex gap-3 ">
            <FaFacebook size={22} className="hover:text-main cursor-pointer" />
            <FaYoutube size={22} className="hover:text-main cursor-pointer" />
            <FaTwitter size={22} className="hover:text-main cursor-pointer" />
            <FaGithub size={22} className="hover:text-main cursor-pointer" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProductView;

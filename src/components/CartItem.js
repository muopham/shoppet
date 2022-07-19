import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import formatNumber from "../utils/formatNumber";
import { remove, update } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = (props) => {
  const dispath = useDispatch();
  const [product, setProduct] = useState(props.product);
  const [quantity, setQuantity] = useState(props.product.quantity);

  useEffect(() => {
    setProduct(props.product);
    setQuantity(props.product.quantity);
  }, [props.product]);
  const handlePlusQuantity = (product) => {
    dispath(
      update({
        ...product,
        quantity: product.quantity + 1,
      })
    );
  };
  const handleMinusQuantity = (product) => {
    dispath(
      update({
        ...product,
        quantity: quantity - 1 === 0 ? 1 : quantity - 1,
      })
    );
  };
  return (
    <div className="flex items-center justify-between border-b-2 mb-4 pb-3">
      <div className="w-[20%] lg:w-[15%]">
        <img
          className="w-full h-full object-cover"
          src={product.avatar}
          alt=""
        />
      </div>
      <div className="lg:text-lg">
        <p>{product.title}</p>
      </div>
      <div>
        <p>{formatNumber(product.price)}đ</p>
      </div>
      <div className="flex">
        <p
          onClick={() => handleMinusQuantity(product)}
          className="select-none  text-center text-xl w-8 h-8 hover:bg-main hover:text-white border-2 cursor-pointer"
        >
          -
        </p>
        <p className="select-none  text-center text-xl w-10 h-8 border-y-2">
          {quantity}
        </p>
        <p
          onClick={() => handlePlusQuantity(product)}
          className="select-none  text-center text-xl w-8 h-8 hover:bg-main hover:text-white border-2 cursor-pointer"
        >
          +
        </p>
      </div>
      <div
        onClick={() => {
          dispath(remove(product));
        }}
        className="cursor-pointer hover:text-red-500"
      >
        <MdDelete size={26} />
      </div>
    </div>
  );
};

export default CartItem;

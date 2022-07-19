import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Section from "../components/Section";
import formatNumber from "../utils/formatNumber";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { cartTotalSelector, cartTotalPriceSelector } from "../redux/selector";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const cartTotal = useSelector(cartTotalSelector);
  const cartTotalPrice = useSelector(cartTotalPriceSelector);
  return (
    <div>
      <Breadcrumb>
        <p className="uppercase text-xl md:text-3xl font-semibold">Cart</p>
        <Link to="/">
          <span className="text-base md:text-xl font-medium hover:text-main">
            Home
          </span>
        </Link>
        <span className="md:text-lg"> - Cart</span>
      </Breadcrumb>
      <Section>
        <div className="flex flex-col md:flex-row">
          <div className="shadow px-5 py-8 md:w-[50%] lg:w-[40%] mb-4">
            <p className="mb-4">Bạn có {cartTotal} sản phẩm trong giỏ hàng!</p>
            <p>
              Tổng tiền:{" "}
              <span className="text-main text-xl">
                {formatNumber(cartTotalPrice)}đ
              </span>
            </p>

            <div className="uppercase text-center cursor-pointer my-5 px-10 py-2 text-white bg-main hover:bg-black">
              Đặt hàng
            </div>
            <Link to="/catalog">
              <div className="uppercase text-center cursor-pointer my-5 px-10 py-2 text-white bg-main hover:bg-black">
                tiếp tục mua hàng
              </div>
            </Link>
          </div>
          <div className="w-full lg:p-5 lg:ml-6 shadow">
            {cartProducts.map((product, index) => (
              <CartItem product={product} key={index} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Cart;

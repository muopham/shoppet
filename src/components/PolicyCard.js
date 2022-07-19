import React from "react";
import { MdLocalShipping, MdOutlineHeadphones } from "react-icons/md";
import { BsBarChartFill } from "react-icons/bs";
const PolicyCard = () => {
  const policy = [
    {
      name: "Miễn phí giao hàng",
      description: "Giao hàng miễn phí cho tất cả các đơn đặt hàng",
      icon: <MdLocalShipping />,
    },
    {
      name: "Hỗ trợ trực tiếp",
      description: "Hỗ trợ trực tuyến trực tuyến 24/7",
      icon: <MdOutlineHeadphones />,
    },

    {
      name: "Hỗ trợ hoàn tiền",
      description: "Đảm bảo hoàn trả dưới 5 ngày",
      icon: <BsBarChartFill />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {policy.map((item, index) => (
        <div
          className="w-full h-full bg-[#f4f4f4] text-center px-8 py-8"
          key={index}
        >
          <div className="text-3xl justify-center flex my-2">{item.icon}</div>
          <p className="text-lg font-medium">{item.name}</p>
          <p className=" mt-1 font-thin text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PolicyCard;

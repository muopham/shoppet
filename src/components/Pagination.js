import React from "react";

const Pagination = () => {
  return (
    <div className="text-center mb-8">
      <span className="px-3 py-2 mx-1 hover:bg-main hover:text-white cursor-pointer active border-2 border-[#f4f4f4]">
        1
      </span>
      <span className="px-3 py-2 mx-1 hover:bg-main hover:text-white cursor-pointer border-2 border-[#f4f4f4]">
        2
      </span>
      <span className="px-3 py-2 mx-1 hover:bg-main hover:text-white cursor-pointer border-2 border-[#f4f4f4]">
        3
      </span>
    </div>
  );
};

export default Pagination;

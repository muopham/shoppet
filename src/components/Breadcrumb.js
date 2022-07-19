import React from "react";

const Breadcrumb = (props) => {
  return (
    <div className="w-full py-16 text-center bg-[#f4f4f4] mb-16">
      {props.children}
    </div>
  );
};

export default Breadcrumb;

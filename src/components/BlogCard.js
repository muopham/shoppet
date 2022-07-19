import React from "react";
import { Link } from "react-router-dom";
const Blog = ({ blog }) => {
  return (
    <div className="cursor-pointer shadow">
      <div className="w-full h-[300px] overflow-hidden hover:opacity-70 ">
        <img className="w-full h-full" src={blog.img} alt="blog" />
      </div>
      <div className="px-4 pb-4">
        <p className="text-xl font-semibold my-5 hover:text-main">
          {blog.title}
        </p>
        <p className="text-base font-thin text-justify blog_description">
          {blog.description}
        </p>
        <div className="mt-5">
          <Link to="/blog">
            <p className="underline">Xem thêm</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;

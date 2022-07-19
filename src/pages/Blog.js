import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Section from "../components/Section";
import blogData from "../data/listBlog";
import BlogCard from "../components/BlogCard";
const Blog = () => {
  return (
    <div>
      <Breadcrumb>
        <p className="uppercase text-xl md:text-3xl font-semibold">Blog</p>
        <Link to="/">
          <span className="text-base md:text-xl font-medium hover:text-main">
            Home
          </span>
        </Link>
        <span className="md:text-lg"> - Blog</span>
      </Breadcrumb>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.getAllBlog().map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Blog;

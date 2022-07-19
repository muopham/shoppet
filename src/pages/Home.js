import React from "react";

import productData from "../data/listProduct";
import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";
import Comment from "../components/Comment";
import BlogCard from "../components/BlogCard";
import PolicyCard from "../components/PolicyCard";
import blogData from "../data/listBlog";
import Section, { SectionTitle } from "../components/Section";

const Home = () => {
  return (
    <div className="w-full">
      <Slider />
      <Section>
        {/* Featured products */}
        <SectionTitle>Sản phẩm nổi bật</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 my-10">
          {productData.getProducts(4).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* banner */}
        <Banner />

        {/* List product */}
        <SectionTitle>Phổ biến</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 my-10">
          {productData.getProducts(8).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* blog */}
        <SectionTitle>Blog</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-10 gap-8">
          {blogData.getBlogs(3).map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </Section>

      {/* comment */}
      <div className="w-full h-full bg-[#f4f4f4] my-16">
        <Comment />
      </div>

      {/* policy card */}
      <Section>
        <PolicyCard />
      </Section>
    </div>
  );
};

export default Home;

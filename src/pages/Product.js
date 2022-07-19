import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import productData from "../data/listProduct";
import Breadcrumb from "../components/Breadcrumb";
import ProductView from "../components/ProductView";
import ProductCard from "../components/ProductCard";

import Section, { SectionTitle } from "../components/Section";
const Product = () => {
  const params = useParams().slug;
  const product = productData.getProductBySlug(params);
  const products = productData.getProducts(4);

  return (
    <div>
      <Breadcrumb>
        <p className="uppercase text-xl md:text-3xl font-semibold">product</p>
        <Link to="/">
          <span className="text-base md:text-xl font-medium hover:text-main">
            Home
          </span>
        </Link>
        <span className="md:text-lg"> - {product.title}</span>
      </Breadcrumb>
      <div className="px-5">
        <ProductView product={product} />
      </div>
      <div className="w-full py-20 bg-[#f4f4f4]">
        <Section>
          <p className="text-xl font-semibold text-center mb-5">Description</p>
          <p className="text-justify font-thin text-base">
            {product.description}
          </p>
        </Section>
      </div>
      <Section>
        <SectionTitle>Sản phẩm tương tự</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 my-10">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Product;

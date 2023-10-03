import React from "react";
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";
import Navbar from "../Navbar";

const ProductLayout = ({ product }: { product: Product }) => {
  return (
    <div className="w-full h-full max-w-[2000px] m-auto  p-12 flex flex-col md:flex-row justify-center gap-12 items-start md:mt-[15rem]">
      <ProductImages product={product} />
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductLayout;

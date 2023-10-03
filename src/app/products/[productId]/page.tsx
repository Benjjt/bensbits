import React from "react";
import getProduct from "@/lib/getProduct";
import ProductLayout from "@/components/ProductLayout";
import Image from "next/image";
import Navbar from "@/components/Navbar";

type Params = {
  params: {
    productId: string;
  };
};

const ProductPage = async ({ params: { productId } }: Params) => {
  const productData: Promise<Product> = getProduct(productId);

  const product = await productData;

  return (
    <div className="w-screen h-screen flex justify-start items-start ">
      <Navbar />
      <ProductLayout product={product} />
    </div>
  );
};

export default ProductPage;

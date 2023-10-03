import React from "react";

const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full ">
      <h1 className="font-bold text-2xl">{product?.title}</h1>
      <span className="flex justify-start items-center gap-2 text-lg">
        <span>Price :</span>{" "}
        <span className="font-bold text-xl">{`£${product.price}`}</span>
      </span>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;

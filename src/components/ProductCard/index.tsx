import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <Link
        href={`/products/${product.id}`}
        className={` transition-all group  relative  text-light font-bold hover:cursor-pointer hover:scale-105  h-[30rem] max-w-[18rem]  flex flex-col gap-4 justify-start items-between `}
        key={product.id}
        onClick={() => {
          console.log("Open product page for: ", product.id);
        }}
      >
        <div className="h-2/3 w-full  relative">
          <Image
            style={{ objectFit: "cover" }}
            fill={true}
            alt={"product"}
            className="rounded-lg"
            src={product.images[0]}
          />
        </div>
        <div className="h-1/3 flex flex-col justify-start items-start gap-2 p-2 ">
          <h2 className="group-hover:text-highlight">{product.title}</h2>
          <div className="flex justify-start items-center gap-2">
            <span className="text-red-600 font-light">{`-${product.discountPercentage}%`}</span>
            <span className="text-xl">{`£ ${product.price}`}</span>
          </div>
          <p className="font-light overflow-hidden line-clamp-3 ">
            {product.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

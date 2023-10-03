"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ProductImages = ({ product }: { product: Product }) => {
  const [currentImage, setCurrentImage] = useState<string>();

  useEffect(() => {
    setCurrentImage(product.images[0]);
  }, [product]);

  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-start w-full    gap-4 h-1/2">
      <div className="flex flex-row md:flex-col justify-start items-start gap-4 md:h-full   ">
        {product.images.map((image, index) => {
          return (
            <div
              key={index}
              onClick={() => setCurrentImage(image)}
              className={`rounded-lg hover:border-highlight border ${
                image === currentImage ? "border-highlight" : "border-black"
              }  w-[3rem] h-[3rem] relative shadow-lg hover:cursor-pointer hover:scale-105 transition-all`}
            >
              <Image
                alt={"product"}
                src={image}
                fill={true}
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
            </div>
          );
        })}
      </div>
      <div className="border rounded-lg border-black shadow-lg relative h-full w-full max-w-[35rem] max-h-[30rem]">
        <Image
          style={{ objectFit: "contain" }}
          fill={true}
          alt={"product"}
          className="rounded-lg border border-black"
          src={currentImage || product.images[0]}
        />
      </div>
    </div>
  );
};

export default ProductImages;

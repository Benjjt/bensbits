import React from "react";
import ProductCard from "../ProductCard";

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="relative  grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5  gap-8 p-12 mt-[5rem] ">
      {products.map((item: Product) => {
        return <ProductCard key={item.id} product={item} />;
      })}
    </div>
  );
};

export default ProductGrid;

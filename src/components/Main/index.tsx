"use client";
import React from "react";
import ProductGrid from "../ProductGrid";
import Navbar from "../Navbar";
import { useState } from "react";

const Main = ({ products }: { products: Product[] }) => {
  return (
    <main
      className={`flex h-screen w-screen m-auto flex-col justify-start items-center  md:gap-8 max-w-[2000px] relative`}
    >
      <Navbar />
      <ProductGrid products={products} />
    </main>
  );
};

export default Main;

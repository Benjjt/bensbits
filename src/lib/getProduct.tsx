import React from "react";

export default async function getProduct(productId: string) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);

  if (!res.ok) throw new Error("Failed to fetch user");

  return res.json();
}

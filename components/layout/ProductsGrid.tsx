"use client";

import { Product } from "@/types/types";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import api from "@/lib/axiosInstance";
import useSWR from "swr";
const ProductsGrid = () => {
  const getProducts = async () => {
    const response = await api.get("/products");
    return response.data;
  };
  const { data: products, isLoading } = useSWR("/products", getProducts);
  if (isLoading) {
    return <p className="text-3xl text-center my-4">Loading...</p>;
  }

  return (
    <>
      {products?.length === 0 && (
        <h2 className="text-center text-2xl text-red-500 my-4">
          You Do Not Have Any Products Yet
        </h2>
      )}
      {products && products?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {products?.map((product: Product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      )}
    </>
  );
};

export default ProductsGrid;

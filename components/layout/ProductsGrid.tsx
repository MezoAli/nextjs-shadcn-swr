"use client";

import { Product } from "@/types/types";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductsGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    getProducts();
  }, []);
  return (
    <>
      {products?.length === 0 && (
        <h2 className="text-center text-2xl text-red-500 my-4">
          You Do Not Have Any Products Yet
        </h2>
      )}
      {products && products?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {products?.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      )}
    </>
  );
};

export default ProductsGrid;

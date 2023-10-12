"use client";

import useSWR from "swr";
import api from "@/lib/axiosInstance";

interface ProductPageProps {
  params: {
    productId: string;
  };
}
const ProductPage = ({ params }: ProductPageProps) => {
  const getSingleProduct = async (productId: string) => {
    const response = await api.get(`/products/${productId}`);
    return response.data;
  };
  const { data, error, isLoading } = useSWR(params.productId, getSingleProduct);
  console.log(data);
  console.log(error);
  if (isLoading) {
    return <p className="text-3xl text-center my-4">Loading...</p>;
  }

  return <div>ProductPage {params.productId}</div>;
};

export default ProductPage;

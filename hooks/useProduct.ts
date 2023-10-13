import api from "@/lib/axiosInstance";
import { Product } from "@/types/types";
import useSWR from "swr";
import { AxiosError } from "axios";

const getSingleProduct = async (productId: string) => {
  const response = await api.get<Product>(`/products/${productId}`);
  return response.data;
};

export function useProduct(productId: string) {
  const { data, isLoading, mutate } = useSWR(productId, async () => {
    try {
      return await getSingleProduct(productId);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        return null;
      } else {
        throw error;
      }
    }
  });

  return {
    product: data as Product,
    isLoading,
    mutateProduct: mutate,
  };
}

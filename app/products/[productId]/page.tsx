"use client";

import api from "@/lib/axiosInstance";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StarRatings from "react-star-ratings";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { useProduct } from "@/hooks/useProduct";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { toast } = useToast();
  const [name, setName] = useState("");

  const { product, isLoading, mutateProduct } = useProduct(params.productId);
  const updateProductName = async () => {
    try {
      await api.put(`/products/${params.productId}`, {
        title: name,
      });
      mutateProduct(
        {
          ...product,
          title: name,
        },
        {
          revalidate: false,
        }
      );
      toast({
        title: "Success",
      });
    } catch (error: any) {
      toast({
        title: "an Error Occured",
        description: error.response.data.message,
        variant: "destructive",
      });
    }
  };
  if (isLoading) {
    return <p className="text-3xl text-center my-4">Loading...</p>;
  }
  if (!isLoading && !product) {
    notFound();
  }
  return (
    <Card className="flex flex-col justify-between items-center gap-5 my-4 shadow-md">
      <CardHeader>
        <Image
          src={product?.image as string}
          width={400}
          height={400}
          alt={product?.title as string}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </CardHeader>
      <CardTitle className="leading-7 text-center">{product?.title}</CardTitle>
      <CardContent className="flex flex-col w-full gap-3 justify-center items-center my-3">
        <p>Category : {product?.category}</p>
        <p>{product?.description}</p>
        <StarRatings
          rating={product?.rating?.rate}
          starRatedColor="black"
          starEmptyColor="gray"
          numberOfStars={5}
          name="rating"
          starDimension="25px"
          starSpacing="10px"
        />
      </CardContent>
      <CardFooter className="flex flex-col w-full gap-3 justify-center items-center my-3">
        <p>Price : {product?.price} $</p>
        <p>Left In Stock : {product?.rating?.count}</p>
      </CardFooter>
      <div className="flex w-full max-w-sm items-center space-x-2 my-4">
        <Input
          type="text"
          placeholder="Change Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button disabled={isLoading} onClick={() => updateProductName()}>
          {isLoading ? "Loading..." : "Submit"}
        </Button>
      </div>
    </Card>
  );
};

export default ProductPage;

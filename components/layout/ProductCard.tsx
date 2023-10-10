import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/types";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Image
          src={product.image}
          width={300}
          height={300}
          alt={product.title}
        />
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Category : {product.category}</p>
        <p>Rating : {product.rating.rate}</p>
      </CardContent>
      <CardFooter>
        <p>Price : {product.price}</p>
        <p>Left In Stock : {product.rating.count}</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

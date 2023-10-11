import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import StarRatings from "react-star-ratings";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/prodcts/${product.id}`}>
      <Card className="flex flex-col justify-between items-center gap-5">
        <CardHeader>
          <div className="w-full my-3 h-[200px] rounded-md bg-gray-300 relative">
            <Image src={product.image} fill alt={product.title} />
          </div>
          <CardTitle className="leading-7">{product.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col w-full gap-3 justify-center items-center my-3">
          <p>Category : {product.category}</p>
          <StarRatings
            rating={product.rating.rate}
            starRatedColor="black"
            starEmptyColor="gray"
            numberOfStars={5}
            name="rating"
            starDimension="15px"
            starSpacing="5px"
          />
        </CardContent>
        <CardFooter className="flex flex-col w-full gap-3 justify-center items-center my-3">
          <p>Price : {product.price} $</p>
          <p>Left In Stock : {product.rating.count}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;

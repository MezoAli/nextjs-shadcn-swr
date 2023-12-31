import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import StarRatings from "react-star-ratings";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link className="h-full" href={`/products/${product.id}`}>
      <Card className="flex flex-col justify-between items-center gap-5 h-full">
        <CardHeader className="flex w-full flex-col justify-center items-center">
          <Image
            src={product.image}
            width={400}
            height={400}
            alt={product.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <CardTitle className="leading-7 text-center">
            {product.title}
          </CardTitle>
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
        {/* <CardFooter className="flex flex-col w-full gap-3 justify-center items-center my-3">
          <p>Price : {product.price} $</p>
          <p>Left In Stock : {product.rating.count}</p>
        </CardFooter> */}
      </Card>
    </Link>
  );
};

export default ProductCard;

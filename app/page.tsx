import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-2xl text-center bg-black text-white py-4">
        Hello world
      </div>
      <Button variant="secondary" size="lg">
        Click Me
      </Button>
      <Link href="/" className={buttonVariants({ variant: "default" })}>
        Link here
      </Link>
    </>
  );
}

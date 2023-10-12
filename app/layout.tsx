import "./globals.css";
import type { Metadata } from "next";
import { Anton } from "next/font/google";
import Link from "next/link";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "shadcn-useSWR",
  description: "learning shadcn library and useing swr also",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={anton.className}>
        <Link
          href="/"
          className="bg-black block text-white text-3xl text-center py-3 mb-4"
        >
          All Products
        </Link>
        <div className="max-w-[900px] m-auto px-8">{children}</div>
      </body>
    </html>
  );
}

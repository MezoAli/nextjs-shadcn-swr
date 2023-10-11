import "./globals.css";
import type { Metadata } from "next";
import { Anton } from "next/font/google";

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
        <h2 className="bg-black text-white text-3xl text-center py-3 mb-4">
          All Products
        </h2>
        <div className="max-w-[900px] m-auto px-8">{children}</div>
      </body>
    </html>
  );
}

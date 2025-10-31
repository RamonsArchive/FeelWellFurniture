import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our collection of premium furniture including luxury beds, modern sofas, and elegant chairs. Each piece is crafted with attention to detail and timeless design.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read testimonials from our satisfied customers about their experience with FeelWellFurniture. Discover why people love our premium furniture and exceptional service.",
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

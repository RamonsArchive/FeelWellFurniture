import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with FeelWellFurniture. Have a question or want to learn more about our furniture? We'd love to hear from you. Contact us today!",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

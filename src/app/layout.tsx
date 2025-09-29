import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FeelWellFurniture - Where Comfort Meets Style",
    template: "%s | FeelWellFurniture",
  },
  description:
    "Premium furniture designed for modern living. We create beautiful, functional pieces that transform your space into a home. Shop luxury beds, sofas, chairs, and more with free delivery and 5-year warranty.",
  keywords: [
    "furniture",
    "premium furniture",
    "modern furniture",
    "luxury furniture",
    "beds",
    "sofas",
    "chairs",
    "dining furniture",
    "office furniture",
    "home decor",
    "interior design",
    "comfort furniture",
    "quality furniture",
    "furniture store",
    "online furniture",
  ],
  authors: [{ name: "FeelWellFurniture Team" }],
  creator: "FeelWellFurniture",
  publisher: "FeelWellFurniture",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://feelwellfurniture.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://feelwellfurniture.com",
    title: "FeelWellFurniture - Where Comfort Meets Style",
    description:
      "Premium furniture designed for modern living. We create beautiful, functional pieces that transform your space into a home.",
    siteName: "FeelWellFurniture",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "FeelWellFurniture - Premium Furniture Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FeelWellFurniture - Where Comfort Meets Style",
    description:
      "Premium furniture designed for modern living. We create beautiful, functional pieces that transform your space into a home.",
    images: ["/logo.svg"],
    creator: "@feelwellfurniture",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "furniture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#f59e0b" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="FeelWellFurniture" />
        <meta name="application-name" content="FeelWellFurniture" />
        <meta name="msapplication-TileColor" content="#f59e0b" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

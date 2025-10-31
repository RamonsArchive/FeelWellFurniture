"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { companyInfo, features, realProducts } from "../constants";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: "FeelWellFurniture",
    description:
      "Premium furniture designed for modern living. We create beautiful, functional pieces that transform your space into a home.",
    url: "https://feelwellfurniture.com",
    logo: "https://feelwellfurniture.com/logo.svg",
    image: "https://feelwellfurniture.com/logo.svg",
    telephone: "949-910-7879",
    email: "clutchdev.apps@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9500 Gilman Dr",
      addressLocality: "La Jolla",
      addressRegion: "CA",
      postalCode: "92093",
      addressCountry: "US",
    },
    openingHours: "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, PayPal",
    currenciesAccepted: "USD",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Furniture Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Premium Beds",
            description: "Luxury beds with premium materials",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Modern Sofas",
            description: "Comfortable and stylish sofas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Dining Furniture",
            description: "Elegant dining room sets",
          },
        },
      ],
    },
    sameAs: [
      "https://www.instagram.com/feelwellfurniture",
      "https://www.facebook.com/FeelWellFurniture",
      "https://www.pinterest.com/FeelWellFurniture",
    ],
  };

  // Featured products (first 3)
  const featuredProducts = realProducts.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" />
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmNTllMGIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')]" />

        <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-8xl font-bold text-gray-900 mb-6">
              {companyInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
              {companyInfo.tagline}
            </p>
            <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
              {companyInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Explore Collection
              </Link>
              <Link
                href="/contact"
                className="border-2 border-amber-500 text-amber-600 px-10 py-5 rounded-full text-lg font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium furniture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group"
              >
                <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-3">{product.category}</p>
                <p className="text-amber-600 font-semibold">{product.price}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Excellence in every detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to discuss your furniture needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-amber-600 px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get in Touch
            </Link>
            <Link
              href="/products"
              className="border-2 border-white text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="font-playfair text-3xl font-bold">
                {companyInfo.name}
              </span>
            </div>
            <p className="text-gray-400 mb-6 text-lg">{companyInfo.tagline}</p>
            <div className="flex justify-center space-x-8 mb-8">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors duration-200"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors duration-200"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors duration-200"
              >
                Pinterest
              </a>
            </div>
            <div className="space-y-2 text-gray-400 mb-8">
              <p>
                <a href={`tel:${companyInfo.contact.phone}`} className="hover:text-amber-500">
                  {companyInfo.contact.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-amber-500">
                  {companyInfo.contact.email}
                </a>
              </p>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
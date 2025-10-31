"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { realProducts, Product } from "../../constants";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Beds", "Sofas"];
  const filteredProducts = useMemo(
    () =>
      selectedCategory === "All"
        ? realProducts
        : realProducts.filter((p) => p.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center min-h-[50vh]">
        <div className="max-w-7xl mx-auto text-center w-full">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Our Collection
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Premium furniture crafted with attention to detail and timeless
            design
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.price}
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-playfair text-2xl font-bold text-gray-900">
                      {product.name}
                    </h3>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-medium mr-2">Materials:</span>
                      <span className="text-gray-500">
                        {product.materials?.slice(0, 2).join(", ")}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-medium mr-2">Colors:</span>
                      <div className="flex gap-2">
                        {product.colors?.slice(0, 3).map((color, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-gray-100 rounded text-xs"
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-amber-600 font-medium group-hover:text-amber-700">
                    View Details
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

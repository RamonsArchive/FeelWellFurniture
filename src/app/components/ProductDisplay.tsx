"use client";

import { useState, useEffect, useRef } from "react";
import { realProducts, Product } from "../../constants";
import ProductNavigation from "./ProductNavigation";

export default function ProductDisplay() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

  const currentProduct = realProducts[currentProductIndex];

  // Auto-scroll to current product
  useEffect(() => {
    if (productRefs.current[currentProductIndex]) {
      productRefs.current[currentProductIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [currentProductIndex]);

  const nextProduct = () => {
    setCurrentProductIndex((prev) =>
      prev < realProducts.length - 1 ? prev + 1 : 0
    );
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) =>
      prev > 0 ? prev - 1 : realProducts.length - 1
    );
  };

  const openProductDetails = (product: Product) => {
    setSelectedProduct(product);
    setShowDetails(true);
  };

  const closeProductDetails = () => {
    setShowDetails(false);
    setSelectedProduct(null);
  };

  return (
    <div className="w-full">
      {/* Product Navigation */}
      <ProductNavigation
        currentIndex={currentProductIndex}
        totalProducts={realProducts.length}
        onPrevious={prevProduct}
        onNext={nextProduct}
        onGoToProduct={setCurrentProductIndex}
        productName={currentProduct.name}
      />

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {realProducts.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => {
              productRefs.current[index] = el;
            }}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden hover-lift group transition-all duration-300 ${
              index === currentProductIndex
                ? "ring-4 ring-amber-500 scale-105"
                : ""
            }`}
          >
            <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-8xl opacity-20">🪑</div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {product.price}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-playfair text-xl font-bold text-gray-900">
                  {product.name}
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <p className="text-gray-600 mb-4 text-sm">
                {product.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-semibold mr-2">Dimensions:</span>
                  <span>{product.dimensions}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-semibold mr-2">Materials:</span>
                  <span>{product.materials?.slice(0, 2).join(", ")}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => openProductDetails(product)}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200"
                >
                  View Details
                </button>
                <button
                  onClick={() => setCurrentProductIndex(index)}
                  className="px-4 py-2 border border-amber-500 text-amber-600 rounded-full text-sm font-medium hover:bg-amber-500 hover:text-white transition-all duration-200"
                >
                  Focus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {showDetails && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="font-playfair text-2xl font-bold text-gray-900">
                {selectedProduct.name}
              </h2>
              <button
                onClick={closeProductDetails}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="space-y-4">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                    <div className="text-9xl opacity-20">🪑</div>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-amber-600">
                      {selectedProduct.price}
                    </span>
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Description
                    </h3>
                    <p className="text-gray-600">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Dimensions
                    </h3>
                    <p className="text-gray-600">
                      {selectedProduct.dimensions}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Materials
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.materials?.map((material, index) => (
                        <span
                          key={index}
                          className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Available Colors
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.colors?.map((color, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Key Features
                    </h3>
                    <ul className="space-y-1">
                      {selectedProduct.features?.map((feature, index) => (
                        <li
                          key={index}
                          className="text-gray-600 flex items-center"
                        >
                          <span className="text-amber-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedProduct.specifications && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Specifications
                      </h3>
                      <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        {Object.entries(selectedProduct.specifications).map(
                          ([key, value]) =>
                            value && (
                              <div key={key} className="flex justify-between">
                                <span className="font-medium text-gray-700 capitalize">
                                  {key.replace(/([A-Z])/g, " $1").trim()}:
                                </span>
                                <span className="text-gray-600">{value}</span>
                              </div>
                            )
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-4 pt-4">
                    <button className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200">
                      Add to Cart
                    </button>
                    <button className="px-6 py-3 border border-amber-500 text-amber-600 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-200">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

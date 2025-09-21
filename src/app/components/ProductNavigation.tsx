"use client";

import { useState, useEffect } from "react";

interface ProductNavigationProps {
  currentIndex: number;
  totalProducts: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToProduct: (index: number) => void;
  productName: string;
}

export default function ProductNavigation({
  currentIndex,
  totalProducts,
  onPrevious,
  onNext,
  onGoToProduct,
  productName,
}: ProductNavigationProps) {
  const [showKeyboardHints, setShowKeyboardHints] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        onPrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        onNext();
      } else if (e.key === "Escape") {
        setShowKeyboardHints(false);
      } else if (e.key === "?") {
        setShowKeyboardHints(!showKeyboardHints);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onPrevious, onNext, showKeyboardHints]);

  return (
    <div className="relative">
      {/* Main Navigation */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={onPrevious}
          className="flex items-center space-x-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform duration-200">
            ←
          </span>
          <span className="hidden sm:block font-medium">Previous</span>
        </button>

        <div className="text-center flex-1 mx-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our Premium Collection
          </h2>
          <p className="text-gray-600 mb-1">
            {currentIndex + 1} of {totalProducts} products
          </p>
          <p className="text-sm text-gray-500 font-medium">{productName}</p>
        </div>

        <button
          onClick={onNext}
          className="flex items-center space-x-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
        >
          <span className="hidden sm:block font-medium">Next</span>
          <span className="text-2xl group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
        <div
          className="bg-gradient-to-r from-amber-500 to-orange-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / totalProducts) * 100}%` }}
        ></div>
      </div>

      {/* Product Dots */}
      <div className="flex justify-center space-x-2 mb-8">
        {Array.from({ length: totalProducts }).map((_, index) => (
          <button
            key={index}
            onClick={() => onGoToProduct(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-125 ${
              index === currentIndex
                ? "bg-amber-500 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            title={`Go to product ${index + 1}`}
          />
        ))}
      </div>

      {/* Keyboard Shortcuts Button */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setShowKeyboardHints(!showKeyboardHints)}
          className="text-gray-500 hover:text-gray-700 text-sm font-medium flex items-center space-x-1"
        >
          <span>Keyboard shortcuts</span>
          <span className="text-xs">?</span>
        </button>
      </div>

      {/* Keyboard Hints Modal */}
      {showKeyboardHints && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-playfair text-xl font-bold text-gray-900">
                Keyboard Shortcuts
              </h3>
              <button
                onClick={() => setShowKeyboardHints(false)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Previous product</span>
                <kbd className="px-2 py-1 bg-gray-100 rounded text-sm">←</kbd>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Next product</span>
                <kbd className="px-2 py-1 bg-gray-100 rounded text-sm">→</kbd>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Show shortcuts</span>
                <kbd className="px-2 py-1 bg-gray-100 rounded text-sm">?</kbd>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Close modal</span>
                <kbd className="px-2 py-1 bg-gray-100 rounded text-sm">Esc</kbd>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                You can also click on the dots above to jump to any product
                directly.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Swipe Instructions */}
      <div className="md:hidden text-center text-gray-500 text-sm">
        <p>← Swipe left/right or use arrow buttons to navigate →</p>
        <p className="text-xs mt-1">
          Tap &quot;Focus&quot; on any product to center it
        </p>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { companyInfo } from "../../constants";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center space-x-2 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-playfair text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-200">
                {companyInfo.name}
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("categories")}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Shop Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600 p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("categories")}
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Contact
              </button>
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl w-full mt-4">
                Shop Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

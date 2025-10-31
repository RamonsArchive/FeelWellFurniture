"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companyInfo } from "../../constants";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center space-x-2 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-playfair text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-200">
                {companyInfo.name}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive("/")
                    ? "text-amber-600 border-b-2 border-amber-600"
                    : "text-gray-700 hover:text-amber-600"
                }`}
              >
                Home
              </Link>
              <Link
                href="/products"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive("/products")
                    ? "text-amber-600 border-b-2 border-amber-600"
                    : "text-gray-700 hover:text-amber-600"
                }`}
              >
                Products
              </Link>
              <Link
                href="/testimonials"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive("/testimonials")
                    ? "text-amber-600 border-b-2 border-amber-600"
                    : "text-gray-700 hover:text-amber-600"
                }`}
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive("/contact")
                    ? "text-amber-600 border-b-2 border-amber-600"
                    : "text-gray-700 hover:text-amber-600"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/products"
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
            >
              Shop Now
            </Link>
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
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  isActive("/")
                    ? "text-amber-600"
                    : "text-gray-700 hover:text-amber-600"
                }`}
              >
                Home
              </Link>
              <Link
                href="/products"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  isActive("/products")
                    ? "text-amber-600"
                    : "text-gray-700 hover:text-amber-600"
                }`}
              >
                Products
              </Link>
              <Link
                href="/testimonials"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  isActive("/testimonials")
                    ? "text-amber-600"
                    : "text-gray-700 hover:text-amber-600"
                }`}
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  isActive("/contact")
                    ? "text-amber-600"
                    : "text-gray-700 hover:text-amber-600"
                }`}
              >
                Contact
              </Link>
              <Link
                href="/products"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl w-full mt-4 inline-block text-center"
              >
                Shop Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

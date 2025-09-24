"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-800 dark:text-white">
              AK
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay with Blur */}
      <div
        className={`fixed inset-0 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sliding Sidebar Menu (from left) */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Menu
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            <FaTimes size={22} />
          </button>
        </div>

        <nav className="px-4 py-6 space-y-4">
          <Link
            href="/"
            className="block text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/about"
            className="block text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

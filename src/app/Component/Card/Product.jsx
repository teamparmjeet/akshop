"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

export default function Product({ product }) {
  const { name, price, oldPrice, image, slug } = product;

  return (
    <article
      className="group relative w-full  mx-auto rounded-xl overflow-hidden bg-white shadow-lg"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Image */}
      <Link href={`/products/${slug}`} aria-label={`View details for ${name}`}>
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority={false}
          />
          {/* Wishlist Button */}
          <button
            className="absolute top-3 right-3 p-2  backdrop-blur-xs bg-white/30 hover:scale-110 duration-150 cursor-pointer rounded-full shadow-md"
            aria-label="Add to wishlist"
          >
            <FiHeart className="text-orange-700" />
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h3
          className="text-lg font-semibold text-gray-900 truncate"
          itemProp="name"
        >
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900" itemProp="price">
            ₹{price}
          </span>
          {oldPrice && (
            <span className="text-sm line-through text-gray-400">
              ₹{oldPrice}
            </span>
          )}
        </div>

        <div className="flex justify-between mt-2">
          <button
            className="flex-1 py-2 mr-2 bg-gray-900 hover:bg-gray-50 hover:text-gray-900  cursor-pointer border-2 border-gray-900 font-semibold duration-200 text-white rounded-xl shadow-md"
            aria-label={`Buy ${name} now`}
          >
            Buy Now
          </button>
          <button
            className="flex items-center justify-center w-12 h-12 bg-gray-900 hover:bg-gray-50 hover:text-gray-900  cursor-pointer border-2 border-gray-900 font-semibold duration-200 text-white rounded-xl shadow-md"
            aria-label={`Add ${name} to cart`}
          >
            <FiShoppingCart size={20} />
          </button>
        </div>
      </div>
    </article>
  );
}

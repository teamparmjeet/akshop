"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import axios from "axios";

export default function Product({ product }) {
  const { name, price, oldPrice, image, slug } = product;

  // Dynamically load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const existingScript = document.getElementById("razorpay-script");
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.id = "razorpay-script";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      } else {
        resolve(true);
      }
    });
  };

  // Buy Now handler
  const handleBuyNow = async () => {
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    try {
      // Call backend API to create order
      const { data: order } = await axios.post("/api/razorpay", { amount: price });

      // Configure Razorpay checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "My Shop",
        description: `Payment for ${name}`,
        order_id: order.id,
        handler: function (response) {
          alert("Payment Successful! 🎉 Payment ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name: "John Doe",
          email: "john@example.com",
          contact: "9999999999",
        },
        theme: { color: "#111827" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Razorpay Error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <article className="group relative w-full mx-auto rounded-xl overflow-hidden bg-white shadow-lg">
      {/* Image */}
      <Link href={`/products/${slug}`}>
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Wishlist Button */}
          <button
            className="absolute top-3 right-3 p-2 backdrop-blur-xs bg-white/30 hover:scale-110 duration-150 cursor-pointer rounded-full shadow-md"
            aria-label="Add to wishlist"
          >
            <FiHeart className="text-orange-700" />
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{name}</h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">₹{price}</span>
          {oldPrice && <span className="text-sm line-through text-gray-400">₹{oldPrice}</span>}
        </div>

        <div className="flex justify-between mt-2">
          {/* Buy Now */}
          <button
            onClick={handleBuyNow}
            className="flex-1 py-2 mr-2 bg-gray-900 hover:bg-gray-50 hover:text-gray-900 cursor-pointer border-2 border-gray-900 font-semibold duration-200 text-white rounded-xl shadow-md"
          >
            Buy Now
          </button>

          {/* Add to Cart */}
          <button className="flex items-center justify-center w-12 h-12 bg-gray-900 hover:bg-gray-50 hover:text-gray-900 cursor-pointer border-2 border-gray-900 font-semibold duration-200 text-white rounded-xl shadow-md">
            <FiShoppingCart size={20} />
          </button>
        </div>
      </div>
    </article>
  );
}

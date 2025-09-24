import React from "react";
import { FiHeart, FiShoppingCart, FiEye } from "react-icons/fi";

export default function Product({ product }) {
  const { name, price, oldPrice, image } = product;

  return (
    <div className="group relative w-full max-w-sm mx-auto rounded-2xl overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />

        {/* Action Buttons */}
        <div className="absolute top-4 -right-12 group-hover:right-4 transition-all duration-300 flex flex-col gap-3">
          <button className="p-2.5 bg-white/80 backdrop-blur-md rounded-full shadow-md hover:bg-white transition-colors hover:scale-110">
            <FiHeart className="text-gray-700" />
          </button>
          <button className="p-2.5 bg-white/80 backdrop-blur-md rounded-full shadow-md hover:bg-white transition-colors hover:scale-110">
            <FiEye className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Gradient Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="h-24 relative">
          {/* Default Info */}
          <div className="text-white transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:-translate-y-4">
            <h3 className="text-lg font-semibold truncate">{name}</h3>
            <p className="text-sm text-gray-300">Available now</p>
          </div>

          {/* Hover Info */}
          <div className="absolute bottom-0 left-0 right-0 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0">
            <div className="flex justify-between items-center">
              <div className="text-white">
                <span className="text-2xl font-bold">₹{price}</span>
                {oldPrice && (
                  <span className="ml-2 text-base line-through text-gray-400">
                    ₹{oldPrice}
                  </span>
                )}
              </div>
              <button className="p-3 bg-white/90 backdrop-blur-md rounded-full text-gray-800 hover:bg-white shadow-lg transition-transform transform hover:scale-110">
                <FiShoppingCart size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

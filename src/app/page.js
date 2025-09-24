import React from "react";
import Product from "./Component/Card/Product";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Classic Cotton T-Shirt",
      price: 799,
      oldPrice: 999,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
    },
    {
      id: 2,
      name: "Modern Fit T-Shirt",
      price: 699,
      oldPrice: 899,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    },
    {
      id: 3,
      name: "Oversized Street Tee",
      price: 899,
      oldPrice: 1099,
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500",
    },
    {
      id: 4,
      name: "Premium Polo Shirt",
      price: 1199,
      oldPrice: 1499,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-stone-50 to-stone-200 font-sans">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900">
            A New Aesthetic
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Experience our curated collection, where design and quality converge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
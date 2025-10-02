import React from "react";
import Product from "./Component/Card/Product";
import shirt from "../../constant/shirt";
import shoes from "../../constant/shoes";
import Banner1 from "./Component/Banner/Banner1";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-stone-50 to-stone-200 font-sans">
     <Banner1/>
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10 text-center">
          Premium Shirts Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {shirt.slice(0,4).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Shoes Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10 text-center">
          Exclusive Shoes Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {shoes.slice(0,4).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

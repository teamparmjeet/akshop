"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Banner2() {
  const images = [
    "/images/high-quality-mens-long-sleeve-shirts1-1000x1000.webp",
    "/images/premium_photo-1718913936342-eaafff98834b.webp",
    "/images/high-quality-mens-long-sleeve-shirts1-1000x1000.webp",
    "/images/premium_photo-1718913936342-eaafff98834b.webp",
    "/images/high-quality-mens-long-sleeve-shirts1-1000x1000.webp",
    "/images/premium_photo-1718913936342-eaafff98834b.webp",
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] py-10 overflow-hidden">
      <div className="flex items-center overflow-hidden relative">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 35,
            ease: "linear",
          }}
          className="flex gap-10 px-10"
        >
          {[...images, ...images].map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="relative w-[240px] h-[160px] md:w-[360px] md:h-[240px] flex-shrink-0 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.3)] bg-[#1a1a1a]"
            >
              <Image
                src={src}
                alt={`banner-${index}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

              {/* Subtle reflection at bottom */}
              <div className="absolute bottom-0 w-full h-[30px] bg-gradient-to-t from-white/20 to-transparent opacity-30 blur-md"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Left + Right fade edges */}
      <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none"></div>

      {/* Soft glow effect behind the line */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ffbe98]/50 to-transparent blur-md"></div>
    </section>
  );
}

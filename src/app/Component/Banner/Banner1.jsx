"use client"
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';



const slides = [
  {
    title: "The Ultimate Sneaker Drop: Air Max 2025",
    description: "Experience revolutionary comfort and unmatched street style. Limited stock available now—step up your game.",
    buttonText: "Shop Shoes",
    colorClass: "bg-gradient-to-r from-gray-900 to-indigo-900",
    imagePlaceholder: "https://cdn.dribbble.com/userupload/14251223/file/original-ccf454426d2b7842dfdcd6917528301d.jpg?resize=2048x1152&vertical=center"
  },
  {
    title: "Elevate Your Wardrobe: Premium Shirts",
    description: "From classic Oxford to modern slim-fit. Perfect for every occasion, made with 100% sustainable cotton.",
    buttonText: "Browse Shirts",
    colorClass: "bg-gradient-to-r from-red-900 to-pink-900",
    imagePlaceholder: "https://static.vecteezy.com/system/resources/previews/008/564/775/non_2x/sport-shoes-banner-for-website-with-button-ui-design-illustration-vector.jpg"
  },
  {
    title: "Winter Collection Launch: Up to 40% Off",
    description: "Complete your look with our new range of outerwear and essentials. Don't miss this limited-time offer.",
    buttonText: "View Sale",
    colorClass: "bg-gradient-to-r from-teal-800 to-cyan-800",
    imagePlaceholder: "https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Professional-E-Commerce-Shoes-Banner-Design.jpg"
  }
];

// Configuration for auto-play speed
const AUTO_PLAY_DELAY_MS = 3000;

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0); // State for touch handling
  const totalSlides = slides.length;

  // Function to move to the next slide
  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  }, [totalSlides]);

  // Function to move to the previous slide
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  // --- Touch Handlers for Mobile Swiping ---

  const handleTouchStart = (e) => {
    // Record the starting X position of the touch
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    // Get the ending X position
    const touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchEndX - touchStartX;
    const swipeThreshold = 50; // Minimum distance to register a swipe

    if (swipeDistance > swipeThreshold) {
      // Swiped right (previous slide)
      prevSlide();
    } else if (swipeDistance < -swipeThreshold) {
      // Swiped left (next slide)
      nextSlide();
    }
  };

  // Auto-play effect
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, AUTO_PLAY_DELAY_MS);

    // Clear timeout on component unmount or when dependencies change
    return () => clearTimeout(timer);
  }, [activeIndex, nextSlide]);

  return (
    // Updated background to a dark tone for a premium feel
    <div className="  flex flex-col items-center justify-center p-4 font-sans">
      <div 
        className="relative w-full  mx-auto rounded-3xl overflow-hidden shadow-2xl transition-all duration-300"
        // Attach touch events to the main container for swiping
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        
        {/* Carousel Content */}
        {/* Adjusted height for better mobile scaling: h-80 on small, h-96 on default, sm:h-[400px] on small desktop */}
        <div className="relative h-96 sm:h-96  lg:h-[400px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              } p-4 sm:p-8 lg:p-12 flex items-center justify-between flex-col md:flex-row ${slide.colorClass}`}
            >
              
              {/* Text Content - Adjusted text sizes for mobile clarity */}
              <div className="max-w-xl text-center md:text-left md:w-1/2 p-2 sm:p-4">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4 leading-tight tracking-wide">
                  {slide.title}
                </h2>
                <p className="text-white text-opacity-80 text-xs sm:text-base lg:text-lg mb-4 sm:mb-6">
                  {slide.description}
                </p>
               
              </div>

              {/* Product Image Placeholder */}
              <div className=" md:block md:w-1/2 flex justify-center items-center">
               
                 <Image
                  src={slide.imagePlaceholder}
                  alt={`Illustration for ${slide.title}`}
                  width={800} // Placeholder width for image optimization
                  height={450} // Placeholder height for image optimization
                  className="w-full h-auto max-w-sm rounded-xl shadow-2xl object-cover border-4 border-white/50"
                  unoptimized // Bypass optimization for external sources
                />
              </div>
            </div>
          ))}
        </div>

       
      
      </div>
    </div>
  );
};

export default App;

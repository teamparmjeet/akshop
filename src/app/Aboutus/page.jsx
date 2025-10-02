// components/AboutUsPage.jsx
import React from "react";
import Image from "next/image";

const AboutUsPage = () => {
    return (
        <div className="  text-black font-sans py-12 px-4 sm:px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
                        Our Story
                    </h1>
                    <p className="text-base sm:text-lg text-gray-950 max-w-2xl mx-auto">
                        Where style meets innovation. We&apos;re more than a brand; we&apos;re a
                        community built on quality, design, and passion.
                    </p>
                </header>

                {/* Story */}
                <section className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 mb-16">
                    <div className="">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                            The Ultimate Sneaker Drop
                        </h2>
                        <p className="text-gray-950 text-sm sm:text-base leading-relaxed mb-4">
                            Our journey began with a simple idea: to create a destination for premium
                            fashion that doesn’t compromise on quality or comfort. From our very first
                            collection, we’ve been committed to curating products that are not only on
                            the cutting edge of design but also built to last.
                        </p>
                        <p className="text-gray-950 text-sm sm:text-base leading-relaxed">
                            Our team scours the globe for the finest materials and works with skilled
                            artisans to ensure every item meets our high standards. We believe in the
                            details—from the stitching on a shirt to the sole of a shoe—because that’s
                            what makes the difference.
                        </p>
                    </div>

                    
                </section>

            </div>
        </div>
    );
};

export default AboutUsPage;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Sofa, Tag } from "lucide-react";

const Brand = () => {

  return (
    <div className="mx-4 relative py-6 overflow-hidden rounded-xl">
  <div className="pointer-events-none absolute top-0 left-0 h-full w-32  " />
  <div className="pointer-events-none absolute top-0 right-0 h-full w-32  " />
  <div className="py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-semibold text-black mb-16">
        How can we make your job more efficient?
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="space-y-4">
          <div className="flex items-center justify-center text-teal-700 text-2xl">
            {/* Replace with your actual icon component or SVG */}
            <Tag size={32} />
          </div>
          <h3 className="text-xl font-semibold text-teal-700">Smart Pricing</h3>
          <p className="text-gray-700 text-md">
            At Pinaka Arts and Exports, we offer real-time, quantity and specification-based pricing directly on our website. Get instant, transparent, and tailored quotes for furniture—no delays.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center text-teal-700 text-2xl">
            {/* Replace with your actual icon component or SVG */}
            <Sofa size={32} />
          </div>
          <h3 className="text-xl font-semibold text-teal-700">Full Specifications Provided</h3>
          <p className="text-gray-700 text-md">
            At Pinaka Arts and Exports, nearly all our furniture is made to order, allowing complete customization. With transparent online pricing, you can plan and decide with confidence and speed.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center text-teal-700 text-2xl">
            {/* Replace with your actual icon component or SVG */}
          <Box size={32} />
          </div>
          <h3 className="text-xl font-semibold text-teal-700">Focus on Visuals & Variety</h3>
          <p className="text-gray-700 text-md">
            Explore one of the largest selections of contract furniture, with clear images and complete product details to guide your decisions and also show the our freatured Catelog for better visuals.
          </p>
        </div>
      </div>
    </div>
</div>

  );
};

export default Brand;

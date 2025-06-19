import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Brand1 from '/src/assets/brands/brand_1.png';
import Brand2 from '/src/assets/brands/brand_2.png';
import Brand3 from '/src/assets/brands/brand_3.png';
import Brand4 from '/src/assets/brands/brand_4.png';
import Brand5 from '/src/assets/brands/brand_5.png';
import Brand6 from '/src/assets/brands/brand_6.png';
import { Box, Sofa, Tag } from "lucide-react";

// const brandLogos = [
    
//     {
//         id: 1,
//         src: Brand1,
//     },
//     {
//         id: 2,
//         src: Brand2,
//     },
//     {
//         id: 3,
//         src: Brand3,
//     },
//     {
//         id: 4,
//         src: Brand4,
//     },
//     {
//         id: 5,
//         src: Brand5,
//     },
//     {
//         id: 6,
//         src: Brand6,
//     },
  
// ];

const Brand = () => {
  // const settings = {
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  //   speed: 2000,
  //   cssEase: "linear",
  //   arrows: false,
  //   dots: false,
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 6,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 4,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="mx-4 relative py-6 overflow-hidden rounded-xl">
  <div className="pointer-events-none absolute top-0 left-0 h-full w-32  " />
  <div className="pointer-events-none absolute top-0 right-0 h-full w-32  " />

  {/* <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
    <Slider {...settings}>
      {brandLogos.map((logo, index) => (
        <div key={index} className="px-4">
          <img
            src={logo.src}
            alt={`Brand ${index}`}
            className="w-full h-20 object-contain mx-auto grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      ))}
    </Slider>
  </div> */}

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

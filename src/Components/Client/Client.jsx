import React from 'react';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';

import './client.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Shopping used to be stressful, but with Pinaka it's a breeze. The website was easy to navigate, and customer support helped me pick the right space. My new lounge chair is now my favorite corner of the house!",
      name: 'Meera Joshi',
      clientType: 'Client',
      avatarSrc: '',
    },
    {
      quote: "Pinaka has completely transformed the look of my living room. The sofa I ordered was not only elegant but also extremely comfortable. The attention to detail and the finish is top-notch. It truly feels like a premium product made with love.",
      name: 'Priya Sharma',
      clientType: 'Client',
      avatarSrc: '',
    },
    {
      quote: "I purchased a dining table and a couple of stools for my new apartment. The delivery was on time, and the quality is beyond my expectations. I love how Pinaka combines modern design with Indian sensibilities. Highly recommended!",
      name: 'Rajeev Menon',
      clientType: 'Client',
      avatarSrc: '',
    },
    {
        quote: "The team at Pinaka helped me visualize my dream kitchen. Their 3D rendering service was incredibly helpful, and the final installation was flawless. My kitchen is now the heart of my home!",
        name: 'Anjali Singh',
        clientType: 'Client',
        avatarSrc: '',
      },
      {
        quote: "Finding quality, unique furniture online was always a challenge until I discovered Pinaka. Their curated collection is exceptional, and I particularly appreciate their sustainable practices.",
        name: 'Vikram Patel',
        clientType: 'Client',
        avatarSrc: '',
      },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: false,

    
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false, 
        },
      },
    ],
  };

  return (
    <div className="testimonials-section-container-pinaka">
      <h2 className="testimonials-main-title-pinaka">TESTIMONIALS</h2>
      <p className="testimonials-subtitle-pinaka">
        Discover Why Thousands Trust Pinaka for Their Dream Interiors.
      </p>

      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSection;
// src/components/AboutUs.tsx
import React from "react";

import  gallary1 from "../assets/gallary/gallary1.webp";
import  gallary2 from "../assets/gallary/gallary2.webp";
import  gallary5 from "../assets/gallary/gallary5.webp";
import  gallary3 from "../assets/gallary/gallary3.webp";
import  gallary6 from "../assets/gallary/gallary6.webp";
import  gallary4 from "../assets/gallary/gallary4.webp";

const images = [gallary1, gallary2, gallary3, gallary4, gallary5, gallary6];


const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img src={gallary1} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-white text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Pinaka Art And Exports Private Limited
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Where quality meets customization for furniture that fits your style.
            </p>
          </div>
        </div>
      </div>

      {/* Full Description */}
      <section className="max-w-6xl mx-auto px-4 py-12 space-y-8 text-lg leading-7">
        <p>
          <strong>Pinaka Art And Exports Private Limited</strong> is Manufacturer, Wholesaler, Retailer of Leather Sofa, Wooden Table,
          Restaurant And Cafe Furniture, Bone Inlay Furniture, Outdoor Furniture etc. We direct all our activities to cater
          the expectations of customers by providing them excellent quality products as per their gratification. Moreover, we follow
          moral business policies and crystal pure transparency in all our transactions to keep healthy relations with the customers.
        </p>
        <p>
          For our accomplishment story, we are grateful to our Mr. Ghanshyam Choudhary whose continual backing and direction
          have been useful to us for attaining exponential development in the current market.
        </p>
        <h2 className="text-2xl font-bold mt-6">About The Company</h2>
        <p>
          Welcome to Pinaka Art and Exports PVT LTD, a premier name in high-quality, custom furniture design and manufacturing.
          Based in Jodhpur, Rajasthan, we specialize in creating unique, bespoke furniture pieces that blend artistic design
          with functional excellence. Our mission is to craft furniture that is not only elegant and durable but also tailored
          to reflect the individual tastes and requirements of each client, from residential spaces to commercial venues.
        </p>
        <h2 className="text-2xl font-bold mt-6">Our Story</h2>
        <p>
          Pinaka Art and Exports PVT LTD was born from a passion for fine craftsmanship and an understanding of the transformative
          power of beautifully designed furniture. Over the years, we’ve had the privilege of serving a diverse clientele, including
          homeowners, hotels, restaurants, offices, and other businesses, providing each with customized solutions that align with their unique visions.
        </p>
        <h2 className="text-2xl font-bold mt-6">What We Offer</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Living Room Furniture:</strong> Luxurious sofas, including L-shaped sofas, recliners, and coffee tables designed for comfort and style.
          </li>
          <li>
            <strong>Dining Room Furniture:</strong> Elegant dining tables and chairs, including options with marble, wood, and glass tops.
          </li>
          <li>
            <strong>Bedroom Furniture:</strong> Bedside tables, dressers, and other essential pieces to create a relaxing and refined bedroom ambiance.
          </li>
          <li>
            <strong>Office Furniture:</strong> Ergonomically designed office chairs, conference tables, and desks that enhance productivity and aesthetics.
          </li>
          <li>
            <strong>Outdoor Furniture:</strong> Durable and stylish outdoor seating and tables, perfect for patios, gardens, and balcony spaces.
          </li>
          <li>
            <strong>Restaurant and Café Furniture:</strong> Customizable tables, seating, and décor that help create memorable dining experiences.
          </li>
        </ul>
        <p>
          Every piece we craft is available in a range of materials, including premium woods, metals, leathers, fabrics, and stone.
          From selecting materials to the final polish, we prioritize quality and attention to detail at each stage.
        </p>

        <h2 className="text-2xl font-bold mt-6">Customization and Craftsmanship</h2>
        <p>
          Our skilled craftsmen and designers work closely with clients to turn their concepts into reality. We offer complete
          customization services, allowing clients to adjust dimensions, materials, finishes, and other details to meet their
          specific requirements. Whether it’s a luxurious leather sofa in a custom shade or a dining table with a unique marble top,
          we ensure that every detail aligns with your vision.
        </p>

        <h2 className="text-2xl font-bold mt-6">Quality Assurance</h2>
        <p>
          At Pinaka Art and Exports PVT LTD, quality is our top priority. We source only the finest materials and apply rigorous
          quality checks at every stage of the manufacturing process. Our furniture is built to last, providing lasting value and
          beauty that stands the test of time.
        </p>

        <h2 className="text-2xl font-bold mt-6">Why Choose Us?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Tailored Designs: We offer full customization to suit any style, space, or functional need.</li>
          <li>Premium Quality: Every piece is crafted using high-grade materials and quality-tested for durability.</li>
          <li>Experienced Craftsmanship: Our team brings years of experience and a dedication to excellence to each project.</li>
          <li>Customer-Centric Approach: We’re committed to delivering exceptional service, working with clients every step of the way to ensure complete satisfaction.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6">Our Commitment to Sustainability</h2>
        <p>
          We understand the importance of sustainable practices in today’s world. We use responsibly sourced materials and
          minimize waste throughout our production process. Our goal is to create beautiful furniture that doesn’t compromise
          the health of our planet.
        </p>
      </section>

      {/* Gallery */}
      <section className="bg-white py-10 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Gallery ${index + 1}`}
          className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />
      ))}
    </div>
  </div>
</section>


      {/* Factsheet */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Company Factsheet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            <p><strong>Nature of Business:</strong> Manufacturer</p>
            <p><strong>Additional Business:</strong> Retail Business, Wholesale Business</p>
            <p><strong>Company CEO:</strong> Ghanshyam Choudhary</p>
            <p><strong>Registered Address:</strong> Plot Number 207, Pinaka Art And Exports Private Limited, Jhanwar Road, Opposite BR Birla School, Jodhpur- 342008, Rajasthan, India</p>
            <p><strong>Total Employees:</strong> 51 to 100 People</p>
            <p><strong>GST Registration Date:</strong> 30-05-2023</p>
            <p><strong>Legal Status of Firm:</strong> Limited Company</p>
            <p><strong>Annual Turnover:</strong> 0 - 40 L</p>
            <p><strong>GST Partner Name:</strong> Ghanshyam Choudhary, Yashwant</p>
            <p><strong>GST No:</strong> 08AANCP4608B1ZI</p>
            <p><strong>CIN No:</strong> U36999RJ2022PTC085390</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

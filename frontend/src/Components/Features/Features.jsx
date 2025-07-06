// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import API from "../../admin/api";
// import SectionTitle from "../SectionTitle/SectionTitle";

// const Features = () => {
//   const [featuredProducts, setFeaturedProducts] = useState([]);
//   const [categories, setCategories] = useState([]);

//   const fetchData = async () => {
//     try {
//       const [catRes, prodRes] = await Promise.all([
//         API.get("/categories"),
//         API.get("/products?featured=true"),
//       ]);
//       setCategories(catRes.data || []);
//       setFeaturedProducts(prodRes.data || []);
//     } catch (err) {
//       console.error("Error fetching data:", err.response?.data || err.message);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="w-full mx-auto px-4 lg:px-8 md:px-8 md:mx-12">
//       <SectionTitle title="Featured product" textAlign="center" mb="mb-5" />

//       <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
//         {/* Left Large Product */}
//         {featuredProducts[0] && (
//           <div className="md:col-span-6">
//             <Link to={`/product/productDetail/${featuredProducts[0]._id}`}>
//               <div className="relative rounded-xl overflow-hidden bg-slate-100 shadow hover:shadow-lg transition-shadow duration-300 h-[500px] flex items-center justify-center">
//                 <img
//                   src={`https://pinaka-furnitureadmin.onrender.com${featuredProducts[0].image}`}
//                   alt={featuredProducts[0].productName}
//                   className="w-full h-full object-contain"
//                 />
//                 <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-4">
//                   <div className="text-lg font-semibold">{featuredProducts[0].productName}</div>
//                   <div className="text-sm">{featuredProducts[0].description}</div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         )}

//         {/* Right Small Products */}
//         <div className="md:col-span-6 grid md:grid-rows-2 gap-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {featuredProducts.slice(1, 3).map((item, idx) => (
//               <Link key={item._id} to={`/product/productDetail/${item._id}`}>
//                 <div className="relative rounded-xl overflow-hidden bg-slate-100 shadow hover:shadow-lg transition-shadow duration-300 h-[240px] flex items-center justify-center">
//                   <img
//                     src={`https://pinaka-furnitureadmin.onrender.com${item.image}`}
//                     alt={item.productName}
//                     className="w-full h-full object-contain"
//                   />
//                   <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-3">
//                     <div className="text-lg font-semibold">{item.productName}</div>
//                     <div className="text-sm">{item.description}</div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           {/* Bottom Product */}
//           {featuredProducts[3] && (
//             <Link to={`/product/productDetail/${featuredProducts[3]._id}`}>
//               <div className="relative rounded-xl overflow-hidden bg-slate-100 shadow hover:shadow-lg transition-shadow duration-300 h-[240px] flex items-center justify-center">
//                 <img
//                   src={`https://pinaka-furnitureadmin.onrender.com${featuredProducts[3].image}`}
//                   alt={featuredProducts[3].productName}
//                   className="w-full h-full object-contain"
//                 />
//                 <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-3">
//                   <div className="text-lg font-semibold">{featuredProducts[3].productName}</div>
//                   <div className="text-sm">{featuredProducts[3].description}</div>
//                 </div>
//               </div>
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;



import React from "react";
import chairsPool from "../../assets/Booths/booth1.png";
import bicroChair from "../../assets/table/marble/marble_table1.png";
import extraChair from "../../assets/brands/brand3.png";
import romaChair from "../../assets/brands/brand4.png";

const Features = () => {
  return (
    <div className="min-h-screen p-4 md:p-10 w-full">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-10">
        Featured Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 max-w-7xl mx-auto">
        {/* Left side - Main Card */}
        <div className="md:col-span-6  w-full">
          <div className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow duration-300 h-[300px] sm:h-[200px] md:h-[480px]">
            <img
              src={chairsPool}
              alt="Elegant Chair Set"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-3 text-center">
            <h3 className="text-lg font-semibold">Elegant Chair Set</h3>
            <span className="text-sm text-gray-500">Booth</span>
          </div>
        </div>

        {/* Right side - Cards Grid */}
        <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-0">
          {/* Small Card 1 */}
          <div className="col-span-1">
            <div className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow duration-300 h-40 sm:h-36 md:h-48">
              <img
                src={bicroChair}
                alt="Marble Table"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2 text-center">
              <h3 className="text-sm font-semibold">Marble Table</h3>
              <div className="flex gap-2 justify-center text-xs text-gray-500">
                <span>Table</span>
                <span>Marble</span>
              </div>
            </div>
          </div>

          {/* Small Card 2 */}
          <div className="col-span-1">
            <div className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow duration-300 h-40 sm:h-36 md:h-48">
              <img
                src={extraChair}
                alt="Modern Chair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2 text-center">
              <h3 className="text-sm font-semibold">Modern Chair</h3>
              <span className="text-xs text-gray-500">Accent</span>
            </div>
          </div>

          {/* Full-width Bottom Card (Mobile) / Single Card (Desktop) */}
          <div className="col-span-2 sm:col-span-2">
            <div className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow duration-300 h-40 sm:h-36 md:h-48">
              <img
                src={romaChair}
                alt="Roma Armchair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2 text-center">
              <h3 className="text-sm font-semibold">Roma Armchair</h3>
              <span className="text-xs text-gray-500">Armchair</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;


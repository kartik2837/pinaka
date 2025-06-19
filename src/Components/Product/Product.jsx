import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

import ProductNew1 from '/src/assets/chair/chair1.png';
import ProductNew2 from '/src/assets/table/terrazzo/terrazzo_table1.png';
import ProductNew3 from '/src/assets/Booths/booth1.png';
import ProductNew4 from '/src/assets/sofa/sofa1.png';

import ProductTrend1 from '/src/assets/chair/chair2.png';
import ProductTrend2 from '/src/assets/Booths/booth2.png';
import ProductTrend3 from '/src/assets/table/terrazzo/terrazzo_table2.png';
import ProductTrend4 from '/src/assets/sofa/sofa2.png';

import ProductSell1 from '/src/assets/sofa/sofa3.png';
import ProductSell2 from '/src/assets/Booths/booth3.png';
import ProductSell3 from '/src/assets/table/terrazzo/terrazzo_table3.png';
import ProductSell4 from '/src/assets/chair/chair3.png';

import Product1 from '/src/assets/chair/chair2.png';
import Product2 from '/src/assets/Booths/booth2.png';
import Product3 from '/src/assets/Barstool/stool2.png';
import Product4 from '/src/assets/sofa/sofa2.png';
import Product5 from '/src/assets/sofa/sofa3.png';
import Product6 from '/src/assets/table/terrazzo/terrazzo_table3.png';
import Product7 from '/src/assets/Booths/booth3.png';
import Product8 from '/src/assets/chair/chair3.png';
import Product9 from '/src/assets/chair/chair1.png';
import Product10 from '/src/assets/Booths/booth1.png';
import Product11 from '/src/assets/table/terrazzo/terrazzo_table1.png';
import Product12 from '/src/assets/sofa/sofa1.png';

const Product = () => {

    const [active, setActive] = useState({
        id: 0,
        product: 'all'
    });

    const productTitle = [
        {
            id: 0,
            title: "all",
            product: 'all'
        },
        {
            id: 1,
            title: "newest",
            product: 'newest'
        },
        {
            id: 2,
            title: "trending",
            product: 'trending'
        },
        {
            id: 3,
            title: "best seller",
            product: 'best_seller'
        },
    ];

    const products = [
        {
            title: 'library stool',
            status: 'Chair',
            image: ProductNew1,
            product: 'newest',
        },
        {
            title: 'library stool Chair',
            status: 'Table',
            image: ProductNew2,
            product: 'newest',
        },
        {
            title: 'library stool',
            status: 'Booth',
            image: ProductNew3,
            product: 'newest',
        },
        {
            title: 'library stool Chair',
            status: 'Sofa',
            image: ProductNew4,
            product: 'newest',
        },

        {
            title: 'library stool Chair',
            status: 'Chair',
            image: ProductTrend1,
            product: 'trending',
        },
        {
            title: 'library stool',
            status: 'Booth',
            image: ProductTrend2,
            product: 'trending',
        },
        {
            title: 'library stool Chair',
            status: 'Table',
            image: ProductTrend3,
            product: 'trending',
        },
        {
            title: 'library stool Chair',
            status: 'Sofa',
            image: ProductTrend4,
            product: 'trending',
        },
        {
            title: 'library stool',
            status: 'Sofa',
            image: ProductSell1,
            currentPrice: '$200',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Booth',
            image: ProductSell2,
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Table',
            image: ProductSell3,
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Chair',
            image: ProductSell4,
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            image: '/src/assets/products/product_6.png',
            product: 'featured',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            image: '/src/assets/products/product_7.png',
            product: 'featured',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            image: '/src/assets/products/product_8.png',
            product: 'featured',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            image: '/src/assets/products/product_1.png',
            product: 'featured',
        },
        {
            title: 'library stool Chair',
            status: 'Chair',
             image: Product1,
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Booth',
            image: Product2,
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Stool',
            image: Product3,
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sofa',
            image: Product4,
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sofa',
             image: Product5,
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Table',
            image: Product6,
            product: 'all',
          },
          {
            title: 'library stool Chair',
            status: 'Booth',
            image: Product7,
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Chair',
            image: Product8,
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Chair',
            image: Product9,
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Booth',
            image: Product10,
            product: 'all',
          },
          {
            title: 'library stool Chair',
            status: 'Table',
            image: Product11,
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sofa',
            image: Product12,
            product: 'all',
        },
    ];


    const productFilter = products.filter(product => product.product === active?.product);

    return (
       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex flex-col items-center justify-center">
    <SectionTitle title="our product" textAlign="center" mb="mb-5" />

    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-11">
      {productTitle?.map((title, indx) => (
        <button
          key={title?.id}
          onClick={() =>
            setActive({
              id: title?.id,
              product: title?.product,
            })
          }
          className={`text-sm sm:text-base font-black uppercase font-inter cursor-pointer transition-colors ${
            active?.id === indx ? 'text-[#272343]' : 'text-[#9a9caa]'
          }`}
        >
          {title?.title}
        </button>
      ))}
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
    {productFilter?.map((product, index) => (
      <div key={index} className="p-4 bg-white shadow-sm rounded-xl">
        <div className="feature_image mb-4 relative">
          <img
            className="w-full h-[260px] sm:h-[280px] md:h-[300px] object-cover rounded-lg"
            src={product?.image}
            alt={product?.title}
          />
          {product?.status && (
            <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg text-xs">
              {product?.status}
            </div>
          )}
        </div>

        <div className="feature_content">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm sm:text-base text-[#007580] capitalize font-inter font-medium">
              {product?.title}
            </h4>
            <span className="bg-[#007580] h-[40px] w-[100px] rounded-lg flex items-center justify-center">
              Order Now
            </span>
          </div>
          <p className="text-base sm:text-lg flex items-center gap-2 text-[#272343] font-semibold font-inter">
            {product?.price}
            {product?.currentPrice && (
              <span className="text-xs sm:text-sm text-[#9a9caa] font-normal line-through">
                {product?.currentPrice}
              </span>
            )}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

    );
};

export default Product;
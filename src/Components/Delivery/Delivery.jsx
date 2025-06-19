import { Clock3, Percent, ShieldCheck, Truck } from "lucide-react";
import Product1 from '/src/assets/brands/brand1.png';
import Product2 from '/src/assets/brands/brand5.png';
import Product3 from '/src/assets/brands/brand2.png';
import Product4 from '/src/assets/brands/brand6.png';
import Product5 from '/src/assets/brands/brand3.png';
import Product6 from '/src/assets/brands/brand7.png';
import Product7 from '/src/assets/brands/brand4.png';
import Product8 from '/src/assets/brands/brand8.png';

const Delivery = () => {
  const furnitureCategories = [
    {
      image: Product1,
      title: 'Bar Stool',
    },
    {
      image: Product2,
      title: 'Marbal Table',
    },
    {
      image: Product3,
      title: 'Booths',
    },
    {
      image: Product4,
      title: 'Mosaic Table',
    },
    {
      image: Product5,
      title: 'Chair',
    },
    {
      image: Product6,
      title: 'Stone Table',
    },
    {
      image: Product7,
      title: 'Sofa',
    },
    {
      image: Product8,
      title: 'Wooden Table',
    },
    // Add more categories as needed
  ];


  return (
    <div className="sm:mx-auto max-w-[1440px] p-4 sm:p-6 md:p-7">
      <div className="overflow-x-auto custom-scrollbar mt-[-50px]">
        <div className="flex space-x-6 px-4 pb-4">
          {furnitureCategories.map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-60 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-between"
              style={{ minWidth: '240px' }} // Ensures cards maintain their width on smaller screens
            >
              <div className="relative w-40 h-30 flex items-center justify-center mb-4">
                <div className="absolute inset-0 bg-gray-100 rounded-full opacity-70"></div>
                <img
                  src={category.image}
                  alt={category.title}
                  className="relative z-10 max-h-full max-w-full object-contain"
                />
              </div>
              <p className="text-gray-800 font-medium text-lg mt-auto text-center">
                {category.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Delivery;
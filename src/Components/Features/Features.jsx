
import React from "react";
import chairsPool from "../../assets/Booths/20250530_0432_Elegant Chair Set_remix_01jwf4frndewtrckcwfzjaxwza.png";
import bicroChair from "../../assets/table/marble/20250525_1756_Elegant Table Design_remix_01jw3peypgf6eaxprft6fw8dmt.png";
import extraChair from "../../assets/brands/brand3.png";
import romaChair from "../../assets/brands/brand4.png";

const Features = () => {
  return (
    <div className="min-h-screen md:p-10 w-full">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Featured Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
        {/* Left side (6 columns) */}
        <div className="md:col-span-6">
          <div className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow duration-300 h-[400px]">
            <img
              src={chairsPool}
              alt="Elegant Chair Set"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-2 text-center">
            <h3 className="text-lg font-semibold">Elegant Chair Set</h3>
            <span className="text-sm text-gray-500">Booth</span>
          </div>
        </div>

        {/* Right side (6 columns) */}
        <div className="md:col-span-6 grid grid-rows-2 gap-6">
          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div>
              <div className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow duration-300 h-48">
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

            {/* Card 2 */}
            <div>
              <div className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow duration-300 h-48">
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
          </div>

          {/* Top Row */}
          <div>
            <div className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow duration-300 h-48">
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

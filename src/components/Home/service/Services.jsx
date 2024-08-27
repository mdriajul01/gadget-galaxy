import * as React from "react";
import dalivary from "../../../../public/jsonFile/fastdelivary.json";
import payment from "../../../../public/jsonFile/payment (1).json";
import quality from "../../../../public/jsonFile/payment (3).json";
import service from "../../../../public/jsonFile/24hour.json";
import order from "../../../../public/jsonFile/easy order.json";
import Lottie from "lottie-react";

const Services = () => {
  return (
    <div className="text-[#383030f6] bg-gradient-to-b from-gray-800 via-gray-900 to-black py-16">
      <h1 className="text-center font-bold text-5xl mb-16 text-[#e4bd51fd]">
        Our Services
      </h1>

      <div
        id="service"
        className="text-center font-bold flex flex-wrap gap-10 justify-center"
      >
        {[
          { title: "24/7 Services", animation: service },
          { title: "Fast Delivery", animation: dalivary },
          { title: "Best Quality", animation: quality },
          { title: "Easy Order", animation: order },
          { title: "Easy Payment", animation: payment },
        ].map((item, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center gap-4 bg-slate-50 hover:bg-gradient-to-r from-[#ebbc3bfd] to-[#c7d66ffd] rounded-3xl p-6 sm:w-60 md:w-72 lg:w-80 transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"
          >
            <div className="bg-[#ffffff11] group-hover:bg-[#f1eadb] rounded-3xl p-6 transition duration-500 ease-in-out transform group-hover:rotate-6">
              <Lottie
                animationData={item.animation}
                className="w-28 sm:w-36 md:w-40 lg:w-48"
                loop={true}
              />
              <h1 className="text-2xl font-extrabold text-gray-800 group-hover:text-[#383030] mt-4 transition-all duration-300">
                {item.title}
              </h1>
            </div>
            <div className="absolute inset-0 bg-[#e4bd51fd] opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

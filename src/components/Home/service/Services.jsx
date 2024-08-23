import * as React from "react";
import dalivary from "../../../../public/jsonFile/fastdelivary.json";
import payment from "../../../../public/jsonFile/payment (1).json";
import quality from "../../../../public/jsonFile/payment (3).json";
import service from "../../../../public/jsonFile/payment (4).json";
import order from "../../../../public/jsonFile/payment (2).json";
import Lottie from "lottie-react";

const Services = () => {
  return (
    <div className="text-[#383030f6]">
      <h1 className="text-center font-bold text-4xl my-5 text-gray-300">
        Services
      </h1>

      <div
        id="service"
        className="text-center font-bold flex flex-wrap gap-8 justify-center"
      >
        <button className="flex flex-col items-center gap-4 bg-slate-50 hover:border-x-2 hover:border-slate-800 rounded-2xl p-4 sm:w-60 md:w-72 lg:w-80 hover:border-x-slate-500">
          <div className="bg-[#928c3221] rounded-2xl p-4 hover:border-y-2">
            <h1 className="text-xl text-gray-700">Best Services</h1>
            <Lottie
              animationData={service}
              className="w-24 sm:w-32 md:w-36 lg:w-44"
            />
          </div>
        </button>
        <button className="flex flex-col items-center gap-4 bg-slate-50 hover:border-x-2 hover:border-slate-800 rounded-2xl p-4 sm:w-60 md:w-72 lg:w-80">
          <div className="bg-[#928c3221] rounded-2xl p-4 hover:border-y-2">
            <h1 className="text-xl text-gray-700">Fast Delivery</h1>
            <Lottie
              animationData={dalivary}
              className="w-24 sm:w-32 md:w-36 lg:w-44"
            />
          </div>
        </button>
        <button className="flex flex-col items-center gap-4 bg-slate-50 hover:border-x-2 hover:border-slate-800 rounded-2xl p-4 sm:w-60 md:w-72 lg:w-80">
          <div className="bg-[#928c3221] rounded-2xl p-4 hover:border-y-2">
            <h1 className="text-xl text-gray-700">Best Quality</h1>
            <Lottie
              animationData={quality}
              className="w-24 sm:w-32 md:w-36 lg:w-44"
            />
          </div>
        </button>
        <button className="flex flex-col items-center gap-4 bg-slate-50 hover:border-x-2 hover:border-slate-800 rounded-2xl p-4 sm:w-60 md:w-72 lg:w-80">
          <div className="bg-[#928c3221] rounded-2xl p-4 hover:border-y-2">
            <h1 className="text-xl text-gray-700">Easy Order</h1>
            <Lottie
              animationData={order}
              className="w-24 sm:w-32 md:w-36 lg:w-44"
            />
          </div>
        </button>
        <button className="flex flex-col items-center gap-4 bg-slate-50 hover:border-x-2 hover:border-slate-800 rounded-2xl p-4 sm:w-60 md:w-72 lg:w-80">
          <div className="bg-[#928c3221] rounded-2xl p-4 hover:border-y-2">
            <h1 className="text-xl text-gray-700">Easy Payment</h1>
            <Lottie
              animationData={payment}
              loop={true}
              className="w-24 sm:w-32 md:w-36 lg:w-44"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Services;

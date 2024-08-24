import React from "react";
import { TbCash, TbTruckDelivery } from "react-icons/tb";
import { FaRegCircleQuestion } from "react-icons/fa6";

const badgesData = [
  {
    icon: <TbTruckDelivery className="h-6 w-6 text-[#ffff00] lg:mr-2 " />,
    title: "Free Delivery",
    description: "Orders from $200",
  },
  {
    icon: <TbCash className="h-6 w-6 text-[#ffff00] lg:mr-2" />,
    title: "Money back",
    description: "30 Days guarantee",
  },
  {
    icon: <FaRegCircleQuestion className="h-6 w-6 text-[#ffff00] lg:mr-2" />,
    title: "24/7 Supports",
    description: "Consumer support",
  },
];

const Bages = () => {
  return (
    <React.Fragment>
      <section className="container mx-auto my-8 flex flex-col justify-center gap-3 lg:flex-row ">
        {badgesData.map((badge, index) => (
          <div
            key={index}
            className="mx-5 flex flex-row items-center justify-center border-2 border-yellow-500 py-4 px-5 rounded-md"
          >
            <div className="">{badge.icon}</div>
            <div className="ml-6 flex flex-col justify-center">
              <h3 className="text-left text-xs font-bold lg:text-sm">
                {badge.title}
              </h3>
              <p className="text-light text-left text-xs lg:text-sm">
                {badge.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};

export default Bages;

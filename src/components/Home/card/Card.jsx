import React from "react";
import rating from "../../../../public/rating.png";
import "./Card.css";
import { GiEternalLove } from "react-icons/gi";
import Product from "../../../../public/jsonFile/Product.json";
const Card = () => {
  console.log(Product);
  return (
    <div className="my-10">
      <h1 className="text-4xl text-center my-4 font-bold mb-10 ">
        Gadget? <span className="text-[#eb1717]">New Product-</span>{" "}
      </h1>
      <div className="flex flex-wrap justify-center rounded-xl gap-10">
        {Product?.slice(20, 30).map((e, idx) => (
          <div
            className="border relative w-fit p-2 hover:bg-[#d19a0323] rounded-xl shadow-xl hover:shadow-[#d19a03e5] hover:text-lg hover:border-x-red-500 shadow-2px shadow-[#fffbf688]"
            key={idx}
          >
            <img
              className="w-56 h-52 object-cover rounded-xl "
              src={e.photo}
              alt=""
            />
            <GiEternalLove className="text-3xl text-[#ff0101] top-4 right-3 absolute rounded-full" />
            <h1 className="font-semibold text-[#ffffffec]">{e.name}</h1>
            <h1>{e.catagory}</h1>
            <p className="text-[#f0ebebee]">{e.price}</p>
            <a href="/" className="flex justify-end ml-40 mr-2">
              <img className="h-8 text-right " src={rating} alt="" />
              <h1 className=" font-semibold text-lg text-[#ffbd06]">
                {e.rating}
              </h1>
            </a>

            <button className=" btn bg-amber-600 hover: text-white border-2 border-amber-500 hover:bg-transparent hover:text-amber-500 text-xl hover:border-amber-600 mx-auto w-fit flex justify-center my-5 rounded-xl p-1">
              Order{" "}
            </button>
          </div>
        ))}
      </div>
      <button className=" btn mx-auto w-fit  flex justify-center  hover:  border-2  hover:bg-transparent hover:text-red-500 text-xl hover:border-red-500 my-8 bg-[#d18b0ad7] rounded-xl p-2 5 text-[#ffffffe5]">
        View All Gadget
      </button>
    </div>
  );
};

export default Card;

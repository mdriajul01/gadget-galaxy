// @flow strict

import * as React from "react";
import { useForm } from "react-hook-form";

const Add_Products = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section>
      <h1 className="text-4xl text-center font-bold text-gray-300 my-16">
        Add Product
      </h1>
      <div className="w-1/3 mx-auto my-10">
        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-2/3 mx-auto">
            <label className="text-xl font-semibold" htmlFor="name">
              Gadget Name:
            </label>
            <br />
            <input
              id="name"
              type="text"
              className="border-2 w-full border-white rounded-xl p-1"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-red-500">Name is required</p>}
          </div>
          <div className="w-2/3 mx-auto">
            <label className="text-xl font-semibold" htmlFor="price">
              Gadget Price:
            </label>
            <br />
            <input
              id="price"
              type="number"
              className="border-2 w-full border-black rounded-xl p-1"
              {...register("price", { required: true })}
            />
            {errors.price && <p className="text-red-500">Price is required</p>}
          </div>
          <div className="w-2/3 mx-auto">
            <label className="text-xl font-semibold" htmlFor="image">
              Enter Your Image URL:
            </label>{" "}
            <br />
            <input
              id="image"
              type="text"
              className="border-2 w-full border-black rounded-xl p-1"
              {...register("image")}
            />
          </div>
          <div className="w-2/3 mx-auto">
            <label className="text-xl font-semibold" htmlFor="details">
              Enter Your Details:
            </label>{" "}
            <br />
            <textarea
              id="details"
              className="border-2 w-full h-20 border-black rounded-xl p-1"
              {...register("details")}
            />
          </div>
          <div className="w-2/3 mx-auto">
            <button
              type="submit"
              className="btn w-full bg-red-500 text-white hover:bg-red-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Add_Products;

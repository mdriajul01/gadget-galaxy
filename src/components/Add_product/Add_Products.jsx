import * as React from "react";
import { useForm } from "react-hook-form";

const Add_Products = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl text-center font-bold text-gray-800 mb-12">
        Add Product
      </h1>
      <div className="max-w-3xl mx-auto">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <label className="text-lg font-semibold" htmlFor="name">
              Gadget Name:
            </label>
            <input
              id="name"
              type="text"
              className="border-2 border-gray-300 rounded-lg p-2 w-full mt-1"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 mt-1">Name is required</p>
            )}
          </div>
          <div className="w-full">
            <label className="text-lg font-semibold" htmlFor="price">
              Gadget Price:
            </label>
            <input
              id="price"
              type="number"
              className="border-2 border-gray-300 rounded-lg p-2 w-full mt-1"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <p className="text-red-500 mt-1">Price is required</p>
            )}
          </div>
          <div className="w-full">
            <label className="text-lg font-semibold" htmlFor="image">
              Enter Your Image URL:
            </label>
            <input
              id="image"
              type="text"
              className="border-2 border-gray-300 rounded-lg p-2 w-full mt-1"
              {...register("image")}
            />
          </div>
          <div className="w-full">
            <label className="text-lg font-semibold" htmlFor="details">
              Enter Your Details:
            </label>
            <textarea
              id="details"
              className="border-2 border-gray-300 rounded-lg p-2 w-full mt-1"
              {...register("details")}
            />
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
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

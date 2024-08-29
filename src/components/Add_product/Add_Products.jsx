import * as React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
const Add_Products = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("http://localhost:3000/gadget", data) // Change from .port to .post
      .then((res) => {
        if (res) {
          Swal.fire({
            title: "Successfully add Gadget",
            text: "you cliced the button",
            icon: "Succes",
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "UnSuccessfully add Gadget",
          text: "Try Again !!!",
          icon: "error",
        });
      });
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl text-center font-bold text-gray-200 mb-12">
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
              placeholder="Gadget Name"
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
              placeholder="Price"
              className="border-2 border-gray-300 rounded-lg p-2 w-full mt-1"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <p className="text-red-500 mt-1">Price is required</p>
            )}
          </div>
          <div className="w-full">
            <label className="text-lg font-semibold" htmlFor="image">
              Gadget Image URL:
            </label>
            <input
              id="image"
              type="text"
              placeholder="Img URL"
              className="border-2 border-gray-300 rounded-lg p-2 w-full mt-1"
              {...register("image", { required: true })}
            />
            {errors.price && (
              <p className="text-red-500 mt-1">URL is required</p>
            )}
          </div>
          <div className="w-full">
            <label className="text-lg font-semibold" htmlFor="details">
              Enter Gadget Details:
            </label>
            <textarea
              id="details"
              placeholder="Gadget Details"
              className="border-2 border-gray-300 rounded-lg p-2 w-full mt-1"
              {...register("details")}
            />
          </div>
          <div className="w-full">
            <label className="text-lg font-semibold" htmlFor="details">
              Enter Gadget Rating:
            </label>
            <input
              type="number"
              placeholder="Highest Rating 10"
              id="rating"
              className="border-2 border-gray-300 rounded-lg p-2 w-full mt-1"
              {...register("rating")}
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

import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div className="flex justify-center  lg:min-h-screen  ">
      <div className=" px-8 py-8  bg-gray-50  w-full">
        <div className="">
          <div className="flex items-center justify-center mb-6">
            <h1 className="text-3xl  font-semibold text-center  text-gray-700">
              Add a Product
            </h1>
          </div>

          <form
            // onSubmit={handleSubmit(handleRegister)}
            className="mt-4 grid grid-cols-12 gap-6"
          >
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-500">
                  Upload product image
                </span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full border-gray-400 bg-gray-50"
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-8"></div>
            <div className="col-span-12 md:col-span-6 lg:col-span-6">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-500">
                  Product Title
                </span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Product title is Required",
                })}
                className="input input-bordered w-full border-gray-400 bg-gray-50 "
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="col-span-12 md:col-span-6"></div>
            <div className=" col-span-12 md:col-span-6 lg:col-span-3">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-500">
                  Category
                </span>
              </label>
              <select
                {...register("role")}
                className="select select-bordered w-full border-gray-400 bg-gray-50"
              >
                <option selected value="buyer">
                  Buyer
                </option>
                <option value="seller">Seller</option>
              </select>
            </div>
            <div className=" col-span-12 md:col-span-6 lg:col-span-3 ">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-500">
                  Condition
                </span>
              </label>
              <select
                {...register("condition")}
                className="select select-bordered w-full border-gray-400 bg-gray-50"
              >
                <option></option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-6"></div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-500">
                  Original Price
                </span>
              </label>
              <input
                type="number"
                {...register("originalPrice", {
                  required: true,
                })}
                className="input input-bordered w-full border-gray-400 bg-gray-50 "
              />
              {errors.originalPrice && (
                <p className="text-red-500">{errors.originalPrice.message}</p>
              )}
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-500">
                  Resale Price
                </span>
              </label>
              <input
                type=""
                {...register("resalePrice", {
                  required: true,
                })}
                className="input input-bordered w-full border-gray-400 bg-gray-50 "
              />
              {errors.resalePrice && (
                <p className="text-red-500">{errors.resalePrice.message}</p>
              )}
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4"></div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-500">
                  Purchase Year
                </span>
              </label>
              <input
                type=""
                {...register("purchaseYear", {
                  required: true,
                })}
                className="input input-bordered w-full border-gray-400 bg-gray-50 "
              />
              {errors.purchaseYear && (
                <p className="text-red-500">{errors.purchaseYear.message}</p>
              )}
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-500">
                  Years of use
                </span>
              </label>
              <input
                type=""
                {...register("yearOfUses", {
                  required: true,
                })}
                className="input input-bordered w-full border-gray-400 bg-gray-50 "
              />
              {errors.yearOfUses && (
                <p className="text-red-500">{errors.yearOfUses.message}</p>
              )}
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4"></div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-500">
                  Location
                </span>
              </label>
              <input
                type="text"
                placeholder="example(Dhaka,Bangladesh)"
                {...register("location", {
                  required: "location is required",
                })}
                className="input input-bordered w-full border-gray-400 bg-gray-50 "
              />
              {errors.location && (
                <p className="text-red-500">{errors.location.message}</p>
              )}
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-8"></div>

            <div className="col-span-12 md:col-span-8">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-500">
                  Description
                </span>
              </label>
              <textarea
                rows="4"
                cols="100"
                className="textarea textarea-bordered bg-gray-50"
              ></textarea>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4"></div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <button
                type="submit"
                className="inline-block shrink-0 rounded-md bottom-1 border border-gray-400 px-8 py-3 text-lg font-medium text-gray-500 transition hover:bg-violet-900 hover:text-white focus:outline-none focus:ring active:text-violet-900 w-full "
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

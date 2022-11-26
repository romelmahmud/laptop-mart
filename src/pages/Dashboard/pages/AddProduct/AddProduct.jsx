import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Spinner from "../../../../shared/Spinner/Spinner";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      // const res = await fetch("http://localhost:8000/categories");
      // const data = await res.json();
      const data = await axios.get("http://localhost:8000/categories");
      return data.data;
    },
  });
  console.log(categories);

  const handleAddProduct = (data) => {
    // console.log(data);
    // console.log(data.productImage[0]);
    const formData = new FormData();
    formData.append("image", data.productImage[0]);

    // uploading Image on ImgBB

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const imgUrl = data.data.display_url;
        console.log(imgUrl);
      });
  };
  if (isLoading) {
    return <Spinner />;
  }
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
            onSubmit={handleSubmit(handleAddProduct)}
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
                {...register("productImage", {
                  required: "Product image is Required",
                })}
                className="file-input file-input-bordered w-full border-gray-400 bg-gray-50 text-lg text-gray-600"
              />
              {errors.productImage && (
                <p className="text-red-500">{errors.productImage.message}</p>
              )}
            </div>
            <div className=" hidden md:block md:col-span-6 lg:col-span-8"></div>
            <div className="col-span-12 md:col-span-8 lg:col-span-6 ">
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
                className="input input-bordered w-full border-gray-400 bg-gray-50 text-lg text-gray-600"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="hidden md:block md:col-span-4 lg:col-span-6"></div>
            <div className=" col-span-12 md:col-span-6 lg:col-span-3">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-500">
                  Category
                </span>
              </label>
              <select
                {...register("category", {
                  required: "Product category is Required",
                })}
                className="select select-bordered w-full border-gray-400 bg-gray-50 text-lg text-gray-600"
              >
                {errors.category && (
                  <p className="text-red-500">{errors.category.message}</p>
                )}
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
                {...register("condition", {
                  required: "Product's condition is Required",
                })}
                className="select select-bordered w-full border-gray-400 bg-gray-50 text-lg text-gray-600"
              >
                {errors.condition && (
                  <p className="text-red-500">{errors.condition.message}</p>
                )}
                <option></option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
            </div>
            <div className="hidden lg:block lg:col-span-6"></div>

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
                className="input input-bordered w-full border-gray-400 bg-gray-50 text-lg text-gray-600"
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
                className="input input-bordered w-full border-gray-400 bg-gray-50 text-lg text-gray-600"
              />
              {errors.resalePrice && (
                <p className="text-red-500">{errors.resalePrice.message}</p>
              )}
            </div>
            <div className="hidden lg:block lg:col-span-4"></div>
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
                className="input input-bordered w-full border-gray-400 bg-gray-50 text-lg text-gray-600"
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
                className="input input-bordered w-full border-gray-400 bg-gray-50 text-lg text-gray-600"
              />
              {errors.yearOfUses && (
                <p className="text-red-500">{errors.yearOfUses.message}</p>
              )}
            </div>
            <div className="hidden lg:block lg:col-span-4"></div>

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
                className="input input-bordered w-full border-gray-400 bg-gray-50 text-lg text-gray-600 "
              />
              {errors.location && (
                <p className="text-red-500">{errors.location.message}</p>
              )}
            </div>
            <div className="hidden md:block md:col-span-6 lg:col-span-8"></div>

            <div className="col-span-12 md:col-span-8">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-500">
                  Description
                </span>
              </label>
              <textarea
                rows="5"
                {...register("description", {
                  required: "Product's description is required",
                })}
                className="textarea textarea-bordered border-gray-400 bg-gray-50 w-full text-lg text-gray-600"
              ></textarea>
              {errors.description && (
                <p className="text-red-500">{errors.description.message}</p>
              )}
            </div>
            <div className="hidden lg:block md:col-span-4"></div>

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

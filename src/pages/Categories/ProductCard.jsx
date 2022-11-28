import React, { useEffect, useState } from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import useCheckVerify from "../../hooks/useCheckVerify";
import Spinner from "../../shared/Spinner/Spinner";

const ProductCard = ({ product }) => {
  const {
    productImage,
    name,
    condition,
    description,
    created,
    location,
    originalPrice,
    resalePrice,
    purchaseYear,
    yearOfUses,
    sellerEmail,
    sellerName,
  } = product;
  const [isVerify, isVerifyLoading] = useCheckVerify(product?.sellerEmail);

  if (isVerifyLoading) {
    return <Spinner />;
  }

  return (
    <div className="card lg:card-side bg-gray-50 shadow-md border rounded-md">
      <figure>
        <img
          src={productImage}
          alt="Album"
          className="block max-w-[250px] max-h-[250px] object-cover aspect-square"
        />
      </figure>
      <div className="card-body">
        <p className="text-gray-400">{created} </p>

        <h2 className="card-title text-violet-900 font-bold">{name}</h2>
        <p className="text-lg text-gray-800">{description}</p>
        <p>
          <span className="font-medium text-gray-800">Seller: </span>
          {sellerName}{" "}
          {isVerify && (
            <CheckBadgeIcon className="h-6 w-6 text-blue-500 inline" />
          )}
        </p>
        <p>
          {" "}
          <span className="font-medium text-gray-800">Location: </span>{" "}
          {location}{" "}
          <span className="font-medium text-gray-800 ml-5">Year of uses: </span>{" "}
          {yearOfUses}
        </p>
        <p>
          {" "}
          <span className="font-medium text-gray-800">
            Original Price:{" "}
          </span>{" "}
          {originalPrice}{" "}
          <span className="font-medium text-gray-800 ml-5">Resale Price: </span>{" "}
          {resalePrice}
        </p>

        <div className="card-actions justify-end">
          <label htmlFor="bookModal" className="btn bg-violet-900">
            Book Now
          </label>
        </div>
      </div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

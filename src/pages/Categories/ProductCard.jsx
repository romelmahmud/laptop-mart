import React from "react";

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
          <button className="btn bg-violet-900">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React from "react";

const AdvertiseCard = ({ product }) => {
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
    <div className="card  bg-gray-50 shadow-md border rounded-md col-span-12 md:col-span-6 lg:col-span-4 pt-5">
      <figure>
        <img
          src={productImage}
          alt={name}
          className="block max-w-[200px] max-h-[200px] rounded-md"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">Advertised</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <p className="text-lg font-medium">Price: {resalePrice}</p>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseCard;

import React from "react";
import { Link } from "react-router-dom";

const CategoryButton = ({ category }) => {
  return (
    <Link to={`/categories/${category._id}`}>
      <div className=" bg-violet-100-50 flex justify-center items-center py-6 md:py-8 lg:py-12 text-2xl font-medium text-gray-700 rounded-md border-2 border-violet-900 shadow-md cursor-pointer hover:bg-violet-900 transition hover:text-white">
        {category.name}
      </div>
    </Link>
  );
};

export default CategoryButton;

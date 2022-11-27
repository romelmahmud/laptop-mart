import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../shared/Spinner/Spinner";

const Categories = () => {
  const { id } = useParams();
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const data = await axios.get(
        `http://localhost:8000/category/products/${id}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      return data.data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return <div>{products.length}</div>;
};

export default Categories;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../shared/Spinner/Spinner";
import Container from "../../shared/Container/Container";
import CategoryButton from "../Home/components/Categories/CategoryButton";
import ProductCard from "./ProductCard";
import BookModal from "./BookModal";

const Categories = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const data = await axios.get(
        `https://y-kappa-green.vercel.app/category/products/${id}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      return data.data;
    },
  });
  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const data = await axios.get(
        "https://y-kappa-green.vercel.app/categories"
      );
      return data.data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }
  if (categoriesLoading) {
    return <p className="text-xl text-center py-20">Loading</p>;
  }

  return (
    <div className="my-16">
      <Container>
        <h3 className="text-3xl font-semibold border-l-[6px] border-violet-900 pl-5">
          Categories:
        </h3>

        <div className="my-10  grid  grid-cols-2  md:grid-cols-3  lg:grid-cols-6 gap-4 ">
          {categories?.map((category) => (
            <CategoryButton key={category._id} category={category} />
          ))}
        </div>
        <div className="mt-20 space-y-10">
          {products?.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              setSelectedProduct={setSelectedProduct}
            />
          ))}
        </div>

        <BookModal
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          refetch={refetch}
        ></BookModal>
      </Container>
    </div>
  );
};

export default Categories;

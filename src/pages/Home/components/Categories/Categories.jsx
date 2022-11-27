import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../../../shared/Spinner/Spinner";
import Container from "../../../../shared/Container/Container";
import CategoryButton from "./CategoryButton";

const Categories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const data = await axios.get("http://localhost:8000/categories");
      return data.data;
    },
  });
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      <h3 className="text-3xl font-semibold border-l-[6px] border-violet-900 pl-5">
        All Categories:
      </h3>
      <div className="my-10  grid  grid-cols-2  md:grid-cols-3  lg:grid-cols-6 gap-4 ">
        {categories?.map((category) => (
          <CategoryButton key={category._id} category={category} />
        ))}
      </div>
    </Container>
  );
};

export default Categories;

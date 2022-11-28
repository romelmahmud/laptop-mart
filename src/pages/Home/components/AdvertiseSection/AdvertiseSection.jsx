import React from "react";
import Container from "../../../../shared/Container/Container";
import Spinner from "../../../../shared/Spinner/Spinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AdvertiseCard from "./AdvertiseCard";

const AdvertiseSection = () => {
  const { data: advertiseProducts, isLoading } = useQuery({
    queryKey: ["advertiseProducts"],
    queryFn: async () => {
      const data = await axios.get(
        "https://y-kappa-green.vercel.app/products/advertise/"
      );
      return data.data;
    },
  });
  if (isLoading) {
    return <Spinner />;
  }

  if (!advertiseProducts) {
    return;
  }
  if (advertiseProducts) {
    return (
      <div className="py-10">
        <Container>
          <h3 className="text-3xl font-semibold border-l-[6px] border-violet-900 pl-5">
            All Advertise Product
          </h3>
          <div className="grid grid-cols-12 py-10 gap-5">
            {advertiseProducts.map((product) => (
              <AdvertiseCard key={product._id} product={product} />
            ))}
          </div>
        </Container>
      </div>
    );
  }
};

export default AdvertiseSection;

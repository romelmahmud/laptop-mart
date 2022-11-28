import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../../../context/auth/authContext";
import Spinner from "../../../../shared/Spinner/Spinner";
import toast from "react-hot-toast";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myorder"],
    queryFn: async () => {
      const data = await axios.get(
        `https://y-kappa-green.vercel.app/booked/${user.email}`,
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
  const handlePay = () => {
    toast.success("Payment successful");
    refetch();
  };
  return (
    <div className="py-20">
      <h2 className="text-center text-2xl font-semibold">
        You have {products.length} products
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Phone Number</th>
              <th>location</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className=" w-12 h-12">
                      <img
                        src={product.productName}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{product.price}</td>
                <td>{product.resalePrice}</td>
                <td>{product.phoneNumber}</td>
                <td>{product.location}</td>
                <td>
                  <button
                    onClick={handlePay}
                    className="btn btn-info btn-outline btn-sm"
                  >
                    Pay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;

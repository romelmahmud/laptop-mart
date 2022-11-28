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
    queryKey: ["myproducts"],
    queryFn: async () => {
      const data = await axios.get(
        `http://localhost:8000/seller/products/${user.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      return data.data;
    },
  });

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/seller/products/${id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Product Deleted successfully");
          refetch();
        }
      });
  };

  const handleAdvertiseUpdate = (id) => {
    axios
      .get(`http://localhost:8000/products/advertise/${id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Product advertise successfully");
          refetch();
        }
      });
  };
  if (isLoading) {
    return <Spinner />;
  }

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
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Advertise</th>
              <th>Action</th>
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
                        src={product.productImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{product.name}</td>
                <td>{product.resalePrice}</td>
                <td>{product.status}</td>
                <td>
                  {product.status === "unsold" ? (
                    <button
                      onClick={() => handleAdvertiseUpdate(product._id)}
                      className="btn btn-outline btn-sm btn-primary "
                    >
                      Advertise
                    </button>
                  ) : (
                    <button></button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-error btn-outline btn-sm"
                  >
                    Delete
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

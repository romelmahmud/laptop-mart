import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../../../shared/Spinner/Spinner";
import Avatar from "../../../../assets/images/avatar.jpg";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const {
    data: sellers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allSellers"],
    queryFn: async () => {
      const data = await axios.get(
        `https://y-kappa-green.vercel.app/users/sellers`,
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
    setIsLoadingDelete(false);
    axios
      .delete(`https://y-kappa-green.vercel.app/users/sellers/${id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        isLoadingDelete(true);
        toast.success("Seller Delete successfully");
        refetch();
      });
  };

  const handleVerify = (id) => {
    setIsLoadingDelete(false);
    axios
      .get(`https://y-kappa-green.vercel.app/users/sellers/${id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        isLoadingDelete(true);
        toast.success("Seller Verified successfully");
        refetch();
      });
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isLoadingDelete) {
    return <Spinner />;
  }

  return (
    <div className="py-20">
      <h2 className="text-center text-2xl font-semibold mb-5">
        Total {sellers.length} Sellers
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Verify</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className=" w-12 h-12 rounded-full">
                      <img
                        src={seller.photo_url ? seller.photo_url : Avatar}
                        alt={seller.name}
                      />
                    </div>
                  </div>
                </td>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>{seller.location}</td>
                <td>
                  {!seller.varified && (
                    <button
                      onClick={() => handleVerify(seller._id)}
                      className="btn btn-info btn-outline btn-sm"
                    >
                      Verify
                    </button>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(seller._id)}
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

export default AllBuyers;

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../../../shared/Spinner/Spinner";
import Avatar from "../../../../assets/images/avatar.jpg";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const {
    data: buyers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allBuyers"],
    queryFn: async () => {
      const data = await axios.get(
        `https://y-kappa-green.vercel.app/users/buyers`,
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
    setIsLoadingDelete(true);
    axios
      .delete(`https://y-kappa-green.vercel.app/users/buyers/${id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setIsLoadingDelete(false);
        toast.success("Product Deleted successfully");
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
        Total {buyers.length} Buyers
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {buyers?.map((buyer, i) => (
              <tr key={buyer._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className=" w-12 h-12 rounded-full">
                      <img
                        src={buyer.photo_url ? buyer.photo_url : Avatar}
                        alt={buyer.name}
                      />
                    </div>
                  </div>
                </td>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>{buyer.location}</td>

                <td>
                  <button
                    onClick={() => handleDelete(buyer._id)}
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

import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/auth/authContext";

const BookModal = ({ selectedProduct, setSelectedProduct, refetch }) => {
  const { name: productName, resalePrice } = selectedProduct;

  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const location = form.location.value;

    const bookedProduct = {
      productName: productName,
      price: resalePrice,
      phoneNumber: phone,
      location: location,
    };

    fetch("https://y-kappa-green.vercel.app/booked", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setSelectedProduct(null);
          toast.success("Booking confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="bookModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookModal"
            onClick={setSelectedProduct(null)}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Book now</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              disabled
              value={selectedProduct?.name}
              className="input w-full input-bordered "
            />
            <input
              type="text"
              disabled
              value={selectedProduct?.resalePrice}
              className="input w-full input-bordered "
            />

            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookModal;

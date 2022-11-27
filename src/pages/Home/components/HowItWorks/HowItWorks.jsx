import React from "react";
import Container from "../../../../shared/Container/Container";
import select from "../../../../assets/icons/select.png";
import meeting from "../../../../assets/icons/meeting.png";
import payment from "../../../../assets/icons/payment.png";

const HowItWorks = () => {
  return (
    <div className="my-28">
      <Container>
        <h3 className="text-3xl font-semibold border-l-[6px] border-violet-900 pl-5">
          How Its Works:
        </h3>
        <div className="my-10  grid grid-cols-1  md:grid-cols-3   gap-4 ">
          <div className="card pt-10 bg-base-100 shadow-md border">
            <figure>
              <img src={select} alt="" />
            </figure>
            <div className="card-body">
              <h2 className=" text-center text-2xl font-semibold text-gray-800">
                Select Online
              </h2>
            </div>
          </div>
          <div className="card pt-10 bg-base-100 shadow-md border">
            <figure>
              <img src={meeting} alt="" />
            </figure>
            <div className="card-body">
              <h2 className=" text-center text-2xl font-semibold text-gray-800">
                Meet Seller
              </h2>
            </div>
          </div>
          <div className="card pt-10 bg-base-100 shadow-md border">
            <figure>
              <img src={payment} alt="" />
            </figure>
            <div className="card-body">
              <h2 className=" text-center text-2xl font-semibold text-gray-800">
                Pay Online
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowItWorks;

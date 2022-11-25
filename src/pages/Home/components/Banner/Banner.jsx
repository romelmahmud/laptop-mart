import React from "react";
import Container from "../../../../shared/Container/Container";
import bannerImg from "../../../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="py-20  bg-gray-100">
        <Container>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-1/2">
              <img src={bannerImg} className="" alt="" />
            </div>
            <div className="w-1/2">
              <h1 className="text-6xl font-bold">
                Buy Or Sell <br />
                Used Laptop
              </h1>
              <p className="py-6 text-lg">
                Best Market place for second hand Laptops. We have lots of bands
                and verified sellers.
              </p>
              <button className="btn bg-violet-900 hover:bg-violet-800 transition">
                Explore
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;

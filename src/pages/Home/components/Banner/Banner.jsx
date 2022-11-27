import React from "react";
import Container from "../../../../shared/Container/Container";
import bannerImg from "../../../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="py-20 ">
        <Container>
          <div className="hero-content flex-col md:flex-row-reverse">
            <div className="w-full md:w-3/5">
              <img src={bannerImg} className="" alt="" />
            </div>
            <div className="w-full md:w-2/5 md:mr-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Buy Or Sell <br />
                Used Laptop
              </h1>
              <p className="py-6 text-lg">
                Best Market place for Second hand Laptops. We have lots of bands
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

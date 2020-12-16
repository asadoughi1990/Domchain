import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Services = () => {
  return (
    <section className="section bg-gray" id="services">
      <div className="container text-center">
        <h1 className="section-title"> Easy to use Dashboard </h1>
        <OwlCarousel
          className="owl-theme"
          autoplay={true}
          loop={true}
          margin={10}
          nav={false}
          items={1}
          autoplayHoverPause={true}
        >
          <div>
            <img src="assets/images/D1.PNG" alt="Dashboard-1" />
            <h4 className="mt-3">Sell your domain easily</h4>
          </div>
          <div>
            <img src="assets/images/D2.PNG" alt="Dashboard-2" />
            <h4 className="mt-3">Buy a domain with one click</h4>
          </div>
          <div>
            <img src="assets/images/D3.PNG" alt="Dashboard-3" />
            <h4 className="mt-3">
              See all the processes in the dashboard
            </h4>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Services;

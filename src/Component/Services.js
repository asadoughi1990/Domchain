import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <section className="section bg-gray" id="services">
        <div className="container text-center">
          <h1 className="section-title"> Easy to use Dashboard </h1>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="assets/images/D1.png"
                  className="d-block w-100"
                  alt="Dashboard-1"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h4 style={{ color: "black" }}>Sell your domain easily</h4>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="assets/images/D2.png"
                  className="d-block w-100"
                  alt="Dashboard-2"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h4 style={{ color: "black" }}>Buy a domain with one click</h4>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="assets/images/D3.png"
                  className="d-block w-100"
                  alt="Dashboard-3"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h4 style={{ color: "black" }}>See all the processes in the dashboard</h4>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;

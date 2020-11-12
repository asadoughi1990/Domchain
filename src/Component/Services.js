import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <section className="section bg-gray" id="services">
        <div className="container text-center">
          <h1 className="section-title"> Easy to use Dashboard </h1>
          <p className="section-subtitle mb-4">Sell your domain easily</p>

          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="assets/images/D1.png" class="d-block w-100" alt="Dashboard-1" />
              </div>
              <div class="carousel-item">
                <img src="assets/images/D2.png" class="d-block w-100" alt="Dashboard-2" />
              </div>
              <div class="carousel-item">
                <img src="assets/images/D3.png" class="d-block w-100" alt="Dashboard-3" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;

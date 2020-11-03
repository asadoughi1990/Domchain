import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="testimonials" className="section-bg">
          <div className="container">
            <header className="section-header">
              <h3>Easy to use Dashboard</h3>
            </header>

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <OwlCarousel
                  className="owl-theme"
                  autoplay={true}
                  loop={true}
                  margin={10}
                  nav={false}
                  items={1}
                  autoplayHoverPause={true}
                >
                  <div className="testimonial-item">
                    <img
                      src="assets/img/D1.PNG"
                      className="img-fluid mx-auto d-block"
                      alt="Dashboard-1"
                    />
                  </div>
                  <div className="testimonial-item">
                    <img
                      src="assets/img/D2.PNG"
                      className="img-fluid mx-auto d-block"
                      alt="Dashboard-2"
                    />
                  </div>
                  <div className="testimonial-item">
                    <img
                      src="assets/img/D3.PNG"
                      className="img-fluid mx-auto d-block"
                      alt="Dashboard-3"
                    />
                  </div>
                </OwlCarousel>
                <h3 className="mt-4">Sell your domain easily</h3>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Dashboard;

import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <section className="section bg-gray" id="services">
        <div className="container text-center">
          <h1 className="section-title"> Services </h1>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
            varius ex. Suspendisse sagittis rutrum condimentum.
          </p>

          <div className="row mt-5">
            <div className="col-md-6">
              <div className="service-box text-center">
                <h4 className="service-title">
                  <i className="ion ion-ios-laptop"></i>
                  Web Design
                </h4>
                <p className="service-description mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent ut varius ex.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-box text-center">
                <h4 className="service-title">
                  <i className="ion ion-ios-phone-portrait"></i>
                  Mobile Application
                </h4>
                <p className="service-description mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent ut varius ex.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-box text-center">
                <h4 className="service-title">
                  <i className="ion ion-logo-game-controller-a"></i>
                  Game Design
                </h4>
                <p className="service-description mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent ut varius ex.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-box text-center">
                <h4 className="service-title">
                  <i className="ion ion-ios-code"></i>
                  Web Programming
                </h4>
                <p className="service-description mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent ut varius ex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;

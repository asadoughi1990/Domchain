import React, { Component } from "react";

class Features extends Component {
  render() {
    return (
      <section className="section" id="features">
        <div className="container text-center">
          <h1 className="section-title"> Features </h1>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
            varius ex. Suspendisse sagittis rutrum condimentum.
          </p>
          <div className="mt-5">
            <div className="row feature">
              <div className="col-md-6 feature-img">
                <img
                  src="assets/images/img3.jpg"
                  className="img-fluid mb-5 mb-md-0"
                  alt="handshake"
                />
              </div>
              <div className="col-md-6 feature-detail">
                <h2 className="feature-title">Good for Small Business</h2>
                <p className="feature-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  vehicula, augue pellentesque varius viverra, augue eros
                  facilisis nulla, et tempus libero orci vitae risus.
                </p>
                <div className="btn btn-custom btn-text">
                  <div className="d-flex align-items-center justify-content-center">
                    Learn More{" "}
                    <i className="ion ion-ios-arrow-round-forward ml-2 icon-btn"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="row feature">
              <div className="col-md-6 feature-img feature-right">
                <img
                  src="assets/images/img2.jpg"
                  className="img-fluid mb-5 mb-md-0"
                  alt="sibiloo"
                />
              </div>
              <div className="col-md-6 feature-detail">
                <h2 className="feature-title">Super Fast Response</h2>
                <p className="feature-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  vehicula, augue pellentesque varius viverra, augue eros
                  facilisis nulla, et tempus libero orci vitae risus.
                </p>
                <div className="btn btn-custom btn-text">
                  <div className="d-flex align-items-center justify-content-center">
                    Learn More{" "}
                    <i className="ion ion-ios-arrow-round-forward ml-2 icon-btn"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="row feature">
              <div className="col-md-6 feature-img">
                <img
                  src="assets/images/img4.jpg"
                  className="img-fluid mb-5 mb-md-0"
                  alt="switches"
                />
              </div>
              <div className="col-md-6 feature-detail">
                <h2 className="feature-title">Using Good Technology</h2>
                <p className="feature-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  vehicula, augue pellentesque varius viverra, augue eros
                  facilisis nulla, et tempus libero orci vitae risus.
                </p>
                <div className="btn btn-custom btn-text">
                  <div className="d-flex align-items-center justify-content-center">
                    Learn More{" "}
                    <i className="ion ion-ios-arrow-round-forward ml-2 icon-btn"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;

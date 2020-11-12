import React, { Component } from "react";
import Sticky from "./Sticky";

export default class NavBarSite extends Component {
  render() {
    return (
      <React.Fragment>
        <Sticky></Sticky>

        <section
          id="header"
          className="height-half"
          data-image="./assets/images/header.jpg"
        >
          <div className="overlay-bg"></div>
          <div className="d-table w-100 h-100">
            <div className="d-table-cell align-middle">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="header-title mt-4">
                      Buy and Sell Domains Safely
                      <br />
                      by Domchain!
                    </h1>
                    <p className="header-description mt-4">
                      a platform based on the blockchain for trading domains
                    </p>
                    <a href="/" className="btn btn-custom btn-round mt-3">
                      Start Trading
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

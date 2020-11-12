import React, { Component } from "react";

class Features extends Component {
  render() {
    return (
      <section className="section bg-gray" id="features">
        <div className="container text-center">
          <h1 className="section-title">Why Choose Us</h1>
          <p className="section-subtitle"></p>

          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="pricing-box active">
                <div className="pricing">
                  <i className="fa fa-shield fa-5x pb-4"></i>
                  <h2>Secured</h2>
                  <div className="pricing-border"></div>
                  <div className="plan-features mt-4">
                    <p>
                      Domchain like all blockchain frameworks is safe and
                      secured. You would not have any concern about losing your
                      domain or your money.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-box active">
                <div className="pricing">
                  <i className="fa fa-bolt fa-5x pb-4"></i>
                  <h2>Prompt Process</h2>
                  <div className="pricing-border"></div>
                  <div className="plan-features mt-4">
                    <p>
                      Despite other platforms that take several days for
                      transferring the domain and money, Domchain does this
                      process quickly in less than 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-box active">
                <div className="pricing">
                  <i className="fa fa-dollar fa-5x pb-4"></i>
                  <h2>Lower Cost</h2>
                  <div className="pricing-border"></div>
                  <div className="plan-features mt-4">
                    <p className="pb-5">
                      The transaction fee in Domchain is fixed and is the least
                      in all two-sided markets.
                    </p>
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

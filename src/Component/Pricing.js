import React, { Component } from 'react';

class Pricing extends Component {

    render() {
        return (
          <section className="section" id="pricing">
            <div className="container text-center">
              <h1 className="section-title">Pricing</h1>
              <p className="section-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ut varius ex. Suspendisse sagittis rutrum condimentum.
              </p>

              <div className="row mt-5">
                <div className="col-lg-4">
                  <div className="pricing-box">
                    <div className="pricing">
                      <h5>Basic</h5>
                      <h2 className="price">$5</h2>
                      <p className="text-muted">/month</p>
                      <div className="pricing-border"></div>
                      <div className="plan-features mt-4">
                        <p>
                          Bandwidth: <b className="text-custom">30GB</b>
                        </p>
                        <p>
                          Space: <b className="text-custom">15GB</b>
                        </p>
                        <p>
                          Support: <b className="text-custom">No</b>
                        </p>
                        <p>
                          <b className="text-custom">1</b> Domain
                        </p>
                        <p>
                          <b className="text-custom">No</b> Hidden Fees
                        </p>
                      </div>
                    </div>
                    <div className="btn btn-block pricing-button">Join Now</div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="pricing-box active">
                    <div className="pricing">
                      <h5>Medium</h5>
                      <h2 className="price">$10</h2>
                      <p className="text-muted">/month</p>
                      <div className="pricing-border"></div>
                      <div className="plan-features mt-4">
                        <p>
                          Bandwidth: <b className="text-custom">100GB</b>
                        </p>
                        <p>
                          Space: <b className="text-custom">50GB</b>
                        </p>
                        <p>
                          Support: <b className="text-custom">No</b>
                        </p>
                        <p>
                          <b className="text-custom">3</b> Domain
                        </p>
                        <p>
                          <b className="text-custom">No</b> Hidden Fees
                        </p>
                      </div>
                    </div>
                    <div className="btn btn-block pricing-button">Join Now</div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="pricing-box">
                    <div className="pricing">
                      <h5>Premium</h5>
                      <h2 className="price">$20</h2>
                      <p className="text-muted">/month</p>
                      <div className="pricing-border"></div>
                      <div className="plan-features mt-4">
                        <p>
                          Bandwidth: <b className="text-custom">Unlimited</b>
                        </p>
                        <p>
                          Space: <b className="text-custom">100GB</b>
                        </p>
                        <p>
                          Support: <b className="text-custom">Yes</b>
                        </p>
                        <p>
                          <b className="text-custom">5</b> Domain
                        </p>
                        <p>
                          <b className="text-custom">Yes</b> Hidden Fees
                        </p>
                      </div>
                    </div>
                    <div className="btn btn-block pricing-button">Join Now</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Pricing;
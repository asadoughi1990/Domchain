import React, { Component } from "react";
import { WOW } from "wowjs";

class Features extends Component {
  componentDidMount() {
    const wow = new WOW({
      offset: 100,
      mobile: false,
      live: true,
    });

    wow.init();
  }

  render() {
    return (
      <section id="why-us" className="wow fadeIn">
        <div className="container">
          <header className="section-header mb-5">
            <h3>Why choose us?</h3>
          </header>

          <div className="row row-eq-height justify-content-center">
            <div className="col-lg-4 mb-4">
              <div className="card wow bounceInUp">
                <img
                  src="assets/img/secure.jpg"
                  alt="Secured"
                  className="img-fluid mx-auto d-block"
                />
                <div className="card-body">
                  <h5 className="card-title">Secured</h5>
                  <p className="card-text">
                    Domchain like all blockchain frameworks is safe and secured.
                    You would not have any concern about losing your domain or
                    your money.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="card wow bounceInUp">
                <img
                  src="assets/img/prompt.jpg"
                  alt="Secured"
                  className="img-fluid mx-auto d-block"
                />
                <div className="card-body">
                  <h5 className="card-title">Prompt Process</h5>
                  <p className="card-text">
                    Despite other platforms that take several days for
                    transferring the domain and money, Domchain does this
                    process quickly in less than 24 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="card wow bounceInUp">
                <img
                  src="assets/img/cost.jpg"
                  alt="Secured"
                  className="img-fluid mx-auto d-block"
                />
                <div className="card-body">
                  <h5 className="card-title">Lower Cost</h5>
                  <p className="card-text">
                    The transaction fee in Domchain is fixed and is the least in
                    all two-sided markets.
                  </p>
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

import React, { Component } from "react";

class FAQ extends Component {
  render() {
    return (
      <section className="section" id="faq">
        <div className="container">
          <h1 className="section-title text-center">FAQ</h1>
          <div className="accordion" id="accordionExample">
            <div className="card-faq">
              <button
                className="btn btn-link btn-faq collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0 faq-question">
                    <strong>Q.</strong>
                    <span className="ml-2">
                      Do I need to create a blockchain account before transfer?
                    </span>
                  </h2>
                </div>
              </button>

              <div
                id="collapseOne"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <strong>A.</strong>
                  <br />
                  Not at all. All procedures will be handled through the
                  Domchain platform.
                </div>
              </div>
            </div>
            <div className="card-faq">
              <button
                className="btn btn-link btn-faq collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0 faq-question">
                    <strong>Q.</strong>
                    <span className="ml-2">
                      How long does the domain transfer process take?
                    </span>
                  </h2>
                </div>
              </button>

              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <strong>A.</strong>
                  <br />
                  It depends upon:
                  <ol>
                    <li>
                      Current domain's condition. for instance, if a seller
                      updates domain administration info, it will take 60 days
                      for the domain to get unlocked.
                    </li>
                    <li>
                      Approving time by both parties (for example, approving
                      Form of Authority bo both parties should be done within 5
                      days.)
                    </li>
                    <li>
                      New and old registrars' policies. The transfer process
                      will vary depending on the registrar(s) involved. The
                      transfer process may require action from the Buyer and
                      Seller.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="card-faq">
              <button
                className="btn btn-link btn-faq collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <div className="card-header" id="headingThree">
                  <h2 className="mb-0 faq-question">
                    <strong>Q.</strong>
                    <span className="ml-2">
                      How do I check the status of my transactions?
                    </span>
                  </h2>
                </div>
              </button>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <strong>A.</strong>
                  <br />
                  You can always check the status of your domains through your
                  dashboard. See: http://panel.domchain.ir/dashboard
                </div>
              </div>
            </div>
            <div className="card-faq">
              <button
                className="btn btn-link btn-faq collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <div className="card-header" id="headingFour">
                  <h2 className="mb-0 faq-question">
                    <strong>Q.</strong>
                    <span className="ml-2">
                      How much is the Domchain's commission fee?
                    </span>
                  </h2>
                </div>
              </button>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <strong>A.</strong>
                  <br />
                  Domchain does not take any commission fee until Jan 2022. Feel
                  free to use Domchain as much as you need.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FAQ;

import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="about">
          <div className="container text-center">
            <h1 className="section-title"> About Us </h1>
            <p className="lead">
              Domchain is a domain transition platform based on the blockchain.
              The domain transaction process runs automatically through (via)
              the Smart Contract. Domchain is not a third-party broker but a
              facilitator of all domain transition operations. All the processes
              like payment, domain verification, domain transition, and refund
              are all performed in the smart contract. The payment fee is
              calculated based on the consumed gas in the smart contract and
              Domchain does not charge you any fees.
            </p>
          </div>
        </section>
        <div id="about-pic">
          <img src="/assets/images/about.jpg" className="img-fluid" alt="about" />
        </div>
      </React.Fragment>
    );
  }
}

export default About;

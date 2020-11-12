import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section className="section" id="about">
        <div className="container text-center">
          <h1 className="section-title"> About Us </h1>
          <p className="lead">
            Domchain is a domain transition platform base on the blockchain. The
            all processes of domain transaction is automated and it under the
            Smart Contract. Domchain is not a third-party broker, it is a
            mediator to facilitate and automate all the operations of domain
            transition. All the processes like payment, domain verification,
            domain transition and refund are all performed in the smart
            contract. The payment fee is calculated based on the consumed gas in
            the smart contract and Domchain does not take any fee.
          </p>
          <div className="mt-5">
            <img
              src="assets/images/about.png"
              className="img-fluid mx-auto d-block"
              alt="about"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default About;

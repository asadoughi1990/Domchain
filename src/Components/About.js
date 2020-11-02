import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="container">
            <header className="section-header">
              <h3 className="mb-3">About Us</h3>
              <p className="text-center text-justify">
                Domchain is a domain transition platform base on the blockchain.
                The all processes of domain transaction is automated and it
                under the Smart Contract.
                <br /> .....
                <br />
                ..........
                <br />
                ...............
                <br />
              </p>
            </header>
            <img
              src="assets/img/about-img.jpg"
              className="img-fluid mx-auto d-block"
              alt="about"
            />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;

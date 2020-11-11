import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          
          <div className="footer-bottom">
            <div className="d-flex">
              2020 © Revolution Corp
              <div className="ml-auto">
                <ul className="list-socmed list-unstyled m-0">
                  <li>
                    <a href="/">
                      <i className="ion ion-logo-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="ion ion-logo-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="ion ion-logo-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="ion ion-logo-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <div className="d-flex">
             {new Date().getFullYear()} © <strong> Domchain </strong>. All Rights Reserved.
              <div className="ml-auto">
                <ul className="list-socmed list-unstyled m-0">
                  <li>
                    <a href="https://www.linkedin.com/company/domchain/">
                      <i className="ion ion-logo-linkedin"></i>
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

import React, { Component } from "react";


class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; {new Date().getFullYear()} <strong> Domchain </strong>. All
            Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

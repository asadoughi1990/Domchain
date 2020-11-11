import React, { Component } from "react";


class Sticky extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    };
    // example how to bind object in React ES6
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 5) {
      this.setState({
        scrollingLock: true
      });
    } else if (window.scrollY < 5) {
       this.setState({
        scrollingLock: false
      });
    }
  }
  render() {
    return (
      <div
        className={`sticky-wrapper ${
          this.state.scrollingLock ? "is-sticky" : ""
        }`}
      >
        <nav className="navbar navbar-expand-lg navbar-dark navbar-header fixed-top sticky sticky-dark pl-0 pr-0">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="./../assets/images/logo.png" height="35" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="ion ion-md-menu"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#team">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Sticky;

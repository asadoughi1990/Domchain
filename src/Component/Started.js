import React, { Component } from 'react';

class Started extends Component {
    render() {
        return (
          <section id="started">
            <div className="overlay-bg"></div>
            <div className="container text-center">
              <h2 className="text-title text-white">
                Are You Ready for Amazing Thing?
              </h2>
              <div className="text-description text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ut varius ex. And lorem stil ipsum.
              </div>
              <div className="btn btn-custom btn-round">Learn More</div>
            </div>
          </section>
        );
    }
}

export default Started;
import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

class Video extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <section id="video">
        <div className="overlay-bg"></div>
        <div className="container text-center">
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="Az9i6D6d_ko"
            rel="0"
            onClose={() => this.setState({ isOpen: false })}
          />
          <button className="btn btn-lg play-shadow" onClick={this.openModal}>
            <span style={{ color: "#00adb5" }}>
              <i className="fa fa-play fa-2x"></i>
            </span>
          </button>
        </div>
      </section>
    );
  }
}

export default Video;

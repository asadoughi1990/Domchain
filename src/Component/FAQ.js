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
                    <span className="ml-2">How do I add a new question?</span>
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
                  To add a new question go to app settings and press "Manage
                  Questions" button.
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
                    <span className="ml-2">Can I insert pictures in my FAQ?</span>
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
                  Yes! To add a picture follow these simple steps:
                  <ol>
                    <li>Enter App Settings</li>
                    <li>Click the "Manage Questions" button</li>
                    <li>
                      Click on the question you would like to attach a picture
                      to
                    </li>
                    <li>
                      When editing your answer, click on the picture icon and
                      then add an image from your library
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
                    <span className="ml-2">Can i insert a video in my FAQ?</span>
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
                  Yes! Users can add video from YouTube or Vimeo with ease:
                  <ol>
                    <li>Enter App Settings</li>
                    <li>Click the "Manage Questions" button</li>
                    <li>
                      Click on the question you would like to attach a video to
                    </li>
                    <li>
                      When editing your answer, click on the video icon and then
                      paste the YouTube or Vimeo video URL
                    </li>
                    <li>
                      That's it! A thumbnail of your video will appear in answer
                      text box
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
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <div className="card-header" id="headingFour">
                  <h2 className="mb-0 faq-question">
                    <strong>Q.</strong>
                    <span className="ml-2">How do I edit or remove the "FAQ title"?</span>
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
                  The FAQ title can be adjusted in the settings tab of the App
                  Settings. You can also remove the title by unchecking its
                  checkbox in the settings tab.
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

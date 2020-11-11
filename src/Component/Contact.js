import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section className="section" id="contact">
        <div className="container">
          <div className="text-center">
            <h1 className="section-title">Contact</h1>
            <p className="section-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ut varius ex. Suspendisse sagittis rutrum condimentum.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 pr-5">
              <div className="contact-detail mt-3">
                <i className="ion ion-ios-map"></i>{" "}
                <p className="fw-bold">
                  1431 Arkham City Amazon Village, California
                </p>
              </div>
              <div className="contact-detail mt-4">
                <i className="ion ion-ios-call"></i>{" "}
                <p>
                  Phone: <span className="fw-bold">+628-998-61-376</span>
                </p>
              </div>
              <div className="contact-detail mt-4">
                <i className="ion ion-ios-mail"></i>{" "}
                <p>
                  Email: <span className="fw-bold">hello@example.comm</span>
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <form
                method="post"
                action="php/contact.php"
                name="contact-form"
                className="contact-form"
                id="contact-form"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mt-2">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Your name*"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mt-2">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Your email*"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Your Subject.."
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <textarea
                        name="comments"
                        id="comments"
                        rows="4"
                        className="form-control"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 text-right">
                    <input
                      type="submit"
                      id="submit"
                      name="send"
                      className="btn btn-custom"
                      value="Send Message"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

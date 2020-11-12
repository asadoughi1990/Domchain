import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }
  render() {
    return (
      <section className="section" id="contact">
        <div className="container">
          <div className="text-center">
            <h1 className="section-title">Contact Us</h1>
            <p className="section-subtitle"></p>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 pr-5">
              <div className="contact-detail mt-3">
                <i className="ion ion-ios-map"></i>{" "}
                <p className="fw-bold">
                  No 6, Street 9, Square 8, Tehran, IRAN
                </p>
              </div>
              <div className="contact-detail mt-4">
                <i className="ion ion-ios-call"></i>{" "}
                <p>
                  Phone: <span className="fw-bold">123-456-7890</span>
                </p>
              </div>
              <div className="contact-detail mt-4">
                <i className="ion ion-ios-mail"></i>{" "}
                <p>
                  Email: <span className="fw-bold">info@domchain.ir</span>
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage">Ooops! There was an error.</div>
              <form
                onSubmit={this.submitForm}
                action="https://formspree.io/f/xnqovwbv"
                method="post"
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
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validation" />
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
                        data-rule="email"
                        data-msg="Please enter a valid email"
                        required={true}
                      />
                      <div className="validation" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        name="subject"
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Your Subject.."
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars of subject"
                      />
                      <div className="validation" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <textarea
                        name="message"
                        id="comments"
                        rows="4"
                        className="form-control"
                        placeholder="Your message..."
                        data-rule="required"
                        data-msg="Please write something for us"
                      ></textarea>
                      <div className="validation" />
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

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        document.getElementById("sendmessage").classList.add("show");
        document.getElementById("errormessage").classList.remove("show");
        //this.setState({ status: "SUCCESS" });
      } else {
        document.getElementById("sendmessage").classList.remove("show");
        document.getElementById("errormessage").classList.add("show");
        //this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default Contact;

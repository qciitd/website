import React from "react";
import Footer from "../components/footer";
import Nav from "../components/Nav";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { isBrowser } from "react-device-detect";

import "./contact.css";
import "./main.css";
import { doc } from "prettier";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactPage extends React.Component {
  render() {
    return (
      <div style={{ margin: "0 auto", fontFamily: "Raleway" }}>
        <Nav />
        <div className="bg-green container-75">
          <div className="contact-form-text">
            We answer your questions for a living (literally). Feel free to get
            in touch by filling this form
          </div>
          <div className="contact-form">
            <form action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSc0kbyzMwJwPV_5OF8CGpWRra1v9boFl5G6NziigkuhgrzP6w/formResponse">
              <input
                className="contact-form-input"
                type="text"
                name="entry.31754825"
                placeholder="Your Name (required)"
              ></input>
              <input
                className="contact-form-input"
                type="text"
                name="entry.461730877"
                placeholder="Your Email (required)"
              ></input>

              <textarea
                name="entry.669084690"
                placeholder="Your Message (required)"
              ></textarea>
              <button>Submit</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactPage;

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

const formResize = () => {
  var w = window.innerWidth;
  var h = window.innerHeight;
  if (w < 600 || h < 500) {
    document.getElementById("google-form").height = 600;
    document.getElementById("google-form").width = 370;
    console.log(document.getElementById("google-form"));
  }
};

class ContactPage extends React.Component {
  componentDidMount() {
    formResize();
  }
  render() {
    return (
      <div style={{ margin: "0 auto", fontFamily: "Raleway" }}>
        <Nav />
        <div
          className="bg-green cream-text container75"
          style={{ fontFamily: "Raleway" }}
        >
          <div className="contact-text-container">
            <h1
              class={`lh-copy ${isBrowser ? "w-70" : "tc"}`}
              style={{ fontSize: "1.5em", marginLeft: "auto" }}
            >
              We answer your questions for a living (literally). Feel free to
              get in touch by filling this form
            </h1>
          </div>
          <div className="google-form-container">
            <iframe
              id="google-form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSc0kbyzMwJwPV_5OF8CGpWRra1v9boFl5G6NziigkuhgrzP6w/viewform?embedded=true"
              width="640"
              height="640"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>

          {/* <div className="contact-form-container">
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: "",
              }}
              onSubmit={(values, actions) => {
                fetch("/", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: encode({ "form-name": "qciitd-contact", ...values }),
                })
                  .then(() => {
                    alert("Success");
                    actions.resetForm();
                  })
                  .catch(() => {
                    alert("Error");
                  })
                  .finally(() => actions.setSubmitting(false));
              }}
              validate={(values) => {
                const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                const errors = {};
                if (!values.name) {
                  errors.name = "Name Required";
                }
                if (!values.email || !emailRegex.test(values.email)) {
                  errors.email = "Valid Email Required";
                }
                if (!values.message) {
                  errors.message = "Message Required";
                }
                return errors;
              }}
            >
              {() => (
                <Form name="qciitd-contact" data-netlify={true}>
                  <label htmlFor="name">Name: </label>
                  <Field name="name" />
                  <label htmlFor="email">Email: </label>
                  <Field name="email" />
                  <label htmlFor="message">Message: </label>
                  <Field name="message" component="textarea" />
                  <button type="submit">Send</button>
                  <p>
                    <ErrorMessage name="name" />
                  </p>
                  <p>
                    <ErrorMessage name="email" />{" "}
                  </p>
                  <p>
                    <ErrorMessage name="message" />
                  </p>
                </Form>
              )}
            </Formik>
          </div> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactPage;

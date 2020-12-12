import React from "react";
import Footer from "../components/footer";
import Nav from "../components/Nav";

import "./contact.css";

class ContactPage extends React.Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`);
  };

  render() {
    return (
      <div style={{ margin: "0 auto" }}>
        <Nav />
        <div className="bg-green cream-text container75">
          <div className="contact-text-container">
            <h1>
              We answer your questions for a living (literally). Queries ? Feel
              free to get in touch by filling this form
            </h1>
          </div>
          <div className="contact-form-container">
            <form data-netlify="true" name="qciitd-contact" method="post">
              <input type="hidden" name="qciitd-contact" value="contact" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={this.state.subject}
                onChange={this.handleInputChange}
              />

              <textarea
                name="message"
                placeholder="Message"
                value={this.state.message}
                onChange={this.handleInputChange}
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactPage;

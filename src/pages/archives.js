import React from "react";

import Nav from "../components/Nav.js";
import Footer from "../components/footer.js";

import "./archives.css";
import "./main.css";

const Archives = () => (
  <div>
    <Nav />
    <div className="bg-green tc pa4 v-mid h-mid cream-text archives-container">
      <a href="#">
        <h1 className="tc f-subheadline-l grow archives-link">Archives Link</h1>
      </a>
      <h3>
        Like any other secret organization, we guard are secrets with all our
        might. Therefore, our archives are currently open only for IIT Delhi
        students. <br></br>
        <br></br>
        IITD students who don't have access should mail to{" "}
        <i>
          <u>qciitdelhi@gmail.com</u>
        </i>
        &nbsp; with subject as <u>'Requesting Archive access'</u> using their
        kerberos ids
      </h3>
    </div>

    <Footer />
  </div>
);

export default Archives;

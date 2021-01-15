import React from "react";

import Nav from "../components/Nav.js";
import Footer from "../components/footer.js";
import ScrollAnimation from 'react-animate-on-scroll';

import "./archives.css";
import "./main.css";

const Archives = () => (
  <div>
    <Nav />
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
    </head>
    <div className="bg-green tc pa4 v-mid h-mid cream-text archives-container" style={{fontFamily: "Raleway"}}>
      <ScrollAnimation animateIn="fadeIn" delay={100} offset={150} duration={2.25} animateOnce={true}>
        <a href="https://forms.gle/3C5rLRGWSrRTqVya8">
          <h1 className="tc f-subheadline-l grow archives-link">Link to Archives</h1>
        </a>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" delay={750} offset={150} duration={2.25} animateOnce={true}>
        <h3>
          Alright then, we keep our secrets like any other organization. Therefore, our archives are currently open only for IIT Delhi students. <br></br>
          <br></br>
          IITD students who don't have access should mail to{" "}
          <i>
            <u class="pointer">qciitdelhi@gmail.com</u>
          </i>
          &nbsp; with subject as 'Requesting Archive Access' using their
          Kerberos IDs
        </h3>
      </ScrollAnimation>
    </div>

    <Footer />
  </div>
);

export default Archives;

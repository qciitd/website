import React from "react";
import { navigate } from "gatsby";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const onClick = (route) => {
    navigate(route);
  };
  return (
    <div className="fl footer" style={{fontFamily: "Raleway"}}>
      <div className="container container-centered">
        <div>
          <img className="footer-logo" src={"../../logo.jpg"} />
        </div>
        <div>Quizzing Club</div>
        <div>Indian Institute of Technology Delhi</div>
      </div>
      <div className="container">
        <p onClick={() => onClick("/")} class="pointer hover-green">
          Home
        </p>
        <p onClick={() => onClick("/team")} class=" pointer  hover-green">
          About Us
        </p>
        <p onClick={() => onClick("/calendar")} class=" pointer hover-green">
          Calendar
        </p>
        <p onClick={() => onClick("/archives")} class=" pointer hover-green">
          Archives
        </p>
        <p onClick={() => onClick("/league")} class=" pointer hover-green">
          League
        </p>
        <p
          onClick={() => onClick("/recognitions")}
          class=" pointer hover-green"
        >
          Recognitions
        </p>
        <p onClick={() => onClick("/halloffame")} class=" pointer hover-green">
          Hall of Fame
        </p>
      </div>
      <div className="container">
        <p>
          <a href="mailto:qciitdelhi@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} style={{ margin: "0 10px" }} />
            qciitdelhi@gmail.com
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/company/qc-iitdelhi" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} style={{ margin: "0 10px" }} />
            linkedin.com/company/qc-iitdelhi
          </a>
        </p>
        <p>
          <a href="https://www.facebook.com/iitd.qc/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} style={{ margin: "0 10px" }} />
            facebook.com/iitd.qc
          </a>
        </p>
        <p>
          <a href="https://www.instagram.com/iitdqc/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} style={{ margin: "0 10px" }} />
            instagram.com/iitdqc
          </a>
        </p>
        <div className="footer-credits">
          Developed and maintained by <br></br>
          <a
            href="https://www.linkedin.com/in/om-krishna-96012965/"
            target="_blank"
          >
            <u>Om</u>
          </a>
          &nbsp; &&nbsp;
          <a
            href="https://www.linkedin.com/in/rehan-bhatia-6b59531a6/"
            target="_blank"
          >
            <u>Rehan</u>
          </a>
          &nbsp; for Quizzing Club, IIT Delhi
        </div>
      </div>
    </div>
  );
};

export default Footer;

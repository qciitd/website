import React from "react";
import { navigate } from "gatsby";
import "tachyons";
import "./nav.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const onClick = (route) => {
    navigate(route);
  };
  const showNavbar = () => {
    var navLinks = document.querySelector(".navbar-links");
    var navMenus = navLinks.querySelectorAll("p");
    if (navLinks.classList.contains("w-90")) {
      navLinks.classList.remove("w-90");
      navLinks.classList.add("w-100");
    } else {
      navLinks.classList.remove("w-100");
      navLinks.classList.add("w-90");
    }

    navMenus.forEach((navMenu) => {
      if (navMenu.classList.contains("responsive")) {
        navMenu.classList.remove("responsive");
      } else {
        navMenu.classList.add("responsive");
        navMenu.classList.remove("grow");
      }
    });
  };
  return (
    <nav
      style={{ fontFamily: "Raleway" }}
      className="navbar db dt-l w-100 border-box pa3 ph5-l pv1"
    >
      <p className="dib dtc-l v-mid w-10 w-10-l tc tl-l mb0-l mb2 nav-menu">
        <img onClick={() => onClick("/")} className="navbar-logo pointer" src={"../../logo.jpg"} />
      </p>
      <div className="navbar-links dib dtc-l v-mid w-90 w-90-l tr tr-l mb0-l mt2 mb2 pt2">
        <p onClick={() => onClick("/")} className="nav-menu">
          <h4>Home</h4>
        </p>
        <p onClick={() => onClick("/rdv")} className="nav-menu">
          <h4>Rendezvous '23</h4>
        </p>
        <p onClick={() => onClick("/team")} className="nav-menu">
          <h4>About Us</h4>
        </p>
        <p onClick={() => onClick("/calendar")} className="nav-menu">
          <h4>Calendar</h4>
        </p>
        
        <p onClick={() => onClick("/archives")} className=" nav-menu">
          <h4>Archives</h4>
        </p>
        <p onClick={() => onClick("/league")} className=" nav-menu">
          <h4>League</h4>
        </p>
        <p onClick={() => onClick("/recognitions")} className=" nav-menu">
          <h4>Recognitions</h4>
        </p>
        <p onClick={() => onClick("/halloffame")} className=" nav-menu">
          <h4>Hall of Fame</h4>
        </p>
        <p onClick={() => onClick("/contact")} className=" nav-menu">
          <h4>Contact Us</h4>
        </p>
        <a
          className="link pink dib ml3 mr3 mr4-l v-mid tc grow"
          href="https://www.instagram.com/iitdqc/"
          title="Instagram"
        >
          <svg
            className="dib h1 w1"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="1.414"
          >
            <path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z" />
          </svg>
        </a>
        <a
          className="link blue dib mr3 mr4-l v-mid tc grow"
          href="https://www.facebook.com/iitd.qc/"
          title="Facebook"
        >
          <svg
            className="dib h1 w1 bg-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="1.414"
          >
            <path
              d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0"
              fill-rule="nonzero"
            />
          </svg>
        </a>
        <a
          className="link blue dib mr3 mr4-l v-mid tc grow"
          href="https://www.linkedin.com/company/qc-iitdelhi"
          title="LinkedIn"
        >
          <svg
            className="dib h1 w1 bg-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="1.414"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <FontAwesomeIcon
          icon={faBars}
          className="navbar-bars v-mid"
          onClick={showNavbar}
        />
      </div>
    </nav>
  );
};

export default Nav;

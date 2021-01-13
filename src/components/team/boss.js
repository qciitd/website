import React from "react";
import "./boss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Boss = ({ name, position, image, linkedin }) => (
  <div className="team-member" style={{ margin: "1% 1%" }}>
    <div className="team-member-avatar boss-avatar">
      <img className="team-avatar" src={image} />
    </div>
    <div className="team-member-name athelas">{name}</div>
    <div className="team-member-subtitle " style={{fontFamily: "Raleway"}}>{position}</div>
    <a href={linkedin} target="_blank">
      <div className="linkedin-button athelas">
        <FontAwesomeIcon icon={faLinkedinIn} size="xs" /> <span>Connect</span>
      </div>
    </a>
  </div>
);

export default Boss;

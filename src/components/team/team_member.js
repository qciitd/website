import React from "react";
import "./team_section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const TeamMember = ({ name, position, image, linkedin }) => (
  <div className="team-member">
    <div className="team-member-avatar">
      <img className="team-avatar" src={image} />
    </div>
    <div className="team-member-name athelas">{name}</div>
    <div className="team-member-subtitle garamond ">{position}</div>
    <a href={linkedin} target="_blank">
      <div className="linkedin-button athelas">
        <FontAwesomeIcon icon={faLinkedinIn} size="xs" /> <span>Connect</span>
      </div>
    </a>
  </div>
);

export default TeamMember;

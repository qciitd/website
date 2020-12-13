import React from "react"
import "./boss.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const Boss = () => (
  <div className="team-member" style={{ margin: "1% 1%" }}>
    <div className="team-member-avatar boss-avatar">
      <img className="team-avatar" src="https://i.ibb.co/qRQstFy/Screenshot-2020-12-14-at-12-34-54-AM.png" />
    </div>
    <div className="team-member-name athelas">Shauryasikt</div>
    <div className="team-member-subtitle  garamond ">Institute Secretary</div>
	<div className="linkedin-button athelas">
	      	<FontAwesomeIcon icon={faLinkedinIn} /> <span>Connect</span>
	</div>
  </div>
)

export default Boss

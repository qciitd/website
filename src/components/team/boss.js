import React from "react"
import "./boss.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const Boss = () => (
  <div className="team-member" style={{ margin: "1% 1%" }}>
    <div className="team-member-avatar boss-avatar">
      <img className="team-avatar" src="https://i.imgflip.com/4kxafx.jpg" />
    </div>
    <div className="team-member-name athelas">Shaurya</div>
    <div className="team-member-subtitle  garamond ">Institute Secretary</div>
  </div>
)

export default Boss

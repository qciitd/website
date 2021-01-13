import React from "react";
import Boss from "./boss";
import TeamMember from "./team_member";
import "./team_section.css";
import { isBrowser } from "react-device-detect";
import ScrollAnimation from 'react-animate-on-scroll';

const TeamSection = (data) => {
  console.log(data.data);

  var teamData = data.data;
  var secy = teamData[13].node;
  var members = teamData.slice(0, 13);
  console.log(members);

  return (
    <div style={{fontFamily: "Raleway"}}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
      </head>
      <div className="bg-cream fl w-100">
        <div
          className="flex"
          style={{ justifyContent: "center", alignItems: "start" }}
        >
          <ScrollAnimation animateIn="slideInUp" delay={100} offset={150} duration={1.25} animateOnce={true}>
            <h1
              class={`garamond f1 lh-title ${
                isBrowser ? "mr6 w-100-ns w-100 mt6" : "w-100 tc mt4"
              }`}
            >
              LO AND BEHOLD, <br /> THE TEAM!
              <br></br>
              <span className="f2 lh-copy" style={{ float: "right" }}></span>
            </h1>
          </ScrollAnimation>

          <Boss
            name={secy.name}
            position={secy.hostel}
            linkedin={secy.linkedin}
            image={secy.photos}
          />
        </div>

        <div className="team-section flex-wrap" style={{fontFamily: "Raleway"}}>
          {members.map((node) => {
            return (
              <TeamMember
                name={node.node.name}
                position={node.node.hostel}
                linkedin={node.node.linkedin}
                image={node.node.photos}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

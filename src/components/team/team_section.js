import React from "react";
import Boss from "./boss";
import TeamMember from "./team_member";
import "./team_section.css";
import { isBrowser } from "react-device-detect";

const TeamSection = (data) => {
  console.log(data.data);

  var teamData = data.data;
  var secy = teamData[13].node;
  var members = teamData.slice(0, 13);
  console.log(members);

  return (
    <div>
      <div className="bg-cream fl w-100">
        <div
          className="flex"
          style={{ justifyContent: "center", alignItems: "start" }}
        >
          <h1
            class={`f1 lh-title ${
              isBrowser ? "w-40-ns w-40 mt6" : "w-100 tc mt4"
            }`}
          >
            LO AND BEHOLD, <br /> THE TEAM!
            <br></br>
            <span className="f2 lh-copy" style={{ float: "right" }}></span>
          </h1>

          <Boss
            name={secy.name}
            position={secy.hostel}
            linkedin={secy.linkedin}
            image={secy.photos}
          />
        </div>

        <div className="team-section flex-wrap">
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

import React from "react"
import Boss from "./boss"
import TeamMember from "./team_member"
import "./team_section.css"

const TeamSection = () => (
  <div>
    <div className="bg-cream fl w-100">
      <div
        className="flex"
        style={{ justifyContent: "center", alignItems: "start" }}
      >
        <h1 class="f1 lh-title w-40-ns w-90">
          What is it about my nose that displeases you, Lucius?
          <br></br>
          <span className="f2 lh-copy" style={{ float: "right" }}></span>
        </h1>

        <Boss />
      </div>

      <div className="team-section flex-wrap">
        <TeamMember
          name={"Ritvik"}
          position={"Aravali"}
          image={
            "https://pyxis.nymag.com/v1/imgs/171/429/c95b07becc2bef532d9669b4824ea4386f-08-harry-potter.rsquare.w1200.jpg"
          }
        />
        <TeamMember
          name={"Vishantan"}
          position={"Girnar"}
          image={
            "https://pbs.twimg.com/profile_images/1298380607068745729/t65sdSut_400x400.jpg"
          }
        />
        <TeamMember
          name={"Udita"}
          position={"Himadri"}
          image={
            "https://i.pinimg.com/originals/fa/87/7b/fa877bbf328b95b62f236ee19fa796cd.jpg"
          }
        />

        <TeamMember
          name={"Prasoon"}
          position={"Jwala"}
          image={"https://uploads.scratch.mit.edu/users/avatars/38862514.png"}
        />
        <TeamMember
          name={"Payal"}
          position={"Kailash"}
          image={
            "https://i.pinimg.com/originals/fa/87/7b/fa877bbf328b95b62f236ee19fa796cd.jpg"
          }
        />
        <TeamMember
          name={"Anshuman"}
          position={"Kara"}
          image={
            "https://i.pinimg.com/originals/67/ca/6c/67ca6c4cdb888d452c0c07cdb868790b.gif"
          }
        />
        <TeamMember
          name={"Shobhit"}
          position={"Kumaon"}
          image={
            "https://24.media.tumblr.com/tumblr_magcjr6Gcp1qmp10po1_250.gif"
          }
        />
        <TeamMember
          name={"Rehan"}
          position={"Nilgiri"}
          image={"https://data.whicdn.com/images/125006189/original.gif"}
        />
        <TeamMember
          name={"Raj"}
          position={"Satpura"}
          image={"https://uploads.scratch.mit.edu/users/avatars/38862514.png"}
        />
        <TeamMember
          name={"Lakshya"}
          position={"Shivalik"}
          image={
            "https://pyxis.nymag.com/v1/imgs/171/429/c95b07becc2bef532d9669b4824ea4386f-08-harry-potter.rsquare.w1200.jpg"
          }
        />
        <TeamMember
          name={"Shaswat"}
          position={"Udaigiri"}
          image={"https://uploads.scratch.mit.edu/users/avatars/38862514.png"}
        />
        <TeamMember
          name={"Ambrish"}
          position={"Vindy"}
          image={
            "https://pyxis.nymag.com/v1/imgs/171/429/c95b07becc2bef532d9669b4824ea4386f-08-harry-potter.rsquare.w1200.jpg"
          }
        />
        <TeamMember
          name={"Om"}
          position={"Zanskar"}
          image={"https://uploads.scratch.mit.edu/users/avatars/38862514.png"}
        />
      </div>
    </div>
  </div>
)

export default TeamSection

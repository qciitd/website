import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Nav from "../components/Nav";
import Footer from "../components/footer";
import FlipPoster from "../components/flipposter";
import ProfileCard from "../components/profilecard";

import "./team.css";
import "./main.css";
import TeamSection from "../components/team/team_section";

const Team = () => (
  <div>
    <SEO title="QC IIT Delhi. Team Members" />
    <Nav />
    <div>
      <div className="vh-50 bg-green dtc v-mid tc">
        <img className="team-collage v-mid" src={"./team.png"} />
        <h3 className="tc cream-text">QC Team, 2020-21</h3>
      </div>
      <div className="bg-cream vh-50 mv4 ">
        <div className="fl w-100 w-40-ns tc">
          <FlipPoster name={"MasterMind"} data={"MasterMind"} />
          <FlipPoster name={"Occam's Razor"} data={"Occam's Razor"} />
          <FlipPoster name={"64 Blocks"} data={"64 blocks"} />
          <FlipPoster name={"Anything you like"} data={"..."} />
        </div>
        <div className="fl w-100 w-60-ns pl3 pr3 tr-ns tl">
          <h1 class="f1-ns f2 lh-title">What do we do ?</h1>
          <h1 class="f2-ns f3 lh-copy about-text">
            <br></br>While these programs are useful for sketching ideas, they
            aren’t 100% accurate in their reflection of how the web works across
            device sizes or how things get drawn to the screen.Tachyons features
            a spacing scale based on powers of two that starts at .25rem
          </h1>
        </div>
      </div>
      <TeamSection />
    </div>
    <Footer />
  </div>
);

export default Team;

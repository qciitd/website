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
        <div className="fl w-100 w-60-ns pl3 pr3 tr-ns tl mt4">
          <h1 class="f2 lh-title tl ml4">What do we do ?</h1>
          <h1 class="f4-ns f4 lh-copy about-text w-90 center tl">
            <br></br>At first glance, it would seem that all we do is ask each other random stuff and reward those in honour who answer correctly. While that may be true in essence, we do this in a variety of genres AND in a variety of formats. From covering the generic fields of quizzing to even obscure fandoms, we cater to any information that can be presented in questions in a fun and interesting manner. Moreover, it’s not all “if-you-know-then-you-know”; most of the questions are curated by our quizmasters so that you can logically arrive at the answer too. So put on your thinking caps (or deerstalker hats) and join us on this never-ending pleasurable quest of acquiring random knowledge!
          </h1>
        </div>
      </div>
      <TeamSection />
    </div>
    <Footer />
  </div>
);

export default Team;

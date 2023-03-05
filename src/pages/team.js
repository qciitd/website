import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ScrollAnimation from 'react-animate-on-scroll';


import Nav from "../components/Nav";
import Footer from "../components/footer";
import FlipPoster from "../components/flipposter";
import ProfileCard from "../components/profilecard";

import "./team.css";
import "./main.css";
import TeamSection from "../components/team/team_section";

const Team = ({ data }) => {
  var teamData = data.allTeamSheet1.edges;

  return (
    <div>
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
    </head>
      <SEO title="QC IIT Delhi. Team Members" />
      <Nav />
      <div style={{fontFamily: "Raleway"}}>
        <div className="team-container bg-green">
          <div className="team-group-picture">
            <img src={"https://i.ibb.co/kxVkRbJ/Whats-App-Image-2023-03-02-at-7-55-12-PM.jpg"} />
          </div>
          <h2 className="tc cream-text">QC Team, 2022-23</h2>
        </div>
        <div className="bg-cream vh-50 mv4 ">
          <div className="fl w-100 w-40-ns tc">
            <FlipPoster
              name={"36 Blocks"}
              data={"The Mega-General quiz to uncover the secrets that arise from the overlapping of the major genres"}
              image={"https://i.ibb.co/rtnHTQp/Whats-App-Image-2023-02-28-at-12-15-54-AM.jpg"}
            />
            <FlipPoster
              name={"Occam's Razor"}
              data={"The most challenging questions that measure your ability to put simple fundas to use effectively"}
              image={"https://i.ibb.co/9NPbhNt/Whats-App-Image-2023-03-05-at-10-09-16-PM.jpg"}
            />
            <FlipPoster
              name={"MasterMind"}
              data={"Race against time to clinch this crown amongst the champions of their respective fields"}
              image={"https://i.ibb.co/xq7210K/mastermind.jpg"}
            />
            <FlipPoster
              name={"Freshers Quiz"}
              data={"Race against time to clinch this crown amongst the champions of their respective fields"}
              image={"https://i.ibb.co/Fqkyg6K/Whats-App-Image-2023-03-02-at-1-22-41-PM.jpg"}
            />
          </div>
          <div className="fl w-100 w-60-ns pl3 pr3 tr-ns tl mt4">
            <h1 class="f2 lh-title tl ml4">What do we do ?</h1>
            <ScrollAnimation animateIn="fadeIn" delay={100} offset={300} duration={3} animateOnce={true}>
              <h1 class="f4-ns f4 lh-copy about-text w-90 center tl">
                <br></br>At first glance, it would seem that all we do is ask each
                other random stuff and reward those in honour who answer
                correctly. While that may be true in essence, we do this in a
                variety of genres AND in a variety of formats. From covering the
                generic fields of quizzing to even obscure fandoms, we cater to
                any information that can be presented in questions in a fun and
                interesting manner. Moreover, it’s not all
                “if-you-know-then-you-know”; most of the questions are curated by
                our quizmasters so that you can logically arrive at the answer
                too. So put on your thinking caps (or deerstalker hats) and join
                us on this never-ending pleasurable quest of acquiring random
                knowledge!
              </h1>
            </ScrollAnimation>
          </div>
        </div>
        <TeamSection data={teamData} />
      </div>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query TeamQuery {
    allTeamSheet1 {
      edges {
        node {
          name
          hostel
          linkedin
          photos
        }
      }
    }
  }
`;

export default Team;

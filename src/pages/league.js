import React from "react";
import { graphql } from "gatsby";
import "tachyons";
import "./league.css";
import "./main.css";
import {
  isBrowser,
  isMobile,
  BrowserView,
  MobileView,
} from "react-device-detect";
import ScrollAnimation from 'react-animate-on-scroll';

import MobileBoard from "../components/mobileboard.js";
import Nav from "../components/Nav.js";
import Footer from "../components/footer";
import LeagueStandings from "../components/leaguestandings.js";
import IndivStandings from "../components/indivstandings.js";
import "../components/league.css";
import LeaderboardTile from "../components/leaderboard/leaderboard_tile";
import { node } from "prop-types";

const LeaguePage = ({ data }) => {
  var allData = data.allLeaderboardIndividual.edges;
  var nonZeroData = allData.filter((node) => node.node.points >= 0);

  /*var g = nonZeroData.length / 6;
  var s = g + nonZeroData.length / 6;
  var b = s + nonZeroData.length / 6;
  */
  var g = 16;
  var s = 32;
  var b = 48;

  var gold = nonZeroData.filter(
    (node) => node.node.position <= g && node.node.points != 0
  );
  var silver = nonZeroData.filter(
    (node) =>
      node.node.position > g && node.node.position <= s && node.node.points != 0
  );
  var bronze = nonZeroData.filter(
    (node) =>
      node.node.position > s && node.node.position <= b && node.node.points != 0
  );
  var rest = nonZeroData.filter((node) => node.node.position > b);

  //var rest_zero = allData.filter((node) => node.node.points == 0);

  console.log(gold);
  console.log(silver);
  console.log(bronze);
  console.log(rest);
  return (
    <div>
      <Nav />
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
      </head> 
      <div className="leaderboard-section flex" style={{fontFamily: "Raleway"}}>
        <div className="w-30-ns w-100">
          <div className="leaderboard-table-heading">
            <ScrollAnimation animateIn="fadeIn" delay={100} offset={150} duration={2} animateOnce={true}>
              <h1 class="f1-ns f2 lh-title">League Leaderboard</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay={800} offset={150} duration={2} animateOnce={true}>
              <p class="f3-ns f6">
                The leaderboard is based on the points obtained during
                League Quizzes only. The scores are updated within 1 or 2 days
                after any league quiz. For any discrepancies, contact the secretary.
              </p>
            </ScrollAnimation>
          </div>
        </div>
        <div className="w-10"></div>
        <div className="w-60-ns w-100">
          <div className="header-tile">
            <LeaderboardTile
              name={"Name"}
              team_name={"Team Name"}
              points={"Total Points"}
              position={"Rank"}
            />
          </div>

          <div className="leaderboard-table">
            <div className="leaderboard-tiles">
              {gold.map((node) => (
                <LeaderboardTile
                  name={node.node.name}
                  team_name={node.node.team}
                  points={node.node.points}
                  position={node.node.position}
                  background_color={"gold"}
                  medal_src={"https://i.ibb.co/F7m3B7q/gold-Medal.png"}
                />
              ))}

              {silver.map((node) => (
                <LeaderboardTile
                  name={node.node.name}
                  team_name={node.node.team}
                  points={node.node.points}
                  position={node.node.position}
                  background_color={"silver"}
                  medal_src={"https://i.ibb.co/TtsR8L3/silver-Medal.png"}
                />
              ))}

              {bronze.map((node) => (
                <LeaderboardTile
                  name={node.node.name}
                  team_name={node.node.team}
                  points={node.node.points}
                  position={node.node.position}
                  background_color={"#CD7F32"}
                  medal_src={"https://i.ibb.co/SdczRTL/bronze-Medal.png"}
                />
              ))}

              {rest.map((node) => (
                <LeaderboardTile
                  name={node.node.name}
                  team_name={node.node.team}
                  points={node.node.points}
                  position={node.node.position}
                  medal_src={"https://i.ibb.co/DD8w8pH/blank.png"}
                />
              ))}

//               {rest_zero.map((node) => (
//                 <LeaderboardTile
//                   name={node.node.name}
//                   team_name={node.node.team}
//                   points={node.node.points}
//                   position={node.node.position}
//                   medal_src={"https://i.ibb.co/DD8w8pH/blank.png"}
//                 />
//               ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="leaderboard-section">
        <div className="leaderboard-table">
          <div className="leaderboard-table-heading">
            <img className="leaderboard-logo grow" src={"../../logo.jpg"} />
            <h1 class="f1-ns f4 lh-title">League Leaderboard</h1>
          </div>
          <p class="f5-ns f6 apple-system">
            The leaderboard below is based on the points obtained during League
            Quizzes only. The scores are updated within 1 or 2 days after a
            quiz. For any discrepancies, contact Shaurya.
          </p>

          <div className="leaderboard-tiles">
            {gold.map((node) => (
              <LeaderboardTile
                name={node.node.name}
                team_name={node.node.team}
                points={node.node.points}
                background_color={"gold"}
              />
            ))}

            {silver.map((node) => (
              <LeaderboardTile
                name={node.node.name}
                team_name={node.node.team}
                points={node.node.points}
                background_color={"silver"}
              />
            ))}

            {bronze.map((node) => (
              <LeaderboardTile
                name={node.node.name}
                team_name={node.node.team}
                points={node.node.points}
                background_color={"#CD7F32"}
              />
            ))}

            {rest.map((node) => (
              <LeaderboardTile
                name={node.node.name}
                team_name={node.node.team}
                points={node.node.points}
              />
            ))}
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export const query = graphql`
  query HomePageQuery {
    allLeaderboardIndividual {
      edges {
        node {
          name
          team
          position
          points
        }
      }
    }
  }
`;

export default LeaguePage;

import React from "react";
import { graphql } from "gatsby";
import "tachyons";
import "./league.css";
import {
  isBrowser,
  isMobile,
  BrowserView,
  MobileView,
} from "react-device-detect";

import MobileBoard from "../components/mobileboard.js";
import Nav from "../components/Nav.js";
import Footer from "../components/footer";
import LeagueStandings from "../components/leaguestandings.js";
import IndivStandings from "../components/indivstandings.js";
import "../components/league.css";
import LeaderboardTile from "../components/leaderboard/leaderboard_tile";
import { node } from "prop-types";

const LeaguePage = ({ data }) => {
  var allData = data.allGoogleSpreadsheetIndividual.edges;
  var nonZeroData = allData.filter((node) => node.node.points > 0);

  var g = nonZeroData.length / 6;
  var s = g + nonZeroData.length / 6;
  var b = s + nonZeroData.length / 6;

  var gold = nonZeroData.filter((node) => node.node.position < g);
  var silver = nonZeroData.filter(
    (node) => node.node.position > g && node.node.position < s
  );
  var bronze = nonZeroData.filter(
    (node) => node.node.position > s && node.node.position < b
  );
  var rest = nonZeroData.filter((node) => node.node.position > b);
  console.log(gold);
  console.log(silver);
  console.log(bronze);
  console.log(rest);
  return (
    <div>
      <Nav />

      <div className="leaderboard-section flex">
        <div className="w-30-ns w-100">
          <div className="leaderboard-table-heading">
            <h1 class="f1-ns f2 lh-title">League Leaderboard</h1>
            <p class="f3-ns f6 apple-system">
              The leaderboard below is based on the points obtained during
              League Quizzes only. The scores are updated within 1 or 2 days
              after any league quiz. For any discrepancies, contact Shaurya.
            </p>
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
                  medal_src={
                    "https://i.ibb.co/zsGRrtt/Screenshot-2020-11-13-at-6-24-16-PM.png"
                  }
                />
              ))}
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
    allGoogleSpreadsheetIndividual {
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

import React from "react";
import "./leaderboard_tile.css";

const LeaderboardTile = ({
  name,
  team_name,
  points,
  position,
  background_color,
  medal_src,
}) => (
  <div
    className="leaderboard-tile"
    style={{ backgroundColor: background_color }}
  >
    <div>
      <img
        src={medal_src}
        style={{ width: "20px", height: "20px", margin: "0 10px 0 0" }}
      />
    </div>
    <div className="leaderboard-tile-rank">{position}</div>
    <div className="leaderboard-tile-name">{name}</div>
    <div className="leaderboard-tile-team">{team_name}</div>
    <div className="leaderboard-tile-points">{points}</div>
  </div>
);

export default LeaderboardTile;

import React from "react"
import "./leaderboard_tile.css"

const LeaderboardTile = ({ name, team_name, points, background_color }) => (
  <div
    className="leaderboard-tile"
    style={{ backgroundColor: background_color }}
  >
    <div className="leaderboard-tile-name">{name}</div>
    <div className="leaderboard-tile-team">{team_name}</div>
    <div className="leaderboard-tile-points">{points}</div>
  </div>
)

export default LeaderboardTile

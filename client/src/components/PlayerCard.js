import React from "react";

export default function PlayerCard(props) {
  return (
    <div className="player-card-wrapper">
      <div data-testid="player-card" className="player-card">
        <h2 className="player-rank">{props.player.id + 1}</h2>
        <h3 data-testid="player-name" className="player-name">
          {props.player.name}
        </h3>
        <p
          data-testid="player-country"
          className="player-country"
          style={
            props.player.country === "United States"
              ? { color: "blue" }
              : { color: "red" }
          }
        >
          {props.player.country}
        </p>
        <p data-testid="player-searches" className="player-searches">
          searches: {props.player.searches}
        </p>
      </div>
    </div>
  );
}
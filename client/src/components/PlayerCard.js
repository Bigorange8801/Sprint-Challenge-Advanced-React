import React from "react";

const PlayerCard = props => {
  // console.log(player)
  return (
    <div className="player-card">
      <h3>Name:{props.player.name}</h3>
      <p>Country:{props.player.country}</p>
      <p>Google Searches: {props.player.searches}</p>
    </div>
  );
};

export default PlayerCard;

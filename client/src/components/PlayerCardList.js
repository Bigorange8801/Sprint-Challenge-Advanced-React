import React from "react";
import PlayerCard from "./PlayerCard";

const PlayerCardList = props => {
  //   console.log("playerData", playerData);

  return (
    <div>
      {props.playerData.map(player => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};

export default PlayerCardList;

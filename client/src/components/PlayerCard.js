import React from 'react';

const PlayerCard = (props) => {
console.log(props.playerData.name)
return(
  <div>

<p>{props.playerData.name}</p>

  </div>
);

};
export default PlayerCard;
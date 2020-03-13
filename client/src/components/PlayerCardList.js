import React from 'react';
import PlayerCard from './PlayerCard';

function PlayerCardList ({ playerData }) {
    // console.log(playerData)
    return (
        <div className='player-list' data-testid="playersList">
            {player.data.map(player => (
                <PlayerCardList key={player.id} player={player} />
            ))}
        </div>
    )
}

export default PlayerCardList;
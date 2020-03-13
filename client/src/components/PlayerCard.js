import React from 'react';

function PlayerCard({ player }) {
    console.log(player)
    return (
        <div className='player-card'>
            {/* <h3>Name:{player.name}</h3>
            <p>Country:{player.country}</p>
            <p>Google Searches: {player.searches}</p> */}
        </div>
    )
}

export default PlayerCard;
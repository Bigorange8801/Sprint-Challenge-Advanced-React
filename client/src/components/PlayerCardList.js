import React, { useState, useEffect } from 'react';
import axios from 'axios';


const PlayerCardList = props => {
  
  const [players, setPlayers] = useState([]);
    useEffect(() => {
      const getPlayers = () => {
        axios
          .get('http://localhost:5000/api/players')
          .then(response => {

            setPlayers(response.data);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      };

      getPlayers();
    }, []);

    return (
      <div className="movie-list">
        {players.map(player => (
          <PlayerDetails key={player.name} player={player} />
        ))}
      </div>
    );
  }

  function PlayerDetails({player}) {

    return (

      <div className="player-card">
    <h1> {player.name} </h1>
    <h3> Searches: {player.searches} </h3>
    <h3>{player.country}</h3>
      </div>

    );
};

export default PlayerCardList;
import React from "react";
import PlayerCard from "./PlayerCard";

export default class PlayerList extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ players: data });
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }

  render() {
    return (
      <div className="player-list">
        {this.state.players.map(player => {
          return <PlayerCard key={player.id} player={player} />;
        })}
      </div>
    );
  }
}
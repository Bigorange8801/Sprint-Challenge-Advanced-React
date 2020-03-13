import React from "react";
import "./App.css";
import axios from "axios";
import PlayerCardList from "./components/PlayerCardList";
// import NavBar from "./components/NavBar";
// import PlayerCard from "./components/PlayerCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerData: {},
      loaded: false
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log("first", res.data);
        this.setState({
          playerData: res.data,
          loaded: true
        });
      })
      .catch(err => console.log("axios error", err));
  }

  render() {
    return (
      <div className="App">
        {/* <NavBar /> */}

        {this.state.loaded ? (
          <PlayerCardList playerData={this.state.playerData} />
        ) : null}
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerCardList from './components/PlayerCardList';
import NavBar from './components/NavBar';
import PlayerCard from './components/PlayerCard';

class App extends React.Component {
  state = {
    playerData: []
  }

  componentDidMount() {
    axios 
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res);
        this.setState({
          playerData: res.data
        })
      })
      .catch(err => console.log('axios error', err))
  }
  render(){
    return (
      <div className='App'>
        <NavBar />
        <PlayerCard/>
        <PlayerCardList playerData={this.state.playerData}/>
      </div>
    )
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayerList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

class App extends Component {
 constructor() {
   super();

   this.state = {
     players: [
       {
         name: 'Kunegunda',
         score: 5,
       },
       {
         name: 'Antoś',
         score: 0,
       }
     ]
   }
 }

onScoreUpdate = (playerIndex, scoreChange) => {
  this.setState({
    players: this.state.players.map((player, index) => {
      if (index === playerIndex) {
        return { ...player, score: player.score + scoreChange };
      }
      return player;
    })
  })
}

onPlayerAdd = (playerName) => {
  const newPlayer = {
    name: playerName,
    score: 0,
  }
  this.setState({
    players: [...this.state.players, newPlayer]
  })
}

onPlayerRemove = (i) => {
	let newPlayers = this.state.players.filter(player => player.name !== this.state.players[i].name);
	this.setState({
		players: newPlayers
	})
}

 render() {
   return (
     <div className="App">
       <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate} onPlayerRemove={this.onPlayerRemove} />
       <AddPlayer onPlayerAdd={this.onPlayerAdd} />
     </div>
   );
 }
}

export default App;
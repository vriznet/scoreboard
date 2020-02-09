import React from 'react';
import ReactDOM from 'react-dom';

const players = [
  {
    name: 'Guil',
    id: 1,
  },
  {
    name: 'Treasure',
    id: 2,
  },
  {
    name: 'Ashley',
    id: 3,
  },
  {
    name: 'James',
    id: 4,
  },
];

const Header = props => (
  <header>
    <h1>{props.title}</h1>
    <span className="stats">Players: {props.totalPlayers}</span>
  </header>
);

class Counter extends React.Component {
  state = {
    score: 0,
  };

  incrementScore() {
    this.setState({
      score: this.state.score + 1,
    });
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
        >
          +
        </button>
      </div>
    );
  }
}

const Player = props => (
  <div className="player">
    <span className="player-name">{props.name}</span>

    <Counter />
  </div>
);

const App = props => (
  <div className="scoreboard">
    <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />

    {/* Players list */}
    {props.initialPlayers.map(player => (
      <Player name={player.name} key={player.id.toString()} />
    ))}
  </div>
);

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById('root'),
);

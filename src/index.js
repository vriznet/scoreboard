import React from 'react';
import ReactDOM from 'react-dom';

const players = [
  {
    name: 'Guil',
    score: 50,
    id: 1,
  },
  {
    name: 'Treasure',
    score: 85,
    id: 2,
  },
  {
    name: 'Ashley',
    score: 95,
    id: 3,
  },
  {
    name: 'James',
    score: 80,
    id: 4,
  },
];

const Header = props => (
  <header>
    <h1>{props.title}</h1>
    <span className="stats">Players: {props.totalPlayers}</span>
  </header>
);

const Counter = props => (
  <div className="counter">
    <button className="counter-action decrement"> - </button>
    <span className="counter-score">{props.score}</span>
    <button className="counter-action increment"> + </button>
  </div>
);

const Player = props => (
  <div className="player">
    <span className="player-name">{props.name}</span>

    <Counter score={props.score} />
  </div>
);

const App = props => (
  <div className="scoreboard">
    <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />

    {/* Players list */}
    {props.initialPlayers.map(player => (
      <Player
        name={player.name}
        score={player.score}
        key={player.id.toString()}
      />
    ))}
  </div>
);

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById('root'),
);

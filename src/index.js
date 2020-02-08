import React from 'react';
import ReactDOM from 'react-dom';

const Header = props => (
  <header>
    <h1>{props.title}</h1>
    <span className="stats">Players: {props.totalPlayers}</span>
  </header>
);

const Counter = () => (
  <div className="counter">
    <button className="counter-action decrement"> - </button>
    <span className="counter-score">35</span>
    <button className="counter-action increment"> + </button>
  </div>
);

const Player = () => (
  <div className="player">
    <span className="player-name">Guil</span>

    <Counter />
  </div>
);

const App = () => (
  <div className="scoreboard">
    <Header title="Scoreboard" totalPlayers={1} />

    {/* Players list */}
    <Player />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

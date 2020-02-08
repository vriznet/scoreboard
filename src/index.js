import React from 'react';
import ReactDOM from 'react-dom';

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

const App = () => (
  <div className="scoreboard">
    <Header title="Scoreboard" totalPlayers={1} />

    {/* Players list */}
    <Player name="Guil" score={50} />
    <Player name="Treasure" score={90} />
    <Player name="Ashley" score={85} />
    <Player name="James" score={80} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = props => {
  return (
    <Consumer>
      {context => {
        return (
          <React.Fragment>
            {context.map((player, index) => (
              <Player
                {...player}
                key={player.id.toString()}
                index={index}
                changeScore={props.changeScore}
                removePlayer={props.removePlayer}
              />
            ))}
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default PlayerList;

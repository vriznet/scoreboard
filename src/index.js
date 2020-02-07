import React from 'react';
import ReactDOM from 'react-dom';

const desc =
  'I just learned how to create a React node and render it into the DOM.';
const myTitleId = 'main-title';
const name = 'Guil';

const header = (
  <header>
    {/* this is a comment */}
    <h1 id={myTitleId}>{name}'s First React Element!</h1>
    <p className="main-desc">{desc}</p>
  </header>
);

ReactDOM.render(header, document.getElementById('root'));

/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <h1>Hello</h1>
);

ReactDOM.render(<App className="app" />, document.getElementById('root'));
registerServiceWorker();

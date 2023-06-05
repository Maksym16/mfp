import React from "react";
import ReactDOM from "react-dom";
import App from './App';

// we dont need mount function because we  want to render container immideately
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';


// hi party coders!! all code from all the *.js files arrives here is injected into index.html from here (root-roolez (-:))
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


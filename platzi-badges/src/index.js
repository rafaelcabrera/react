import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const element =<h1>Rafa</h1>; = const element = React.createElement('h1',{},'Rafa children') el segundo parametro son los props, o properties
// const element = React.createElement('a',{href: 'google.com'},'Rafa')


const jsx = (
  <div>
    <h1>Hola, soy Rafa,</h1>
    <p>Soy desarrollador frontend jr</p>
  </div>
);



const container = document.getElementById('app')

ReactDOM.render(jsx , container)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

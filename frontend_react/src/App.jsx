import { hot } from 'react-hot-loader';
import React from 'react';
import OptionsBar from './OptionsBar';
import ModularGrid from './ModularGrid';
import './App.css';

const message = 'Modular Grid In Development';
const App = () => (
  <div className="App">
    <OptionsBar />
    <h1>{message}</h1>
    <ModularGrid />
  </div>
);

export default hot(module)(App);

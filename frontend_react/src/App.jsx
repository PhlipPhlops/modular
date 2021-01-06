import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import TweetList from './components/TweetList';
import './App.css';

const message = 'Welcome to frontend-react';
const App = () => (
  <div className="App">
    <h1>{message}</h1>
    <TweetList />
  </div>
);

export default hot(module)(App);

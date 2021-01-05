import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import './App.css';

class TweetPanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tweets: '',
    }

    this.fetchBookmarks = this.fetchBookmarks.bind(this);
  }

  fetchBookmarks() {
    // Queries tweets from backends
    fetch('http://localhost:9000/tweets/bookmarks')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          tweets: JSON.stringify(data),
        });
      });
  }

  render() {
    const { tweets } = this.state;

    return (
      <div>
        <button
          type="button"
          onClick={this.fetchBookmarks}
        >
          Fetch Bookmarks
        </button>
        <p>{tweets}</p>
      </div>
    );
  }
}

const message = 'Welcome to frontend-react';
const App = () => (
  <div className="App">
    <h1>{message}</h1>
    <TweetPanel />
  </div>
);

export default hot(module)(App);

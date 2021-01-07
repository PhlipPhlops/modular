import React from 'react';
import './index.css';

// Import the modules to be used here
import TweetList from '../TweetList';

const EmptyDiv = () => (
  <div className="emptyDiv"/>
);

export default class ModularGrid extends React.Component {
  state = {
    counter: 0,
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="parent-margin">
        <EmptyDiv />
        <div className="modular-grid">
          <div className="grid-cell">
            <TweetList />
          </div>
          <div className="grid-cell" />
          <div className="grid-cell" />
          <div className="grid-cell" />
          <div className="grid-cell" />
          <div className="grid-cell">
            <TweetList />
          </div>
        </div>
        <EmptyDiv />
      </div>
    );
  }
}

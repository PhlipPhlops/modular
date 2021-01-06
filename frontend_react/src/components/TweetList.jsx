import React, { Component } from 'react';
import ReactList from 'react-list';
import FakeTweet from 'fake-tweet';
import "fake-tweet/build/index.css";

export default class TweetList extends React.Component {
  state = {
    tweets: []
  };

  constructor(props) {
    super(props);

    this.fetchBookmarks = this.fetchBookmarks.bind(this);
  }
  
  componentWillMount() {
    this.fetchBookmarks();
  }
  
  fetchBookmarks() {
    // Queries tweets from backends
    fetch('http://localhost:9000/tweets/bookmarks')
      .then((response) => response.json())
      .then((data) => {
      this.setState({
        tweets: data,
      });
    });
  }
   
  renderItem(index, key) {
    let tweet = this.state.tweets[index];
    let config = {
      user: {
        nickname: "twitter",
        name: "Twitter",
        avatar: "avatar.png",
        verified: true,
        locked: false
      },
      display: "default",
      text: tweet.text,
      image: "",
      date: "3:32 PM · Feb 14, 1997",
      app: "Twitter for iPhone",
      retweets: 32000,
      quotedTweets: 100,
      likes: 12700
    };

    return <div key={key}>
      <FakeTweet config={config} />
    </div>;
  }
   
  render() {
    return (
      <div>
        <div style={{ overflow: 'auto' }}>
          <ReactList
            itemRenderer={this.renderItem.bind(this)}
            length={this.state.tweets.length}
            type='uniform'
          />
        </div>
      </div>
    );
  }
}
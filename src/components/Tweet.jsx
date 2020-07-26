import React, { Component } from "react";

class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
      const {tweet} = this.props;
      console.log(tweet)
    return (
      <div>
        <li className="tweet-li">{tweet.userName}: {tweet.text}</li>
      </div>
    );
  }
}

export default Tweet;

import React, { Component } from "react";

class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
      const {tweet} = this.props;
    return (
      <div>
        <li>{tweet.text}</li>
      </div>
    );
  }
}

export default Tweet;

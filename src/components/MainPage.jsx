import React, { Component } from "react";
import CreateTweet from "./CreateTweet";
import TweetList from "./TweetList";
import { setTweets } from "../lib/api"

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }

  handleNewTweet(newTweet) {
    const tweets = this.state.tweets;
    tweets.unshift(newTweet);
    setTweets(this.state).then((response)=>{
        console.log(response)
    })
    this.setState({
      tweets: tweets,
    });
    localStorage.setItem("tweet", JSON.stringify(tweets));
  }

  componentDidMount() {
    const getTweets = JSON.parse(localStorage.getItem("tweet"));
    if (localStorage.getItem("tweet")) {
      this.setState({
        tweets: getTweets,
      });
    }
  }

  render() {
    console.log(this.state.tweets);
    return (
      <div>
        <CreateTweet onNewTweet={(newTweet) => this.handleNewTweet(newTweet)} />
        <TweetList tweets={this.state.tweets} />
      </div>
    );
  }
}

export default MainPage;

import React, { Component } from "react";
import CreateTweet from "./CreateTweet";
import TweetList from "./TweetList";
import { getTweets, setTweets } from "../lib/api"

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }

  handleNewTweet(newTweet) {
    const tweets = this.state.tweets;
    // tweets.unshift(newTweet);
    // console.log(newTweet)
    setTweets(newTweet).then((response)=>{
        const { data } = response;
        const newTweets = [data, ...tweets]
        this.setState({ tweets : newTweets })
    })
    // this.setState({
    //   tweets,
    // });
    // localStorage.setItem("tweet", JSON.stringify(tweets));
  }

  componentDidMount() {
    getTweets().then(response => {
      const { data } = response;
      const { tweets } = data;
      this.setState( { tweets })
    })
    // const getTweets = JSON.parse(localStorage.getItem("tweet"));
    // if (localStorage.getItem("tweet")) {
    //   this.setState({
    //     tweets: getTweets,
    //   });
  // }
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

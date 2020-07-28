import React, { Component } from "react";
import CreateTweet from "./CreateTweet";
import TweetList from "./TweetList";
import { getTweets, setTweets } from "../lib/api";
import CircularProgress from "@material-ui/core/CircularProgress";
import TweetsContext from "../TweetsContext.js";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      loading: false,
      errorMessage: "",
    };
  }

  handleNewTweet(newTweet) {
    const tweets = this.state.tweets;
    setTweets(newTweet)
      .then((response) => {
        const { data } = response;
        const newTweets = [data, ...tweets];
        this.setState({ tweets: newTweets });
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message });
      });
  }

  componentDidMount() {
    this.fetchTweets().then();
  }

  async fetchTweets() {
    this.setState({ loading: true });
    const response = await getTweets();
    const { data } = response;
    const { tweets } = data;
    this.setState({ tweets, loading: false });
  }

  render() {
    return (
      <TweetsContext>
        {(context) => 
          <div>
            <div>
              <CreateTweet
                onNewTweet={(newTweet) => this.handleNewTweet(newTweet)}
                loading={this.state.loading}
                userName={context.userName}
              />
              <div
                style={{
                  display: this.state.loading ? "inline-block" : "none",
                }}
                className="loader"
              >
                <CircularProgress />
              </div>
              {this.state.errorMessage && (
                <h3 className="error">{this.state.errorMessage}</h3>
              )}
              <TweetList tweets={this.state.tweets} />
            </div>
            <div></div>
          </div>
        }
      </TweetsContext>
    );
  }
}

export default MainPage;

import React, { Component } from "react";
import CreateTweet from "./CreateTweet";
import TweetList from "./TweetList";
import CircularProgress from "@material-ui/core/CircularProgress";
import TweetsContext from "../TweetsContext.js";

const firebase = require("firebase");
require("firebase/firestore");

var config = {
  apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
  authDomain: "react-micro-blogging-62443.firebaseapp.com",
  databaseURL:
    "https://react-micro-blogging-62443.firebaseio.com/users/JwReLLgK2GWuyg6Z7Gpy",
  projectId: "react-micro-blogging-62443",
  messagingSenderId: "1031062562986",
};
firebase.initializeApp(config);
var db = firebase.firestore();

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
    const tweets = this.state.tweets
    const newTweets = [newTweet, ...tweets]
    this.setState({ tweets: newTweets });
    db.collection("tweets")
      .add({
        newTweet,
      })
      .then((docRef) => {
        console.log("Document was written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  componentWillMount() {
    const tweets = this.state.tweets
    const tweetsArray = []
    db.collection("tweets")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { newTweet } = doc.data();
          tweetsArray.push(newTweet);
        })
        this.setState((state) => {
          return { tweets: tweetsArray };
      });
  })
  .catch((error) => {
    console.log("Error: ", error)
  })
}

  render() {
    return (
      <TweetsContext.Consumer>
        {(context) => (
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
        )}
      </TweetsContext.Consumer>
    );
  }
}

export default MainPage;

import React, { Component } from "react";
import CreateTweet from "./CreateTweet";
import TweetList from "./TweetList";
import CircularProgress from "@material-ui/core/CircularProgress";
import TweetsContext from "../TweetsContext.js";

const firebase = require("firebase");
require("firebase/firestore");

var config = {
  authDomain: "react-micro-blogging-62443.firebaseapp.com",
  databaseURL:
    "https://react-micro-blogging-62443.firebaseio.com/users/JwReLLgK2GWuyg6Z7Gpy",
  projectId: "react-micro-blogging-62443",
  messagingSenderId: "1031062562986",
};
firebase.initializeApp(config);
var firestore = firebase.firestore();

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      loading: false,
      errorMessage: "",
      tweetId: "",
    };
  }

  handleNewTweet(newTweet) {
    const tweetId = this.state.tweetId
    const newTweetId = newTweet.id
    this.setState({ tweetId : newTweetId });
    const docRef = firestore.doc(`tweets/${newTweetId}`);
    const tweets = this.state.tweets;
    docRef
      .set({
        tweets: newTweet,
      })
      .then(() => {
        console.log("firestore success");
      })
      .catch((err) => {
        console.log("Got error: ", err);
      });
  }


  componentDidMount(){
    const tweetId = this.state.tweetId
    console.log(tweetId);
    // const docRef = firestore.doc(`tweets/${tweetId}`);
    // docRef.get().then((doc) => {
    //   if (doc && doc.exists) {
    //     const {tweets} = doc.data();
    //     // this.updateState(tweets)
    //   }
    // }).catch((err) => {
    //   console.log("Get error: ", err)
    // })
  }

  // updateState(newTweets){
  //   const tweets = this.state.tweets
  //   console.log(newTweets)
  //   this.setState({ tweets: newTweets })
  // }

  render() {
    return (
      <TweetsContext>
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
      </TweetsContext>
    );
  }
}

export default MainPage;

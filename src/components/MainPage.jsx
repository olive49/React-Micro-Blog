import React, { useState, useContext, useEffect } from "react";
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


const MainPage = (props) => {

const [tweets, setTweets] = useState([])
const [loading, setLoading] = useState(false)
const [errorMessage, setErrorMessage] = useState("")

const myContext = useContext(TweetsContext)

const handleNewTweet = (newTweet) => {
  const newTweets = [newTweet, ...tweets]
  setTweets(newTweets)
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

  useEffect(() => {
    const tweetsArray = []
    db.collection("tweets")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { newTweet } = doc.data();
          tweetsArray.push(newTweet);
        })
        setTweets(tweetsArray)
      })
      .catch((error) => {
        console.log("Error: ", error)
  })
  })


    return (
            <div>
              <CreateTweet
                onNewTweet={(newTweet) => handleNewTweet(newTweet)}
                loading={loading}
                userName={myContext.userName}
              />
              <div
                style={{
                  display: loading ? "inline-block" : "none",
                }}
                className="loader"
              >
                <CircularProgress />
              </div>
              {errorMessage && (
                <h3 className="error">{errorMessage}</h3>
              )}
              <TweetList tweets={tweets} />
            </div>
    )
              }
              

export default MainPage;

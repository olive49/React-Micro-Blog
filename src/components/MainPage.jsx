import React, { useState, useContext, useEffect } from "react";
import CreateTweet from "./CreateTweet";
import TweetList from "./TweetList";
import CircularProgress from "@material-ui/core/CircularProgress";
import TweetsContext from "../TweetsContext.js";

const MainPage = (props) => {
  const [tweets, setTweets] = useState([]);
  const [loading] = useState(false);
  const [errorMessage] = useState("");

  const myContext = useContext(TweetsContext);

  const handleNewTweet = (newTweet) => {
    const newTweets = [newTweet, ...tweets];
    setTweets(newTweets);
    props.db.collection("tweets")
      .add({
        newTweet,
      })
      .then((docRef) => {
        console.log("Document was written with Tweet ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  useEffect(() => {
    const tweetsArray = [];
    props.db.collection("tweets")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { newTweet } = doc.data();
          tweetsArray.push(newTweet);
        });
        setTweets(tweetsArray);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return (
    <div>
      <CreateTweet
        onNewTweet={(newTweet) => handleNewTweet(newTweet)}
        loading={loading}
        userName={myContext.currentUser.displayName}
      />
      <div
        style={{
          display: loading ? "inline-block" : "none",
        }}
        className="loader"
      >
        <CircularProgress />
      </div>
      {errorMessage && <h3 className="error">{errorMessage}</h3>}
      <TweetList tweets={tweets} />
    </div>
  );
};

export default MainPage;

import React from "react";
import Tweet from "./Tweet.jsx";
import CircularProgress from "@material-ui/core/CircularProgress";

const TweetList = (props) => {
  const { tweets } = props;
  console.log(tweets);

  return (
    <div>
      <ul>
        {tweets.map((tweet, index) => (
          <Tweet key={`${tweets.content}_${index}`} tweet={tweet} />
        ))}
      </ul>
    </div>
  );
};

export default TweetList;

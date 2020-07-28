import React from "react";
import Tweet from "./Tweet.jsx";
import TweetsContext from "../TweetsContext.js";

const TweetList = (props) => {
  const { tweets } = props;
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

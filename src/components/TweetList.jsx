import React from "react";
import Tweet from "./Tweet.jsx";
import TweetsContext from "../TweetsContext.js";

const TweetList = (props) => {
  const { tweets } = props;
  return (
    <TweetsContext>
      {(context) => (
        <div>
          <ul>
            {tweets.map((tweet, index) => (
              <Tweet key={`${tweets.content}_${index}`} tweet={tweet} />
            ))}
          </ul>
        </div>
      )}
    </TweetsContext>
  );
};

export default TweetList;

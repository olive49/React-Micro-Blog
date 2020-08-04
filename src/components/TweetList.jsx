import React from "react";
import Tweet from "./Tweet.jsx";

const TweetList = (props) => {
  const { tweets } = props;
  return (
    <div>
      <ul>
        {tweets.map((tweet) => (
          <Tweet key={`${tweet.id}`} tweet={tweet} />
        ))}
      </ul>
    </div>
  );
};

export default TweetList;

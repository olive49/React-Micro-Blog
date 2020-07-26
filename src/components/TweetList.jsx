import React from "react";
import Tweet from "./Tweet.jsx"

const TweetList = (props) => {
  const { tweets } = props;

  return (<div>
      <ul>
          {/* {this.props.tweets.map((tweet, index) => (
              <Tweet key={`${tweets.text}_${index}`}
                tweet={tweet}
              />
          ) 
          )} */}
      </ul>
  </div>)
};

export default TweetList;

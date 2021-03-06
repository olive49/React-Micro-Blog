import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TweetsContext from "../TweetsContext.js";

const Tweet = (props) => {
  const { tweet } = props;
  const myContext = useContext(TweetsContext);

  return (
    <div>
      <li className="tweet-li">
        <Card
          style={{
            backgroundColor: "#343A40",
            color: "white",
            minWidth: "23rem",
            marginLeft: "-3rem",
            marginTop: "2rem",
          }}
        >
          <div className="tweet-card-header">
            <span>{tweet.userName}</span>
            <span>{tweet.date}</span>
            <img
              src={tweet.photo}
              style={{ width: "10%", borderRadius: "50%" }}
            ></img>
          </div>
          <CardContent className="tweet-content">{tweet.content}</CardContent>
        </Card>
      </li>
    </div>
  );
};

export default Tweet;

import React, { Component, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Tweet = (props) => {
  const { tweet } = props;
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
              </div>
              <CardContent>{tweet.content}</CardContent>
            </Card>
          </li>
        </div>
  );
};

export default Tweet;

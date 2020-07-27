import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";

class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { tweet } = this.props;
    let dateObj = tweet.id
    return (
      <div>
        <li className="tweet-li">
          <Card style={{ 
          backgroundColor: "#343A40", 
          color: "white" , minWidth: "23rem", marginLeft: "-3rem", marginTop: "2rem"}}>
            {/* <CardHeader> */}
              <span className="tweet-card-header">{tweet.userName} {tweet.id} </span>
            {/* </CardHeader> */}
            <CardContent>{tweet.text}</CardContent>
          </Card>
        </li>
      </div>
    );
  }
}

export default Tweet;

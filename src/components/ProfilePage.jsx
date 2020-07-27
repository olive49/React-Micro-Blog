import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
  render() {
      console.log(this.props)
    return (
      <div>
          <h2>Profile</h2>
      </div>
    );
  }
}

export default Profile;

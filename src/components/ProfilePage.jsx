import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TweetsContext from "../TweetsContext.js";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemChangeText: this.props.userName,
      users: this.props.Users,
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onNewUserName(this.state.itemChangeText);
  }

  onChange(e) {
    this.setState({ itemChangeText: e.target.value });
  }

  render() {
    console.log(this.props.userName);
    return (
      <TweetsContext.Consumer>
      {(context) => 
      <div className="profile">
        <h2>Login</h2>
        <div className="user-input">
          <span>UserName</span>
          <form className="user-input" onSubmit={(e) => this.onSubmit(e)}>
            <textarea
              className="profile-input"
              onChange={(e) => this.onChange(e)}
              value={this.state.itemChangeText}
            />
            <span className="password">Password</span>
            <textarea
              className="profile-input"
            />
            <button type="submit">Sign In</button>
          </form>
          <span>
            Don't have an account?
            <button>
              <Link to="/signup">
              Sign Up
              </Link>
            </button>
          </span>
        </div>
      </div>
  }
  </TweetsContext.Consumer>
    );
  }
}

export default Profile;

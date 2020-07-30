import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TweetsContext from "../TweetsContext.js";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemChangeText: this.props.userName,
    };
  }

  onSubmit(e, users) {
    e.preventDefault();
    console.log(users)
    this.props.onLogin(this.state.itemChangeText);
  }

  onChange(e) {
    this.setState({ itemChangeText: e.target.value });
  }

  render() {
    return (
      <TweetsContext.Consumer>
      {(context) => 
      <div className="profile">
        {console.log(context.usersArray)}
        <h2>Login</h2>
        <div className="user-input">
          <span>UserName</span>
          <form className="user-input" onSubmit={(e) => this.onSubmit(e, context.usersArray)}>
            <textarea
              className="profile-input"
              onChange={(e) => this.onChange(e)}
              value={this.state.itemChangeText}
              required
            />
            <span className="password">Password</span>
            <textarea
              className="profile-input"
              required
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

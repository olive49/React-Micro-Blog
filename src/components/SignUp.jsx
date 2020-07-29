import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TweetsContext from "../TweetsContext.js";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <TweetsContext.Consumer>
        {(context) => (
          <div className="profile">
            <h2>Sign Up</h2>
            <div className="user-input">
              <span>UserName</span>
              <form className="user-input">
                <textarea className="profile-input" />
                <span className="password">Password</span>
                <textarea className="profile-input" />
                <button type="submit">
                  <Link
                    to="/home"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Sign Up
                  </Link>
                </button>
              </form>
            </div>
          </div>
        )}
      </TweetsContext.Consumer>
    );
  }
}

export default SignUp;

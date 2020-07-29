import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <div className="profile">
        <h2>Sign Up</h2>
        <div className="user-input">
          <span>UserName</span>
          <form className="user-input">
            <textarea className="profile-input" />
            <span className="password">Password</span>
            <textarea className="profile-input" />
            <button type="submit"><Link to="/home" style={{color: "white", textDecoration: "none",}}>
              Sign Up
              </Link></button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;

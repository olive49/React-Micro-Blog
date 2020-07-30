import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TweetsContext from "../TweetsContext.js";

class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  onSubmit(e, users){
    e.preventDefault();
    console.log(users)
    this.props.onNewUserName(this.state.itemChangeText);
  }

  onChange(e) {
    this.setState({ itemChangeText: e.target.value });
  }

  render() {
    return (
      <TweetsContext.Consumer>
        {(context) => (
          <div className="profile">
            <h2>Sign Up</h2>
            <div className="user-input">
              <span>UserName</span>
              <form className="user-input" onSubmit={(e) => this.onSubmit(e, context.users)}>
                <textarea
                  className="profile-input"
                  onChange={(e) => this.onChange(e)}
                />
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

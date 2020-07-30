import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TweetsContext from "../TweetsContext.js";

class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      itemChangeText: ""
    }
  }

  onSubmit(e, context){
    e.preventDefault();
    const userName = this.state.itemChangeText
    context.usersArray.forEach(([value]) => {
      if (value == userName){
        alert(`${userName} already exists. Please log in`)
      } else {
        this.props.onNewUserName(this.state.itemChangeText);
      }
    }
    )}
    

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
              <form className="user-input" onSubmit={(e) => this.onSubmit(e, context)}>
                <textarea
                  className="profile-input"
                  onChange={(e) => this.onChange(e)}
                  required
                />
                <span className="password">Password</span>
                <textarea 
                className="profile-input"
                required
                 />
                <button type="submit">
                    Sign Up
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

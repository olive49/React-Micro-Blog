import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import TweetsContext from "../TweetsContext.js";

const Profile = (props) => {

  const [itemChangeText, setItemChangeText] = useState("");
  const [passWordText, setPassWordText] = useState("")

  const myContext = useContext(TweetsContext)


  const onSubmit = (e) => {
    e.preventDefault();
    props.onLogin(itemChangeText, passWordText);
  }

  const onChangeUserName = (e) => {
    setItemChangeText(e.target.value)
  }

  const onChangePassWord = (e) => {
    setPassWordText(e.target.value)
  }

  const onSignOut = (e) => {
    e.preventDefault()
    setItemChangeText("")
    setPassWordText("")
    props.onLogOut()


  }

    return (
      <div className="profile">
        <h2>Login</h2>
        <div className="user-input">
          <span>UserName</span>
          <form className="user-input" onSubmit={(e) => onSubmit(e)}>
            <textarea
              className="profile-input"
              onChange={(e) => onChangeUserName(e)}
              value={itemChangeText}
              required
            />
            <span className="password">Password</span>
            <textarea
              className="profile-input"
              required
              onChange={(e) => onChangePassWord(e)}
              value={passWordText}
            />
            <div className="profile-buttons">
            <button type="submit">Sign In</button>
            <button type="submit" style={{display: props.signIn ? "inline-block" : "none"}}onClick={(e) => onSignOut(e)}>Sign Out</button>
            </div>
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
    );
  }


export default Profile;

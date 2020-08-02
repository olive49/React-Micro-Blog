import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import TweetsContext from "../TweetsContext.js";

const Profile = (props) => {

  const [itemChangeText, setItemChangeText] = useState(props.userName);
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

    return (
      <div className="profile">
        {console.log(myContext.usersArray)}
        <h2>Login</h2>
        <div className="user-input">
          <span>UserName</span>
          <form className="user-input" onSubmit={(e) => onSubmit(e, myContext.usersArray)}>
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
    );
  }


export default Profile;

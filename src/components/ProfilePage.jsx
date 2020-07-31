import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import TweetsContext from "../TweetsContext.js";

const Profile = (props) => {

  const [itemChangeText, setItemChangeText] = useState(props.userName);

  const myContext = useContext(TweetsContext)


  const onSubmit = (e, users) => {
    e.preventDefault();
    console.log(users)
    props.onLogin(itemChangeText);
  }

  const onChange = (e) => {
    setItemChangeText(e.target.value)
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
              onChange={(e) => onChange(e)}
              value={itemChangeText}
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
    );
  }


export default Profile;

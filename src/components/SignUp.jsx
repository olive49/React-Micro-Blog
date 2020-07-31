import React, { useState, useContext } from "react";
import TweetsContext from "../TweetsContext.js";

const SignUp = (props) => {
  
  const [itemChangeText, setItemChangeText] = useState("");
  
  const myContext = useContext(TweetsContext)

  const onSubmit = (e, myContext) => {
    e.preventDefault();
    console.log(myContext.usersArray)
    if (myContext.usersArray.length == 0) {
      props.onNewUserName(itemChangeText)
    } else {
        if (myContext.usersArray.includes(itemChangeText.toLowerCase())) {
          alert(`${itemChangeText} already exists. Please log in`)
          return;
        } else {
          props.onNewUserName(itemChangeText);
        }
      }
    }

  const onChange = (e) => {
    setItemChangeText(e.target.value)
  }

    return (
          <div className="profile">
            <h2>Sign Up</h2>
            <div className="user-input">
              <span>UserName</span>
              <form
                className="user-input"
                onSubmit={(e) => onSubmit(e, myContext)}
              >
                <textarea
                  className="profile-input"
                  onChange={(e) => onChange(e)}
                  required
                />
                <span className="password">Password</span>
                <textarea className="profile-input" required />
                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>
    );
  }

export default SignUp;

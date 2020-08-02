import React, { useState, useContext } from "react";
import TweetsContext from "../TweetsContext.js";

const SignUp = (props) => {
  const [itemChangeText, setItemChangeText] = useState("");
  const [passWordText, setPassWordText] = useState("");


  const myContext = useContext(TweetsContext);

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(myContext);
    // if (myContext.usersArray.length == 0) {
      props.onNewUserName(itemChangeText, passWordText);
    // } else {
    //   props.onNewUserName(itemChangeText, passWordText);
    // }
  };

  const onChangeUserName = (e) => {
    setItemChangeText(e.target.value);
  };

  const onChangePassWord = (e) => {
    setPassWordText(e.target.value);
  };
  

  return (
    <div className="profile">
      <h2>Sign Up</h2>
      <div className="user-input">
        <span>UserName</span>
        <form className="user-input" onSubmit={(e) => onSubmit(e, myContext)}>
          <textarea
            className="profile-input"
            onChange={(e) => onChangeUserName(e)}
            required
          />
          <span className="password">Password</span>
          <textarea 
          className="profile-input"
          onChange={(e) => onChangePassWord(e)} 
          required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

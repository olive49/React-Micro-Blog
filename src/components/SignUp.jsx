import React, { useState, useContext, useEffect } from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import TweetsContext from "../TweetsContext.js";
import firebase from "firebase"

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/home',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID,]
};

const SignUp = (props) => {
  const [itemChangeText, setItemChangeText] = useState("");
  const [passWordText, setPassWordText] = useState("");

  const myContext = useContext(TweetsContext);

  const onSubmit = (e) => {
    e.preventDefault();
    props.onNewUserName(itemChangeText, passWordText);
  };

  const onChangeUserName = (e) => {
    setItemChangeText(e.target.value);
  };

  const onChangePassWord = (e) => {
    setPassWordText(e.target.value);
  }; 

  return (
    <div className="profile">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} className="google"/>
      <div className="user-input">
        <span>Email</span>
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

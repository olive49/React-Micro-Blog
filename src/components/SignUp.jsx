import React, { useState, useContext, useEffect } from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import TweetsContext from "../TweetsContext.js";
import firebase from "firebase"


const SignUp = (props) => {
  const [userEmail, setUserEmail] = useState(null);
  const [userPassWord, setUserPassWord] = useState(null);
  const [userUserName, setUserUserName] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);

  const myContext = useContext(TweetsContext);

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID,],
    callbacks: {
      signInSuccessWithAuthResult: (result) => {
        console.log(result)
        const { profile } = result.additionalUserInfo
        myContext.setCurrentUser({
          displayName: profile.name,
          id: profile.id,
          imageUrl: profile.picture
        }) 
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.onNewUserName(userEmail, userPassWord)
    props.onPersistNewUser(userUserName, userPhoto, userEmail)
  };

  const onChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const onChangePassWord = (e) => {
    setUserPassWord(e.target.value);
  }; 

  const onChangeUserName = (e) => {
    setUserUserName(e.target.value);
  }; 


  const onChangeUserPhoto = (e) => {
    setUserPhoto(e.target.value);
  }; 

  return (
    <div className="profile">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      <div className="user-input">
        <span>Email</span>
        <form className="user-input" onSubmit={(e) => onSubmit(e, myContext)}>
          <textarea
            className="profile-input"
            onChange={(e) => onChangeEmail(e)}
            required
          />
          <span>Password</span>
          <textarea 
          className="profile-input"
          onChange={(e) => onChangePassWord(e)} 
          required />
          <span>User Name</span>
          <textarea
            className="profile-input"
            onChange={(e) => onChangeUserName(e)}
            required
          />
          <span>Photo URL</span>
          <textarea
            className="profile-input"
            onChange={(e) => onChangeUserPhoto(e)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useState, useEffect } from "react";
import "./App.css";
import MainPage from "./components/MainPage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import NavBar from "./components/NavBar.jsx";
import UpdateProfile from "./components/UpdateProfile.jsx"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TweetsContext from "./TweetsContext";
import SignUp from "./components/SignUp.jsx";
import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"

const config = {
  apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
  authDomain: "react-micro-blogging-62443.firebaseapp.com",
  databaseURL:
    "https://react-micro-blogging-62443.firebaseio.com/users/JwReLLgK2GWuyg6Z7Gpy",
  projectId: "react-micro-blogging-62443",
  messagingSenderId: "1031062562986",
};
firebase.initializeApp(config);
const auth = firebase.auth();

const App = () => {
  const db = firebase.firestore();

  const [usersArray, setUsersArray] = useState([]);
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [signIn, setSignIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setCurrentUser(null)
      } else {
        setCurrentUser({ 
          id: user.id, 
          displayName: user.message + '', 
          imageUrl: user.photo + '',
        })
      }
    })
  }, [])



  const handleNewUserName = (newUserName, newPassWord) => {
    const promise = auth.createUserWithEmailAndPassword(
      newUserName,
      newPassWord
    ).then(alert(`Welcome to Tweeter, ${newUserName}!`))
    promise.catch((e) => {
      if (
        e.message === "The email address is already in use by another account."
      ) {
        alert("Email already exists. Please log in.");
      } else {
        console.error(e.message);
      }
    });
  };

    // const userArray = [];
    // db.collection("users")
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       const { newUserName } = doc.data();
    //       userArray.push(newUserName);
    //     });
    //     setUsersArray(userArray);
    //   })
    //   .catch((error) => {
    //     console.error("Error: ", error);
    //   });

  const handleLogin = (userName, passWord) => {
    const promise = auth.signInWithEmailAndPassword(userName, passWord);
    promise.then(setSignIn(true));
    promise.catch((e) => console.error(e.message));
  };

  const handleLogOut = () => {
    setSignIn(false);
    firebase.auth().signOut();
  };

  const handleUpdateInfo = (userDisplayName, photo) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: userDisplayName,
        photoURL: photo,
      })
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  return (
    <TweetsContext.Provider
      value={{ 
        // userName, 
        // usersArray, 
        currentUser, 
        setCurrentUser,
       }}
    >
      <div>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <div className="App">
                <Route path="/home" exact>
                  <MainPage userName={userName} db={db} />
                </Route>
                <Route path="/profile" exact>
                  <ProfilePage
                    userName={userName}
                    onLogin={(userName, passWord) =>
                      handleLogin(userName, passWord)
                    }
                    onLogOut={() => handleLogOut()}
                    signIn={signIn}
                  />
                </Route>
                <Route path="/signup" exact>
                  <SignUp
                    userName={userName}
                    onNewUserName={(newUserName, newPassWord) =>
                      handleNewUserName(newUserName, newPassWord)
                    }
                    onUpdateInfo={(userDisplayName, photo) =>
                      handleUpdateInfo(userDisplayName, photo)
                    }
                  />
                </Route>
                <Route path="/updateprofile" exact>
                  <UpdateProfile
                    userName={userName}
                  />
                </Route>
              </div>
            </Switch>
          </div>
        </Router>
      </div>
    </TweetsContext.Provider>
  );
};

export default App;

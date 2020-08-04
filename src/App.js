import React, { useState, useEffect } from "react";
import "./App.css";
import MainPage from "./components/MainPage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import NavBar from "./components/NavBar.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TweetsContext from "./TweetsContext";
import SignUp from "./components/SignUp.jsx";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

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

  const [userName] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (!user) {
      setCurrentUser(null);
    } else {
      console.log(user.email);
      db.collection("users")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const { id, displayName, imageUrl } = doc.data();
            if (id === user.email) {
              setCurrentUser({
                id,
                displayName,
                imageUrl,
              });
            }
          });
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    }
  }, [userEmail]);

  const handleNewUserName = (newUserName, newPassWord) => {
    const promise = auth
      .createUserWithEmailAndPassword(newUserName, newPassWord)
      .then(
        alert(`Welcome to Tweeter, ${newUserName}! Please log in to continue`)
      );
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

  const handlePersistUser = (userUserName, userPhoto, userEmail) => {
    db.collection("users")
      .add({
        displayName: userUserName,
        id: userEmail,
        imageUrl: userPhoto,
      })
      .then((docRef) => {
        console.log("Document was written with User ID ", docRef.id);
      })
      .catch((error) => {
        console.error(`Error added user: ${userUserName} `, error);
      });
  };

  const handleLogin = (userName, passWord) => {
    const promise = auth.signInWithEmailAndPassword(userName, passWord);
    promise.then(setUserEmail(userName));
    promise.then(setSignedIn(true));
    promise.catch((e) => console.error(e.message));
  };

  const handleLogOut = () => {
    setSignedIn(false);
    firebase.auth().signOut();
  };

  return (
    <TweetsContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        logout: () => setCurrentUser(null),
      }}
    >
      <div>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <div className="App">
                <Route
                  path="/home"
                  exact
                  render={() =>
                    signedIn ? (
                      <MainPage userName={userName} db={db} />
                    ) : (
                      <Redirect to="/profile" />
                    )
                  }
                ></Route>
                <Route path="/profile" exact>
                  <ProfilePage
                    userName={userName}
                    onLogin={(userName, passWord) =>
                      handleLogin(userName, passWord)
                    }
                    onLogOut={() => handleLogOut()}
                    signedIn={signedIn}
                  />
                </Route>
                <Route path="/signup" exact>
                  <SignUp
                    userName={userName}
                    onNewUserName={(
                      newUserName,
                      newPassWord,
                      userUserName,
                      userId,
                      userPhoto
                    ) =>
                      handleNewUserName(
                        newUserName,
                        newPassWord,
                        userUserName,
                        userId,
                        userPhoto
                      )
                    }
                    onPersistNewUser={(userUserName, userPhoto, userEmail) =>
                      handlePersistUser(userUserName, userPhoto, userEmail)
                    }
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

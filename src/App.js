import React, { useState, useEffect } from "react";
import "./App.css";
import MainPage from "./components/MainPage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TweetsContext from "./TweetsContext";
import SignUp from "./components/SignUp.jsx";

const firebase = require("firebase");
require("firebase/firestore");

var config = {
  apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
  authDomain: "react-micro-blogging-62443.firebaseapp.com",
  databaseURL:
    "https://react-micro-blogging-62443.firebaseio.com/users/JwReLLgK2GWuyg6Z7Gpy",
  projectId: "react-micro-blogging-62443",
  messagingSenderId: "1031062562986",
};
firebase.initializeApp(config);

const App = () => {
  const db = firebase.firestore();

  const [usersArray, setUsersArray] = useState([]);
  const [userName] = useState("Dwight");

  const handleNewUserName = (newUserName) => {
    console.log(usersArray);
    const newUser = [newUserName, ...usersArray];
    {
      usersArray.includes(newUserName)
        ? alert(`${newUserName} already exists. Please log in.`)
        : setUsersArray(newUser);
    }
    if (!usersArray.includes(newUserName)) {
      db.collection("users")
        .add({ newUserName })
        .then((docRef) => {
          console.log("Document was written with User ID ", docRef.id);
        })
        .catch((error) => {
          console.error(`Error added user: ${newUserName} `, error);
        });
    }
  };

  useEffect(() => {
    const userArray = [];
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { newUserName } = doc.data();
          userArray.push(newUserName);
        });
        setUsersArray(userArray);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  const handleLogin = (userName) => {
    if (usersArray.includes(userName.toLowerCase())) {
    } else {
      alert(`${userName} does not exist. Please sign up`);
    }
  };

  return (
    <TweetsContext.Provider value={{ userName, usersArray, handleNewUserName }}>
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
                    onLogin={(userName) => handleLogin(userName)}
                  />
                </Route>
                <Route path="/signup" exact>
                  <SignUp
                    userName={userName}
                    onNewUserName={(newUserName) =>
                      handleNewUserName(newUserName)
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

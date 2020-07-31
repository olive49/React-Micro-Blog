import React, { useState, useEffect } from "react";
import "./App.css";
import MainPage from "./components/MainPage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TweetsContext from "./TweetsContext";
import SignUp from "./components/SignUp.jsx";

const App = () => {

  const [usersArray, setusersArray] = useState([]);
  const [userName, setUserName] = useState("Dwight");


  useEffect(() => {
    const getUsers = JSON.parse(localStorage.getItem("users"));
    if (!getUsers) {
      console.log("no users");
    } else {
      console.log("use effect", getUsers)
      return setusersArray(getUsers)
  }}, [usersArray])


  const handleNewUserName = (newUserName) => {
    const newUsersArray = [];
    if (usersArray.length == 0) {
      localStorage.setItem("users", JSON.stringify(newUserName));
      setusersArray(newUserName);
    } else {
        if (usersArray.includes(newUserName.toLowerCase())) {
          console.log(`${newUserName} already exists`);
        } else {
          newUsersArray.push(newUserName);
          const newUserList = [newUsersArray, ...usersArray];
          localStorage.setItem("users", JSON.stringify(newUserName));
          setusersArray(newUserList);
        }
      }
    }

  const handleLogin = (userName) => {
    if (usersArray.includes(userName.toLowerCase())) {
    } else {
      alert(`${userName} does not exist. Please sign up`);
    }
  }

    return (
      <TweetsContext.Provider value={{ userName, usersArray, handleNewUserName }}>
        <div>
          <Router>
            <div>
              <NavBar />
              <Switch>
                <div className="App">
                  <Route path="/home" exact>
                    <MainPage userName={userName} />
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
  }
// }

export default App

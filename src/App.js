import React, { Component } from "react";
import "./App.css";
import MainPage from "./components/MainPage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import NavBar from "./components/NavBar.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import TweetsContext from "./TweetsContext";
import SignUp from "./components/SignUp.jsx";

// const history = useHistory()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersArray: [],
      userName: "Dwight",
    };
  }

  handleNewUserName(newUserName) {
    const users = this.state.usersArray;
    const newUsersArray = [];
    newUsersArray.push(newUserName);
    const newUserList = [newUsersArray, ...users];
    localStorage.setItem("users", JSON.stringify(newUserList));
    this.setState((state) => {
      return { usersArray: newUserList };
    });
  }

  handleLogin(userName) {
    const users = this.state.usersArray;
    console.log(userName);
    if (users.includes(userName)) {
      // history.push("/home")
    } else {
      alert(`${userName} does not exist. Please sign up`);
    }
  }

  componentWillMount() {
    const getUsers = JSON.parse(localStorage.getItem("users"));
    if (!getUsers) {
      console.log("no users");
    } else {
      this.setState((state) => {
        return { usersArray: getUsers };
      });
    }
  }

  render() {
    const { userName, usersArray } = this.state;
    console.log(usersArray)
    const { handleUserNameChange, handleUserNameSubmit } = this;
    return (
      <TweetsContext.Provider value={{ userName, usersArray }}>
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
                      onChange={(e) => handleUserNameChange(e)}
                      onSubmit={(e) => handleUserNameSubmit(e)}
                      onLogin={(userName) => this.handleLogin(userName)}
                    />
                  </Route>
                  <Route path="/signup" exact>
                    <SignUp
                      userName={userName}
                      onChange={(e) => handleUserNameChange(e)}
                      onSubmit={(e) => handleUserNameSubmit(e)}
                      onNewUserName={(newUserName) =>
                        this.handleNewUserName(newUserName)
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
}

export default App;

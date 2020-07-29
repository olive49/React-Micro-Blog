import React, { Component } from "react";
import "./App.css";
import MainPage from "./components/MainPage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TweetsContext from "./TweetsContext"
import SignUp from "./components/SignUp.jsx"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Dwight",
      users: []
    };
  }

  handleNewUserName(newUserName) {
    const userName = this.state.userName;
    this.setState((state) => {
      return { userName: newUserName };
    });
    localStorage.setItem("userName", JSON.stringify(newUserName));
  }

  componentWillMount() {
    const getUserName = JSON.parse(localStorage.getItem("userName"));
    if (!getUserName) {
      console.log("empty");
    } else {
      this.setState( { userName: getUserName }
      );
    }
  }

  

  render() {
    const { userName, users, } = this.state
    const { handleUserNameChange, handleUserNameSubmit, handleNewUserName } = this
    return (
      <TweetsContext.Provider 
      value={{ userName: this.state.userName,
      }}
      users={this.state.users}
      >
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
                    users={users}
                    userName={userName}
                    onChange={(e) => handleUserNameChange(e)}
                    onSubmit={(e) => handleUserNameSubmit(e)}
                    onNewUserName={(newUserName) =>
                      handleNewUserName(newUserName)
                    }
                  />
                </Route>
                <Route path="/signup" exact>
                  <SignUp
                  
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

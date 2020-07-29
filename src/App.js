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
    };
  }

  handleNewUserName(newUserName) {
    const userName = this.state.userName;
    console.log(userName);
    console.log(newUserName);
    this.setState((state) => {
      return { userName: newUserName };
    });
    localStorage.setItem("userName", JSON.stringify(newUserName));
  }

  componentWillMount() {
    const getUserName = JSON.parse(localStorage.getItem("userName"));
    console.log(getUserName);
    if (getUserName === null || undefined) {
      console.log("empty");
    } else {
      this.setState(() => {
        return { userName: getUserName };
      });
    }
  }

  

  render() {
    return (
      <TweetsContext.Provider 
      value={{ userName: this.state.userName,
      }}>
      <div>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <div className="App">
                <Route path="/home" exact>
                  <MainPage userName={this.state.userName} />
                </Route>
                <Route path="/profile" exact>
                  <ProfilePage
                    userName={this.state.userName}
                    onChange={(e) => this.handleUserNameChange(e)}
                    onSubmit={(e) => this.handleUserNameSubmit(e)}
                    onNewUserName={(newUserName) =>
                      this.handleNewUserName(newUserName)
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

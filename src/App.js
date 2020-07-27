import React, { Component } from "react";
import "./App.css";
import MainPage from "./components/MainPage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
  }

  handleNewUserName(newUserName) {
    const userName = this.state.userName;
    console.log(userName)
    console.log(newUserName)
    this.setState(state => { 
      return { userName: newUserName }
    });
    localStorage.setItem("userName", JSON.stringify(newUserName));
  }

  componentDidMount() {
    const getUserName = JSON.parse(localStorage.getItem("userName"));
    console.log(getUserName);
    this.setState(() => {
      return  { userName: getUserName }
  })
}

  render() {
    console.log(this.state.userName)
    return (
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
                    onNewUserName={(newUserName) => this.handleNewUserName(newUserName)}
                  />
                </Route>
              </div>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

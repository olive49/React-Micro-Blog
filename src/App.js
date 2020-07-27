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
      userName: "Dwight Schrute",
    };
  }
  render() {
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
                <ProfilePage userName={this.state.userName} />
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

import React from "react";
import "./App.css";
import MainPage from "./components/MainPage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
        <div className="App">
          {/* <Route path="/" exact component={}/> */}
          <Route path="/home" component={MainPage}/>
          <Route path="/profile" component={ProfilePage}/>
        </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

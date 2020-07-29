import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
// import { withRouter } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
    };
  }

  changePage = (newPage) => {
    console.log(newPage);
    this.setState({ page: newPage });
  };

  componentDidMount() {
    this.props.history.listen(() => {
      this.changePage(window.location.pathname);
    });
  }

  render() {
    const navStyle = {
      color: "rgba(255, 255, 255, 0.5)",
      padding: "1rem",
      textDecoration: "none",
    };
    return (
      <nav className="nav-bar">
        <ul className="nav">
          <Link style={navStyle} to="/home">
            <li style={{color: this.state.page == "/home" ? "white" : "rgba(255, 255, 255, 0.5)"}}>Home</li>
          </Link>
          <Link style={navStyle} to="/profile">
            <li style={{color: this.state.page == "/profile" ? "white" : "rgba(255, 255, 255, 0.5)"}}>Profile</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default withRouter(NavBar);

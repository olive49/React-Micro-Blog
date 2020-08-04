import React, { useState, useEffect } from "react";
import { Link, withRouter, useLocation } from "react-router-dom";

const NavBar = () => {
  const [page, setPage] = useState("/home");

  const changePage = (newPage) => {
    setPage(newPage);
  };

  const location = useLocation();

  useEffect(() => {
    changePage(location.pathname);
  });

  const navStyle = {
    color: "rgba(255, 255, 255, 0.5)",
    padding: "1rem",
    textDecoration: "none",
  };

  return (
    <nav className="nav-bar">
      <ul className="nav">
        <Link style={navStyle} to="/home">
          <li
            style={{
              color: page == "/home" ? "white" : "rgba(255, 255, 255, 0.5)",
            }}
          >
            Home
          </li>
        </Link>
        <Link style={navStyle} to="/profile">
          <li
            style={{
              color: page == "/profile" ? "white" : "rgba(255, 255, 255, 0.5)",
            }}
          >
            Log In
          </li>
        </Link>
        <Link style={navStyle} to="/signup">
          <li
            style={{
              color: page == "/signup" ? "white" : "rgba(255, 255, 255, 0.5)",
            }}
          >
            Sign Up
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default withRouter(NavBar);

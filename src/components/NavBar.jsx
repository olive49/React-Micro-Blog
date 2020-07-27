import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {

    const navStyle = {
        color: "white",
        padding: "1rem",
        textDecoration: "none",
    }
        return ( 
            <nav className="nav-bar">
                <ul className="nav">
                    <Link style={navStyle} to="/home">
                    <li>Home</li>
                    </Link>
                    <Link style={navStyle} to="/profile">
                    <li>Profile</li>
                    </Link>
                </ul>

            </nav>
         );
    }

 
export default NavBar;
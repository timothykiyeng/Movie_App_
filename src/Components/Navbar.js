// import { Link } from 'react-router-dom';
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="Nav">
            <h1>Movie App</h1>
            <div className="links">
                <NavLink to="/" exact={true} className="topnav" > Movies </NavLink>
                <NavLink to="/watchlist" exact={true} className="topnav"> WatchList </NavLink>
                <button className="Btn-navbar" ><a href='./'>Sign Up</a></button>
            </div>
        </div>
    );
}

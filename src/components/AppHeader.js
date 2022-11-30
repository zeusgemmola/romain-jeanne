import React from "react";
import "../AppBar.css";
import logo from "../AppBar.logo.svg";
import "../App.css";

const AppHeader = ({ children }) => (
  <div className="App">
    <header>
      <nav className="AppBar">
        <img
          className="AppBar-logo"
          src={logo}
          aria-label="people"
          alt="People"
        />
      </nav>
    </header>
    {children}
  </div>
);

export default AppHeader;

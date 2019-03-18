import React, { Component } from "react";
import { Link } from "react-router-dom";
// TODO: CREATE NAVI MENU
class Navi extends Component {
  render() {
    return (
      <nav>
        <div className="containter">
          <Link className="navbar-brand" to="/">
            Peck-Scratch-Go
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobil-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <ul className="navbar-nav m1-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              sign up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              login
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navi;

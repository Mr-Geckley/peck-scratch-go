import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

// TODO: CREATE NAVI MENU
class Navi extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.user;

    const userLinks = (
      <ul className="navbar-nav m1-auto">
        <li className="nav-item">
          <button onClick={this.onLogoutClick.bind(this)} className="nav-link">
            LOGOUT
          </button>
        </li>
      </ul>
    );

    const publicLinks = (
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
    );

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
          {isAuthenticated ? userLinks : publicLinks}
        </div>
      </nav>
    );
  }
}

Navi.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navi);

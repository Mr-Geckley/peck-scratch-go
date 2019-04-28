import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { updateTheme } from "../../actions/gamePlayActions";
import { bindActionCreators } from "redux";

// TODO: CREATE NAVI MENU
class Navi extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  onThemeChangeClick() {
    this.props.updateTheme();
  }

  render() {
    const { isAuthenticated } = this.props.user;

    const userLinks = (
      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav">
          <li
            className="nav-item ml-auto"
            onClick={this.onLogoutClick.bind(this)}
          >
            <a href="#" className="nav-link">
              LOGOUT
            </a>
          </li>
          <li
            className="nav-item ml-auto"
            onClick={this.onThemeChangeClick.bind(this)}
          >
            <a href="#" className="nav-link">
              CHANGE THEME
            </a>
          </li>
        </ul>
      </div>
    );

    const publicLinks = (
      <div className="ml-auto collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav steve">
          <li className="nav-item ">
            <Link className="nav-link" to="/register">
              sign up
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/login">
              login
            </Link>
          </li>
        </ul>
      </div>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Peck-Scratch-Go
        </Link>
        <div className="ml-auto">
          <button
            className="navbar-toggler "
            data-toggle="collapse"
            data-target="#navbarMenu"
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateTheme: updateTheme,
      logoutUser: logoutUser
    },
    dispatch
  );
}

const mapStateToProps = state => ({
  user: state.user,
  gameState: state.game
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navi);

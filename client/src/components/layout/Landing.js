import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  // componentDidMount() {
  //   if (this.props.user.isAuthenticated) {
  //     this.props.history.push("/");
  //     console.log("successful logout");
  //   }
  // }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.user.isAuthenticated) {
  //     this.props.history.push("/");
  //     console.log("successful logout");
  //   }
  // }

  render() {
    return (
      <div className="container landing-container ">
        <div>
          <h1 className="col text-center pre-game-h1">Peck-Scratch-Go</h1>
          <div className="row ">
            <p className="col text-center landing-p">
              Create a username to get started
            </p>
          </div>
          <div className="row">
            <span className="col " />

            <div className="landing-links-div">
              <Link className="col text-center" to="/register">
                Sign Up
              </Link>
              <Link className="col text-center" to="/login">
                Login
              </Link>
            </div>
            <span className="col" />
          </div>
        </div>
      </div>
    );
  }
}
Landing.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Landing);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../../actions/authActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      passWord: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      userName: this.state.userName,
      passWord: this.state.passWord
    };

    // console.log(currUser);
    this.props.loginUser(userData);
  }

  componentDidMount() {
    if (this.props.user.isAuthenticated) {
      this.props.history.push("/main");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.isAuthenticated) {
      this.props.history.push("/main");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <div className=" login-container">
        <h1 className="pre-game-h1">LOGIN, FRIEND</h1>
        <p>Login to your account to get started!</p>

        <form onSubmit={this.onSubmit} className="form">
          {/* USERNAME */}
          <input
            type="text"
            className={classnames("form-control form-control=lg", {
              "is-invalid": errors.userName
            })}
            placeholder="user name"
            name="userName"
            value={this.state.name}
            onChange={this.onChange}
          />
          {errors.userName && (
            <div className="invalid-feedback">{errors.userName}</div>
          )}

          {/* PASSWORD */}
          <input
            type="password"
            className={classnames("form-control form-control=lg", {
              "is-invalid": errors.passWord
            })}
            placeholder="password"
            name="passWord"
            value={this.state.passWord}
            onChange={this.onChange}
          />
          {errors.passWord && (
            <div className="invalid-feedback">{errors.passWord}</div>
          )}
          <input type="submit" className="submit-button" />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

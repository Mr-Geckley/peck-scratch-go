import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      passWord: "",
      confPassWord: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      userName: this.state.userName,
      passWord: this.state.passWord,
      confPassWord: this.state.confPassWord
    };

    this.props.registerUser(newUser, this.props.history);

    // console.log(newUser);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <h1>Sign Up</h1>
        <p>Create an account to get started!</p>
        <form onSubmit={this.onSubmit}>
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
          <input
            type="password"
            className={classnames("form-control form-control=lg", {
              "is-invalid": errors.confPassWord
            })}
            placeholder="confirm password"
            name="confPassWord"
            value={this.state.confPassWord}
            onChange={this.onChange}
          />
          {errors.confPassWord && (
            <div className="invalid-feedback">{errors.confPassWord}</div>
          )}
          <input type="submit" />
        </form>
      </div>
    );
  }
}

// registerUser is defined in authActions.js
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // user come from rootReducer @ src/reducers/index.js
  user: state.user,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

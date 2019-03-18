import React, { Component } from "react";

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

    console.log(newUser);
  }

  render() {
    return (
      <div className="register">
        <h1>Sign Up</h1>
        <p>Create an account to get started!</p>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="user name"
            name="userName"
            value={this.state.name}
            onChange={this.onChange}
          />
          <input
            type="password"
            placeholder="password"
            name="passWord"
            value={this.state.passWord}
            onChange={this.onChange}
          />
          <input
            type="password"
            placeholder="confirm password"
            name="confPassWord"
            value={this.state.confPassWord}
            onChange={this.onChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default Register;

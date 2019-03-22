import React, { Component } from "react";

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

    const currUser = {
      userName: this.state.userName,
      passWord: this.state.passWord
    };

    console.log(currUser);
  }

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <p>Login to your account to get started!</p>
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
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default Login;

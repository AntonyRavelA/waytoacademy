import React, { Component } from 'react';
import './login.css';
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassword = this.handlePassword.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Error = this.Error.bind(this);
  }

  Error() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }
    return this.setState({ error: '' });
  }

  handleUsername(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassword(evt) {
    this.setState({
      password: evt.target.value,
    });
  }
 
  render() {
    
    return (
      <div>
          <h1 text align="center">WELCOME!</h1>
          <h6 text align="center">To Your Account</h6>
      <div class="register" text-align="center">
          <h4 text align="center">Don't have an account?</h4>
          <h5 text align="center"><Link className="nav-link" to="/register">Click here to Register</Link> </h5>
      </div>
      <form onSubmit={this.handleSubmit}>
        {
          this.state.error &&
          <h5 text align="center"   data-test="error" onClick={this.Error}>
            <button onClick={this.Error}>✖</button>
            {this.state.error}
          </h5>
        }
        <div class="login">
          <label>Login</label>
          <input type="text" class="form-control" placeholder="Email or UserName" value={this.state.username} onChange={this.handleUsername}/><br></br>
        <div>Password
          <input type="password" class="form-control" placeholder="Password" value={this.state.password} onChange={this.handlePassword}/></div><br></br>
        <div class="checkbox">
         <label>
           <input type="checkbox" name="remember"/> Remember me<br></br>
         </label>
        </div><br></br>
           <button type="submit" class="btn btn-primary " >SIGN IN</button>
         <span class="psw" > Forgot <a href="/password" > Password</a></span></div>
        </form>
      </div>
    );
  }
}
export default Login;
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './style.scss';

class Login extends Component {
  render() {
    console.log(this.props.handleAuth);
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (this.props.isAuthenticated === true) {
      return <Redirect to={from} />;
    }

    return (
      <div className="preview-form-wrapper">
        <div className="preview-login">
          <h5>You must log in to view this page</h5>
          <input
            type="password"
            placeholder="please enter password"
            className="form-control"
          />
          <button onClick={this.props.handleAuth}>Log in</button>
        </div>
      </div>
    );
  }
}

export default Login;

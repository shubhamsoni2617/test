import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  render() {
    console.log(this.props.handleAuth);
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (this.props.isAuthenticated === true) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page</p>
        <button onClick={this.props.handleAuth}>Log in</button>
      </div>
    );
  }
}

export default Login;

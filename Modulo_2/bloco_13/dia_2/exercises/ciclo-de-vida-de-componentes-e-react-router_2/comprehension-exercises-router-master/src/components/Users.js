// arquivo Users.js
import React, { Component } from 'react';

// Requisito 7
class Users extends Component {
  render() {
    const { greetingMessage } = this.props
    const { id } = this.props.match.params;
    return (
        <div>
          <h2>Users</h2>
          <p> { greetingMessage } My awesome Users component </p>
          <p>{id}</p>
        </div>
    );
  }
};

export default Users;


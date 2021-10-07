import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export class StrictAccess extends Component {
  render() {
    const { user: { username, password } } = this.props;
    if (username === 'joao' && password === '1234') {
      return (
        <div>
          <p>Welcome João!</p>
        </div>
      )
    } 
    alert('Acess denied');
    return <Redirect to="/" />;  
  }
}

export default StrictAccess

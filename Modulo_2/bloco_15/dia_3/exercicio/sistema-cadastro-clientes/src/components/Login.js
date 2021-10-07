import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './actions';
import { Link } from 'react-router-dom';

class Login extends Component {
  construtor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
    };
  }

  handleChange({ target }) {
    const { name, value} = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <label>Digite o seu email:
          <input type="text" name='email' onChange={ this.handleChange }></input>
        </label>
        <label>Digite a sua senha:
          <input type="password" name='password' onChange={ this.handleChange }></input>
        </label>
        <br />
        <br />
        <Link
          to="/clientescadastrados"
          onClick={() => this.props.login({ email, password })}>
          Entre    
        </Link>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login: e => dispatch(login(e))
});

export default connect(null, mapDispatchToProps)(Login);
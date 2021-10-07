import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Seja Bem-Vindo ao sistema de Cadastramento!</h1>
        <Link to="/login">Faça seu Login</Link>
      </div>
    )
  }
}

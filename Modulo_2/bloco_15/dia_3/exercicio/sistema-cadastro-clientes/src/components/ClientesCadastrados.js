import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Clientescadastrados extends Component {
  render() {
    return (
      <div>
        <h1>Página de Clientes Cadastrados </h1>
        <Link to="/cadastro">Não possui cadastro? Cadastre-se</Link>
      </div>
    )
  }
}



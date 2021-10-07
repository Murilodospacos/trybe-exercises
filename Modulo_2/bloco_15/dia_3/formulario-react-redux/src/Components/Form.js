import React, { Component } from 'react'
import '../Components/form.css';

export default class Form extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      estado: '',
    };
    this.handleInputs = this.handleInputs.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  handleInputs({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  }

  clearInputs() {
    this.setState = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      estado: '',
    };
  }

  handleSubmitForm() {

  }

  render() {
    const { name, email, cpf, address, city, estado } = this.state;
    return (
      <div className="App">
        <form className="form">
          <h3>Formulário de Cadastro</h3>
          <label>
            Nome Completo:
            <input
              onChange={this.handleInputs}
              name="nome"
              value={ name }
              className="input"
              type="text"
              placeholder="Digite o seu nome..."
            />
          </label>
          <label>
            Email:
            <input
              onChange={this.handleInputs}
              name="email"
              value={ email }
              className="input"
              type="email"
              placeholder="Digite o seu email.."
            />
          </label>
          <label>
            CPF
            <input
              onChange={this.handleInputs}
              name="cpf"
              value={ cpf }
              className="input"
              type="text"
              placeholder="Digite o seu CPF..."
            />
          </label>
          <label>
            Endereço
            <input
              onChange={this.handleInputs}
              name="address"
              value={ address }
              className="input"
              type="number"
              placeholder="Digite o seu Endereço..."
            />
          </label>
          <label>
            Cidade
            <input
              onChange={this.handleInputs}
              name="city"
              value={ city }
              className="input"
              type="text"
              placeholder="Digite sua cidade..."
            />
          </label>
          <label>
            Estado
            <input
              onChange={this.handleInputs}
              name="estado"
              value={ estado }
              className="input"
              type="text"
              placeholder="Digite o seu Estado..."
            />
          </label>
          <button type="button" onclick={ this.handleSubmitForm }>Adicionar Formulário</button>
          <button onClick={ this.clearInputs() }>Limpar</button>
        </form>
      </div>
    );
  }
}

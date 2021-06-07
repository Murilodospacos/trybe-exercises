import React from 'react'

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      casa: false,
      apartamento: false,
      resumo: '',
      cargo: '',
      descricao: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value; 

    this.setState({
      [name]: value
    })
  }
  
  render() {
    return (
      <div>
        
        <h1>Cadastre seu Currículo</h1>
        <form className="form">
          <fieldset>
            <label>
              Nome:
            <input 
              type="text" 
              name="nome" 
              value={this.state.nome} 
              onchange={this.handleChange}
              required
            />
            </label>

            <label>
              Email:
            <input 
              type="text" 
              name="email"
              maxLength="50" 
              value={this.state.email} 
              onchange={this.handleChange}
              required 
            />
            </label>

            <label>
              CPF:
            <input 
              type="text" 
              name="cpf" 
              value={this.state.cpf} 
              onchange={this.handleChange}
              required 
            />
            </label>

            <label>
              Endereço:
            <input 
              type="text" 
              name="endereco" 
              value={this.state.endereco} 
              onchange={this.handleChange}
              required 
            />
            </label>

            <label>
              Cidade:
            <input 
              type="text" 
              name="cidade"
              maxLength="28" 
              value={this.state.cidade} 
              onchange={this.handleChange}
              onBlur={ this.clearIfStartWithNumber }
              required 
            />
            </label>

            <label>
              Estado:
              <select name="estado" value={this.state.estado} onchange={this.handleChange } required>
                <option>Selecione...</option>
                {
                  estados.map(({ sigla, nome }) => (
                    <option key={ sigla } value={ nome }>{ nome }</option>
                  ))
                }
              </select>
            </label>

            <span>Tipo:</span>
            <label>
              Casa
              <input
                name="tipo" 
                type="checkbox"
                maxLength="40" 
                value={this.state.casa} 
                onchange={this.handleChange}
                required   
              />
              Apartamento
              <input
                name="tipo"
                type="radio"
                maxLength="40"
                value={this.state.apartamento} 
                onchange={this.handleChange}
                required 
              />
            </label>
          </fieldset>

          <fieldset>
            <label>
            Resumo do currículo:
            <textarea 
              name="resumo"
              cols="30"
              rows="10"
              maxLength="1000" 
              value={this.state.resumo} 
              onchange={this.handleChange} 
            />
            </label>

            <label>
            Cargo:
            <textarea 
              name="cargo"
              cols="30"
              rows="10"
              maxLength="40" 
              value={this.state.cargo} 
              onchange={this.handleChange}
              onMouseEnter={this.displayAlert}
            />
            </label>

            <label>
            Descrição do cargo:
            <input 
              name="descricao" 
              type="text"
              maxLength="500"
              value={this.state.descricao}
              onchange={this.handleChange}
              required
            />
            </label>
          </fieldset>
          <button type="button" onClick={ this.createCurriculum }></button>
          <button type="button" onClick={ this.resetSate }></button>
        </form>
      </div>
    )
  }
}

export default Form;
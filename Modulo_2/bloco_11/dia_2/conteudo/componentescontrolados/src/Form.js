import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
     value:''
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
      idade: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
          <input
            onChange={this.handleChange}
            type="number"
            name="idade"
            value={this.state.idade}
          />
          <input
            onChange={this.handleChange}
            type="checkbox"
            name="vaiComparecer"
          />
        </form>
      </div>
    );
  }
}

export default Form;
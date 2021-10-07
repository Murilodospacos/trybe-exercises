import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    }
    this.handleChanges = this.handleChanges.bind(this);
  }

handleChanges({target}) {
  const { name, value } = target;
  this.setState = ({
    [name]: value,
  });
}

validateRegister = () => {
  const { name, age, email } = this.state;
  this.props.addRegister({ name, age, email });
  this.setState({
    name: '',
    age: '',
    email: '',
  });
};

  render() {
    const { name, age, email } = this.state;
    const { userLogin } = this.props;
    if(!userLogin.email) return <div>Login não efetuado!</div>;
    return (
      <div>
        <h1>Faça seu cadastro</h1>
        <form>
        <label htmlFor="nome">Digite o seu nome:
          <input type="text" name="nome" onChange={ this.handleChanges } value={ name } />
        </label>
        <label>Digite a sua idade:
          <input type="number" name="age" value={ age }></input>
        </label>
        <label>Digite o seu email:
          <input type="email" name="email" value={ email }></input>
        </label>
        <button>Cadastrar</button>
        <Link to='clientescadastrados'>
        <button>Fez seu cadastro? Acesse a página de clientes cadastrados</button>
        </Link>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userLogin: state.loginReducer});
const mapDispatchToProps = dispatch => ({
  addRegister: e => dispatch(addRegister(e))});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
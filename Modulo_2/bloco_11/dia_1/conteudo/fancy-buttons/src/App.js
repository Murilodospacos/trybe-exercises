import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
    this.button1 = this.button1.bind(this)
    this.button2 = this.button2.bind(this)
    this.button3 = this.button3.bind(this)
  }
  button1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 +1
    }))
  }

  button2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 +1
    }))
  }

  button3() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 +1
    }))
  }
  
  render() {
   return (
     <div className="App">
       <p>{this.state.numeroDeCliques1}</p>
      <button onClick={this.button1}>BOTÃO 1</button>
      <p>{this.state.numeroDeCliques2}</p>
      <button onClick={this.button2}>BOTÃO 2</button>
      <p>{this.state.numeroDeCliques3}</p>
      <button onClick={this.button3}>BOTÃO 3</button>
     </div>
   )
  }
};

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:"",
      name:"",
      array:[]
    }
    this.fetchDogs = this.fetchDogs.bind(this);
  }
  
  componentDidMount() {
    if (localStorage.namedDogURL) {
      const parseStorage = JSON.parse(localStorage.namedDogURL);
      const lastDog = parseStorage[parseStorage.length - 1].message;
      this.setState({
        array: parseStorage,
        data: { message: lastDog }
      })
    } else {
    this.fetchDogs();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.data.message.includes("terrier")) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      const dogBreed = this.state.data.message.split("/")[4];
      alert(dogBreed);
    }
  }

  fetchDogs() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(result => this.setState({ data: result }))
  }

  saveData() {
    const {
      data: { message },
      name,
      array
    } = this.state;
    const dogData = { message, name };
    const newArray = [...array, dogData];
    this.setState({ array: newArray });
    this.setState({ name: "" });
    localStorage.setItem("namedDogURL", JSON.stringify(newArray));
  }

  render() {
    if (this.state.data === "") return "loading...";
    return (
      <div>
        <p>Doguinhos</p>
        <button onClick={ this.fetchDogs }>Novo doguinho!</button>
        <div>
          <input
            type="text"
            value={ this.state.name }
            onChange={ e => this.setState({ name: e.target.value }) }
            placeholder="digite o nome do doguinho"
          />
          <button onClick={this.saveData}>Salvar doguinho!</button>
        </div>
        <div>
          <img src={ this.state.data.message } alt={ this.state.data.message } />
        </div>
      </div>
    );
  }
}


export default App;

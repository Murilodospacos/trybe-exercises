import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      // requisito 1
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  }
}

export default App;

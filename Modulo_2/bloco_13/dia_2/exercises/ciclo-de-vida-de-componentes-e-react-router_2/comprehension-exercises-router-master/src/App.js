import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      // requisito 1
      <BrowserRouter>
        <Home />
        {/* Requisito 2 */}
        <Route exact path="/" component={ Home } />
        {/* Requisito 3 */}
        <Route path="/about" component={ About } />
      </BrowserRouter>
    );
  }
}

export default App;

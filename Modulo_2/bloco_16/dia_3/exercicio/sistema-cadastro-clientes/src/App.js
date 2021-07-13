import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import Home from './components/Home';
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import ClientesCadastrados from './components/ClientesCadastrados';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/cadastro" component={ Cadastro } />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/clientescadastrados" component={ ClientesCadastrados } />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}
export default App;

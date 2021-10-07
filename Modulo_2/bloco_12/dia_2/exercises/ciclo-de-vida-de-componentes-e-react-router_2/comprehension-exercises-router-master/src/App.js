import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess'

// Requisito 9
const Child = ({ match })  => (
  <div>
    <h3>ID: {match.params.users.id}</h3>
  </div>
)

class App extends Component {
  render() {
    return (
      // requisito 1
      <Router>
         <ul>
          {/* Requisito 6 */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users/3">Users</Link></li>
          <li><Link to="/strict-access">Strict Access</Link></li>
        </ul>
        <Switch>
          {/* Requisito 2 */}
          <Route exact path="/" component={ Home } />
          {/* Requisito 3 e 4 */}
          <Route path="/about" component={ About } />
          {/* Requisito 5 e 8 */}
          <Route 
           path="/users/:id" 
           render={ (props) => 
            <Users {...props} greetingMessage="Good Morning" /> }/> 
          {/* Requisito 9 */}
          <Route path="users/:id" component={Child} />
          <Route path="/strict-access">
           <StrictAccess user={{ username: 'joa', password: '1234'}} />
           </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

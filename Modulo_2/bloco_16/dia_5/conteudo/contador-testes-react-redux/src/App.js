// src/App.js
import React from 'react';
import ButtonClicks from './ButtonClicks';
import NumberClicks from './NumberClicks';

class App extends React.Component {
  render() {
    return (
      <div className="App-header">
          <ButtonClicks />
          <NumberClicks />
      </div>
    );
  }
}
export default App;

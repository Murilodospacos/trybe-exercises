import React from 'react';
import Daughter from '../components/Daughter'

class Father extends React.Component {
  render(){
    return (
      <div>
        <h3>Eu sou o Pai</h3>
        <Daughter />
      </div>
      // <Daughter
      //   inheritance={props.inheritance}
      //   spendInheritance={props.spendInheritance}
      // />
    );
  }
}

export default Father;

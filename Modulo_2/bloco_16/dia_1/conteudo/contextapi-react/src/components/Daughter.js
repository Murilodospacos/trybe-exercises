import React from 'react'
import MyContext from './MyContext';

class Daughter extends React.Component {
  render() {
    return (
      <div>
        <h4>Eu sou a filha</h4>
        <MyContext.Consumer>
          {
            value => (
              <div>
                <p>{ `Eu tenho ${ value.money } para gastar` }</p>
                <button type="button" onClick={ value.spendMoney }>Pedir um Ifood</button>
              </div>
            )
          }
        </MyContext.Consumer>
        {/* <p>{ `Eu tenho ${ this.props.money } para gastar` }</p>
        <button type="button" onClick={ this.props.spendMoney }>Pedir um Ifood</button> */}
      </div>
      // <div>
      //   <span>
      //     `Tenho uma herança de R$ ${props.inheritance} que recebi do meu bisavô`
      //   </span>
      //   <button type="button" onClick={props.spendInheritance}/>
      // </div>
    );
  }
}

export default Daughter;

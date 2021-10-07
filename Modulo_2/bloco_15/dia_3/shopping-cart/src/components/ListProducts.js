import React from 'react'
import { connect } from 'react-redux'
import products from '../products';
import { addToCart } from '../actions';
import PropTypes from 'prop-types' 

class ListProducts extends React.Component {
  validateQuantity(product, cart, addToCart) {
    const productsInCart = cart.filter((item) => item.name === product.name)
    if (productsInCart.length === product.stockQuantity)
    return false;
    addToCart(product);
    return true;
  }
  render() {
    const { addToCartAction, cart } = this.props;
    // const { products: { name, price, stockQuantity }} = this.props;
    return (
      <div className="App">
        <h2>Lista de produtos disponíveis</h2>
        <table className="list-products">
          {/* <thread> */}
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Estoque</th>
            </tr>
          {/* </thread> */}
          <tbody>
            { products.map((product) => (
              // tr é a linha e td é a coluna
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{`R$:${product.price}`}</td>
                <td>{`Quantidade disponível:${product.stockQuantity}`}</td>
                <td>
                {/* chama a callback recebida por props e passa o parametro para ela */}
                  <button
                  onClick={() => addToCartAction(product)}
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  onClick={ () => this.validateQuantity(product, cart, addToCartAction) }
                  >Adicionar ao carrinho
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.productReducer.cartProducts,
});
const mapDispatchToProps = (dispatch) => ({
  // aqui coloco as ações disparadas que eu quero enviar ao store
  addToCartAction: (product) => dispatch(addToCart(product)), //  a callback faz o dispatch da ação, chamada no botão acima e envia para o reducer
});
ListProducts.propTypes = {
  addToCartAction: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);

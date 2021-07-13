import React from 'react';
import { connect } from 'react-redux'
import { clearCart, removeProduct } from '../actions/index'
import PropTypes from 'prop-types';

class Cart extends React.Component {
  render() {
    const { totalPrice, products, clearAllCart, totalCart, cartProducts, removeIndex } = this.props;
    const   CASAS_DECIMAIS_PARA_ARREDONDAR = 2;
    return (
      <div>
        <h2 className="headers">Carrinho  de produtos</h2>
        <ul className="list-products">
          {products.map((product, index) => (
            <li key={index}>
              {product.name}
              <button type="button" onClick={ () => removeIndex(index) }>
                Remover
              </button></li>
          ))}
        </ul>
        <div>
          Total: R$
          {totalPrice.toFixed(CASAS_DECIMAIS_PARA_ARREDONDAR)}
        </div>
        <button type="button" onClick={ () => clearAllCart(cartProducts, totalCart) }>Limpar</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.productReducer.cartProducts,
  totalPrice: state.productReducer.totalCart,
  cartProducts: state.productReducer.cartProducts,
  totalCart: state.productReducer.totalCart,
})

const mapDispatchToProps = (dispatch) => ({
  clearAllCart: (cartProducts, totalCart) => dispatch(clearCart(cartProducts, totalCart)),
  removeIndex: (indexProduct) => dispatch(removeProduct(indexProduct)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Cart)

Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      stockQuantity: PropTypes.number,
    })
  ).isRequired,
  totalCart: PropTypes.number.isRequired,
}
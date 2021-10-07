const INITIAL_STATE = {
  products: [],
  totalCart: 0,
  cartProducts: []
}

function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      //execute o que está aqui se a action.type = ADD_PRODUCT
      return {
        // ao inves de atualizar o estado vamos definir como o novo estado irá ficar
        cartProducts: [...state.cartProducts, { ...action.product }], //...action.product esta fazendo uma copia do estado para garantir que nao esta mexendo no objeto de parâmetro, vc adiciona este objeto novo dentro do array de produtos ja existente com spread, para assim nao sobescrever
        totalCart: state.totalCart + action.product.price, // preço atual mais o do produto adicionado
        };
    case 'REMOVE_PRODUCT':
        return {     
          cartProducts: state.cartProducts.filter((_product, index) => index !== action.indexProduct),
          totalCart: state.totalCart - state.cartProducts[action.indexProduct].price,
        }
    case 'CLEAR_CART':
      return {
        cartProducts: [],
        totalCart: 0,
      }
      default:
        return state; 
  }
}

export default productReducer;

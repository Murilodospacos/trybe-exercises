export const ADD_PRODUCT = 'ADD_PRODUCT';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

export const addToCart = (product) => ({ // passo 3
  type: 'ADD_PRODUCT', // função que retorna o objeto da action
  product,
  });
  
export const clearCart = (cartProducts, totalCart) => ({ // passo 3
  type: 'CLEAR_CART', // função que retorna o objeto da action
  cartProducts,
  totalCart,
  });

export const removeProduct = (indexProduct) => ({ // passo 3
  type: 'REMOVE_PRODUCT', // função que retorna o objeto da action
  indexProduct,
  });
     
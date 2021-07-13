import { createStore } from 'redux'
import rootReducer from '../reducers/index'
// depois importar os reducers a serem feitos

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store; 

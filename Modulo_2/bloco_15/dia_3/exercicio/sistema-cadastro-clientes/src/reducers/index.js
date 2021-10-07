import { combineReducers } from "redux";
import loginReducer from "./login";
import cadastroReducer from "./cadastro";

const rootReducers = combineReducers({
  cadastroReducer,
  loginReducer,
});

export default rootReducers;

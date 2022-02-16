import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducer = combineReducers({
  allProduct: productReducer,
});

export default reducer;

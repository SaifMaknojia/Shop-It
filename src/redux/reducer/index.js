import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';

///can name keys anything, however values comes from productReducer
const reducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer
});

export default reducer;

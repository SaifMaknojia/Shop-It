import { combineReducers } from 'redux';
import {
  productReducer,
  selectedProductReducer,
  shopCategory
} from './productReducer';

///can name keys anything, however values comes from productReducer
const reducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  category: shopCategory
});

export default reducer;

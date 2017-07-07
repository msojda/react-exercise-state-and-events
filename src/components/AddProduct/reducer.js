import { ADD_PRODUCT } from './actions';

const products = function(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.productName]
    default:
      return state;
  }
};

export {products};

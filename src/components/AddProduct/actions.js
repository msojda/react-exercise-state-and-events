export const ADD_PRODUCT = 'ADD_PRODUCT';

export const addProduct = (productName) => {
  return {
    type: ADD_PRODUCT,
    productName
  };
}

const initialState = {
  products: []
};

// const name gets call in main index file as it gets combine
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_PRODUCT':
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

// const name gets call in main index file as it gets combine
export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PRODUCT_LIST':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// for HomeScreen Nav

export const shopCategory = (state = {}, action) => {
  switch (action.type) {
    case 'PRODUCT_CATEGORY':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

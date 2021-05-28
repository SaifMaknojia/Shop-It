const initialState = {
  products: [],
  productCategory: [],
  productCategoryItem: []
};

// const name gets call in main index file as it gets combine
//used to get list of all products in shop page
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_PRODUCT':
      return { ...state, products: action.payload };
    case 'PRODUCT_CATEGORY':
      return { ...state, productCategory: action.payload };
    case 'PRODUCT_CATEGORY_ITEM':
      return { ...state, productCategoryItem: action.payload };
    default:
      return state;
  }
};

// const name gets call in main index file as it gets combine, used for product detail page.
export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PRODUCT_LIST':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// for HomePage

//can name the const anyName
export const productList = products => {
  return {
    type: 'ALL_PRODUCT',
    payload: products
  };
};

//can name it any name
export const productDetail = product => {
  return {
    type: 'PRODUCT_LIST',
    payload: product
  };
};

export const productCategory = category => {
  return {
    type: 'PRODUCT_CATEGORY',
    payload: category
  };
};

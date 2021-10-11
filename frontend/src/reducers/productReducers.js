const {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
  } = require('../constants/productConstants');
  
  //List of Product -> Home Screen
  export const productListReducer = (
    state = { loading: true, products: [] },
    action
  ) => {
    console.log("ap1 : " + action.payload);
    console.log("apiS: "+ JSON.stringify(action.payload))
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true };
      case PRODUCT_LIST_SUCCESS:
        return { loading: false, products: action.payload };
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  //Product Details -> Product Screen
  export const productDetailsReducer = (
    state = { product: {}, loading: true },
    action
  ) => {

    console.log("ap : " + action.payload);

    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return { loading: true };
      case PRODUCT_DETAILS_SUCCESS:
        return { loading: false, product: action.payload };
      case PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
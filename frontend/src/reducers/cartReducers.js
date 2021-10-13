import { ADD_TO_CART, CART_DELETE_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case CART_DELETE_ITEM:
      // console.log("reducer just ran");
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload), //compare against index sent by action
      };
    default:
      return state;
  }
};


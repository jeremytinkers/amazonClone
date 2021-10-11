import { ADD_TO_CART } from '../constants/cartConstants';

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
    default:
      return state;
  }
};


// import { CART_ADD_ITEM } from '../constants/cartConstants';

// export const cartReducer = (state = { cartItems: [] }, action) => {
//   switch (action.type) {
//     case CART_ADD_ITEM:
    
//     const item = action.payload;

//     var exists=0;


    
//     var cartItemsNew = cartItems;

//     // In the event, the user adds an existing Item, the qty adds up:-
//     for (var i = 0; i < cartItems.length; i++) {
//         if(cartItems[i].product === item.product){
//             cartItems[i].qty+= item.qty; // qty adds up
//             return 
//             exists=1;
//             break;
//         }
//     }

//     if (!exists) {
//         {
//         return { ...state, cartItems: [...state.cartItems, item] };
//       }
//     }

//     default:
//       return state;
//   }
// };
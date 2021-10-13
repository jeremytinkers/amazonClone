//Add To Cart Action:-
import Axios from "axios";
import { ADD_TO_CART, CART_DELETE_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
import store from "../store";

export const addToCart = (productId, qty) => async (dispatch) => {

    const { data } = await Axios.get(`/api/products/${productId}`);
    // console.log("getstate1:" + JSON.stringify(store.getState().cart.cartItems));
    dispatch({
        type: ADD_TO_CART,
        payload: {
            name: data.name,
            image: data.imgSrc,
            price: data.price,
            curStock: data.curStock,
            product: data._id,
            qty,
        },
    })
    // console.log("getstate2:" + JSON.stringify(store.getState().cart.cartItems));
    localStorage.setItem('cartItems', JSON.stringify(store.getState().cart.cartItems));

}


export const deleteFromCart = (productId) => (dispatch, getState) => {
    // console.log("action just dispatched");
    dispatch({ type: CART_DELETE_ITEM, payload: productId });
    // console.log("return to action");
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

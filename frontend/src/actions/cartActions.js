//Add To Cart Action:-
import Axios from "axios";
import { ADD_TO_CART } from "../constants/cartConstants";
import store from "../store";

export const addToCart = (productId, qty) => async (dispatch) => {

    const {data} = await Axios.get(`/api/products/${productId}`);

        dispatch({
            type: ADD_TO_CART,
            payload: {
                name: data.name,
                image: data.imgSrc,
                price: data.price,
                curStock: data.curStock,
                product: data.id,
                qty,
            },
        })
        console.log("getstate:" + JSON.stringify(store.getState().cart.cartItems));
        localStorage.setItem('cartItems', JSON.stringify(store.getState().cart.cartItems));

}



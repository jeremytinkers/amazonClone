import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

export default function CartScreen(props) {
 
    const prodId = props.match.params.id;
    const qty = props.location.search ? props.location.search.split("=")[1] : 1;

    const dispatch = useDispatch();

    useEffect(() => { //run this once?
      if (prodId) {
        dispatch(addToCart(prodId, qty));
      }
    }, [dispatch, prodId, qty]);

    return (
        <div>
            <h1>Cart</h1>
            <p>Product Id: {prodId}</p>
            <p>Quantity Requested: {qty}</p>
        </div>
    )
}

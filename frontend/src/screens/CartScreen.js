import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, deleteFromCart } from "../actions/cartActions";

export default function CartScreen(props) {

  const prodId = props.match.params.id;
  const qty = props.location.search ? props.location.search.split("=")[1] : 1;

  const cart = useSelector((state) => state.cart); //tap into state for cartItems
  const { cartItems } = cart;

  const dispatch = useDispatch();

  useEffect(() => {
    if (prodId) {
      dispatch(addToCart(prodId, qty));
    }
  }, [dispatch, prodId, qty]);

  const removeFromCartHandler = (deleteId) => {
    // delete action
    dispatch(deleteFromCart(deleteId));
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping'); //will deal with signin later
  };

  return (
    <div className="row">
      <div className="col-2 cartList">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <h1>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </h1>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img
                      src={"/images/" + item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="cartPName">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.curStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>${item.price}</div>
                  <div className="trashIcon">

                    <i className="fa fa-trash fa-2x" onClick={() => removeFromCartHandler(item.product)}></i>

                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="cartCard">
          <ul>
            <li>

              <h2>Total Cost : </h2>
              <p>{cartItems.reduce((a, c) => a + Number(c.qty), 0)} items</p>
              <h4>${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</h4>

            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
import React from "react";
import Product from "./components/Product";
import { BrowserRouter, Link, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import { useSelector } from "react-redux";

function App() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (

    <BrowserRouter >
      <div classNameName="grid-container">

        <header className="row">

          <div className="brand">
             <Link to="/"> amazon</Link>
          </div>
          <div className="leftHeaderSect">
            {/* <a className="leftLeftHeader" href="cart.html">Cart</a> */}

            <Link to="/cart" className="leftLeftHeader" >
            
              <i class="fa fa-shopping-cart"></i>
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>

            
            <a href="Sign in"> Sign-in  </a>
          </div>


        </header>

        <main>

          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>

          {/* why no exact here? */}


        </main>

        <footer className="row center">Made With 🔥 by Jeremiah</footer>

      </div>
    </BrowserRouter>

  );
}

export default App;

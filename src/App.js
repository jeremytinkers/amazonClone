import React from "react";
import Product from "./components/Product";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (

    <BrowserRouter >
      <div classNameName="grid-container">

        <header className="row">

          <div className="brand">
            <a href="index.html"> amazon</a>
          </div>
          <div className="leftHeaderSect">
            <a className="leftLeftHeader" href="cart.html">Cart</a>
            <a href="Sign in"> Sign-in  </a>
          </div>


        </header>

        <main>
        
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

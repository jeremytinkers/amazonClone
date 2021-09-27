import React from "react";
import data from "./data";

function App() {
  return (
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

        <div className="row center">

        {data.map((curP)=> 
        
         
<div className="card">

    <div className="card-body">
        <a href="product.html">
            <img className="medium" src={"images/" + curP.imgSrc} alt="product image"></img>
        </a>

        <a href="product.html">
            <h1>{curP.name}</h1>
        </a>

        <div className="rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>

        </div>

        <div className="price">${curP.price}</div>


    </div>

</div>

        
        
        )}

            
        </div>
           
        </main>

        <footer className="row center">All Rights Reserved</footer>

    </div>

  );
}

export default App;

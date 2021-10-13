import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';
export default function Product(props) {

  const prodPath = "/product/" + props.product._id;
  
  return (        


<div className="card">

<div className="card-body">

    <Link to={`${prodPath}`}>
    <img className="medium" src={"images/" + props.product.imgSrc} alt={props.product.name}></img>
      </Link>

    <Link to={`${prodPath}`}>
    <h1>{props.product.name}</h1>
      </Link>


   <Rating rating={props.product.rating} noReviews ={props.product.noReviews} />

    <div className="price">${props.product.price}</div>


</div>

</div>

    )
}

import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';
export default function Product(props) {
    return (        

<div className="card">

<div className="card-body">

    <Link to={`/product/${props.product.id}`}>
    <img className="medium" src={"images/" + props.product.imgSrc} alt={props.product.name}></img>
      </Link>

    <Link to={`/product/${props.product.id}`}>
    <h1>{props.product.name}</h1>
      </Link>


   <Rating rating={props.product.rating} noReviews ={props.product.noReviews} />

    <div className="price">${props.product.price}</div>


</div>

</div>

    )
}

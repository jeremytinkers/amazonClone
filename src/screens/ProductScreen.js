import React from 'react'
import data from '../data'
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';

export default function ProductScreen(props) {

    const product = data.find((x) => x.id === Number(props.match.params.id));

    if (!product) {
        return <div>Can't find Product Information</div>;
    }

    return (
<div>
        <div className="row">

            <div className="col-1">

                <img className="large" src={"/images/" + product.imgSrc} alt={product.name} />

            </div>


            <div className="col-1">

                <div className="pcard">

                    <ul>
                        <li class="prodName">{product.name}</li>
                        <li><Rating rating={product.rating} noReviews={product.noReviews} ></Rating></li>
                        <li><b>Retail Price:</b> $ {product.price}</li>
                        <li><b>Description:</b><p className="descrpP">{product.description}</p></li>
                    </ul>

                </div>

            </div>

            <div className="col-1">

                <div className ="pcard">

                    <ul>

                        <li> <div className="row">
                            <div>Price</div>
                            <div className="price">${product.price}</div>
                        </div></li>

                        <li><div className="row">

                            <div>Status</div>
                            {product.curStock > 0 ? (<div className="yesStock">In Stock</div>) :
                                (<div className="noStock">Out of Stock</div>)
                            }

                        </div></li>

                       <div class="buttonDiv"> <button className="primary block">Add To Cart</button></div>

                    </ul>



                </div>


            </div>

           
        </div>
     
<Link to="/"><h3 className="returnHS">Return to Home Screen <i class="fa fa-home"></i></h3></Link>

        </div>
        
    )
}

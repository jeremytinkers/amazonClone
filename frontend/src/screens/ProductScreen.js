
import Rating from '../components/Rating';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";

export default function ProductScreen(props) {



    // fetching data from backend
    const [productsData, setProductsData] = useState([]);
    const [qty, setQty] = useState(1);

    //axios request
    useEffect(() => {

        const fetchData = async () => {
            await axios.get("/api/products")
                .then(function (response) {
                    // handle success

                    setProductsData(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                    console.log("Tried Accessing stuff");
                });


        };

        fetchData();
    }, []);

 
    const product = productsData.find((x) => x.id === Number(props.match.params.id));

    function addToCartHandler(){
        props.history.push(`/cart/${product.id}?qty=${qty}`)
    }

    if (!product) {
        return <div>Can't find Product Information</div>;
    }

    return (
        <div>
            <div className="row">

                <div className="col-1 firstProd">

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

                    <div className="pcard">

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
                            {/* add to cart section, conditionally rendered */}

                            {product.curStock >0 && 
                            <div className ="qtyDiv">
                                <div className="row">

                                    <li>Quantity: </li>
                                    <select value={qty} onChange={e => setQty(e.target.value) }>

                                        {

                                            [...Array(product.curStock).keys()].map((i) => {
                                                return <option key={i + 1} value={i + 1}>{i + 1}</option>
                                            })

                                        }

                                    </select>

                                </div>

                                <div class="buttonDiv" onClick={addToCartHandler}> <button className="primary block">Add To Cart</button></div>

                            </div>}


                        </ul>



                    </div>


                </div>


            </div>

            <Link to="/"><h3 className="returnHS">Return to Home Screen <i class="fa fa-home"></i></h3></Link>

        </div>

    )
}

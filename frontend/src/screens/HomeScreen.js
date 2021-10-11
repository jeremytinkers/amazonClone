import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import axios from "axios"
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (


    <div>
     
      {loading ? (<Loading></Loading>) : error? <ErrorMessage eMsg={error}/>: (<div className="row center">

        {products.data.map((curP) =>

          <Product key={curP.id} product={curP} />

        )}
      </div>)

      }
    </div>

  )
}

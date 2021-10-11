import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import axios from "axios"
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

export default function HomeScreen() {

  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  useEffect(()=>{
  
    const fetchData = async () => {
    await  axios.get("/api/products")
    .then(function (response) {
      // handle success
      setLoading(true);
      console.log(loading + " -> loading");
      setProductsData(response.data);
      console.log(loading + " -> loading");
      setLoading(false);
      console.log(loading + " -> loading");
    })
    .catch(function (err) {
      // handle error
      setError(err.message)
    })
    .then(function () {
      // always executed
    });
        
      };
  
      fetchData();
    }, []);
    
 
  return (

    <div>
     
      {loading ? (<Loading></Loading>) : error? <ErrorMessage eMsg={error}/>: (<div className="row center">

        {productsData.map((curP) =>

          <Product key={curP.id} product={curP} />

        )}
      </div>)

      }
    </div>
    // <div className="row center">

    //     {productsData.map((curP) =>

    //       <Product key={curP.id} product={curP} />

    //     )}
    //   </div>


  )
}

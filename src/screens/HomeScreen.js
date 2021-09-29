import React from 'react'
import data from "../data"
import Product from '../components/Product'

export default function HomeScreen() {
    return (
        <div className="row center">

        {data.map((curP)=> 
          
          <Product product= {curP} />
        
        )}

            
        </div>
           
    )
}

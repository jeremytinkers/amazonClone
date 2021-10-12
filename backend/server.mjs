import express from "express"
import data from "./data.mjs"

const app = express();


app.get("/api/products", (req,res)=>{

    res.send(data)
})


app.get('/api/products/:id', (req, res) => {
    //Find the particular product
    const product = data.find((x) => x.id == req.params.id);
    
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });

app.listen(5000, ()=>{
    console.log("Server is listening on port:5000" );
})
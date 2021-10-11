import express from "express"
import data from "./data.mjs"

const app = express();


app.get("/api/products", (req,res)=>{

    res.send(data)
})


app.get("/", (req,res)=>{
const tData= [{
    id:3,
    name:"Product 3",
    imgSrc:"p3.jpg",
    price: 189,
    rating:3.5,
    noReviews:980,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    , curStock:211
}];
res.send(tData)

})

app.listen(5000, ()=>{
    console.log("Server is listening on port:5000" );
})
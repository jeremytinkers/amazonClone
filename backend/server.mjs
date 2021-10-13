import express from "express"
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.mjs";
import productRouter from "./routers/productRouter.mjs";

const app = express();


try {
  await mongoose.connect('mongodb://localhost/amazonClone');
} catch (error) {
  console.log("connection error: " + error);
  
}

app.use('/api/users', userRouter); //passes the handling of this path call to userRouter
app.use('/api/products', productRouter); //passes the handling of this path call to productRouter


app.use((err, req, res, next) => { //handles errors 
  res.status(500).send({ message: err.message });
});

app.listen(5000, ()=>{
    console.log("Server is listening on port:5000" );
})
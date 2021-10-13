import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import {data} from '../data.mjs';
import Product from '../models/productModel.js';

const productRouter = express.Router();

// -> api/products/
productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({}); //find and return everything in Product Collection
    res.send(products);
  })
);

// -> api/products/seed
productRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    const productSet = await Product.insertMany(data); //insert all elements of data into the collection
    res.send({ productSet });
  })
);

// -> api/products/:id
//also this call should be placed at the end as otherwise /seed would be interpreted as an "id"
productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id); //find and return specify product
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

export default productRouter;
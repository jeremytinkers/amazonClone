import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    imgSrc: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    curStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    noReviews: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productSchema);

export default Product;
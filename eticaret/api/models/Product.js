import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    img: { type: String, require: true },
    price: { type: Number, require: true },
    category: { type: String, require: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
